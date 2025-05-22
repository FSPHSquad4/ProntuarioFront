import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, ProgressBar, Row } from 'react-bootstrap';

const Example = () => {
  return (
    <ComponentContainerCard
      title="Exemplos"
      description={
        <>
          Uma barra de progresso pode ser usada para mostrar a um usuário o quão
          longe ele/ela está em um processo.
        </>
      }
    >
      <ProgressBar className="mb-2" now={0} />
      <ProgressBar className="mb-2" now={25} />
      <ProgressBar className="mb-2" now={50} />
      <ProgressBar className="mb-2" now={75} />
      <ProgressBar className="progress" now={100} />
    </ComponentContainerCard>
  );
};

const HeightProgressBar = () => {
  return (
    <ComponentContainerCard
      title="Altura"
      description={
        <>
          Nós definimos apenas um valor de <code>height</code> na classe{' '}
          <code>.progress</code>. Se você alterar esse valor, a barra interna{' '}
          <code>.progress-bar</code> será redimensionada automaticamente. Use as
          classes <code>.progress-sm</code>,<code>.progress-md</code>,
          <code>.progress-lg</code>,<code>.progress-xl</code>.
        </>
      }
    >
      <ProgressBar
        now={25}
        variant="danger"
        className="mb-2"
        style={{ height: 1 }}
      />
      <ProgressBar
        now={25}
        variant="primary"
        className="mb-2"
        style={{ height: 3 }}
      />
      <ProgressBar now={25} variant="success" className="mb-2 progress-sm" />
      <ProgressBar now={50} variant="info" className="mb-2 progress-md" />
      <ProgressBar now={75} variant="warning" className="progress-lg mb-2" />
      <ProgressBar now={38} variant="success" className="progress-xl" />
    </ComponentContainerCard>
  );
};

const MultipleBars = () => {
  return (
    <ComponentContainerCard
      title="Múltiplas barras"
      description={
        <>
          Inclua múltiplas barras de progresso em um componente de progresso, se
          necessário.
        </>
      }
    >
      <ProgressBar className="progress">
        <ProgressBar now={15}></ProgressBar>
        <ProgressBar now={30} variant="success" className="bg-success" />
        <ProgressBar now={20} variant="info" className="bg-info" />
      </ProgressBar>
    </ComponentContainerCard>
  );
};

const AnimatedStripes = () => {
  return (
    <ComponentContainerCard
      title="Listras animadas"
      description={
        <>
          O gradiente listrado também pode ser animado. Adicione{' '}
          <code>.progress-bar-animated</code> à classe{' '}
          <code>.progress-bar</code> para animar as listras da direita para a
          esquerda com animações CSS3.
        </>
      }
    >
      <ProgressBar now={75} animated className="progress" />
    </ComponentContainerCard>
  );
};

const StepsProgressBar = () => {
  return (
    <ComponentContainerCard
      title="Etapas"
      description={
        <>
          Adicione <code>.progress-bar-striped</code> a qualquer{' '}
          <code>.progress-bar</code> para aplicar listras via gradiente CSS
          sobre a cor de fundo da barra de progresso.
        </>
      }
    >
      <div className="position-relative m-4">
        <ProgressBar now={50} style={{ height: 2 }} className="bg-light" />
        <button
          type="button"
          className="position-absolute top-0 start-0 translate-middle btn btn-icon btn-primary rounded-pill"
        >
          1
        </button>
        <button
          type="button"
          className="position-absolute top-0 start-50 translate-middle btn btn-icon btn-primary rounded-pill"
        >
          2
        </button>
        <button
          type="button"
          className="position-absolute top-0 start-100 translate-middle btn btn-icon btn-light rounded-pill"
        >
          3
        </button>
      </div>
    </ComponentContainerCard>
  );
};

const LabelsBar = () => {
  return (
    <ComponentContainerCard
      title="Rótulos"
      description={
        <>
          Adicione rótulos às suas barras de progresso colocando texto dentro da
          classe <code>.progress-bar</code>.
        </>
      }
    >
      <ProgressBar now={25} className="mb-3" label="25%" />
      <ProgressBar
        now={10}
        className="text-dark"
        label="Texto longo de rótulo para a barra de progresso, definido como uma cor escura"
      />
    </ComponentContainerCard>
  );
};

const BackgroundBar = () => {
  return (
    <ComponentContainerCard
      title="Fundos"
      description={
        <>
          Use classes utilitárias de fundo para alterar a aparência de barras de
          progresso individuais.
        </>
      }
    >
      <ProgressBar now={25} variant="success" className="mb-2" />
      <ProgressBar now={50} variant="info" className="mb-2" />
      <ProgressBar now={75} variant="warning" className="mb-2" />
      <ProgressBar now={100} variant="danger" className="mb-2" />
      <ProgressBar now={65} variant="dark" className="mb-2" />
      <ProgressBar now={50} variant="secondary" />
    </ComponentContainerCard>
  );
};

const Progress = () => {
  return (
    <>
      <PageBreadcrumb title="Progresso" />
      <Row>
        <Col xl={6}>
          <Example />
          <HeightProgressBar />
          <MultipleBars />
          <AnimatedStripes />
          <StepsProgressBar />
        </Col>
        <Col xl={6}>
          <LabelsBar />
          <BackgroundBar />
          <CustomBackgroundBar />
        </Col>
      </Row>
    </>
  );
};

export default Progress;
