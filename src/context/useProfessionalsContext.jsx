import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/services";
import { useLocation } from "react-router-dom";
import { useAuth } from "./useAuthContext";

export const ProfessionalsContext = createContext();

export const useProfessionalsContext = () => useContext(ProfessionalsContext);

export const ProfessionalsProvider = ({ children }) => {
    const [professionals, setProfessionals] = useState([]);
    const [filteredProfessionals, setFilteredProfessionals] = useState([]);
    const [loading, setLoading] = useState(false);
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    const fetchProfessionals = async () => {
        setLoading(true);
        try {
            const { data } = await api.get(`/professional`);
            setProfessionals(data);
            setFilteredProfessionals(data);
        } catch (error) {
            const errorMessage =
                error?.response?.data?.message ||
                "Erro ao buscar profissionais.";
            console.error(errorMessage);
            toast.error(errorMessage);
            setProfessionals([]);
            setFilteredProfessionals([]);
        } finally {
            setLoading(false);
        }
    };

    // const deleteProfessional = async (id) => {
    //     setLoading(true);
    //     try {
    //         await api.delete(`/professional/${id}`);
    //         toast.success("Profissional deletado com sucesso.");
    //         setProfessionals((prev) => prev.filter((prof) => prof.id !== id));
    //         setFilteredProfessionals((prev) =>
    //             prev.filter((prof) => prof.id !== id)
    //         );
    //     } catch (error) {
    //         const errorMessage =
    //             error?.response?.data?.message ||
    //             "Erro ao deletar profissional.";
    //         console.error(errorMessage);
    //         toast.error(errorMessage);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const filterProfessionals = (criteria) => {
        if (!criteria || Object.keys(criteria).length === 0) {
            setFilteredProfessionals(professionals);
            return;
        }

        const filtered = professionals.filter((professional) => {
            return Object.entries(criteria).every(([key, value]) => {
                return professional[key]
                    ?.toLowerCase()
                    .includes(value.toLowerCase());
            });
        });

        setFilteredProfessionals(filtered);
    };

    useEffect(() => {
        if (!isAuthenticated) {
            toast.error("Acesso negado. Você precisa estar autenticado.");
            return;
        }
        fetchProfessionals();
    }, [location.pathname]);

    return (
        <ProfessionalsContext.Provider
            value={{
                professionals,
                filteredProfessionals,
                setProfessionals,
                loading,
                filterProfessionals,
                // deleteProfessional,
                fetchProfessionals,
            }}
        >
            {children}
        </ProfessionalsContext.Provider>
    );
};
