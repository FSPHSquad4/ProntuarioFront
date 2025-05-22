import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from 'react-bootstrap';
const text1 = "Bem-vindo ao nosso site! Dedicamo-nos a fornecer-lhe os melhores produtos e serviços para melhorar a sua casa. Quer pretenda embelezar a sua sala com mobiliário elegante, criar um ambiente acolhedor com a nossa seleção de decoração para a casa ou realizar projetos DIY com a nossa gama de ferramentas e materiais.";
const text2 = "Olá! Sou uma pessoa apaixonada que adora explorar novas ideias e se conectar com pessoas que pensam como você. Meus interesses abrangem uma ampla gama de tópicos, incluindo tecnologia, literatura, viagens e fitness. Acredito no poder do aprendizado contínuo e gosto de me desafiar para crescer tanto pessoal quanto profissionalmente.";
const text3 = "No coração de uma cidade movimentada encontra-se um pequeno café pitoresco, situado entre imponentes arranha-céus e edifícios históricos. Seu interior aconchegante apresenta tons quentes e terrosos acentuados com toques de cores vibrantes, criando uma atmosfera acolhedora que convida os transeuntes a entrar.";
const tabContents = [{
  id: '1',
  title: 'Inicio',
  text: text1,
  variant: 'info',
  subTitle: 'H',
  icon: 'tabler:home'
}, {
  id: '2',
  title: 'Perfil',
  text: text2,
  variant: 'danger',
  subTitle: 'P',
  icon: 'tabler:user-circle'
}, {
  id: '3',
  title: 'Configuração',
  text: text3,
  variant: 'secondary',
  subTitle: 'S',
  icon: 'tabler:settings'
}];
const DefaultTabs = () => {
  return <ComponentContainerCard title="Default Tabs" description={<>Widget simples de painéis tabuláveis ​​de conteúdo local.</>}>
      <TabContainer defaultActiveKey="Profile">
        <Nav variant="tabs" role="tablist" className="mb-3">
          {(tabContents || []).map((tab, idx) => {
          return <NavItem as="li" role="presentation" key={idx}>
                <NavLink eventKey={tab.title}>
                  <span className="d-none d-md-block">{tab.title}</span>
                </NavLink>
              </NavItem>;
        })}
        </Nav>
        <TabContent>
          {(tabContents || []).map((tab, idx) => {
          return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <Col sm="12">
                    <span className={`px-1 rounded me-1 fw-semibold d-inline-block bg-${tab.variant}-subtle text-${tab.variant} float-start`}>{tab.subTitle}</span>{tab.text}
                  </Col>
                </Row>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const TabsJustified = () => {
  return <ComponentContainerCard title='Tabs Justified' description={<>Usando a classe <code>.nav-justified</code>, você pode forçar os <code>itens do menu da guia</code> a usarem toda a largura disponível.</>}>
      <TabContainer defaultActiveKey="Profile">
        <Nav as={'ul'} variant='pills' role="tablist" className="bg-nav-pills nav-justified mb-3">
          {(tabContents || []).map((tab, idx) => {
          return <NavItem as="li" key={idx}>
                <NavLink eventKey={tab.title}>
                  <span className="d-none d-md-block">{tab.title}</span>
                </NavLink>
              </NavItem>;
        })}
        </Nav>
        <TabContent>
          {(tabContents || []).map((tab, idx) => {
          return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <Col sm="12">
                   <span className={`px-1 rounded me-1 fw-semibold d-inline-block bg-${tab.variant}-subtle text-${tab.variant} float-start`}>{tab.subTitle}</span>{tab.text}
                  </Col>
                </Row>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>

    </ComponentContainerCard>;
};
const TabsVerticalLeft = () => {
  return <ComponentContainerCard title='Tabs Vertical Left' description={<>Você pode empilhar sua navegação alterando a direção do item flexível com o utilitário <code>.flex-column</code>.</>}>
      <Row>
        <TabContainer defaultActiveKey="Profile">
          <Col sm={3} className="mb-2 mb-sm-0">
            <Nav role="tablist" className="flex-column nav-pills">
              {(tabContents || []).map((tab, idx) => {
              return <NavItem as="li" role="presentation" key={idx}>
                    <NavLink eventKey={tab.title}>
                      <IconifyIcon icon={tab.icon} className="fs-18 me-1" />
                      {tab.title}
                    </NavLink>
                  </NavItem>;
            })}
            </Nav>
          </Col>
          <Col sm={9}>
            <TabContent>
              {(tabContents || []).map((tab, idx) => {
              return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                    <Row>
                      <Col sm="12">
                        <span className={`px-1 rounded me-1 fw-semibold d-inline-block bg-${tab.variant}-subtle text-${tab.variant} float-start`}>{tab.subTitle}</span>{tab.text}
                      </Col>
                    </Row>
                  </TabPane>;
            })}
            </TabContent>
          </Col>
        </TabContainer>
      </Row>
    </ComponentContainerCard>;
};
const TabsVerticalRight = () => {
  return <ComponentContainerCard title='Tabs Vertical Right' description={<>Você pode empilhar sua navegação alterando a direção do item flexível com o utilitário <code>.flex-column</code>.</>}>
      <Row>
        <TabContainer defaultActiveKey="Profile">
          <Col sm={9}>
            <TabContent>
              {(tabContents || []).map((tab, idx) => {
              return <TabPane className='fade' eventKey={tab.title} id={tab.id} key={idx}>
                    <Row>
                      <Col sm="12">
                        <span className={`px-1 rounded me-1 fw-semibold d-inline-block bg-${tab.variant}-subtle text-${tab.variant} float-start`}>{tab.subTitle}</span>{tab.text}
                      </Col>
                    </Row>
                  </TabPane>;
            })}
            </TabContent>
          </Col>
          <Col sm={3} className="mt-2 mt-sm-0">
            <Nav role="tablist" className="flex-column nav-pills nav-pills-secondary">
              {(tabContents || []).map((tab, idx) => {
              return <NavItem as="li" role="presentation" key={idx}>
                    <NavLink eventKey={tab.title}>
                      <IconifyIcon icon={tab.icon} className="fs-18 me-1" />
                      {tab.title}
                    </NavLink>
                  </NavItem>;
            })}
            </Nav>
          </Col>
        </TabContainer>
      </Row>
    </ComponentContainerCard>;
};
const TabsBordered = () => {
  return <ComponentContainerCard title='Tabs Bordered' description={<>O item de navegação também pode ter uma borda inferior simples. Basta especificar a classe <code>.nav-bordered</code>.</>}>
      <TabContainer defaultActiveKey="Profile">
        <Nav role="tablist" className="nav-tabs nav-bordered mb-3">
          {(tabContents || []).map((tab, idx) => {
          return <NavItem as="li" role="presentation" key={idx}>
                <NavLink eventKey={tab.title}>
                  <IconifyIcon icon={tab.icon} className="fs-18 me-1" />
                  {tab.title}
                </NavLink>
              </NavItem>;
        })}
        </Nav>
        <TabContent>
          {(tabContents || []).map((tab, idx) => {
          return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <Col sm="12">
                    <span className={`px-1 rounded me-1 fw-semibold d-inline-block bg-${tab.variant}-subtle text-${tab.variant} float-start`}>{tab.subTitle}</span>{tab.text}
                  </Col>
                </Row>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const TabsBorderedJustified = () => {
  return <ComponentContainerCard title='Tabs Bordered Justified' description={<>O item de navegação com borda inferior simples e justificada</>}>
      <TabContainer defaultActiveKey="Profile">
        <Nav role="tablist" className="nav-tabs nav-justified nav-bordered nav-bordered-danger mb-3">
          {(tabContents || []).map((tab, idx) => {
          return <NavItem as="li" role="presentation" key={idx}>
                <NavLink eventKey={tab.title}>
                  <IconifyIcon icon={tab.icon} className="fs-18 me-1" />
                  {tab.title}
                </NavLink>
              </NavItem>;
        })}
        </Nav>
        <TabContent>
          {(tabContents || []).map((tab, idx) => {
          return <TabPane eventKey={tab.title} id={tab.id} key={idx}>
                <Row>
                  <Col sm="12">
                    <span className={`px-1 rounded me-1 fw-semibold d-inline-block bg-${tab.variant}-subtle text-${tab.variant} float-start`}>{tab.subTitle}</span>{tab.text}
                  </Col>
                </Row>
              </TabPane>;
        })}
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const IconsTabs = () => {
  return <ComponentContainerCard title='Icons Tabs' description={<>O item de navegação também pode ter uma borda inferior simples. Basta especificar a classe <code>.nav-bordered</code>.</>}>
      <TabContainer defaultActiveKey={'2'}>
        <Nav role="tablist" className="nav-tabs nav-bordered nav-bordered-success mb-3">
          <NavItem>
            <NavLink eventKey={'1'} data-bs-toggle="tab" aria-expanded="false">
              <IconifyIcon icon="solar:home-2-bold-duotone" className="fs-24 align-middle" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'2'} data-bs-toggle="tab" aria-expanded="true">
              <IconifyIcon icon="solar:user-id-bold-duotone" className="fs-24 align-middle" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey={'3'} data-bs-toggle="tab" aria-expanded="false">
              <IconifyIcon icon="solar:settings-bold-duotone" className="fs-24 align-middle" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent>
          <TabPane eventKey={'1'}>
            <p className="mb-0"><span className="px-1 rounded me-1 fw-semibold d-inline-block bg-info-subtle text-info float-start">H</span>Bem-vindo ao nosso site! Dedicamo-nos a fornecer-lhe os melhores produtos e serviços para melhorar a sua casa. Se você deseja embelezar sua sala com móveis elegantes, criar um ambiente aconchegante com nossa seleção de decoração para casa ou realizar projetos DIY com nossa linha de ferramentas e suprimentos.</p>
          </TabPane>
          <TabPane eventKey={'2'}>
            <p className="mb-0"><span className="px-1 rounded me-1 fw-semibold d-inline-block bg-danger-subtle text-danger float-start">P</span> &quot;Olá! Sou uma pessoa apaixonada que adora explorar novas ideias e me conectar com pessoas que pensam como eu. Meus interesses abrangem uma ampla gama de tópicos, incluindo tecnologia, literatura, viagens e fitness. Acredito no poder do aprendizado contínuo e gosto de me desafiar para crescer tanto pessoal quanto profissionalmente.</p>
          </TabPane>
          <TabPane eventKey={'3'}>
            <p className="mb-0"><span className="px-1 rounded me-1 fw-semibold d-inline-block bg-secondary-subtle text-secondary float-start">S</span>No coração de uma cidade movimentada encontra-se um pequeno café pitoresco, situado entre imponentes arranha-céus e edifícios históricos. Seu interior aconchegante apresenta tons quentes e terrosos acentuados com toques de cores vibrantes, criando uma atmosfera acolhedora que convida os transeuntes a entrar.</p>
          </TabPane>
        </TabContent>
      </TabContainer>
    </ComponentContainerCard>;
};
const CardWithTabs = () => {
  return <Card>
      <TabContainer defaultActiveKey={'2'}>
        <CardHeader className="card-tabs d-flex align-items-center">
          <div className="flex-grow-1">
            <h4 className="header-title">Card com abas</h4>
          </div>
          <Nav role="tablist" className="nav-tabs nav-justified card-header-tabs nav-bordered">
            <NavItem>
              <NavLink eventKey={'1'} href="#home-ct" data-bs-toggle="tab" aria-expanded="false">
                <IconifyIcon icon='ti-home' className="ti  d-md-none d-block" />
                <span className="d-none d-md-block">Inicio</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'2'} href="#profile-ct" data-bs-toggle="tab" aria-expanded="true">
                <IconifyIcon icon='ti-user-circle' className="ti  d-md-none d-block" />
                <span className="d-none d-md-block">Perfil</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey={'3'} href="#settings-ct" data-bs-toggle="tab" aria-expanded="false">
                <IconifyIcon icon='ti-settings' className="ti  d-md-none d-block" />
                <span className="d-none d-md-block">Configurações</span>
              </NavLink>
            </NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent>
            <TabPane eventKey={'1'} id="home-ct">
              <p className="mb-0"><span className="px-1 rounded me-1 fw-semibold d-inline-block bg-info-subtle text-info float-start">H</span>Bem-vindo ao nosso site! Dedicamo-nos a fornecer-lhe os melhores produtos e serviços para melhorar a sua casa. Se você deseja embelezar sua sala com móveis elegantes, criar um ambiente aconchegante com nossa seleção de decoração para casa ou realizar projetos DIY com nossa linha de ferramentas e suprimentos.</p>
            </TabPane>
            <TabPane eventKey={'2'} id="profile-ct">
              <p className="mb-0"><span className="px-1 rounded me-1 fw-semibold d-inline-block bg-danger-subtle text-danger float-start">P</span> &quot;Olá! Sou uma pessoa apaixonada que adora explorar novas ideias e me conectar com pessoas que pensam como eu. Meus interesses abrangem uma ampla gama de tópicos, incluindo tecnologia, literatura, viagens e fitness. Acredito no poder do aprendizado contínuo e gosto de me desafiar para crescer tanto pessoal quanto profissionalmente.</p>
            </TabPane>
            <TabPane eventKey={'3'} id="settings-ct">
              <p className="mb-0"><span className="px-1 rounded me-1 fw-semibold d-inline-block bg-secondary-subtle text-secondary float-start">S</span>No coração de uma cidade movimentada encontra-se um pequeno café pitoresco, situado entre imponentes arranha-céus e edifícios históricos. Seu interior aconchegante apresenta tons quentes e terrosos acentuados com toques de cores vibrantes, criando uma atmosfera acolhedora que convida os transeuntes a entrar.</p>
            </TabPane>
          </TabContent>
        </CardBody>
      </TabContainer>
    </Card>;
};
const AllTabs = () => {
  return <>
      <Row>
        <Col xl={6}>
          <DefaultTabs />
        </Col>
        <Col xl={6}>
          <TabsJustified />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <TabsVerticalLeft />
        </Col>
        <Col xl={6}>
          <TabsVerticalRight />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <TabsBordered />
        </Col>
        <Col xl={6}>
          <TabsBorderedJustified />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <IconsTabs />
        </Col>
        <Col xl={6}>
          <CardWithTabs />
        </Col>
      </Row>
    </>;
};
export default AllTabs;