import React, { useEffect, useState } from "react";
import logoDark from "@/assets/images/logo-dark.png";
import logo from "@/assets/images/logo.png";
import { Card, Col, Form, Row } from "react-bootstrap";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { currentYear } from "@/context/constants";
import { api } from "../../../../services";
import { Exception } from "sass";
import { toast } from "react-toastify";

const LoginPage = () => {
    // Get
    // const [patients, setPatients] = useState([]);

    // useEffect(() => {
    //     (async function handleSubmit() {
    //         const { data } = await api.get("/patients/");

    //         setPatients(data);
    //     })();
    // }, []);

    // Post

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const trimmedUsername = username.trim();
            const trimmedPassword = password.trim();

            if (!trimmedUsername || !trimmedPassword) {
                throw new Error({
                    message: "Preencha todos os campos.",
                    status: 400,
                });
            }

            const response = await api.post("/auth/login", {
                username: trimmedUsername,
                password: trimmedPassword,
            });

            const { token } = response.data;

            if (!token) {
                throw new Error({
                    message: "Validação do usuário falhou.",
                    status: 400,
                });
            }

            localStorage.setItem("token", token);

            toast.success("Login realizado com sucesso!");

            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            const errorMsg =
                error.response?.data?.message ||
                error.message ||
                "Erro desconhecido ao logar";
            toast.error(`${error.status}: Erro ao fazer login!`);
        }
    };

    return (
        <>
            <PageBreadcrumb title="Login" />
            <div className="auth-bg d-flex min-vh-100">
                <Row className="g-0 justify-content-center w-100 m-xxl-5 px-xxl-4 m-3">
                    <Col xxl={3} lg={5} md={6}>
                        <Link
                            to="/"
                            className="auth-brand d-flex justify-content-center mb-2"
                        >
                            <img
                                src={logoDark}
                                alt="logo escuro"
                                style={{ width: "13rem" }}
                                className="logo-dark"
                            />
                            <img
                                src={logo}
                                alt="logo claro"
                                style={{ width: "13rem" }}
                                className="logo-light"
                            />
                        </Link>
                        <p className="fw-semibold mb-4 text-center text-muted fs-15">
                            Design do Painel de Administração
                        </p>
                        <Card className="overflow-hidden text-center p-xxl-4 p-3 mb-0">
                            <h4 className="fw-semibold mb-3 fs-18">
                                Faça login na sua conta
                            </h4>
                            <Form
                                onSubmit={onSubmit}
                                action="/"
                                className="text-start mb-3"
                            >
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="login-username"
                                    >
                                        Username
                                    </label>
                                    <Form.Control
                                        type="text"
                                        id="login-username"
                                        name="username"
                                        placeholder="Digite seu username"
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="login-password"
                                    >
                                        Senha
                                    </label>
                                    <Form.Control
                                        type="password"
                                        id="login-password"
                                        placeholder="Digite sua senha"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="checkbox-signin"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="checkbox-signin"
                                        >
                                            Lembrar de mim
                                        </label>
                                    </div>
                                    <Link
                                        to="/auth/recover-password"
                                        className="text-muted border-bottom border-dashed"
                                    >
                                        Esqueceu a senha?
                                    </Link>
                                </div>
                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary fw-semibold"
                                        type="submit"
                                    >
                                        Entrar
                                    </button>
                                </div>
                            </Form>
                            <p className="text-muted fs-14 mb-0">
                                Não tem uma conta? &nbsp;
                                <Link
                                    to="/auth/register"
                                    className="fw-semibold text-danger ms-1"
                                >
                                    Cadastrar-se!
                                </Link>
                            </p>
                        </Card>
                        <p className="mt-4 text-center mb-0">
                            {currentYear} © Fundação de Saúde Parreiras Horta
                        </p>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default LoginPage;
