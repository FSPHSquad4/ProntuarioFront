import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import Spinner from '@/components/Spinner';
import { colorVariants } from '@/context/constants';
import { Button, Col, Row } from 'react-bootstrap';

//

const BorderedSpinners = () => {
  return (
    <ComponentContainerCard
      title="Spinner de Borda"
      description={
        <>Use os spinners de borda para um indicador de carregamento leve.</>
      }
    >
      <Spinner className="m-2" />
    </ComponentContainerCard>
  );
};

const ColorsSpinners = () => {
  return (
    <ComponentContainerCard
      title="Cores"
      description={
        <>
          Você pode usar qualquer uma das nossas utilidades de cores de texto no
          spinner padrão.
        </>
      }
    >
      {colorVariants.slice(0, 10).map((color, idx) => {
        return <Spinner key={idx} className="m-2" color={color} />;
      })}
    </ComponentContainerCard>
  );
};

const AlignmentSpinner = () => {
  return (
    <ComponentContainerCard
      title="Alinhamento"
      description={
        <>
          Use utilitários de flexbox, flutuação ou alinhamento de texto para
          posicionar os spinners exatamente onde você precisar em qualquer
          situação.
        </>
      }
    >
      <div className="d-flex justify-content-center">
        <Spinner />
      </div>
    </ComponentContainerCard>
  );
};

const SpinnersSizes = () => {
  const sizes = ['lg', 'md', 'sm'];
  return (
    <ComponentContainerCard
      title="Tamanho"
      description={
        <>
          Adicione <code>.spinner-border-sm</code> e&nbsp;
          <code>.spinner-border.avatar-**</code> para criar um spinner menor que
          pode ser usado rapidamente dentro de outros componentes.
        </>
      }
    >
      <Row>
        {(sizes || []).map((size, idx) => {
          return (
            <Col lg={6} key={idx}>
              <Spinner
                className="text-primary m-2"
                color="primary"
                size={size}
              />
              <Spinner
                color="secondary"
                className="text-secondary m-2"
                type="grow"
                size={size}
              />
            </Col>
          );
        })}
        <Col lg={6}>
          <Spinner className="spinner-border-sm m-2"></Spinner>
          <Spinner type="grow" className="spinner-grow-sm m-2"></Spinner>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};

const GrowingSpinners = () => {
  return (
    <ComponentContainerCard
      title="Spinner de Crescimento"
      description={
        <>
          Se você não gostar de um spinner de borda, mude para o spinner de
          crescimento. Embora ele tecnicamente não gire, ele cresce
          repetidamente!
        </>
      }
    >
      <Spinner type="grow" className="m-2" />
    </ComponentContainerCard>
  );
};

const ColorGrowingSpinners = () => {
  return (
    <ComponentContainerCard
      title="Spinner de Crescimento Colorido"
      description={
        <>
          Você pode usar qualquer uma das nossas utilidades de cores de texto no
          spinner padrão.
        </>
      }
    >
      {colorVariants.slice(0, 10).map((color, idx) => {
        return <Spinner key={idx} className="m-2" type="grow" color={color} />;
      })}
    </ComponentContainerCard>
  );
};

const PlacementSpinners = () => {
  return (
    <ComponentContainerCard
      title="Posicionamento"
      description={
        <>
          Use <code>utilitários de flexbox</code>,{' '}
          <code>utilitários de flutuação</code> ou{' '}
          <code>alinhamento de texto</code> para posicionar os spinners
          exatamente onde você precisar em qualquer situação.
        </>
      }
    >
      <div className="d-flex align-items-center">
        <strong>Carregando...</strong>
        <Spinner className="ms-auto" />
      </div>
    </ComponentContainerCard>
  );
};

const ButtonSpinners = () => {
  return (
    <ComponentContainerCard
      title="Spinner em Botões"
      description={
        <>
          Use spinners dentro de botões para indicar que uma ação está sendo
          processada ou em andamento. Você também pode trocar o texto do spinner
          e utilizar o texto do botão conforme necessário.
        </>
      }
    >
      <Row>
        <Col lg={6}>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="primary" disabled>
              <Spinner className="spinner-border-sm" tag="span" color="white" />{' '}
              <span className="visually-hidden">Carregando...</span>
            </Button>

            <Button variant="primary" disabled>
              <Spinner
                className="spinner-border-sm me-1"
                tag="span"
                color="white"
              />
              Carregando...
            </Button>
          </div>
        </Col>

        <Col lg={6}>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="primary" disabled>
              <Spinner
                className="spinner-grow-sm"
                tag="span"
                color="white"
                type="grow"
              />{' '}
              <span className="visually-hidden">Carregando...</span>
            </Button>

            <Button variant="primary" disabled>
              <Spinner
                className="spinner-grow-sm me-1"
                tag="span"
                color="white"
                type="grow"
              ></Spinner>
              Carregando...
            </Button>
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};

const Spinners = () => {
  return (
    <>
      <PageBreadcrumb title="Spinners" />
      <Row>
        <Col xl={6}>
          <BorderedSpinners />
          <ColorsSpinners />
          <AlignmentSpinner />
          <SpinnersSizes />
        </Col>
        <Col xl={6}>
          <GrowingSpinners />
          <ColorGrowingSpinners />
          <PlacementSpinners />
          <ButtonSpinners />
        </Col>
      </Row>
    </>
  );
};

export default Spinners;
