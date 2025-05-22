import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { ListGroup as BSListGroup, Col, ListGroupItem, Row } from 'react-bootstrap';

// 

const BasicExample = () => {
  return <ComponentContainerCard title='Basic example' description={<>O grupo de listas mais básico é uma lista não ordenada com
    listar itens e as classes apropriadas.
    Desenvolva-o com as opções a seguir ou com seu próprio CSS, conforme necessário.</>}>
      <BSListGroup>
        <ListGroupItem><IconifyIcon icon='tabler:brand-google-drive' className="me-1 align-middle fs-18" /> Google Drive</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-messenger' className="me-1 align-middle fs-18" /> Facebook Messenger</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-apple' className="me-1 align-middle fs-18" /> Apple
        Empresa de tecnologia</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-intercom' className="me-1 align-middle fs-18" /> Intercom
        Sistema de Suporte</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-paypal' className="me-1 align-middle fs-18" /> Paypal
        Gateway de pagamento</ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const ActiveItems = () => {
  return <ComponentContainerCard title='Active items' description={<>Adicione <code>.active</code> a um&nbsp;
      <code>.list-group-item</code> para indicar a seleção ativa atual.</>}>
      <BSListGroup>
        <ListGroupItem className=" active"><IconifyIcon icon='tabler:brand-google-drive' className="me-1 align-middle fs-18" /> Google Drive</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-messenger' className="me-1 align-middle fs-18" /> Facebook Messenger</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-apple' className="me-1 align-middle fs-18" /> Apple
          Empresa de Tecnologia</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-intercom' className="me-1 align-middle fs-18" /> Intercom
          Sistema de Suporte</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-paypal' className="me-1 align-middle fs-18" /> Paypal
          Gateway de Pagamento</ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const DisabledItems = () => {
  return <ComponentContainerCard title='Disabled items' description={<>Add <code>.disabled</code> to a <code>.list-group-item</code> to make it
      <em>appear</em> disabled.</>}>
      <BSListGroup>
        <ListGroupItem className=" disabled" aria-disabled="true"><IconifyIcon icon='tabler:brand-google-drive' className="me-1 align-middle fs-18" /> Google Drive</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-messenger' className="me-1 align-middle fs-18" /> Facebook Messenger</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-apple' className="me-1 align-middle fs-18" /> Apple
          Empresa de Tecnologia</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-intercom' className="me-1 align-middle fs-18" /> Intercom
          Sistema de Suporte</ListGroupItem>
        <ListGroupItem><IconifyIcon icon='tabler:brand-paypal' className="me-1 align-middle fs-18" /> Paypal
          Gateway de Pagamento</ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const LinksAndButtons = () => {
  return <ComponentContainerCard title='Links and Buttons' description={<>Use <code>&lt;a&gt;</code>s ou&nbsp;
    <code>&lt;button&gt;</code>s para criar itens de grupo de lista <em>acionáveis</em> com
    pairar, desabilitado e estados ativos adicionando&nbsp;
    <code>.list-group-item-action</code>.</>}>
      <BSListGroup>
        <ListGroupItem className="list-group-item list-group-item-action active">
          Paypal Gateway de Pagamento
        </ListGroupItem>
        <ListGroupItem className="list-group-item list-group-item-action">Google
          Drive</ListGroupItem>
        <button type="button" className="list-group-item list-group-item-action">Facebook
          Messenger</button>
        <button type="button" className="list-group-item list-group-item-action">Apple</button>
        <ListGroupItem className="list-group-item list-group-item-action disabled" tabIndex={-1} aria-disabled="true">Intercom Sistema de Suporte</ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const Flush = () => {
  return <ComponentContainerCard title='Flush' description={<>Adicione <code>.list-group-flush</code> para remover alguns
    bordas e cantos arredondados para renderizar itens de grupo de lista de ponta a ponta em um pai
    recipiente (por exemplo, cartões).</>}>
      <BSListGroup className=" list-group-flush">
        <ListGroupItem>Google Drive</ListGroupItem>
        <ListGroupItem>Facebook Messenger</ListGroupItem>
        <ListGroupItem>Apple Empresa de Tecnologia</ListGroupItem>
        <ListGroupItem>Intercom Sistema de Suporte</ListGroupItem>
        <ListGroupItem>Paypal Gateway de Pagamento</ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const Horizontal = () => {
  return <ComponentContainerCard title='Horizontal' description={<>Adicione <code>.list-group-horizontal</code> para alterar o
    layout dos itens do grupo de listas de vertical para horizontal em todos os pontos de interrupção.
    Como alternativa, escolha uma variante responsiva&nbsp;
    <code>.list-group-horizontal-{'{'}sm|md|lg|xl{'}'}</code> para criar um grupo de listas
    horizontal começando na <code>min-width</code> desse ponto de interrupção.</>}>
      <BSListGroup className="list-group-horizontal mb-3">
        <ListGroupItem>Google</ListGroupItem>
        <ListGroupItem>Whatsapp</ListGroupItem>
        <ListGroupItem>Facebook</ListGroupItem>
      </BSListGroup>
      <BSListGroup className="list-group-horizontal-sm mb-3">
        <ListGroupItem>Apple</ListGroupItem>
        <ListGroupItem>PayPal</ListGroupItem>
        <ListGroupItem>Intercom</ListGroupItem>
      </BSListGroup>
      <BSListGroup className="list-group-horizontal-md">
        <ListGroupItem>Google</ListGroupItem>
        <ListGroupItem>Whatsapp</ListGroupItem>
        <ListGroupItem>Facebook</ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const ContextualClasses = () => {
  return <ComponentContainerCard title='Contextual classes' description={<>Use classes contextuais para estilizar itens de lista com um
      fundo e cor imponentes.</>}>
      <BSListGroup className="list-group">
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem className="list-group-item-primary">Um primário simples
        listar item do grupo</ListGroupItem>
        <ListGroupItem className="list-group-item-secondary">Um secundário simples
        listar item do grupo</ListGroupItem>
        <ListGroupItem className="list-group-item-success">Um simples sucesso
        listar item do grupo</ListGroupItem>
        <ListGroupItem className="list-group-item-danger">Uma lista simples de perigos
        item de grupo</ListGroupItem>
        <ListGroupItem className="list-group-item-warning">Um simples aviso
        listar item do grupo</ListGroupItem>
        <ListGroupItem className="list-group-item-info">Uma lista de informações simples
        item de grupo</ListGroupItem>
        <ListGroupItem className="list-group-item-light">Uma lista simples e leve
        item de grupo</ListGroupItem>
        <ListGroupItem className="list-group-item-dark">Uma lista escura simples
        item de grupo</ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const ContextualClassesWithLink = () => {
  return <ComponentContainerCard title='Contextual classes with Link' description={<>Usar classes contextuais para estilizar itens da lista com um
      fundo e cor imponentes.</>}>
      <BSListGroup>
        <ListGroupItem className="list-group-item-action">Darius ac facilities in</ListGroupItem>
        <ListGroupItem className="list-group-item-action list-group-item-primary">Um simples item de grupo de lista primária</ListGroupItem>
        <ListGroupItem className="list-group-item-action list-group-item-secondary">Um simples item de grupo de lista secundária</ListGroupItem>
        <ListGroupItem className="list-group-item-action list-group-item-success">Um item de grupo de lista de sucesso simples</ListGroupItem>
        <ListGroupItem className="list-group-item-action list-group-item-danger">Um simples item de grupo da lista de perigos</ListGroupItem>
        <ListGroupItem className="list-group-item-action list-group-item-warning">Um simples item de grupo da lista de avisos</ListGroupItem>
        <ListGroupItem className="list-group-item-action list-group-item-info">Um item de grupo de lista de informações simples</ListGroupItem>
        <ListGroupItem className="list-group-item-action list-group-item-light">Um item de grupo de lista simples de luz</ListGroupItem>
        <ListGroupItem className="list-group-item-action list-group-item-dark">Um simples item de grupo da lista escura</ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const CustomContent = () => {
  return <ComponentContainerCard title='Custom content' description={<>Adicione praticamente qualquer HTML, mesmo para listas vinculadas
      grupos como o abaixo, com a ajuda de utilitários flexbox.</>}>
      <BSListGroup>
        <ListGroupItem className="list-group-item-action active">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Cabeçalho do item do grupo de lista</h5>
            <small>3 dias atrás</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus.
            Maecenas sed diam eget risus varius blandit.</p>
          <small>Donec id elit non mi porta.</small>
        </ListGroupItem>
        <ListGroupItem className="list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Cabeçalho do item do grupo de lista</h5>
            <small className="text-muted">3 dias atrás</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus.
            Maecenas sed diam eget risus varius blandit.</p>
          <small className="text-muted">Donec id elit non mi porta.</small>
        </ListGroupItem>
        <ListGroupItem className="list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Cabeçalho do item do grupo de lista</h5>
            <small className="text-muted">3 dias atrás</small>
          </div>
          <p className="mb-1">Donec id elit non mi porta gravida at eget metus.
            Maecenas sed diam eget risus varius blandit.</p>
          <small className="text-muted">Donec id elit non mi porta.</small>
        </ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const WithBadges = () => {
  return <ComponentContainerCard title='With badges' description={<>Adicione emblemas a qualquer item do grupo de lista para mostrar os não lidos
      contagens, atividades e muito mais com a ajuda de alguns utilitários.</>}>
      <BSListGroup>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Gmail Emails
          <span className="badge bg-primary rounded-pill">14</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Pagamentos pendentes
          <span className="badge bg-success rounded-pill">2</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Ação necessária
          <span className="badge bg-danger rounded-pill">99+</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Pagamentos Realizados
          <span className="badge bg-success rounded-pill">20+</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-center">
          Pagamentos Pendentes
          <span className="badge bg-warning rounded-pill">12</span>
        </ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const CheckboxesAndRadios = () => {
  return <ComponentContainerCard title='Checkboxes and radios' description={<>Coloque as caixas de seleção e rádios do Bootstrap na lista
    agrupe itens e personalize conforme necessário. Você pode usá-los sem.
    <code>&lt;label&gt;</code>s, mas lembre-se de incluir um&nbsp;
    Atributo e valor <code>aria-label</code> para acessibilidade.</>}>
      <BSListGroup>
        <ListGroupItem>
          <input className="form-check-input me-1" type="checkbox" id="firstCheckbox" />&nbsp;
          <label className="form-check-label" htmlFor="firstCheckbox">Primeiro
            checkbox</label>
        </ListGroupItem>
        <ListGroupItem>
          <input className="form-check-input me-1" type="checkbox" id="secondCheckbox" />&nbsp;
          <label className="form-check-label" htmlFor="secondCheckbox">Segundo
            checkbox</label>
        </ListGroupItem>
      </BSListGroup>
      <ul className="list-group mt-2">
        <ListGroupItem>
          <input className="form-check-input me-1" type="radio" name="listGroupRadio" id="firstRadio" defaultChecked />&nbsp;
          <label className="form-check-label" htmlFor="firstRadio">Primeiro radio</label>
        </ListGroupItem>
        <ListGroupItem>
          <input className="form-check-input me-1" type="radio" name="listGroupRadio" id="secondRadio" />&nbsp;
          <label className="form-check-label" htmlFor="secondRadio">Segundo
            radio</label>
        </ListGroupItem>
      </ul>
    </ComponentContainerCard>;
};
const Numbered = () => {
  return <ComponentContainerCard title='Numbered' description={<>Os números são gerados por <code>counter-reset</code> em
    o <code>&lt;ol&gt;</code> e, em seguida, estilizado e colocado com um&nbsp;
    <code>::before</code> elemento psuedo no <code>&lt;li&gt;</code> com&nbsp;
    <code>contra-incremento</code> e <code>conteúdo</code>.</>}>
      <BSListGroup as={'ol'} className="list-group-numbered">
        <ListGroupItem className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Administrador Osen</div>
            Administrador Osen
          </div>
          <span className="badge bg-primary rounded-pill">865</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Administrador do Osen React</div>
            Administrador do Osen React
          </div>
          <span className="badge bg-primary rounded-pill">140</span>
        </ListGroupItem>
        <ListGroupItem className="d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Versão Angular</div>
            Versão Angular
          </div>
          <span className="badge bg-primary rounded-pill">85</span>
        </ListGroupItem>
      </BSListGroup>
    </ComponentContainerCard>;
};
const ListGroup = () => {
  return <>
      <PageBreadcrumb title='List Group' />
      <Row>
        <Col xl={4}>
          <BasicExample />
        </Col>
        <Col xl={4}>
          <ActiveItems />
        </Col>
        <Col xl={4}>
          <DisabledItems />
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <LinksAndButtons />
        </Col>
        <Col xl={4}>
          <Flush />
        </Col>
        <Col xl={4}>
          <Horizontal />
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <ContextualClasses />
        </Col>
        <Col xl={4}>
          <ContextualClassesWithLink />
        </Col>
        <Col xl={4}>
          <CustomContent />
        </Col>
      </Row>
      <Row>
        <Col xl={4}>
          <WithBadges />
        </Col>
        <Col xl={4}>
          <CheckboxesAndRadios />
        </Col>
        <Col xl={4}>
          <Numbered />
        </Col>
      </Row>
    </>;
};
export default ListGroup;