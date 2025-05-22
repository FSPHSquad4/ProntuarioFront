import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const DefaultBadges = () => {
  return (
    <ComponentContainerCard
      title="Padrão"
      description={
        <>
          Um componente simples de rotulagem. Os badges se ajustam ao tamanho do
          elemento pai imediato usando dimensionamento relativo de fonte e
          unidades <code>em</code>.
        </>
      }
    >
      <h1>
        h1.Exemplo de título{' '}
        <span className="badge bg-secondary-subtle text-secondary">Novo</span>
      </h1>
      <h2>
        h2.Exemplo de título{' '}
        <span className="badge badge-soft-success">Novo</span>
      </h2>
      <h3>
        h3.Exemplo de título <span className="badge bg-primary">Novo</span>
      </h3>
      <h4>
        h4.Exemplo de título{' '}
        <Link to="" className="badge badge-soft-info">
          Link de Informação
        </Link>
      </h4>
      <h5>
        h5.Exemplo de título{' '}
        <span className="badge badge-outline-warning">Novo</span>
      </h5>
      <h6>
        h6.Exemplo de título <span className="badge bg-danger">Novo</span>
      </h6>
    </ComponentContainerCard>
  );
};
const ContextualVariations = () => {
  return (
    <ComponentContainerCard
      title="Badges em Forma de Pílula"
      description={
        <>
          Use a classe modificadora <code>.rounded-pill</code> para tornar os
          badges mais arredondados.
        </>
      }
    >
      <span className="badge me-1 bg-primary rounded-pill">Primário</span>
      <span className="badge me-1 text-bg-secondary rounded-pill">
        Secundário
      </span>
      <span className="badge me-1 bg-success rounded-pill">Sucesso</span>
      <span className="badge me-1 bg-danger rounded-pill">Perigo</span>
      <span className="badge me-1 bg-warning rounded-pill">Aviso</span>
      <span className="badge me-1 bg-info rounded-pill">Informação</span>
      <span className="badge me-1 bg-light text-dark rounded-pill">Claro</span>
      <span className="badge me-1 bg-dark text-light rounded-pill">Escuro</span>
      <h5 className="mt-4">Badges Suavizados</h5>
      <p className="text-muted">
        Use a classe modificadora <code>.badgesoft--*</code> para criar
        variações mais suaves.
      </p>
      <span className="badge me-1 badge-soft-primary rounded-pill">
        Primário
      </span>
      <span className="badge me-1 badge-soft-secondary rounded-pill">
        Secundário
      </span>
      <span className="badge me-1 badge-soft-success rounded-pill">
        Sucesso
      </span>
      <span className="badge me-1 badge-soft-danger rounded-pill">Perigo</span>
      <span className="badge me-1 badge-soft-warning rounded-pill">Aviso</span>
      <span className="badge me-1 badge-soft-info rounded-pill">
        Informação
      </span>
      <span className="badge me-1 badge-soft-dark rounded-pill">Escuro</span>
      <h5 className="mt-4">Badges Contornados</h5>
      <p className="text-muted">
        Use <code>.badge-outline-*</code> para criar badges com borda
        rapidamente.
      </p>
      <span className="badge me-1 badge-outline-primary rounded-pill">
        Primário
      </span>
      <span className="badge me-1 badge-outline-secondary rounded-pill">
        Secundário
      </span>
      <span className="badge me-1 badge-outline-success rounded-pill">
        Sucesso
      </span>
      <span className="badge me-1 badge-outline-danger rounded-pill">
        Perigo
      </span>
      <span className="badge me-1 badge-outline-warning rounded-pill">
        Aviso
      </span>
      <span className="badge me-1 badge-outline-info rounded-pill">
        Informação
      </span>
      <span className="badge me-1 badge-outline-dark rounded-pill">Escuro</span>
    </ComponentContainerCard>
  );
};
const PillBadges = () => {
  return (
    <ComponentContainerCard
      title="Variações Contextuais"
      description={
        <>
          Adicione qualquer uma das classes modificadoras mencionadas abaixo
          para alterar a aparência de um badge. O badge também pode ser mais
          contextual. Use a convenção regular, por exemplo,{' '}
          <code>badge-*color</code>, <code>bg-primary</code>
          para aplicar um fundo diferente ao badge.
        </>
      }
    >
      <span className="badge me-1 bg-primary">Primário</span>
      <span className="badge me-1 text-bg-secondary">Secundário</span>
      <span className="badge me-1 bg-success">Sucesso</span>
      <span className="badge me-1 bg-danger">Perigo</span>
      <span className="badge me-1 bg-warning">Aviso</span>
      <span className="badge me-1 bg-info">Informação</span>
      <span className="badge me-1 bg-light text-dark">Claro</span>
      <span className="badge me-1 bg-dark text-light">Escuro</span>
      <h5 className="mt-4">Badges Suavizados</h5>
      <p className="text-muted">
        Usando a classe <code>.badgesoft--*</code>, é possível criar variações
        mais suaves.
      </p>
      <span className="badge me-1 badge-soft-primary">Primário</span>
      <span className="badge me-1 badge-soft-secondary">Secundário</span>
      <span className="badge me-1 badge-soft-success">Sucesso</span>
      <span className="badge me-1 badge-soft-danger">Perigo</span>
      <span className="badge me-1 badge-soft-warning">Aviso</span>
      <span className="badge me-1 badge-soft-info">Informação</span>
      <span className="badge me-1 badge-soft-dark">Escuro</span>
      <h5 className="mt-4">Badges Contornados</h5>
      <p className="text-muted">
        Use <code>.badge-outline-*</code> para criar badges com bordas
        rapidamente.
      </p>
      <span className="badge me-1 badge-outline-primary">Primário</span>
      <span className="badge me-1 badge-outline-secondary">Secundário</span>
      <span className="badge me-1 badge-outline-success">Sucesso</span>
      <span className="badge me-1 badge-outline-danger">Perigo</span>
      <span className="badge me-1 badge-outline-warning">Aviso</span>
      <span className="badge me-1 badge-outline-info">Informação</span>
      <span className="badge me-1 badge-outline-dark">Escuro</span>
    </ComponentContainerCard>
  );
};
const BadgePositioned = () => {
  return (
    <ComponentContainerCard
      title="Badges Posicionados"
      description={
        <>
          Use utilitários para modificar um <code>.badge</code> e posicioná-lo
          no canto de um link ou botão.
        </>
      }
    >
      <Row>
        <Col xs={6}>
          <button type="button" className="btn btn-primary position-relative">
            Caixa de Entrada
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              99+
              <span className="visually-hidden">mensagens não lidas</span>
            </span>
          </button>
        </Col>
        <Col xs={6}>
          <button type="button" className="btn btn-primary position-relative">
            Perfil
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
              <span className="visually-hidden">Novos alertas</span>
            </span>
          </button>
        </Col>
        <Col xs={6}>
          <button type="button" className="btn btn-success mt-4">
            Notificações{' '}
            <span className="badge bg-light text-dark ms-1">4</span>
          </button>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};
const BadgesPage = () => {
  return (
    <>
      <PageBreadcrumb title="Badges" />
      <Row>
        <Col xl={6}>
          <DefaultBadges />
          <ContextualVariations />
        </Col>
        <Col xl={6}>
          <PillBadges />
          <BadgePositioned />
        </Col>
      </Row>
    </>
  );
};
export default BadgesPage;
