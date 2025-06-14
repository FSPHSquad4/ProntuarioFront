import { Form, Button, Row, Col } from "react-bootstrap";
import ComponentContainerCard from "@/components/ComponentContainerCard";
import { toast } from "react-toastify";
import { api } from "@/services";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const professionalSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "O nome deve ter pelo menos 3 caracteres.")
        .required("Por favor, insira o nome completo."),
    email: yup
        .string()
        .email("Por favor, insira um email válido.")
        .min(3, "O email deve ter pelo menos 3 caracteres.")
        .required("Email é obrigatório."),
    password: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 caracteres.")
        .required("Senha é obrigatória."),
    role: yup.string().required("Por favor, selecione o papel."),
    specialty: yup.string().required("Por favor, insira a especialidade."),
    professionalLicense: yup
        .string()
        .required("Por favor, insira o número da licença profissional."),
});

export default function RegisterPage() {
    const initialProfessionalData = {
        name: "",
        email: "",
        password: "",
        role: "PROFESSIONAL",
        specialty: "",
        professionalLicense: "",
    };

    const {
        handleSubmit,
        control,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(professionalSchema),
        defaultValues: initialProfessionalData,
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await api.post("/professional/", { ...data });

            if (response.status === 201) {
                toast.success("Profissional cadastrado com sucesso!");
                reset();
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
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Nome Completo</Form.Label>
                            <Controller
                                name="name"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        isInvalid={!!errors.name}
                                    />
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.name?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="email"
                                        isInvalid={!!errors.email}
                                    />
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="password"
                                        isInvalid={!!errors.password}
                                    />
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Papel</Form.Label>
                            <Controller
                                name="role"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        isInvalid={!!errors.role}
                                        readOnly
                                    />
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.role?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Especialidade</Form.Label>
                            <Controller
                                name="specialty"
                                control={control}
                                render={({ field }) => (
                                    <Form.Select
                                        {...field}
                                        type="text"
                                        isInvalid={!!errors.specialty}
                                    >
                                        <option value="">Selecione...</option>
                                        <option value="Médico(a)">
                                            Médico(a)
                                        </option>
                                        <option value="Enfermeiro(a)">
                                            Enfermeiro(a)
                                        </option>
                                    </Form.Select>
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.specialty?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group>
                            <Form.Label>Licença Profissional</Form.Label>
                            <Controller
                                name="professionalLicense"
                                control={control}
                                render={({ field }) => (
                                    <Form.Control
                                        {...field}
                                        type="text"
                                        isInvalid={!!errors.professionalLicense}
                                    />
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.professionalLicense?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </div>
            </Form>
        </ComponentContainerCard>
    );
}
