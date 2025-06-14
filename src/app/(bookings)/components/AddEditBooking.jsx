import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    Button,
    Col,
    Modal,
    ModalBody,
    ModalHeader,
    ModalTitle,
    Row,
} from "react-bootstrap";
import { useForm, useWatch } from "react-hook-form";
import * as yup from "yup";
import TextFormInput from "@/components/form/TextFormInput";
import SelectFormInput from "@/components/form/SelectFormInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { usePatientsContext } from "@/context/usePatientContext";
import { useAuth } from "@/context/useAuthContext";
import { useProfessionalsContext } from "@/context/useProfessionalsContext";

const AddEditBooking = ({
    eventData,
    isEditable,
    onAddBooking,
    onRemoveBooking,
    onUpdateBooking,
    open,
    toggle,
}) => {
    const { patients } = usePatientsContext();
    const { user } = useAuth();
    const { professionals } = useProfessionalsContext();

    const [patientOptions, setPatientOptions] = useState([]);
    const [professionalOptions, setProfessionalOptions] = useState([]);

    const scheduleOptions = [
        { value: "scheduled", label: "Agendada", variant: "warning" },
        { value: "confirmed", label: "Confirmada", variant: "info" },
        { value: "completed", label: "Completa", variant: "success" },
        { value: "cancelled", label: "Cancelada", variant: "danger" },
        { value: "no-show", label: "Não compareceu", variant: "dark" },
    ];

    useEffect(() => {
        if (patients && patients.length > 0) {
            setPatientOptions(
                patients.map((patient) => ({
                    value: patient.id,
                    label: `${patient.cpf} - ${patient.fullName}`,
                }))
            );
        }

        if (professionals && professionals.length > 0) {
            setProfessionalOptions(
                professionals.map((professional) => ({
                    value: professional.id,
                    label: `${professional.specialty} - ${professional.name}`,
                }))
            );
        }
    }, [patients, professionals]);

    const eventFormSchema = yup.object().shape({
        patientId: yup.number().required("Por favor, selecione o paciente"),
        professionalId: yup
            .number()
            .required("Por favor, selecione o profissional"),
        consultationDate: yup
            .date()
            .typeError("Por favor, insira uma data válida")
            .required("Por favor, selecione a data da consulta"),
        consultationStatus: yup
            .string()
            .required("Por favor, selecione o status da consulta"),
        notes: yup.string().optional(),
    });

    const { handleSubmit, control, setValue, reset } = useForm({
        resolver: yupResolver(eventFormSchema),
        defaultValues: {
            patientId: eventData?.patientId ?? "",
            receptionistId: user.receptionistId || user.id || "",
            professionalId: eventData?.professionalId ?? "",
            consultationDate: eventData?.consultationDate
                ? new Date(eventData.consultationDate)
                : new Date(),
            consultationStatus: eventData?.consultationStatus ?? "",
            notes: eventData?.notes ?? "",
        },
    });

    const consultationDate = useWatch({ control, name: "consultationDate" });

    useEffect(() => {
        if (eventData) {
            setValue("patientId", eventData.patientId);
            setValue(
                "receptionistId",
                user.role === "RECEPTIONIST" ? user.id : ""
            );
            setValue("professionalId", eventData.professionalId);
            setValue("consultationDate", new Date(eventData.consultationDate));
            setValue("consultationStatus", eventData.consultationStatus);
            setValue("notes", eventData.notes);
        }
    }, [eventData, setValue, user]);

    useEffect(() => {
        if (!open) reset();
    }, [open, reset]);

    const onSubmitEvent = (data) => {
        isEditable ? onUpdateBooking(data) : onAddBooking(data);
        console.info("Form data submitted:", data);
    };

    return (
        <Modal show={open} onHide={toggle} className="fade" tabIndex={-1}>
            <div className="modal-content">
                <form
                    onSubmit={handleSubmit(onSubmitEvent)}
                    className="needs-validation"
                    name="event-form"
                >
                    <ModalHeader
                        className="modal-header p-3 border-bottom-0"
                        closeButton
                    >
                        <ModalTitle className="modal-title" as="h5">
                            {isEditable
                                ? "Editar Agendamento"
                                : "Adicionar Agendamento"}
                        </ModalTitle>
                    </ModalHeader>
                    <ModalBody className="px-3 pb-3 pt-0">
                        <Row>
                            <Col xs={12}>
                                <SelectFormInput
                                    control={control}
                                    name="patientId"
                                    label="Paciente"
                                    containerClassName="mb-3"
                                    placeholder="Selecione um paciente"
                                    onChange={(option) =>
                                        setValue("patientId", option.value)
                                    }
                                    options={patientOptions}
                                />
                            </Col>
                            <Col xs={12}>
                                <SelectFormInput
                                    control={control}
                                    name="professionalId"
                                    label="Profissional"
                                    placeholder="Selecione um profissional"
                                    onChange={(option) =>
                                        setValue("professionalId", option.value)
                                    }
                                    containerClassName="mb-3"
                                    options={professionalOptions} // Popule com os dados reais
                                />
                            </Col>
                            <Col xs={12}>
                                <label className="form-label">
                                    Data da Consulta
                                </label>
                                <DatePicker
                                    selected={consultationDate}
                                    onChange={(date) =>
                                        setValue("consultationDate", date)
                                    }
                                    className="form-control mb-3"
                                    dateFormat="dd/MM/yyyy HH:mm:ss"
                                    placeholderText="Selecione a data e hora da consulta"
                                    timeFormat="HH:mm:ss"
                                    showTimeSelect
                                    timeIntervals={15}
                                />
                            </Col>
                            <Col xs={12}>
                                <SelectFormInput
                                    control={control}
                                    name="consultationStatus"
                                    label="Status da Consulta"
                                    placeholder="Selecione o status da consulta"
                                    onChange={(option) =>
                                        setValue(
                                            "consultationStatus",
                                            option.value
                                        )
                                    }
                                    containerClassName="mb-3"
                                    options={scheduleOptions}
                                />
                            </Col>
                            <Col xs={12}>
                                <TextFormInput
                                    control={control}
                                    name="notes"
                                    containerClassName="mb-3"
                                    label="Notas"
                                    placeholder="Insira notas adicionais"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                {isEditable && (
                                    <button
                                        onClick={onRemoveBooking}
                                        type="button"
                                        className="btn btn-danger"
                                    >
                                        Excluir
                                    </button>
                                )}
                            </Col>
                            <Col xs={6} className="text-end">
                                <Button
                                    variant="light"
                                    type="button"
                                    className="me-1"
                                    onClick={toggle}
                                >
                                    Cancelar
                                </Button>
                                <Button variant="primary" type="submit">
                                    Salvar
                                </Button>
                            </Col>
                        </Row>
                    </ModalBody>
                </form>
            </div>
        </Modal>
    );
};

export default AddEditBooking;
