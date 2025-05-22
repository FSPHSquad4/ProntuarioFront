import { brandListData } from '@/assets/data/other';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Pagination,
  Table,
} from 'react-bootstrap';

const BrandsListingCard = () => {
  // const brandListData = getBrandsList()
  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-center">
        <h4 className="header-title">Lista de Marcas</h4>
        <Button variant="light" size="sm">
          Adicionar Marca <IconifyIcon icon="tabler:plus" className="ms-1" />
        </Button>
      </CardHeader>
      <CardBody className="p-0">
        <div className="bg-light bg-opacity-50 py-1 text-center">
          <p className="m-0">
            <b>69</b> Marcas ativas de <span className="fw-medium">102</span>
          </p>
        </div>
        <div className="table-responsive">
          <Table className="table-custom table-centered table-sm table-nowrap table-hover mb-0">
            <tbody>
              {brandListData.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-md flex-shrink-0 me-2">
                        <span className="avatar-title bg-primary-subtle rounded-circle">
                          <img
                            src={item.image}
                            alt="products-Img"
                            height={22}
                          />
                        </span>
                      </div>
                      <div>
                        <span className="text-muted fs-12">
                          {item.category}
                        </span>{' '}
                        <br />
                        <h5 className="fs-14 mt-1">{item.name}</h5>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="text-muted fs-12">Estabelecida</span>
                    <h5 className="fs-14 mt-1 fw-normal">Desde {item.since}</h5>
                  </td>
                  <td>
                    <span className="text-muted fs-12">Lojas</span> <br />
                    <h5 className="fs-14 mt-1 fw-normal">{item.Stores}</h5>
                  </td>
                  <td>
                    <span className="text-muted fs-12">Produtos</span>
                    <h5 className="fs-14 mt-1 fw-normal">{item.products}</h5>
                  </td>
                  <td>
                    <span className="text-muted fs-12">Status</span>
                    <h5 className="fs-14 mt-1 fw-normal">
                      <IconifyIcon
                        icon="tabler:circle-filled"
                        className="fs-12 text-success"
                      />{' '}
                      Ativa
                    </h5>
                  </td>
                  <td
                    style={{
                      width: 30,
                    }}
                  >
                    <Dropdown>
                      <DropdownToggle
                        as={'a'}
                        className="text-muted drop-arrow-none card-drop p-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <IconifyIcon icon="tabler:dots-vertical" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>Atualizar Relatório</DropdownItem>
                        <DropdownItem>Exportar Relatório</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
      <CardFooter>
        <div className="align-items-center justify-content-between row text-center text-sm-start">
          <div className="col-sm">
            <div className="text-muted">
              Exibindo <span className="fw-semibold">5</span> de{' '}
              <span className="fw-semibold">15</span> Resultados
            </div>
          </div>
          <Col sm={'auto'} className="mt-3 mt-sm-0">
            <Pagination className="pagination-boxed pagination-sm mb-0 justify-content-center">
              <Pagination.Item className=" disabled">
                <IconifyIcon icon="tabler:chevron-left" />
              </Pagination.Item>
              <Pagination.Item className=" active">1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>
                <IconifyIcon icon="tabler:chevron-right" />
              </Pagination.Item>
            </Pagination>
          </Col>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BrandsListingCard;
