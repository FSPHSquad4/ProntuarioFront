import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import React from 'react';
import {
  Button,
  Col,
  OverlayTrigger,
  Popover,
  PopoverBody,
  PopoverHeader,
  Row,
} from 'react-bootstrap';

//

const SimplePopover = () => {
  const basicPopover = (
    <Popover id="popover-basic">
      <PopoverHeader as="h3">Título do Popover</PopoverHeader>
      <PopoverBody>
        Aqui está um conteúdo incrível. Muito interessante, certo?
      </PopoverBody>
    </Popover>
  );
  return (
    <ComponentContainerCard
      title="Popover Simples"
      description={
        <>
          O Popover é um componente que exibe uma caixa com conteúdo após um
          clique em um elemento, semelhante ao tooltip, mas pode conter mais
          informações.
        </>
      }
    >
      <OverlayTrigger
        trigger={'click'}
        placement="right"
        overlay={basicPopover}
      >
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="popover"
          title="Título do Popover"
          data-bs-content="Aqui está um conteúdo incrível. Muito interessante, certo?"
        >
          Clique para alternar o popover
        </button>
      </OverlayTrigger>
    </ComponentContainerCard>
  );
};

const DismissOnPopover = () => {
  const dismissiblePopover = (
    <Popover>
      <PopoverHeader as="h3">Popover Dispensável</PopoverHeader>
      <PopoverBody>
        Aqui está um conteúdo incrível. Muito interessante, certo?
      </PopoverBody>
    </Popover>
  );
  return (
    <ComponentContainerCard
      title="Dispensar ao Próximo Clique"
      description={
        <>
          Use o gatilho <code>focus</code> para dispensar popovers no próximo
          clique do usuário em um elemento diferente do elemento de alternância.
        </>
      }
    >
      <OverlayTrigger
        trigger="focus"
        placement="right"
        overlay={dismissiblePopover}
      >
        <button
          tabIndex={0}
          type="button"
          className="btn btn-success"
          data-bs-toggle="popover"
          data-bs-trigger="focus"
          data-bs-content="Aqui está um conteúdo incrível. Muito interessante, certo?"
          title="Popover Dispensável"
        >
          Popover Dispensável
        </button>
      </OverlayTrigger>
    </ComponentContainerCard>
  );
};

const HoverPopovers = () => {
  const hoverPopover = (
    <Popover>
      <PopoverHeader as="h3">Uau!</PopoverHeader>
      <PopoverBody>
        Aqui está um conteúdo incrível. Muito interessante, certo?
      </PopoverBody>
    </Popover>
  );
  return (
    <ComponentContainerCard
      title="Passar o Mouse"
      description={
        <>
          Use o atributo <code>data-bs-trigger=&quot;hover&quot;</code> para
          exibir o popover ao passar o mouse sobre o elemento.
        </>
      }
    >
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="right"
        overlay={hoverPopover}
      >
        <button
          type="button"
          tabIndex={0}
          className="btn btn-dark"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-content="Aqui está um conteúdo incrível. Muito interessante, certo?"
          title="Uau!"
        >
          Passe o Mouse Aqui
        </button>
      </OverlayTrigger>
    </ComponentContainerCard>
  );
};

const FourDirections = () => {
  const directions = [
    {
      placement: 'top',
    },
    {
      placement: 'bottom',
    },
    {
      placement: 'right',
    },
    {
      placement: 'left',
    },
  ];
  return (
    <ComponentContainerCard
      title="Quatro Direções"
      description={
        <>
          Quatro opções estão disponíveis: alinhado no topo, à direita, embaixo
          e à esquerda.
        </>
      }
    >
      <div className="d-flex flex-wrap gap-2">
        {(directions || []).map((direction, idx) => (
          <OverlayTrigger
            trigger="click"
            key={idx}
            placement={direction.placement}
            overlay={
              <Popover id={`popover-positioned-${direction.placement}`}>
                <PopoverBody>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                </PopoverBody>
              </Popover>
            }
          >
            <Button variant="primary">Popover em {direction.placement}</Button>
          </OverlayTrigger>
        ))}
      </div>
    </ComponentContainerCard>
  );
};

const CustomPopovers = () => {
  const customPopover = (variant) => (
    <Popover className={`popover-${variant}`}>
      <PopoverHeader as="h3">Popover Personalizado</PopoverHeader>
      <PopoverBody>Este popover é personalizado via variáveis CSS.</PopoverBody>
    </Popover>
  );
  return (
    <ComponentContainerCard
      title="Popovers Personalizados"
      description={
        <>
          Você pode personalizar a aparência dos popovers usando variáveis CSS.
          Adicionamos uma classe personalizada com&nbsp;
          <code>data-bs-custom-class=&quot;primary-popover&quot;</code> para
          ajustar a aparência e sobrescrever algumas variáveis locais do CSS.
        </>
      }
    >
      <div className="d-flex flex-wrap gap-2">
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={customPopover('primary')}
        >
          <Button variant="primary">Popover Primário</Button>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={customPopover('success')}
        >
          <Button variant="success">Popover de Sucesso</Button>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={customPopover('danger')}
        >
          <Button variant="danger">Popover de Perigo</Button>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={customPopover('info')}
        >
          <Button variant="info">Popover de Informação</Button>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={customPopover('dark')}
        >
          <Button variant="dark">Popover Escuro</Button>
        </OverlayTrigger>
        <OverlayTrigger
          trigger="click"
          placement="right"
          overlay={customPopover('secondary')}
        >
          <Button variant="secondary">Popover Secundário</Button>
        </OverlayTrigger>
      </div>
    </ComponentContainerCard>
  );
};

const DisabledPopover = () => {
  const disabledPopover = (
    <Popover>
      <PopoverBody>Popover Desabilitado</PopoverBody>
    </Popover>
  );
  return (
    <ComponentContainerCard
      title="Elementos Desabilitados"
      description={
        <>
          Elementos com o atributo <code>disabled</code> não são interativos, ou
          seja, os usuários não podem passar o mouse ou clicar para acionar um
          popover (ou tooltip). Como alternativa, você deve acionar o popover de
          um contêiner como <code>&lt;div&gt;</code> ou{' '}
          <code>&lt;span&gt;</code> e sobrescrever o <code>pointer-events</code>{' '}
          no elemento desabilitado.
        </>
      }
    >
      <OverlayTrigger placement="right" overlay={disabledPopover}>
        <span className="d-inline-block">
          <Button
            disabled
            style={{
              pointerEvents: 'none',
            }}
          >
            Botão Desabilitado
          </Button>
        </span>
      </OverlayTrigger>
    </ComponentContainerCard>
  );
};

const Popovers = () => {
  return (
    <>
      <PageBreadcrumb title="Popovers" />
      <Row>
        <Col xl={6}>
          <SimplePopover />
          <DismissOnPopover />
          <HoverPopovers />
        </Col>
        <Col xl={6}>
          <FourDirections />
          <CustomPopovers />
          <DisabledPopover />
        </Col>
      </Row>
    </>
  );
};

export default Popovers;
