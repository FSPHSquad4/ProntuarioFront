import ComponentContainerCard from '@/components/ComponentContainerCard';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import { Col, Row } from 'react-bootstrap';

const DefaultScrollBar = () => {
  return (
    <ComponentContainerCard
      title="Barra de Rolagem"
      description={
        <>
          Basta usar o atributo de dados <code>data-simplebar</code>&nbsp; e
          adicionar <code>max-height: **px</code> para altura fixa
        </>
      }
    >
      <SimplebarReactClient
        className="card-body p-0 py-0 mb-3"
        style={{
          maxHeight: 250,
        }}
      >
        SimpleBar faz apenas uma coisa: substitui a barra de rolagem padrão do
        navegador por uma personalizada estilizada com CSS, sem perder
        desempenho. Ao contrário de alguns plugins populares, o SimpleBar não
        imita a rolagem com Javascript, causando travamentos e comportamentos
        estranhos de rolagem... Você mantém a excelência da rolagem nativa...
        com uma barra de rolagem personalizada!
        <p>
          SimpleBar{' '}
          <strong>
            não implementa um comportamento de rolagem personalizado
          </strong>
          . Ele mantém a rolagem <strong>nativa</strong>&nbsp;
          <code>overflow: auto</code> e <strong>somente</strong> substitui a
          aparência visual da barra de rolagem.
        </p>
        <h5>Desenhe do jeito que quiser</h5>
        <p>
          SimpleBar usa CSS puro para estilizar a barra de rolagem. Você pode
          facilmente personalizá-la como quiser! Ou até ter vários estilos na
          mesma página... ou apenas manter o estilo padrão (estilo de barra de
          rolagem "Mac OS").
        </p>
        <h5>Leve e eficiente</h5>
        <p>
          Apenas 6kb minificado. O SimpleBar não usa Javascript para lidar com
          rolagem. Você mantém o desempenho/comportamentos da rolagem nativa.
        </p>
        <h5>Suportado em todos os lugares</h5>
        <p className="mb-0">
          O SimpleBar foi testado nos seguintes navegadores: Chrome, Firefox,
          Safari, Edge, IE11.
        </p>
      </SimplebarReactClient>
    </ComponentContainerCard>
  );
};

const PositionScrollBar = () => {
  return (
    <ComponentContainerCard
      title="Posição RTL"
      description={
        <>
          Basta usar o atributo de dados
          <code>data-simplebar data-simplebar-direction='rtl'</code>e adicionar{' '}
          <code>max-height: **px</code> para altura fixa
        </>
      }
    >
      <SimplebarReactClient
        className="card-body py-0 mb-3"
        data-simplebar-direction="rtl"
        style={{
          maxHeight: 250,
        }}
      >
        SimpleBar faz apenas uma coisa: substitui a barra de rolagem padrão do
        navegador por uma personalizada estilizada com CSS, sem perder
        desempenho. Ao contrário de alguns plugins populares, o SimpleBar não
        imita a rolagem com Javascript, causando travamentos e comportamentos
        estranhos de rolagem... Você mantém a excelência da rolagem nativa...
        com uma barra de rolagem personalizada!
        <p>
          SimpleBar{' '}
          <strong>
            não implementa um comportamento de rolagem personalizado
          </strong>
          . Ele mantém a rolagem <strong>nativa</strong>&nbsp;
          <code>overflow: auto</code> e <strong>somente</strong> substitui a
          aparência visual da barra de rolagem.
        </p>
        <h5>Desenhe do jeito que quiser</h5>
        <p>
          SimpleBar usa CSS puro para estilizar a barra de rolagem. Você pode
          facilmente personalizá-la como quiser! Ou até ter vários estilos na
          mesma página... ou apenas manter o estilo padrão (estilo de barra de
          rolagem "Mac OS").
        </p>
        <h5>Leve e eficiente</h5>
        <p>
          Apenas 6kb minificado. O SimpleBar não usa Javascript para lidar com
          rolagem. Você mantém o desempenho/comportamentos da rolagem nativa.
        </p>
        <h5>Suportado em todos os lugares</h5>
        <p className="mb-0">
          O SimpleBar foi testado nos seguintes navegadores: Chrome, Firefox,
          Safari, Edge, IE11.
        </p>
      </SimplebarReactClient>
    </ComponentContainerCard>
  );
};

