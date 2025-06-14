import { createContext, useContext, useEffect, useState } from "react";
import { formatDate } from "@/utils/date";
import { api } from "@/services";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "./useAuthContext";

export const PatientsContext = createContext();
export const usePatientsContext = () => useContext(PatientsContext);

export const PatientsProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [loading, setLoading] = useState(false);
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    // Fetch all patients
    const fetchPatients = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/patients/");
            setPatients(data);
            setFilteredPatients(data);
        } catch (error) {
            console.error(
                error?.response?.data?.message || "Erro ao buscar pacientes."
            );
            setPatients([]);
            setFilteredPatients([]);
        } finally {
            setLoading(false);
        }
    };

    // Fetch patients when route changes to /patients
    useEffect(() => {
        if (!isAuthenticated) {
            toast.error("Acesso negado. Você precisa estar autenticado.");
            return;
        }
        fetchPatients();
        console.log("Fetching patients data...");
    }, [location.pathname]);

    // Filter patients by name or CPF
    const filterPatients = (searchTerm) => {
        try {
            if (!searchTerm) {
                setFilteredPatients(patients);
                return;
            }
            const lowerSearch = searchTerm.toLowerCase().trim();
            const filtered = patients.filter((patient) => {
                return (
                    patient.fullName?.toLowerCase().includes(lowerSearch) ||
                    patient.cpf?.toLowerCase().includes(lowerSearch)
                );
            });
            setFilteredPatients(filtered);
        } catch (error) {
            console.error("Erro ao filtrar pacientes:", error);
            setFilteredPatients(patients);
        }
    };

    // Update a patient
    const updatePatient = async (patientId, updatedPatient) => {
        const foundPatient = patients.find(
            (patient) => patient.id === parseInt(patientId)
        );
        if (!foundPatient) {
            return { message: "Paciente não encontrado.", status: 404 };
        }
        try {
            const response = await api.patch(
                `/patients/${patientId}`,
                updatedPatient
            );
            if (response.status !== 200) {
                return {
                    message: "Erro ao atualizar paciente.",
                    status: response.status,
                };
            }
            setPatients((prev) =>
                prev.map((patient) =>
                    patient.id === Number(patientId) ? response.data : patient
                )
            );
            setFilteredPatients((prev) =>
                prev.map((patient) =>
                    patient.id === Number(patientId) ? response.data : patient
                )
            );
            return response;
        } catch (error) {
            return {
                message:
                    error?.response?.data?.message ||
                    "Erro ao atualizar paciente.",
                status: error?.response?.status || 500,
            };
        }
    };

    // Create a new patient
    const createPatient = async (patientData) => {
        const { birthDate, ...rest } = patientData;
        try {
            const response = await api.post("/patients/", {
                ...rest,
                birthDate: formatDate(birthDate),
            });

            setPatients((prev) => [...prev, response.data]);
            setFilteredPatients((prev) => [...prev, response.data]);

            return response;
        } catch (error) {
            return {
                message:
                    error?.response?.data?.message ||
                    "Erro ao cadastrar paciente.",
                status: error?.response?.status || 500,
            };
        }
    };

    // Delete a patient
    const deletePatient = async (patientId) => {
        try {
            const response = await api.delete(`/patients/${patientId}`);
            if (response.status !== 200 && response.status !== 204) {
                toast.error(
                    response?.data?.message || "Erro ao excluir paciente."
                );
                return;
            }

            setPatients((prev) =>
                prev.filter((patient) => patient.id !== Number(patientId))
            );
            setFilteredPatients((prev) =>
                prev.filter((patient) => patient.id !== Number(patientId))
            );
            toast.success("Paciente excluído com sucesso.");
        } catch (error) {
            return {
                message:
                    error?.response?.data?.message ||
                    "Erro ao excluir paciente.",
                status: error?.response?.status || 500,
            };
        }
    };

    return (
        <PatientsContext.Provider
            value={{
                patients,
                filteredPatients,
                setPatients,
                loading,
                filterPatients,
                updatePatient,
                createPatient,
                deletePatient,
            }}
        >
            {children}
        </PatientsContext.Provider>
    );
};
