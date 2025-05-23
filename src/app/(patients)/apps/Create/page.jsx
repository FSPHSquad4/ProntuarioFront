import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ComponentContainerCard from "@/components/ComponentContainerCard";
import MaskedInput from "@/components/MaskedInput";
import { toast } from "react-toastify";
import { api } from "@/services";
import { formatDate } from "@/utils/date";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const initialPatientData = {
        fullName: "",
        cpf: "",
        birthDate: "",
        gender: "",
        maritalStatus: "",
        companionName: "",
        companionCpf: "",
    };
    const [formValidation, setFormValidation] = useState(false);
    const [hasCompanion, setHasCompanion] = useState(false);
    const [patientData, setPatientData] = useState(initialPatientData);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        try {
            if (form.checkValidity() === false) {
                e.stopPropagation();
                setFormValidation(true);
                toast.error("Preencha todos os campos obrigatórios.");
                return;
            }

            const response = await api.post(
                "/patients/",
                {
                    ...patientData,
                    birthDate: formatDate(patientData.birthDate, "dd/MM/yyyy"),
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            );

            if (response.status === 201) {
                toast.success("Paciente cadastrado com sucesso!");

                setPatientData(initialPatientData);
                setFormValidation(false);

                navigate("/patients");
            }
        } catch (error) {
            const errorMsg =
                error.response?.data?.message ||
                error.message ||
                "Houve um erro ao cadastrar o paciente.";
            const errorStatus = error.response?.status || 500;

            toast.error(`${errorStatus}: ${errorMsg}`);
        }
    };

    return (
        <ComponentContainerCard
            title="Cadastrar Paciente"
            description="Preencha os dados do paciente"
        >
            <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control
                                type="text"
                                value={patientData.fullName}
                                onChange={(e) =>
                                    setPatientData({
                                        ...patientData,
                                        fullName: e.target.value,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation &&
                                    !patientData.fullName.trim()
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira o nome completo.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>CPF</Form.Label>
                            <MaskedInput
                                mask="000.000.000-00"
                                placeholder="000.000.000-00"
                                value={patientData.cpf}
                                onChange={(e) =>
                                    setPatientData({
                                        ...patientData,
                                        cpf: e.target.unmaskedValue,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation &&
                                    patientData.cpf.length !== 11
                                } // CPF sem máscara tem 11 dígitos
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira um CPF válido.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control
                                type="date"
                                value={patientData.birthDate}
                                onChange={(e) =>
                                    setPatientData({
                                        ...patientData,
                                        birthDate: e.target.value,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation && !patientData.birthDate
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira a data de nascimento.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Gênero</Form.Label>
                            <Form.Select
                                value={patientData.gender}
                                onChange={(e) =>
                                    setPatientData({
                                        ...patientData,
                                        gender: e.target.value,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation && !patientData.gender
                                }
                            >
                                <option value="">Selecione</option>
                                <option value="M">Masculino</option>
                                <option value="F">Feminino</option>
                                <option value="O">Outro</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Por favor, selecione um gênero.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Estado Civil</Form.Label>
                            <Form.Select
                                value={patientData.maritalStatus}
                                onChange={(e) =>
                                    setPatientData({
                                        ...patientData,
                                        maritalStatus: e.target.value,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation && !patientData.maritalStatus
                                }
                            >
                                <option value="">Selecione</option>
                                <option value="S">Solteiro(a)</option>
                                <option value="C">Casado(a)</option>
                                <option value="D">Divorciado(a)</option>
                                <option value="V">Viúvo(a)</option>
                                <option value="O">Outros</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Por favor, selecione um estado civil.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Check
                                type="checkbox"
                                label="Possui Acompanhante?"
                                checked={hasCompanion}
                                onChange={(e) => {
                                    setHasCompanion(e.target.checked);
                                    if (!e.target.checked) {
                                        setPatientData({
                                            ...patientData,
                                            companionName: "",
                                            companionCpf: "",
                                        });
                                    }
                                }}
                            />
                        </Form.Group>
                    </Col>
                </Row>

                {hasCompanion && (
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>Nome do Acompanhante</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={patientData.companionName}
                                    onChange={(e) =>
                                        setPatientData({
                                            ...patientData,
                                            companionName: e.target.value,
                                        })
                                    }
                                />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group>
                                <Form.Label>CPF do Acompanhante</Form.Label>
                                <MaskedInput
                                    mask="000.000.000-00"
                                    placeholder="000.000.000-00"
                                    value={patientData.companionCpf}
                                    onChange={(e) =>
                                        setPatientData({
                                            ...patientData,
                                            companionCpf:
                                                e.target.unmaskedValue,
                                        })
                                    }
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                )}

                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </div>
            </Form>
        </ComponentContainerCard>
    );
}
