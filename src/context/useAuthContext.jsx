import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "@/services";
import SecureStorage from "react-secure-storage";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = SecureStorage.getItem("auth_token");
        if (storedToken) {
            try {
                const decodedUser = jwtDecode(storedToken);

                if (!decodedUser || !decodedUser.email) {
                    throw new Error("Token inválido.");
                }

                setUser(decodedUser);
            } catch (error) {
                toast.error(error.message || "Token expirado ou inválido.");
                logout();
            }
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        if (!credentials.email || !credentials.password) {
            toast.error("Email e senha são obrigatórios.");
            return;
        }
        try {
            const response = await api.post("/auth/login", credentials);

            if (!response.status || response.status !== 200) {
                console.error(response);
                throw new Error(
                    `${response.status}: Credenciais inválidas ou erro no servidor.`
                );
            }

            const { token } = response.data;
            const decodedUser = jwtDecode(token);

            setUser(decodedUser);
            SecureStorage.setItem("auth_token", token);

            toast.success("Login realizado com sucesso!");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error.message || "Erro no login.");
        }
    };

    const logout = () => {
        setUser(null);
        SecureStorage.removeItem("auth_token");

        toast.info("Sessão encerrada.");
        navigate("/auth/logout");
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
