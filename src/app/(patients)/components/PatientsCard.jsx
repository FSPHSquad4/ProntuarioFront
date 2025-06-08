import IconifyIcon from "@/components/wrappers/IconifyIcon";
import {
    Card,
    CardBody,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    Modal,
    Button,
} from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { usePatientsContext } from "@/context/usePatientContext";
import { formatDate } from "@/utils/date";
import { useState } from "react";

const PatientsCard = () => {
    const { filteredPatients, deletePatient } = usePatientsContext();
    const navigate = useNavigate();
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedPatientId, setSelectedPatientId] = useState(null);

    const handleDeleteClick = (patientId) => {
        setSelectedPatientId(patientId);
        setShowConfirmModal(true);
    };

    const confirmDelete = () => {
        if (selectedPatientId) {
            deletePatient(selectedPatientId);
        }
        setShowConfirmModal(false);
        setSelectedPatientId(null);
    };

    const cancelDelete = () => {
        setShowConfirmModal(false);
        setSelectedPatientId(null);
    };

    return (
        <>
            <Row>
                {filteredPatients.map((item) => (
                    <Col xl={3} sm={6} key={item.id}>
                        <Card className="text-center">
                            <CardBody>
                                <Dropdown align={"end"} className="float-end">
                                    <DropdownToggle
                                        as="a"
                                        className="text-body content-none pb-1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <IconifyIcon
                                            icon="tabler:dots-vertical"
                                            className="fs-22"
                                        />
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>
                                            Fazer Agendamento
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={() =>
                                                navigate(
                                                    `/patients/update/${item.id}`,
                                                    {
                                                        state: {
                                                            patientId: item.id,
                                                        },
                                                    }
                                                )
                                            }
                                        >
                                            Editar
                                        </DropdownItem>
                                        <DropdownItem
                                            onClick={() =>
                                                handleDeleteClick(item.id)
                                            }
                                        >
                                            Deletar
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <h4 className="mt-3 mb-1">
                                    <Link
                                        to={`/patients/${item.id}`}
                                        className="text-dark"
                                    >
                                        {item.fullName}
                                    </Link>
                                </h4>
                                <p className="text-muted">
                                    {item.cpf} - {formatDate(item.birthDate)}
                                </p>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Modal de Confirmação */}
            <Modal show={showConfirmModal} onHide={cancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Deleção</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza de que deseja deletar este paciente?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={cancelDelete}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Deletar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default PatientsCard;