const SizeScrollBar = () => {
  return (
    <ComponentContainerCard
      title="Tamanho da Barra de Rolagem"
      description={
        <>
          Basta usar o atributo de dados <code>data-simplebar</code>e adicionar{' '}
          <code>max-height: **px</code> para altura fixa
        </>
      }
    >
      <SimplebarReactClient
        className="card-body p-0 py-0 mb-3"
        data-simplebar-lg
        style={{
          maxHeight: 250,
        }}
      >
        SimpleBar faz apenas uma coisa: substitui a barra de rolagem padrão do
        navegador por uma personalizada estilizada com CSS, sem perder
        desempenho. Ao contrário de alguns plugins populares, o SimpleBar não
        imita a rolagem com Javascript, causando travamentos e comportamentos
        estranhos de rolagem... Você mantém a excelência da rolagem nativa...
        com uma barra de rolagem personalizada!
        <p>
          SimpleBar{' '}
          <strong>
            não implementa um comportamento de rolagem personalizado
          </strong>
          . Ele mantém a rolagem <strong>nativa</strong>&nbsp;
          <code>overflow: auto</code> e <strong>somente</strong> substitui a
          aparência visual da barra de rolagem.
        </p>
        <h5>Desenhe do jeito que quiser</h5>
        <p>
          SimpleBar usa CSS puro para estilizar a barra de rolagem. Você pode
          facilmente personalizá-la como quiser! Ou até ter vários estilos na
          mesma página... ou apenas manter o estilo padrão (estilo de barra de
          rolagem "Mac OS").
        </p>
        <h5>Leve e eficiente</h5>
        <p>
          Apenas 6kb minificado. O SimpleBar não usa Javascript para lidar com
          rolagem. Você mantém o desempenho/comportamentos da rolagem nativa.
        </p>
        <h5>Suportado em todos os lugares</h5>
        <p className="mb-0">
          O SimpleBar foi testado nos seguintes navegadores: Chrome, Firefox,
          Safari, Edge, IE11.
        </p>
      </SimplebarReactClient>
    </ComponentContainerCard>
  );
};

const ScrollColor = () => {
  return (
    <ComponentContainerCard
      title="Cor da Barra de Rolagem"
      description={
        <>
          Basta usar o atributo de dados
          <code>data-simplebar data-simplebar-primary</code>e adicionar{' '}
          <code>max-height: **px</code> para altura fixa
        </>
      }
    >
      <SimplebarReactClient
        className="card-body p-0 py-0 mb-3"
        data-simplebar-primary
        style={{
          maxHeight: 250,
        }}
      >
        SimpleBar faz apenas uma coisa: substitui a barra de rolagem padrão do
        navegador por uma personalizada estilizada com CSS, sem perder
        desempenho. Ao contrário de alguns plugins populares, o SimpleBar não
        imita a rolagem com Javascript, causando travamentos e comportamentos
        estranhos de rolagem... Você mantém a excelência da rolagem nativa...
        com uma barra de rolagem personalizada!
        <p>
          SimpleBar{' '}
          <strong>
            não implementa um comportamento de rolagem personalizado
          </strong>
          . Ele mantém a rolagem <strong>nativa</strong>&nbsp;
          <code>overflow: auto</code> e <strong>somente</strong> substitui a
          aparência visual da barra de rolagem.
        </p>
        <h5>Desenhe do jeito que quiser</h5>
        <p>
          SimpleBar usa CSS puro para estilizar a barra de rolagem. Você pode
          facilmente personalizá-la como quiser! Ou até ter vários estilos na
          mesma página... ou apenas manter o estilo padrão (estilo de barra de
          rolagem "Mac OS").
        </p>
        <h5>Leve e eficiente</h5>
        <p>
          Apenas 6kb minificado. O SimpleBar não usa Javascript para lidar com
          rolagem. Você mantém o desempenho/comportamentos da rolagem nativa.
        </p>
        <h5>Suportado em todos os lugares</h5>
        <p className="mb-0">
          O SimpleBar foi testado nos seguintes navegadores: Chrome, Firefox,
          Safari, Edge, IE11.
        </p>
      </SimplebarReactClient>
    </ComponentContainerCard>
  );
};

const Scrollbar = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <DefaultScrollBar />
        </Col>
        <Col xl={6}>
          <PositionScrollBar />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <SizeScrollBar />
        </Col>
        <Col xl={6}>
          <ScrollColor />
        </Col>
      </Row>
    </>
  );
};

export default Scrollbar;
