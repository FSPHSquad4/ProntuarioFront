import axios from "axios";

// Criação da instância
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Interceptor de requisição
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("auth_user")
            ? JSON.parse(localStorage.getItem("auth_user")).token
            : null;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            if (window.location.pathname !== "fsph/auth/login") {
                window.location.href = "/fsph/auth/login";
            }
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { api };
