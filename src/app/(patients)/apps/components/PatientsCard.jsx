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
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { usePatientsContext } from "@/context/usePatientContext";
import { formatDate } from "@/utils/date";

const PatientsCard = () => {
    const { filteredPatients } = usePatientsContext();

    return (
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
                                    <DropdownItem>Editar</DropdownItem>
                                    <DropdownItem>Deletar</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <h4 className="mt-3 mb-1">
                                <Link to="/users/profile" className="text-dark">
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
    );
};

export default PatientsCard;
