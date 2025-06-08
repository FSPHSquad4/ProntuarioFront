import { useState } from "react";
import logoDark from "@/assets/images/logo-dark.png";
import logo from "@/assets/images/logo.png";
import { Card, Col, Form, Row } from "react-bootstrap";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Link } from "react-router-dom";
import { currentYear } from "@/context/constants";
import { useAuth } from "@/context/useAuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();

        // Validação simples dos campos
        if (!email || !password) {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }
        await login({ email, password });
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
                                        htmlFor="login-email"
                                    >
                                        Email
                                    </label>
                                    <Form.Control
                                        type="email"
                                        id="login-email"
                                        name="email"
                                        placeholder="Digite seu email"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
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
