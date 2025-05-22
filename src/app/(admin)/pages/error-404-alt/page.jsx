import Error404Alt from '@/assets/images/error/error-404.png';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, Row } from 'react-bootstrap';

//

const Error404AltPage = () => {
  return (
    <>
      <PageBreadcrumb title="Erro 404 Alternativo" />
      <Row className="justify-content-center">
        <Col lg={4}>
          <div className="text-center">
            <img
              src={Error404Alt}
              height={230}
              alt="Imagem de Arquivo Não Encontrado"
            />
            <h4 className="text-uppercase text-danger mt-3">
              Página Não Encontrada
            </h4>
            <p className="text-muted mt-3">
              Parece que você tomou um caminho errado. Não se preocupe... isso
              acontece com os melhores de nós. Aqui está uma dica que pode
              ajudá-lo a voltar aos trilhos.
            </p>
            <a className="btn btn-info mt-3" href="/">
              <IconifyIcon icon="tabler:home" className="me-1" /> Voltar para a
              Página Inicial
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Error404AltPage;
