import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "@/services";

// Criação do contexto
export const ProfessionalsContext = createContext();

// Hook para consumir o contexto
export const useProfessionalsContext = () => useContext(ProfessionalsContext);

// Provider
export const ProfessionalsProvider = ({ children }) => {
    const [professionals, setProfessionals] = useState([]); // Corrigido para começar com letra minúscula
    const [filteredProfessionals, setfilteredProfessionals] = useState([]); // Corrigido para começar com letra minúscula e padronizar nomenclatura
    const [loading, setLoading] = useState(false);

    // Função para buscar todos os médicos
    const getAllProfessionals = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("/professionals/", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });

            setProfessionals(data);
            setfilteredProfessionals(data); // Inicializa a lista filtrada igual à completa
        } catch (error) {
            console.error("Erro ao buscar médicos:", error);
            toast.error("Erro ao buscar médicos.");
            setProfessionals([]);
            setfilteredProfessionals([]);
        } finally {
            setLoading(false);
        }
    };

    // Função para filtrar médicos
    const filterProfessionals = (searchTerm) => {
        if (!searchTerm) {
            setfilteredProfessionals(Professionals); // Se limpar, volta a lista completa
            return;
        }

        const lowerSearch = searchTerm.toLowerCase().trim();

        const filtered = Professionals.filter(
            (professional) =>
                professional.fullName?.toLowerCase().includes(lowerSearch) ||
                professional.cpf?.toLowerCase().includes(lowerSearch)
        );

        setfilteredProfessionals(filtered);
    };

    return (
        <ProfessionalsContext.Provider
            value={{
                professionals,
                filteredProfessionals,
                setProfessionals,
                loading,
                getAllProfessionals,
                filterProfessionals,
            }}
        >
            {children}
        </ProfessionalsContext.Provider>
    );
};