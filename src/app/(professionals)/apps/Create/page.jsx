import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import ComponentContainerCard from "@/components/ComponentContainerCard";
import MaskedInput from "@/components/MaskedInput";
import { toast } from "react-toastify";
import { api } from "@/services";
import { formatDate } from "@/utils/date";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const initialProfessionalData = {
        fullName: "",
        register: "",
        profession: "",
        contact: "",
        availability: "",
        birthDate: "",
        gender: "",
    };
    const [formValidation, setFormValidation] = useState(false);
    const [ProfessionalData, setProfessionalData] = useState(initialProfessionalData);
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
                "/professionals/",
                {
                    ...ProfessionalData,
                    birthDate: formatDate(ProfessionalsData.birthDate, "dd/MM/yyyy"),
                },
                {
                     headers: {
                         Authorization: `Bearer ${localStorage.getItem(
                             "token"
                         )}`,
                     },
                }
            )

            if (response.status === 201) {
                toast.success("Profissional cadastrado com sucesso!");

                setProfessionalsData(initialProfessionalsData);
                setFormValidation(false);

                navigate("/professionals");
            }
        } catch (error) {
            const errorMsg =
                error.response?.data?.message ||
                error.message ||
                "Houve um erro ao cadastrar o profissional.";
            const errorStatus = error.response?.status || 500;

            toast.error(`${errorStatus}: ${errorMsg}`);
        }
    };

    return (
        <ComponentContainerCard
            title="Cadastrar Profissional"
            description="Preencha os dados do profissional"
        >

          
                {/*NOME COMPLETO*/}


            <Form noValidate onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control
                                type="text"
                                value={ProfessionalData.fullName}
                                onChange={(e) =>
                                    setProfessionalData({
                                        ...ProfessionalData,
                                        fullName: e.target.value,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation &&
                                    !ProfessionalData.fullName.trim()
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira o nome completo.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>


                                {/*CPF*/}


                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>CPF</Form.Label>
                            <MaskedInput
                                mask="000.000.000-00"
                                placeholder="000.000.000-00"
                                value={ProfessionalData.cpf}
                                onChange={(e) =>
                                    setProfessionalData({
                                        ...ProfessionalData,
                                        cpf: e.target.unmaskedValue,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation &&
                                    ProfessionalData.cpf.length !== 11
                                } // CPF sem máscara tem 11 dígitos
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira um CPF válido.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>


                            {/*BIRTH DATE*/}


                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control
                                type="date"
                                value={ProfessionalData.birthDate}
                                onChange={(e) =>
                                    setProfessionalData({
                                        ...ProfessionalData,
                                        birthDate: e.target.value,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation && !ProfessionalData.birthDate
                                }
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira a data de nascimento.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>


                              {/*GÊNERO*/}


                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Gênero</Form.Label>
                            <Form.Select
                                value={ProfessionalData.gender}
                                onChange={(e) =>
                                    setProfessionalData({
                                        ...ProfessionalData,
                                        gender: e.target.value,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation && !ProfessionalData.gender
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


                                {/*ESPECIALIDADE*/}


                    <Col md={3}>
                        <Form.Group>
                            <Form.Label>Profissão</Form.Label>
                            <Form.Select
                                value={ProfessionalData.speciality}
                                onChange={(e) =>
                                    setProfessionalData({
                                        ...ProfessionalData,
                                        speciality: e.target.value,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation && !ProfessionalData.profession
                                }
                            >
                                <option value="">Selecione</option>
                                <option value="M">Médico</option>
                                <option value="E">Enfermeiro(a)</option>
                                <option value="P">Pediatra</option>
                                <option value="F">Fisioterapeuta</option>
                                <option value="O">Odontologista</option>
                                <option value="Ps">Psicólogo</option>
                                <option value="F">Farmacêutico</option>
                                <option value="A">Assistente Social</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                Por favor, selecione uma profissão.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>


                                {/*CONTATO*/}

                <Row className="mb-4">
                                <Col md={2}>
                        <Form.Group>
                            <Form.Label>Contato</Form.Label>
                            <MaskedInput
                                mask="(00) 9 0000-0000"
                                placeholder="(79) 9 0000-0000"
                                value={ProfessionalData.cpf}
                                onChange={(e) =>
                                    setProfessionalData({
                                        ...ProfessionalData,
                                        contact: e.target.unmaskedValue,
                                    })
                                }
                                required
                                isInvalid={
                                    formValidation &&
                                    ProfessionalData.contact.length !== 11
                                } // Número sem máscara tem 11 dígitos
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor, insira um Número válido.
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>                                
                </Row>
            


                                {/*DISPONIBILIDADE*/}


                                
                

                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </div>
            </Form>
        </ComponentContainerCard>
    );
}
