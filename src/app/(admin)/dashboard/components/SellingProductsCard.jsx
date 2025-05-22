import IconifyIcon from '@/components/wrappers/IconifyIcon';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Pagination,
  Table,
} from 'react-bootstrap';
import { salesProductData } from '../data';
import { Link } from 'react-router-dom';

const SellingProductsCard = () => {
  return (
    <Card className="card-h-100">
      <CardHeader className="d-flex flex-wrap align-items-center gap-2 border-bottom border-dashed">
        <h4 className="header-title me-auto">Produtos Mais Vendidos</h4>
        <div className="d-flex gap-2 justify-content-end text-end">
          <Button variant="light" size="sm">
            Importar <IconifyIcon icon="tabler:download" className="ms-1" />
          </Button>
          <Button variant="primary" size="sm">
            Exportar <IconifyIcon icon="tabler:file-export" className="ms-1" />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="p-0">
        <div className="table-responsive">
          <Table className="table-custom align-middle table-nowrap table-hover mb-0">
            <tbody>
              {salesProductData.map((item, idx) => (
                <tr key={idx}>
                  <td>
                    <div className="avatar-lg">
                      <img
                        src={item.image}
                        alt="Produto-1"
                        className="img-fluid rounded-2"
                      />
                    </div>
                  </td>
                  <td className="ps-0">
                    <h5 className="fs-14 my-1">
                      <Link
                        to="/e-commerce/product-details"
                        className="link-reset"
                      >
                        {item.name}
                      </Link>
                    </h5>
                    <span className="text-muted fs-12">
                      {item.date.toLocaleString('pt-br', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </td>
                  <td>
                    <h5 className="fs-14 my-1">R${item.price}</h5>
                    <span className="text-muted fs-12">Preço</span>
                  </td>
                  <td>
                    <h5 className="fs-14 my-1">{item.quantity}</h5>
                    <span className="text-muted fs-12">Quantidade</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center justify-content-end">
                      <div className="me-2">
                        <h5 className="fs-14 my-1">R${item.amount}</h5>
                        <span className="text-muted fs-12">Valor</span>
                      </div>
                    </div>
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
              <span className="fw-semibold">10</span> Resultados
            </div>
          </div>
          <Col sm={'auto'} className="mt-3 mt-sm-0">
            <Pagination className="pagination-boxed pagination-sm mb-0 justify-content-center">
              <Pagination.Item className=" disabled">
                <IconifyIcon icon="tabler:chevron-left" />
              </Pagination.Item>
              <Pagination.Item className=" active">1</Pagination.Item>
              <Pagination.Item className="">2</Pagination.Item>
              <Pagination.Item className="">
                <IconifyIcon icon="tabler:chevron-right" />
              </Pagination.Item>
            </Pagination>
          </Col>
        </div>
      </CardFooter>
    </Card>
  );
};

export default SellingProductsCard;
