import ComponentContainerCard from "@/components/ComponentContainerCard";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import IconifyIcon from "@/components/wrappers/IconifyIcon";
import { ButtonGroup as BSButtonGroup, Button, Card, CardBody, CardHeader, Col, DropdownButton, DropdownItem, Row } from "react-bootstrap";

// 

const DefaultButtons = () => {
  return <ComponentContainerCard title="Botões Padrões" description={<>Use as classes de botão em um elemento <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code> ou <code>&lt;input&gt;</code>.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-primary">Primário</button>
        <button type="button" className="btn btn-secondary">Secundário</button>
        <button type="button" className="btn btn-success">Sucesso</button>
        <button type="button" className="btn btn-danger">Perigo</button>
        <button type="button" className="btn btn-warning">Alerta</button>
        <button type="button" className="btn btn-info">informação</button>
        <button type="button" className="btn btn-light">Claro</button>
        <button type="button" className="btn btn-dark">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const ButtonOutline = () => {
  return <ComponentContainerCard title="Contorno do botão" description={<>Use uma classe <code>.btn-outline-**</code> para criar rapidamente botões com bordas.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-outline-primary">Primário</button>
        <button type="button" className="btn btn-outline-secondary">Secundário</button>
        <button type="button" className="btn btn-outline-success"> Success</button>
        <button type="button" className="btn btn-outline-danger">Perigo</button>
        <button type="button" className="btn btn-outline-warning">Alerta</button>
        <button type="button" className="btn btn-outline-info">informação</button>
        <button type="button" className="btn btn-outline-light">Claro</button>
        <button type="button" className="btn btn-outline-dark">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const ButtonRounded = () => {
  return <ComponentContainerCard title="Botão Arredondado" description={<>Adicione <code>.rounded-pill</code> ao botão padrão para obter cantos arredondados.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-primary rounded-pill">Primário</button>
        <button type="button" className="btn btn-secondary rounded-pill">Secundário</button>
        <button type="button" className="btn btn-success rounded-pill">Sucesso</button>
        <button type="button" className="btn btn-danger rounded-pill">Perigo</button>
        <button type="button" className="btn btn-warning rounded-pill">Alerta</button>
        <button type="button" className="btn btn-info rounded-pill">informação</button>
        <button type="button" className="btn btn-light rounded-pill">Claro</button>
        <button type="button" className="btn btn-dark rounded-pill">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const ButtonOutlineRounded = () => {
  return <ComponentContainerCard title="Contorno do Botão Arredondado" description={<>Use uma classe <code>.btn-outline-**</code> para criar rapidamente botões com bordas.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-outline-primary rounded-pill">Primário</button>
        <button type="button" className="btn btn-outline-secondary rounded-pill">Secundário</button>
        <button type="button" className="btn btn-outline-success rounded-pill">Sucesso</button>
        <button type="button" className="btn btn-outline-danger rounded-pill">Perigo</button>
        <button type="button" className="btn btn-outline-warning rounded-pill">Alerta</button>
        <button type="button" className="btn btn-outline-info rounded-pill">informação</button>
        <button type="button" className="btn btn-outline-dark rounded-pill">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const SoftButtons = () => {
  return <ComponentContainerCard title="Botões Suaves" description={<>Use classes <code>.btn-soft-**</code> para criar rapidamente botões com cores de fundo suaves.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-soft-primary">Primário</button>
        <button type="button" className="btn btn-soft-secondary">Secundário</button>
        <button type="button" className="btn btn-soft-success">Sucesso</button>
        <button type="button" className="btn btn-soft-danger">Perigo</button>
        <button type="button" className="btn btn-soft-warning">Alerta</button>
        <button type="button" className="btn btn-soft-info">informação</button>
        <button type="button" className="btn btn-soft-dark">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const SoftRoundedButtons = () => {
  return <ComponentContainerCard title="Botões Arredondados Suaves" description={<>Use uma classe <code>.btn-soft-**</code> <code>.rounded-pill</code> para criar rapidamente botões com cores de fundo suaves e arredondados.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-soft-primary rounded-pill">Primário</button>
        <button type="button" className="btn btn-soft-secondary rounded-pill">Secundário</button>
        <button type="button" className="btn btn-soft-success rounded-pill">Sucesso</button>
        <button type="button" className="btn btn-soft-danger rounded-pill">Perigo</button>
        <button type="button" className="btn btn-soft-warning rounded-pill">Alerta</button>
        <button type="button" className="btn btn-soft-info rounded-pill">informação</button>
        <button type="button" className="btn btn-soft-dark rounded-pill">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const GradientButtons = () => {
  return <ComponentContainerCard title="Botões Gradientes" description={<>Use as classes de botão em um elemento <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code> ou <code>&lt;input&gt;</code>.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-primary bg-gradient">Primário</button>
        <button type="button" className="btn btn-secondary bg-gradient">Secundário</button>
        <button type="button" className="btn btn-success bg-gradient">Sucesso</button>
        <button type="button" className="btn btn-danger bg-gradient">Perigo</button>
        <button type="button" className="btn btn-soft-warning bg-gradient">Alerta</button>
        <button type="button" className="btn btn-soft-info bg-gradient">informação</button>
        <button type="button" className="btn btn-soft-dark bg-gradient">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const GradientRoundedButtons = () => {
  return <ComponentContainerCard title="Botões Arredondados Gradientes" description={<>Use uma classe <code>.btn-outline-**</code> para criar rapidamente botões com bordas.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-primary bg-gradient rounded-pill">Primário</button>
        <button type="button" className="btn btn-secondary bg-gradient rounded-pill">Secundário</button>
        <button type="button" className="btn btn-soft-success bg-gradient rounded-pill">Sucesso</button>
        <button type="button" className="btn btn-soft-danger bg-gradient rounded-pill">Perigo</button>
        <button type="button" className="btn btn-soft-warning bg-gradient rounded-pill">Alerta</button>
        <button type="button" className="btn btn-info bg-gradient rounded-pill">informação</button>
        <button type="button" className="btn btn-dark bg-gradient rounded-pill">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const GhostButtons = () => {
  return <ComponentContainerCard title="Botões Fantasma" description={<>Use uma classe <code>.btn-ghost-**</code> para criar rapidamente botões de cor de fundo fantasma.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-ghost-primary">Primário</button>
        <button type="button" className="btn btn-ghost-secondary">Secundário</button>
        <button type="button" className="btn btn-ghost-success">Sucesso</button>
        <button type="button" className="btn btn-ghost-danger">Perigo</button>
        <button type="button" className="btn btn-ghost-warning">Alerta</button>
        <button type="button" className="btn btn-ghost-info">informação</button>
        <button type="button" className="btn btn-ghost-dark">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const GhostRoundedButtons = () => {
  return <ComponentContainerCard title="Botões Arredondados Fantasma" description={<>Use uma classe <code>.btn-ghost-**</code> <code>.rounded-pill</code> para criar rapidamente botões de cor de fundo fantasma com arredondamento.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-ghost-primary rounded-pill">Primário</button>
        <button type="button" className="btn btn-ghost-secondary rounded-pill">Secundário</button>
        <button type="button" className="btn btn-ghost-success rounded-pill">Sucesso</button>
        <button type="button" className="btn btn-ghost-danger rounded-pill">Perigo</button>
        <button type="button" className="btn btn-ghost-warning rounded-pill">Alerta</button>
        <button type="button" className="btn btn-ghost-info rounded-pill">informação</button>
        <button type="button" className="btn btn-ghost-dark rounded-pill">Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const ButtonSizes = () => {
  return <ComponentContainerCard title="Tamanhos de botão" description={<>Adicione <code>.btn-lg</code>, <code>.btn-sm</code> para tamanhos adicionais.</>}>
      <div className="d-flex flex-wrap align-items-center gap-2">
        <button type="button" className="btn btn-primary btn-lg">Largo</button>
        <button type="button" className="btn btn-info">Normal</button>
        <button type="button" className="btn btn-success btn-sm">Pequeno</button>
      </div>
    </ComponentContainerCard>;
};
const ButtonDisabled = () => {
  return <ComponentContainerCard title="Botão desativado" description={<> Adicione o atributo <code>disabled</code> aos botões <code>&lt;button&gt;</code>.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-info" disabled>informação</button>
        <button type="button" className="btn btn-success" disabled>Sucesso</button>
        <button type="button" className="btn btn-danger" disabled>Perigo</button>
        <button type="button" className="btn btn-dark" disabled>Escuro</button>
      </div>
    </ComponentContainerCard>;
};
const IconButtons = () => {
  return <ComponentContainerCard title="Botões de ícone" description={<>Botão somente ícone.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-light btn-icon"><IconifyIcon icon='tabler:heart' className="fs-16" /> </button>
        <button type="button" className="btn btn-danger btn-icon"><IconifyIcon icon='lucide:apple' className="avatar-xxs" /> </button>
        <button type="button" className="btn btn-dark btn-icon"><IconifyIcon icon='tabler:adjustments-alt' className="fs-18" /> </button>
        <button type="button" className="btn btn-soft-primary btn-icon"><IconifyIcon icon="solar:add-circle-bold-duotone" className="fs-20" /> </button>
        <button type="button" className="btn btn-soft-success btn-icon"><IconifyIcon icon='tabler:alert-hexagon' className="fs-20" /> </button>
        <button type="button" className="btn btn-info btn-icon"><IconifyIcon icon='tabler:ambulance' className="fs-18" /> </button>
        <button type="button" className="btn btn-soft-warning btn-icon"><IconifyIcon icon='tabler:music' className="fs-18" /> </button>
        <button type="button" className="btn btn-light"><IconifyIcon icon='tabler:thumb-up' className="align-middle me-1 fs-18" /> Curtir </button>
        <button type="button" className="btn btn-warning"><IconifyIcon icon='lucide:activity' className="avatar-xxs me-1" /> Lançar </button>
        <button type="button" className="btn btn-outline-success"><IconifyIcon icon='tabler:pig-money' className="align-middle me-1 fs-18" /> Dinheiro</button>
        <button type="button" className="btn btn-outline-primary"><IconifyIcon icon='tabler:brand-paypal' className="align-middle me-1 fs-18" /> PayPal</button>
        <button type="button" className="btn btn-soft-danger"><IconifyIcon icon="solar:settings-bold-duotone" className="fs-18 align-middle me-1" /> <span>Configuração</span></button>
      </div>
    </ComponentContainerCard>;
};
const BlockButton = () => {
  return <ComponentContainerCard title="Botão Bloquear" description={<>Crie botões de nível de bloco adicionando a classe <code>.d-grid</code> à div pai.</>}>
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-sm btn-primary">Botão Bloqueado</button>
        <button type="button" className="btn btn-lg btn-success">Botão Bloqueado</button>
      </div>
    </ComponentContainerCard>;
};
const ButtonGroup = () => {
  return <ComponentContainerCard title="Grupo de Botões" description={<>Envolva uma série de botões com <code>.btn</code> em <code>.btn-group</code>.</>}>
      <div className="btn-group mb-2">
        <button type="button" className="btn btn-light">Esquerda</button>
        <button type="button" className="btn btn-light">Meio</button>
        <button type="button" className="btn btn-light">Direita</button>
      </div>
      <br />
      <div className="btn-group mb-2">
        <button type="button" className="btn btn-light">1</button>
        <button type="button" className="btn btn-light">2</button>
        <button type="button" className="btn btn-light">3</button>
        <button type="button" className="btn btn-light">4</button>
      </div> &nbsp;
      <div className="btn-group mb-2">
        <button type="button" className="btn btn-light">5</button>
        <button type="button" className="btn btn-light">6</button>
        <button type="button" className="btn btn-light">7</button>
      </div> &nbsp;
      <div className="btn-group mb-2">
        <button type="button" className="btn btn-light">8</button>
      </div>
      <br />
      <div className="btn-group mb-2">
        <button type="button" className="btn btn-light">1</button>
        <button type="button" className="btn btn-primary">2</button>
        <button type="button" className="btn btn-light">3</button>
        <DropdownButton as={BSButtonGroup} title="Dropdown" variant="light">
          <DropdownItem className="dropdown-item" href="#">Dropdown</DropdownItem>
          <DropdownItem className="dropdown-item" href="#">Dropdown</DropdownItem>
        </DropdownButton>
      </div>
      <Row>
        <Col md={3}>
          <div className="btn-group-vertical mb-2">
            <button type="button" className="btn btn-light">Topo</button>
            <button type="button" className="btn btn-light">Meio</button>
            <button type="button" className="btn btn-light">Em baixo</button>
          </div>
        </Col>
        <Col md={3}>
          <div className="btn-group-vertical mb-2">
            <button type="button" className="btn btn-light">Botão 1</button>
            <button type="button" className="btn btn-light">Botão 2</button>
            <DropdownButton as={BSButtonGroup} title='Button 3' variant="light">
              <DropdownItem>Dropdown</DropdownItem>
              <DropdownItem>Dropdown</DropdownItem>
            </DropdownButton>
          </div>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const ToggleButton = () => {
  return <ComponentContainerCard title="Botão de Alternância" description={<>Adicione <code>data-bs-toggle=&quot;button&quot;</code> para alternar o estado <code>ativo</code> de um botão. Se você estiver alternando previamente um botão, deverá adicionar manualmente a classe <code>.active</code> <strong>e</strong> <code>aria-pressed=&quot;true&quot;</code> para garantir que ela seja transmitida adequadamente às tecnologias assistivas.</>}>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-primary" data-bs-toggle="button">Alternar</button>
        <button type="button" className="btn btn-primary active" data-bs-toggle="button" aria-pressed="true">Ativar Alternancia</button>
        <button type="button" className="btn btn-primary" disabled data-bs-toggle="button">Desabilitar Alternancia</button>
      </div>
    </ComponentContainerCard>;
};
const ButtonTags = () => {
  return <ComponentContainerCard title="Tags de Botão" description={<>As classes <code>.btn</code> são projetadas para serem usadas com o elemento <code>&lt;button&gt;</code>. No entanto, você também pode usar essas classes em elementos <code>&lt;a&gt;</code> ou <code>&lt;input&gt;</code> (embora alguns navegadores possam aplicar uma renderização ligeiramente diferente).</>}>
      <div className="d-flex flex-wrap gap-2">
        <Button variant="primary" role="button">Link</Button>
        <button className="btn btn-primary" type="submit">Botão</button>
        <input className="btn btn-primary" type="button" defaultValue="Input" />
        <input className="btn btn-primary" type="submit" defaultValue="Submit" />
        <input className="btn btn-primary" type="reset" defaultValue="Resetar" />
      </div>
    </ComponentContainerCard>;
};
const BasicButton = () => {
  return <Card>
      <CardHeader className="border-bottom border-dashed d-flex align-items-center">
        <h4 className="header-title">Basico</h4>
      </CardHeader>
      <CardBody>
        <p className="text-muted">Bootstrap tem uma classe base <code>.btn</code> que configura estilos básicos como preenchimento e alinhamento de conteúdo. Por padrão, os controles <code>.btn</code> têm uma borda transparente e uma cor de fundo, e não possuem nenhum foco explícito e estilos de foco.</p>
        <button type="button" className="btn">Base</button>
      </CardBody>
    </Card>;
};
const ButtonsPage = () => {
  return <>
      <PageBreadcrumb title='Botões' />
      <Row>
        <Col xl={6}>
          <DefaultButtons />
        </Col>
        <Col xl={6}>
          <ButtonOutline />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ButtonRounded />
        </Col>
        <Col xl={6}>
          <ButtonOutlineRounded />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <SoftButtons />
        </Col>
        <Col xl={6}>
          <SoftRoundedButtons />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <GradientButtons />
        </Col>
        <Col xl={6}>
          <GradientRoundedButtons />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <GhostButtons />
        </Col>
        <Col xl={6}>
          <GhostRoundedButtons />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ButtonSizes />
        </Col>
        <Col xl={6}>
          <ButtonDisabled />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <IconButtons />
        </Col>
        <Col xl={6}>
          <BlockButton />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ButtonGroup />
        </Col>
        <Col xl={6}>
          <Row>
            <Col xl={12}>
              <ToggleButton />
            </Col>
            <Col xl={12}>
              <ButtonTags />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <BasicButton />
        </Col>
      </Row>

    </>;
};
export default ButtonsPage;