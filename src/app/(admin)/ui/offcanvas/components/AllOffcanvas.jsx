import ComponentContainerCard from '@/components/ComponentContainerCard';
import useToggle from '@/hooks/useToggle';
import {
  Button,
  Col,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Row,
} from 'react-bootstrap';
import { backdropOptions, placementOptions } from '../data';
const DefaultOffcanvas = () => {
  const { isTrue, toggle } = useToggle();
  return (
    <ComponentContainerCard
      title="Gavetas"
      description={
        <>
          Você pode usar um link com o atributo <code>href</code> ou um botão
          com o atributo <code>data-bs-target</code>. Em ambos os casos, o{' '}
          <code>data-bs-toggle=&quot;offcanvas&quot;</code> é necessário.
        </>
      }
    >
      <div className="d-flex flex-wrap gap-2">
        <Button
          variant="primary"
          onClick={toggle}
          data-bs-toggle="offcanvas"
          href="#offcanvasExample"
          role="button"
          aria-controls="offcanvasExample"
        >
          Link with href
        </Button>
      </div>
      <Offcanvas
        show={isTrue}
        onHide={toggle}
        className="offcanvas-start"
        tabIndex={-1}
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <OffcanvasHeader>
          <OffcanvasTitle as={'h4'} id="offcanvasExampleLabel">
            Gavetas
          </OffcanvasTitle>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </OffcanvasHeader>
        <OffcanvasBody>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, modi
            corrupti libero, officia vero aliquid quaerat illum necessitatibus
            expedita adipisci aperiam, odit voluptas? Delectus itaque reiciendis
            dolores? Dicta, corporis repellendus!
          </div>
          <h5 className="mt-3">Lista</h5>
          <ul className="ps-3">
            <li>Nemo enim ipsam voluptatem quia aspernatur</li>
            <li>Neque porro quisquam est, qui dolorem</li>
            <li>Quis autem vel eum iure qui in ea</li>
          </ul>
          <ul className="ps-3">
            <li>At vero eos et accusamus et iusto odio dignissimos</li>
            <li>Et harum quidem rerum facilis</li>
            <li>Temporibus autem quibusdam et aut officiis</li>
          </ul>
        </OffcanvasBody>
      </Offcanvas>
    </ComponentContainerCard>
  );
};
const OffcanvasBackdrop = () => {
  const OffCanvasWithBackdrop = ({ name, ...props }) => {
    const { isTrue, toggle } = useToggle();
    return (
      <>
        <Button onClick={toggle} type="button" className="mt-2 me-1 mt-md-0">
          {name}
        </Button>{' '}
        &nbsp;
        <Offcanvas placement="start" show={isTrue} onHide={toggle} {...props}>
          <OffcanvasHeader closeButton>
            <OffcanvasTitle
              as="h5"
              className="mt-0"
              id="offcanvasScrollingLabel"
            >
              {name}
            </OffcanvasTitle>
          </OffcanvasHeader>
          <OffcanvasBody>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              officia labore accusamus vitae ea, accusantium debitis minus
              voluptatibus assumenda doloremque eos mollitia quis nisi soluta.
              Nam eligendi facilis reiciendis eaque.
            </div>
            <h5 className="mt-3">Lista</h5>
            <ul className="ps-3">
              <li>Nemo enim ipsam voluptatem quia aspernatur</li>
              <li>Neque porro quisquam est, qui dolorem</li>
              <li>Quis autem vel eum iure qui in ea</li>
            </ul>
            <ul className="ps-3">
              <li>At vero eos et accusamus et iusto odio dignissimos</li>
              <li>Et harum quidem rerum facilis</li>
              <li>Temporibus autem quibusdam et aut officiis</li>
            </ul>
          </OffcanvasBody>
        </Offcanvas>
      </>
    );
  };
  return (
    <ComponentContainerCard
      title="Offcanvas Backdrop"
      description={
        <>
          A rolagem do elemento <code>&lt;body&gt;</code> é desativada quando um
          offcanvas e seu pano de fundo estão visíveis. Use o atributo{' '}
          <code>data-bs-scroll</code> para alternar a rolagem{' '}
          <code>&lt;body&gt;</code> e <code>data-bs-backdrop</code> para
          alternar o pano de fundo.
        </>
      }
    >
      {backdropOptions.map((offcanvas, idx) => (
        <OffCanvasWithBackdrop {...offcanvas} key={idx} />
      ))}
    </ComponentContainerCard>
  );
};
const OffcanvasPlacement = () => {
  const OffcanvasPlacement = ({ name, ...props }) => {
    const { isTrue, toggle } = useToggle();
    return (
      <>
        <Button onClick={toggle} className="mt-2 me-1 mt-md-0">
          {' '}
          Toggle {name} offcanvas
        </Button>
        <Offcanvas show={isTrue} onHide={toggle} {...props}>
          <OffcanvasHeader closeButton>
            <OffcanvasTitle as={'h5'} className="mt-0">
              Offcanvas {name}
            </OffcanvasTitle>
          </OffcanvasHeader>

          <OffcanvasBody>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              molestias nobis, molestiae non eligendi consequatur iure! Quod
              atque doloremque quidem cupiditate architecto labore voluptatum,
              nobis laborum incidunt corporis similique facilis?
            </div>
            <h5 className="mt-3">Lista</h5>
            <ul className="ps-3">
              <li>Nemo enim ipsam voluptatem quia aspernatur</li>
              <li>Neque porro quisquam est, qui dolorem</li>
              <li>Quis autem vel eum iure qui in ea</li>
            </ul>
          </OffcanvasBody>
        </Offcanvas>
      </>
    );
  };
  return (
    <ComponentContainerCard
      title="Offcanvas Placement"
      description={
        <>
          <p className="text-muted">
            Experimente os exemplos direito e inferior abaixo.
          </p>
          <ul className="text-muted">
            <li>
              <code>.offcanvas-start</code> coloca o offcanvas à esquerda da
              janela de visualização (mostrado acima)
            </li>
            <li>
              <code>.offcanvas-end</code> coloca o offcanvas à direita da janela
              de visualização
            </li>
            <li>
              <code>.offcanvas-top</code> coloca o offcanvas no topo da janela
              de visualização
            </li>
            <li>
              <code>.offcanvas-bottom</code> coloca o offcanvas na parte
              inferior da janela de visualização
            </li>
          </ul>
        </>
      }
    >
      <div>
        {placementOptions.map((props, idx) => (
          <OffcanvasPlacement {...props} key={idx} />
        ))}
      </div>
    </ComponentContainerCard>
  );
};
const DarkOffcanvas = () => {
  const { isTrue, toggle } = useToggle();
  return (
    <ComponentContainerCard
      title="Gaveta Escura"
      description={
        <>
          Altere a aparência de offcanvases com utilitários para melhor combinar
          para diferentes contextos, como barras de navegação escuras. Aqui adicionamos{' '}
          <code>.text-bg-dark</code> para <code>.offcanvas</code> e{' '}
          <code>.btn-close-white</code> para
          <code>.btn-close</code> para um estilo adequado com uma tela escura. Se
          você tem menus suspensos, considere também adicionar
          <code>.dropdown-menu-dark</code> para <code>.dropdown-menu</code>.
        </>
      }
    >
      <div>
        <button
          onClick={toggle}
          className="btn btn-primary mt-2 mt-md-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDark"
          aria-controls="offcanvasDark"
        >
          Gaveta Escura
        </button>
        <Offcanvas
          show={isTrue}
          onHide={toggle}
          className="offcanvas-start text-bg-dark"
          tabIndex={-1}
          id="offcanvasDark"
          aria-labelledby="offcanvasDarkLabel"
        >
          <OffcanvasHeader>
            <h5 id="offcanvasDarkLabel">Gaveta Escura</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </OffcanvasHeader>
          <OffcanvasBody>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sapiente velit eaque voluptatibus, dolorem rerum qui eum sequi suscipit quas tempore fuga sed cum. Voluptate mollitia aut ex? Sint, vel.
            </div>
            <h5 className="mt-3">Lista</h5>
            <ul className="ps-3">
              <li>Nemo enim ipsam voluptatem quia aspernatur</li>
              <li>Neque porro quisquam est, qui dolorem</li>
              <li>Quis autem vel eum iure qui in ea</li>
            </ul>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </ComponentContainerCard>
  );
};
const AllOffcanvas = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <DefaultOffcanvas />
          <OffcanvasBackdrop />
        </Col>
        <Col xl={6}>
          <OffcanvasPlacement />
          <DarkOffcanvas />
        </Col>
      </Row>
    </>
  );
};
export default AllOffcanvas;
