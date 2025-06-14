import axios from "axios";
import SecureStorage from "react-secure-storage";

// Criação da instância
const api = axios.create({
    baseURL: "https://afraid-tips-sink.loca.lt/",
});

// Interceptor de requisição
api.interceptors.request.use(
    (config) => {
        const token = SecureStorage.getItem("auth_token");
        const isLoginPage = window.location.pathname === "/fsph/auth/login";

        if (!token && !isLoginPage) {
            window.location.href = "/fsph/auth/login";
            return Promise.reject(
                new Error("Token não encontrado. Redirecionando para login.")
            );
        }

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

export { api };
