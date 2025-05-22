import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { colorVariants } from '@/context/constants';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

//

const ExamplesTooltips = () => {
  return (
    <ComponentContainerCard
      title="Exemplos"
      description={
        <>Passe o mouse sobre os links abaixo para ver os tooltips.</>
      }
    >
      <p className="muted mb-0">
        Calças justas keffiyeh de outro nível &nbsp;
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="danger-tooltip">Tooltip padrão</Tooltip>}
        >
          <a href="#" data-bs-toggle="tooltip" data-bs-title="Tooltip padrão">
            você provavelmente
          </a>
        </OverlayTrigger>
        &nbsp; não ouviu falar deles. Barba de cabine fotográfica, letterpress
        de jeans cru vegano messenger bag stumptown. Cabine fotográfica barba
        seitan, fixie do mcsweeney&apos;s quinoa sustentável 8-bit american
        apparel &nbsp;
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="danger-tooltip">Outro tooltip</Tooltip>}
        >
          <a href="#" data-bs-toggle="tooltip" data-bs-title="">
            tem um
          </a>
        </OverlayTrigger>{' '}
        &nbsp; vinil chambray terry richardson. Stumptown barba, cardigans banh
        mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko do
        mcsweeney&apos;s limpeza vegana chambray. Um artesão realmente irônico
        &nbsp;
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip className="danger-tooltip">Outro aqui também</Tooltip>
          }
        >
          <a href="#" data-bs-toggle="tooltip">
            o que seja
          </a>
        </OverlayTrigger>{' '}
        &nbsp; keytar, scenester farm-to-table banksy Austin &nbsp;
        <OverlayTrigger
          placement="top"
          overlay={<Tooltip className="danger-tooltip">A última dica!</Tooltip>}
        >
          <a href="#" data-bs-toggle="tooltip" data-bs-title="">
            twitter handle
          </a>
        </OverlayTrigger>{' '}
        &nbsp; cred freegan denim cru de origem única viral.
      </p>
    </ComponentContainerCard>
  );
};
const DisabledElements = () => {
  return (
    <ComponentContainerCard
      title="Elementos Desativados"
      description={
        <>
          Elementos com o atributo <code>disabled</code>
          não são interativos, o que significa que os usuários não podem focar,
          passar o mouse ou clicar neles para ativar um tooltip (ou popover).
          Como solução, você pode ativar o tooltip em um wrapper como{' '}
          <code>&lt;div&gt;</code> ou <code>&lt;span&gt;</code>, idealmente
          ajustado para acessibilidade ao teclado usando{' '}
          <code>tabindex=&quot;0&quot;</code>, e sobrescrever
          <code>pointer-events</code> no elemento desativado.
        </>
      }
    >
      <OverlayTrigger
        trigger={'hover'}
        placement="top"
        overlay={<Tooltip>Tooltip desativado</Tooltip>}
      >
        <span
          className="d-inline-block"
          tabIndex={0}
          data-bs-toggle="tooltip"
          data-bs-title="Tooltip desativado"
        >
          <button
            className="btn btn-primary pe-none z-4"
            type="button"
            disabled
          >
            Botão desativado
          </button>
        </span>
      </OverlayTrigger>
    </ComponentContainerCard>
  );
};
const HoverElements = () => {
  return (
    <ComponentContainerCard
      title="Elementos com Hover"
      description={
        <>
          Elementos com o atributo <code>disabled</code>
          não são interativos, o que significa que os usuários não podem focar,
          passar o mouse ou clicar neles para ativar um tooltip (ou popover).
          Como solução, você pode ativar o tooltip em um wrapper como{' '}
          <code>&lt;div&gt;</code> ou <code>&lt;span&gt;</code>, idealmente
          ajustado para acessibilidade ao teclado usando{' '}
          <code>tabindex=&quot;0&quot;</code>, e sobrescrever
          <code>pointer-events</code> no elemento desativado.
        </>
      }
    >
      <OverlayTrigger
        trigger={'hover'}
        placement="top"
        overlay={<Tooltip>Apenas Hover, sem Foco</Tooltip>}
      >
        <button
          className="btn btn-primary"
          type="button"
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
        >
          Hover
        </button>
      </OverlayTrigger>
    </ComponentContainerCard>
  );
};
const FourDirections = () => {
  return (
    <ComponentContainerCard
      title="Quatro Direções"
      description={
        <>
          Passe o mouse sobre os botões abaixo para ver as quatro direções dos
          tooltips: cima, direita, baixo e esquerda.
        </>
      }
    >
      <div className="d-flex flex-wrap gap-2">
        <OverlayTrigger
          overlay={
            <Tooltip className="primary-tooltip">Tooltip no topo</Tooltip>
          }
        >
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
          >
            Tooltip no topo
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip className="danger-tooltip">
              Tooltip na parte inferior
            </Tooltip>
          }
        >
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
          >
            Tooltip na parte inferior
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="left"
          overlay={
            <Tooltip className="danger-tooltip">Tooltip à esquerda</Tooltip>
          }
        >
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
          >
            Tooltip à esquerda
          </button>
        </OverlayTrigger>
        <OverlayTrigger
          placement="right"
          overlay={
            <Tooltip className="danger-tooltip">Tooltip à direita</Tooltip>
          }
        >
          <button
            type="button"
            className="btn btn-info"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-title="Tooltip à direita"
          >
            Tooltip à direita
          </button>
        </OverlayTrigger>
      </div>
    </ComponentContainerCard>
  );
};
const HTMLTags = () => {
  return (
    <ComponentContainerCard
      title="Tags HTML"
      description={<>E com HTML personalizado adicionado:</>}
    >
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip className="danger-tooltip">
            <em>Tooltip</em> <u>com</u> <b>HTML</b>
          </Tooltip>
        }
      >
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-toggle="tooltip"
          data-bs-html="true"
          data-bs-title="<em>Tooltip</em> <u>com</u> <b>HTML</b>"
        >
          Tooltip com HTML
        </button>
      </OverlayTrigger>
    </ComponentContainerCard>
  );
};
const ColorTooltips = () => {
  return (
    <ComponentContainerCard
      title="Tooltips Coloridos"
      description={
        <p className="text-muted fs-14 mb-0">
          Definimos uma classe personalizada, como exemplo{' '}
          <code>data-bs-custom-class=&quot;primary-tooltip&quot;</code>, para
          aplicar uma aparência de cor de fundo primária e usá-la para
          sobrescrever uma variável CSS local.
        </p>
      }
    >
      <div className="d-flex flex-wrap gap-2">
        {colorVariants.slice(0, 7).map((color, idx) => {
          return (
            <OverlayTrigger
              placement="top"
              key={idx}
              overlay={
                <Tooltip className={`tooltip-${color}`}>
                  Este tooltip no topo é estilizado via variáveis CSS.
                </Tooltip>
              }
            >
              <Button variant={color} type="button">
                Tooltip Primário
              </Button>
            </OverlayTrigger>
          );
        })}
      </div>
    </ComponentContainerCard>
  );
};
const Tooltips = () => {
  return (
    <>
      <PageBreadcrumb title="Tooltips" />
      <Row>
        <Col xl={6}>
          <ExamplesTooltips />
          <DisabledElements />
          <HoverElements />
        </Col>
        <Col xl={6}>
          <FourDirections />
          <HTMLTags />
          <ColorTooltips />
        </Col>
      </Row>
    </>
  );
};
export default Tooltips;
