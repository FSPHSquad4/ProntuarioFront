import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/services";

// Criação do contexto
export const PatientsContext = createContext();

// Hook para consumir o contexto
export const usePatientsContext = () => useContext(PatientsContext);

// Provider
export const PatientsProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);
    const [filteredPatients, setFilteredPatients] = useState([]);
    const [loading, setLoading] = useState(false);

    // Função para buscar todos os pacientes
    const getAllPatients = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/patients/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            setPatients(data);
            setFilteredPatients(data); // Inicializa a lista filtrada igual à completa
        } catch (error) {
            console.error("Erro ao buscar pacientes:", error);
            toast.error("Erro ao buscar pacientes.");
            setPatients([]);
            setFilteredPatients([]);
        } finally {
            setLoading(false);
        }
    };

    // Função para filtrar pacientes
    const filterPatients = (searchTerm) => {
        if (!searchTerm) {
            setFilteredPatients(patients); // Se limpar, volta a lista completa
            return;
        }

        const lowerSearch = searchTerm.toLowerCase().trim();

        const filtered = patients.filter(
            (patient) =>
                patient.fullName.toLowerCase().includes(lowerSearch) ||
                patient.cpf.toLowerCase().includes(lowerSearch)
        );

        setFilteredPatients(filtered);
    };

    return (
        <PatientsContext.Provider
            value={{
                patients,
                filteredPatients,
                setPatients,
                loading,
                getAllPatients,
                filterPatients,
            }}
        >
            {children}
        </PatientsContext.Provider>
    );
};
