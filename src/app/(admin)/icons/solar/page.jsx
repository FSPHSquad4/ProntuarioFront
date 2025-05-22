import IconifyIcon from '@/components/wrappers/IconifyIcon';
import {
  Card,
  CardBody,
  Col,
  OverlayTrigger,
  Row,
  Tooltip,
} from 'react-bootstrap';
import { solarIconData } from './data';
import { Link } from 'react-router-dom';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const SolarIconsCard = ({ title, icon }) => {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{title}</Tooltip>}>
      <Card className="mb-0">
        <CardBody
          className="d-flex flex-column align-items-center justify-content-center"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="4k"
        >
          <IconifyIcon icon={icon} width={30} height={30} className="fs-2" />
        </CardBody>
      </Card>
    </OverlayTrigger>
  );
};

const SolarIcon = () => {
  return (
    <>
      <PageBreadcrumb title="Ícones Solares" />
      <Row className="d-none">
        <Col xs={12}>
          <Card>
            <CardBody>
              <h4 className="mt-0 mb-2 fw-semibold">Visão Geral</h4>
              <p className="mb-4 text-muted">
                Nosso conjunto de ícones solares de ponta possui uma coleção
                extensa de mais de 7.477 glifos, abrangendo uma variedade
                diversificada de variantes de design, todos convenientemente
                agrupados em um único arquivo de fonte.
              </p>
              <h4 className="mt-0 mb-2 fw-semibold">Uso</h4>
              <div className="d-flex align-items-center gap-2">
                <IconifyIcon icon="solar:4k-bold" className="fs-2" />
                <IconifyIcon
                  icon="solar:4k-bold-duotone"
                  className="fs-2 text-primary"
                />
                <IconifyIcon
                  icon="solar:4k-broken"
                  className="fs-2 text-danger"
                />
                <IconifyIcon
                  icon="solar:4k-line-duotone"
                  className="fs-2 text-info"
                />
                <IconifyIcon
                  icon="solar:4k-linear"
                  className="fs-2 text-warning"
                />
                <IconifyIcon
                  icon="solar:4k-outline"
                  className="fs-2 text-secondary"
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <div className="d-flex flex-wrap gap-3 justify-content-center icon-box">
        {solarIconData.map((item, idx) => (
          <SolarIconsCard key={idx} {...item} />
        ))}
      </div>
      <div className="my-3 text-center">
        <Link
          to="https://icon-sets.iconify.design/solar/"
          target="_blank"
          className="btn btn-danger"
        >
          Ver Todos os Ícones
        </Link>
      </div>
    </>
  );
};

export default SolarIcon;
