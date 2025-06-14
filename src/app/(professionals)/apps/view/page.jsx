import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { Card, CardHeader, Col, Pagination, Row } from "react-bootstrap";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { useNavigate } from "react-router-dom";
import { useProfessionalsContext } from "@/context/useProfessionalsContext";
import ProfessionalsCard from "../../components/ProfessionalsCard";

const ProfessionalsPage = () => {
    const { professionals, filteredProfessionals, filterProfessionals } =
        useProfessionalsContext();

    const handleSearch = (e) => {
        filterProfessionals(e.target.value);
    };

    const navigate = useNavigate();
    return (
        <>
            <PageBreadcrumb title="Profissionais" />
            <Row>
                <Col xs={12}>
                    <Card>
                        <CardHeader className="justify-content-between d-flex gap-2">
                            <a
                                href=""
                                className="btn btn-danger"
                                onClick={() =>
                                    navigate("/Professionals/create")
                                }
                            >
                                <IconifyIcon
                                    icon="tabler:circle-plus"
                                    className="fs-20 me-2"
                                />{" "}
                                Adicionar Novo
                            </a>
                            <form className="d-flex align-items-start flex-wrap justify-content-sm-end gap-2">
                                <div className="d-flex align-items-start flex-wrap">
                                    <label
                                        htmlFor="membersearch-input"
                                        className="visually-hidden"
                                    >
                                        Buscar
                                    </label>
                                    <input
                                        type="search"
                                        className="form-control"
                                        id="membersearch-input"
                                        placeholder="Buscar..."
                                        onChange={handleSearch}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                >
                                    <IconifyIcon
                                        icon="tabler:settings"
                                        className="fs-20"
                                    />
                                </button>
                            </form>
                        </CardHeader>
                    </Card>
                </Col>
            </Row>

            <ProfessionalsCard />

            <Row className=" align-items-center mb-3">
                <Col sm={6}>
                    <div>
                        {filteredProfessionals.length > 0 ? (
                            <p className="fs-14 m-0 text-body text-muted">
                                Exibindo{" "}
                                <span className="text-body fw-semibold">
                                    {filteredProfessionals.length}
                                </span>{" "}
                                de{" "}
                                <span className="text-body fw-semibold">
                                    {professionals.length}
                                </span>{" "}
                                profissionais
                            </p>
                        ) : (
                            <p className="fs-14 m-0 text-body text-muted">
                                Nenhum profissional encontrado
                            </p>
                        )}
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="float-sm-end">
                        <Pagination className="pagination-rounded mb-sm-0">
                            <Pagination.Item className="disabled">
                                <IconifyIcon icon="tabler:chevron-left" />
                            </Pagination.Item>
                            <Pagination.Item className="">1</Pagination.Item>
                            <Pagination.Item className="active">
                                2
                            </Pagination.Item>
                            <Pagination.Item className="">3</Pagination.Item>
                            <Pagination.Item className="">4</Pagination.Item>
                            <Pagination.Item className="">5</Pagination.Item>
                            <Pagination.Item className="">
                                <IconifyIcon icon="tabler:chevron-right" />
                            </Pagination.Item>
                        </Pagination>
                    </div>
                </Col>
            </Row>
        </>
    );
};
export default ProfessionalsPage;
