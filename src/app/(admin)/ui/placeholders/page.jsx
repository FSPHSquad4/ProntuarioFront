import small1 from '@/assets/images/small/small-1.jpg';
import small2 from '@/assets/images/small/small-2.jpg';
import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Button, Card, CardBody, CardTitle, Col, Row } from 'react-bootstrap';

//

const DefaultPlaceholders = () => {
  return (
    <ComponentContainerCard
      title="Marcadores de posição"
      description={
        <>
          No exemplo abaixo, recriamos um típico componente de cartão com
          marcadores de posição aplicados para criar um “cartão de
          carregamento”. Tamanho e proporções são os mesmos entre os dois.
        </>
      }
    >
      <Row>
        <Col md={6}>
          <Card className="border shadow-none mb-md-0">
            <img
              src={small1}
              width={355}
              height={236}
              className="card-img-top img-fluid"
              alt="..."
            />
            <CardBody>
              <CardTitle as={'h5'}>Título do Cartão</CardTitle>
              <p className="card-text">
                Um exemplo rápido de texto para construir sobre o título do
                cartão e compor a maior parte do conteúdo do cartão.
              </p>
              <Button variant="primary">Ir para algum lugar</Button>
            </CardBody>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="border shadow-none mb-0" aria-hidden="true">
            <img
              src={small2}
              width={355}
              height={236}
              className="card-img-top img-fluid"
              alt="..."
            />
            <CardBody>
              <h5 className="header-title placeholder-glow">
                <span className="placeholder col-6" />
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7" />
                <span className="placeholder col-4" />
                <span className="placeholder col-4" />
                <span className="placeholder col-6" />
              </p>
              <Button
                variant="primary"
                className="disabled placeholder col-6"
                aria-disabled="true"
              >
                {' '}
                <span className="invisible">Somente leitura</span>
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};
const ColorPlaceholders = () => {
  return (
    <ComponentContainerCard
      title="Cores"
      description={
        <>
          Por padrão, o <code>placeholder</code> usa <code>currentColor</code>.
          Isso pode ser substituído com uma cor personalizada ou classe
          utilitária.
        </>
      }
    >
      <span className="placeholder col-12" />
      <span className="placeholder col-12 bg-primary" />
      <span className="placeholder col-12 bg-secondary" />
      <span className="placeholder col-12 bg-success" />
      <span className="placeholder col-12 bg-danger" />
      <span className="placeholder col-12 bg-warning" />
      <span className="placeholder col-12 bg-info" />
      <span className="placeholder col-12 bg-light" />
      <span className="placeholder col-12 bg-dark" />
    </ComponentContainerCard>
  );
};
const WidthPlaceholders = () => {
  return (
    <ComponentContainerCard
      title="Largura"
      description={
        <>
          Você pode alterar a <code>largura</code> através de classes de colunas
          da grade, utilitários de largura ou estilos inline.
        </>
      }
    >
      <span className="placeholder col-6" />
      <span className="placeholder w-75" />
      <span
        className="placeholder"
        style={{
          width: '25%',
        }}
      />{' '}
      <br />
      <span
        className="placeholder"
        style={{
          width: '10%',
        }}
      />
    </ComponentContainerCard>
  );
};
const SizingPlaceholders = () => {
  return (
    <ComponentContainerCard
      title="Tamanhos"
      description={
        <>
          O tamanho de <code>.placeholder</code>s é baseado no estilo
          tipográfico do elemento pai. Personalize-os com modificadores de
          tamanho: <code>.placeholder-lg</code>, <code>.placeholder-sm</code> ou{' '}
          <code>.placeholder-xs</code>.
        </>
      }
    >
      <span className="placeholder col-12 placeholder-lg" />
      <span className="placeholder col-12" />
      <span className="placeholder col-12 placeholder-sm" />
      <span className="placeholder col-12 placeholder-xs" />
    </ComponentContainerCard>
  );
};
const WorksPlaceholder = () => {
  return (
    <ComponentContainerCard
      title="Como funciona"
      description={
        <>
          Crie marcadores de posição com a classe <code>.placeholder</code> e
          uma classe de coluna da grade (por exemplo, <code>.col-6</code>) para
          definir a <code>largura</code>. Eles podem substituir o texto dentro
          de um elemento ou ser adicionados como uma classe modificadora a um
          componente existente.
        </>
      }
    >
      <p aria-hidden="true">
        <span className="placeholder col-6" />
      </p>
      <Button
        variant="primary"
        className="disabled placeholder col-4"
        aria-hidden="true"
      />
    </ComponentContainerCard>
  );
};
const AnimationPlaceholder = () => {
  return (
    <ComponentContainerCard
      title="Animação"
      description={
        <>
          Anime os marcadores de posição com <code>.placeholder-glow</code> ou{' '}
          <code>.placeholder-wave</code> para transmitir melhor a percepção de
          algo sendo <em>ativamente</em> carregado.
        </>
      }
    >
      <p className="placeholder-glow">
        <span className="placeholder col-12" />
      </p>
      <p className="placeholder-wave mb-0">
        <span className="placeholder col-12" />
      </p>
    </ComponentContainerCard>
  );
};
const Placeholders = () => {
  return (
    <>
      <PageBreadcrumb title="Marcadores de Posição" />
      <div>
        <Row>
          <Col xl={6}>
            <DefaultPlaceholders />
          </Col>
          <Col xl={6}>
            <ColorPlaceholders />
            <WidthPlaceholders />
          </Col>
          <Col xl={6}>
            <SizingPlaceholders />
          </Col>
          <Col xl={6}>
            <WorksPlaceholder />
          </Col>
          <Col xl={6}>
            <AnimationPlaceholder />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Placeholders;
