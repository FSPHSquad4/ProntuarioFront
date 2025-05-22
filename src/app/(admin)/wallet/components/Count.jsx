import { Card, CardBody, Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Count = () => {
  return (
    <Row>
      <Col xl={3} md={6}>
        <Card>
          <CardBody className="widget-user">
            <div className="text-center">
              <h2 className="fw-normal text-primary" data-plugin="counterup">
                <CountUp duration={3} start={0} end={6599} />
              </h2>
              <p className="mb-0 fw-semibold">Estatísticas</p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={3} md={6}>
        <Card>
          <CardBody className="widget-user">
            <div className="text-center">
              <h2 className="text-danger" data-plugin="counterup">
                <CountUp duration={3} start={0} end={5894} />
              </h2>
              <p className="mb-0 fw-semibold">Receita Total</p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={3} md={6}>
        <Card>
          <CardBody className="widget-user">
            <div className="text-center">
              <h2 className="fw-semibold text-warning" data-plugin="counterup">
                <CountUp duration={3} start={0} end={452} />
              </h2>
              <p className="mb-0 fw-semibold">Análise de Vendas</p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={3} md={6}>
        <Card>
          <CardBody className="widget-user">
            <div className="text-center">
              <h2 className="fw-bold text-info" data-plugin="counterup">
                <CountUp duration={3} start={0} end={1254} />
              </h2>
              <p className="mb-0 fw-semibold">Vendas Diárias</p>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default Count;
