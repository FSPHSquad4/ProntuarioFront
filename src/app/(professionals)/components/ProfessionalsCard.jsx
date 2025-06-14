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
import { Link, useNavigate } from "react-router-dom";
import { useProfessionalsContext } from "@/context/useProfessionalsContext";
import { useState } from "react";
const ProfessionalsCard = () => {
    const { filteredProfessionals, deleteProfessional } =
        useProfessionalsContext();
    const navigate = useNavigate();
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [selectedProfessionalId, setSelectedProfessionalId] = useState(null);

    const handleDeleteClick = (professionalId) => {
        setSelectedProfessionalId(professionalId);
        setShowConfirmModal(true);
    };

    const confirmDelete = () => {
        if (selectedProfessionalId) {
            deleteProfessional(selectedProfessionalId);
        }
        setShowConfirmModal(false);
        setSelectedProfessionalId(null);
    };

    const cancelDelete = () => {
        setShowConfirmModal(false);
        setSelectedProfessionalId(null);
    };

    return (
        <>
            <Row>
                {filteredProfessionals.map((item) => (
                    <Col xl={3} sm={6} key={item.id}>
                        <Card className="text-center">
                            <CardBody>
                                <Dropdown align="end" className="float-end">
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
                                        <DropdownItem
                                            onClick={() =>
                                                navigate(
                                                    `/professionals/update/${item.id}`,
                                                    {
                                                        state: {
                                                            professionalId:
                                                                item.id,
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
                                        to={`/professionals/${item.id}`}
                                        className="text-dark"
                                    >
                                        {item.name.length >= 25
                                            ? item.name.slice(0, 25) + "..."
                                            : item.name}
                                    </Link>
                                </h4>
                                <p className="text-muted">
                                    {item.specialty} -{" "}
                                    {item.professionalLicense}
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
                    Tem certeza de que deseja deletar este profissional?
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

export default ProfessionalsCard;
