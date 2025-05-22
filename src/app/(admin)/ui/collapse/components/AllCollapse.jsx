import ComponentContainerCard from '@/components/ComponentContainerCard';
import useToggle from '@/hooks/useToggle';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';

const DefaultCollapse = () => {
  const { isTrue, toggle } = useToggle();
  return (
    <ComponentContainerCard
      title="Colapso"
      description={
        <>
          O colapso do Bootstrap permite alternar a visibilidade de qualquer
          conteúdo ou elemento. Por favor, leia a documentação oficial do{' '}
          <a
            href="https://getbootstrap.com/docs/5.2/components/collapse/"
            target="_blank"
          >
            Bootstrap
          </a>
          &nbsp; para uma lista completa de opções.
        </>
      }
    >
      <p>
        <Button
          variant="primary"
          onClick={toggle}
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Link com href
        </Button>
      </p>
      <Collapse in={isTrue}>
        <div>
          <Card className="card-body mb-0">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Card>
        </div>
      </Collapse>
    </ComponentContainerCard>
  );
};

const CollapseHorizontal = () => {
  const { isTrue, toggle } = useToggle();
  return (
    <ComponentContainerCard
      title="Colapso Horizontal"
      description={
        <>
          O plugin de colapso também suporta colapsos horizontais. Adicione a
          classe <code>.collapse-horizontal</code> para transicionar a{' '}
          <code>largura</code> em vez da <code>altura</code> e defina uma{' '}
          <code>largura</code> no elemento filho imediato.
        </>
      }
    >
      <p>
        <button onClick={toggle} className="btn btn-primary" type="button">
          Alternar largura do colapso
        </button>
      </p>
      <div style={{ minHeight: 105 }}>
        <Collapse dimension="width" in={isTrue}>
          <div>
            <Card className="card-body mb-0" style={{ width: 300 }}>
              Este é um conteúdo de espaço reservado para um colapso horizontal.
              Está oculto por padrão e é exibido quando acionado.
            </Card>
          </div>
        </Collapse>
      </div>
    </ComponentContainerCard>
  );
};

const MultipleCollapse = () => {
  const { isTrue: isOpenFirst, toggle: toggleFirst } = useToggle(false);
  const { isTrue: isOpenSecond, toggle: toggleSecond } = useToggle(false);
  const toggleBoth = () => {
    toggleFirst();
    toggleSecond();
  };
  return (
    <ComponentContainerCard
      title="Múltiplos Alvos"
      description={
        <>
          Múltiplos <code>&lt;button&gt;</code> ou <code>&lt;a&gt;</code> podem
          mostrar e ocultar um elemento se cada um fizer referência a ele com
          seus atributos <code>href</code> ou <code>data-bs-target</code>.
        </>
      }
    >
      <p>
        <a
          className="btn btn-primary"
          onClick={toggleFirst}
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Alternar primeiro elemento
        </a>
        &nbsp;
        <button
          className="btn btn-primary"
          onClick={toggleSecond}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Alternar segundo elemento
        </button>
        &nbsp;
        <button
          className="btn btn-primary"
          onClick={toggleBoth}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target=".multi-collapse"
          aria-expanded="false"
          aria-controls="multiCollapseExample1 multiCollapseExample2"
        >
          Alternar ambos os elementos
        </button>
        &nbsp;
      </p>
      <Row>
        <Col>
          <Collapse className="multi-collapse" in={isOpenFirst}>
            <div>
              <Card className="card-body mb-0">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Card>
            </div>
          </Collapse>
        </Col>
        <Col>
          <Collapse className="multi-collapse" in={isOpenSecond}>
            <div>
              <Card className="card-body mb-0">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </Card>
            </div>
          </Collapse>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};

const AllCollapse = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          <DefaultCollapse />
        </Col>
        <Col xl={6}>
          <CollapseHorizontal />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <MultipleCollapse />
        </Col>
      </Row>
    </div>
  );
};

export default AllCollapse;
