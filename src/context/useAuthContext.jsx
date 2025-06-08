import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "@/services";

// Criação do contexto
const AuthContext = createContext();

// Hook customizado
export const useAuth = () => useContext(AuthContext);

// Provider
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null); // ou objeto { id, name, email, token }
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("auth_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        if (!credentials.email || !credentials.password) {
            toast.error("Email e senha são obrigatórios.");
            return;
        }
        try {
            // Substituir pelo seu endpoint de autenticação
            const response = await api.post("/auth/login", credentials);

            if (!response.status || response.status !== 200) {
                console.error(response);
                throw new Error(
                    `${response.status}: Credenciais inválidas ou erro no servidor.`
                );
            }

            // Supondo que o token está em response.data.token e outros dados em response.data.user
            const data = response.data;
            setUser(data);
            localStorage.setItem("auth_user", JSON.stringify(data));

            toast.success("Login realizado com sucesso!");
            navigate("/dashboard"); // Redirecionar para a página de dashboard ou outra
        } catch (error) {
            toast.error(error.message || "Erro no login.");
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth_user");
        toast.info("Sessão encerrada.");
        navigate("/auth/login");
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated,
                loading,
            }}
        >
            {!loading && children}
        </AuthContext.Provider>
    );
};
