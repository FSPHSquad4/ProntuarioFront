import ComponentContainerCard from '@/components/ComponentContainerCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Alert, Col, Row } from 'react-bootstrap';
import LiveAlert from './components/LiveAlert';
import { Link } from 'react-router-dom';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const DefaultAlert = () => {
  return (
    <ComponentContainerCard
      title="Alerta Padrão"
      description={
        <>
          Para o estilo correto, use uma das oito&nbsp;
          <strong>classes</strong> contextuais obrigatórias (exemplo:&nbsp;
          <code>.alert-success</code>). Para a cor de fundo, use a classe&nbsp;
          <code>.bg-* </code>, <code>.text-white </code>
        </>
      }
    >
      <Alert
        variant="primary"
        className="d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:bell-bing-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Primário - </strong> Um alerta primário simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="secondary"
        className="d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:bicycling-round-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Secundário - </strong> Um alerta secundário simples — veja
          isso!
        </div>
      </Alert>
      <Alert
        variant="success"
        className="d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:check-read-line-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Sucesso - </strong> Um alerta de sucesso simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="danger"
        className="d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:danger-triangle-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Erro - </strong> Um alerta de perigo simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="warning"
        className="d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:shield-warning-line-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Aviso - </strong> Um alerta de aviso simples — veja isso!
        </div>
      </Alert>
      <Alert variant="info" className="d-flex align-items-center" role="alert">
        <IconifyIcon
          icon="solar:info-circle-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Informação - </strong> Um alerta informativo simples — veja
          isso!
        </div>
      </Alert>
      <Alert variant="light" className="d-flex align-items-center" role="alert">
        <IconifyIcon icon="solar:atom-bold-duotone" className="fs-20 me-1" />
        <div className="lh-1">
          <strong>Claro - </strong> Um alerta claro simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="dark"
        className="d-flex align-items-center mb-0"
        role="alert"
      >
        <IconifyIcon icon="solar:balloon-bold-duotone" className="fs-20 me-1" />
        <div className="lh-1">
          <strong>Escuro - </strong> Um alerta escuro simples — veja isso!
        </div>
      </Alert>
    </ComponentContainerCard>
  );
};

const DismissingAlert = () => {
  return (
    <ComponentContainerCard
      title="Alerta Descartável"
      description={
        <>
          {' '}
          Adicione um botão de descartar e a classe{' '}
          <code>.alert-dismissible</code>, que adiciona preenchimento extra à
          direita do alerta e posiciona o botão <code>.btn-close</code>.
        </>
      }
    >
      <Alert
        variant="primary"
        closeVariant="white"
        dismissible
        className="text-bg-primary d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:bell-bing-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Primário - </strong> Um alerta primário simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="secondary"
        closeVariant="white"
        dismissible
        className="text-bg-secondary  d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:bicycling-round-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Secundário - </strong> Um alerta secundário simples — veja
          isso!
        </div>
      </Alert>
      <Alert
        variant="success"
        closeVariant="white"
        dismissible
        className="text-bg-success d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:check-read-line-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Sucesso - </strong> Um alerta de sucesso simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="danger"
        closeVariant="white"
        dismissible
        className="text-bg-danger d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:danger-triangle-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Erro - </strong> Um alerta de perigo simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="warning"
        closeVariant="white"
        dismissible
        className="text-bg-warning d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:shield-warning-line-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Aviso - </strong> Um alerta de aviso simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="info"
        closeVariant="white"
        dismissible
        className="text-bg-info d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon
          icon="solar:info-circle-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Informação - </strong> Um alerta informativo simples — veja
          isso!
        </div>
      </Alert>
      <Alert
        variant="light"
        closeVariant="black"
        dismissible
        className="text-bg-light d-flex align-items-center"
        role="alert"
      >
        <IconifyIcon icon="solar:atom-bold-duotone" className="fs-20 me-1" />
        <div className="lh-1">
          <strong>Claro - </strong> Um alerta claro simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="dark"
        closeVariant="white"
        dismissible
        className="text-bg-dark d-flex align-items-center mb-0"
        role="alert"
      >
        <IconifyIcon icon="solar:balloon-bold-duotone" className="fs-20 me-1" />
        <div className="lh-1">
          <strong>Escuro - </strong> Um alerta escuro simples — veja isso!
        </div>
      </Alert>
    </ComponentContainerCard>
  );
};

const LinkColor = () => {
  return (
    <ComponentContainerCard
      title="Cor do Link"
      description={
        <>
          {' '}
          Use a classe utilitária <code>.alert-link</code> para rapidamente
          fornecer links coloridos que combinem dentro de qualquer alerta.
        </>
      }
    >
      <Alert variant="primary" role="alert">
        Um alerta primário simples com{' '}
        <Link to="" className="alert-link">
          um link de exemplo
        </Link>
        . Dê um clique se quiser.
      </Alert>
      <Alert variant="secondary" role="alert">
        Um alerta secundário simples com{' '}
        <Link to="" className="alert-link">
          um link de exemplo
        </Link>
        . Dê um clique se quiser.
      </Alert>
      <Alert variant="success" role="alert">
        Um alerta de sucesso simples com{' '}
        <Link to="" className="alert-link">
          um link de exemplo
        </Link>
        . Dê um clique se quiser.
      </Alert>
      <Alert variant="danger" role="alert">
        Um alerta de perigo simples com{' '}
        <Link to="" className="alert-link">
          um link de exemplo
        </Link>
        . Dê um clique se quiser.
      </Alert>
      <Alert variant="warning" role="alert">
        Um alerta de aviso simples com{' '}
        <Link to="" className="alert-link">
          um link de exemplo
        </Link>
        . Dê um clique se quiser.
      </Alert>
      <Alert variant="info" role="alert">
        Um alerta informativo simples com{' '}
        <Link to="" className="alert-link">
          um link de exemplo
        </Link>
        . Dê um clique se quiser.
      </Alert>
      <Alert variant="light" role="alert">
        Um alerta claro simples com{' '}
        <Link to="" className="alert-link">
          um link de exemplo
        </Link>
        . Dê um clique se quiser.
      </Alert>
      <Alert variant="dark" role="alert">
        Um alerta escuro simples com{' '}
        <Link to="" className="alert-link">
          um link de exemplo
        </Link>
        . Dê um clique se quiser.
      </Alert>
    </ComponentContainerCard>
  );
};

const CustomAlerts = () => {
  return (
    <ComponentContainerCard
      title="Alertas Personalizados"
      description={
        <>
          Exiba alertas com fundo transparente e com cor de texto contextual.
          Use as classes
          <code>.bg-white</code>, e <code>.text-*</code>. Exemplo:{' '}
          <code>bg-white text-primary</code>.
        </>
      }
    >
      <Alert
        variant="primary"
        dismissible
        className="alert-dismissible d-flex align-items-center border-2 border border-primary"
        role="alert"
      >
        <IconifyIcon
          icon="solar:bell-bing-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Primário - </strong> Um alerta primário simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="secondary"
        dismissible
        className="alert-dismissible d-flex align-items-center border-2 border border-secondary"
        role="alert"
      >
        <IconifyIcon
          icon="solar:bicycling-round-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Secundário - </strong> Um alerta secundário simples — veja
          isso!
        </div>
      </Alert>
      <Alert
        variant="success"
        dismissible
        className="alert-dismissible d-flex align-items-center border-2 border border-success"
        role="alert"
      >
        <IconifyIcon
          icon="solar:check-read-line-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Sucesso - </strong> Um alerta de sucesso simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="danger"
        dismissible
        className="alert-dismissible d-flex align-items-center border-2 border border-danger"
        role="alert"
      >
        <IconifyIcon
          icon="solar:danger-triangle-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Erro - </strong> Um alerta de perigo simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="warning"
        dismissible
        className="alert-dismissible d-flex align-items-center border-2 border border-warning"
        role="alert"
      >
        <IconifyIcon
          icon="solar:shield-warning-line-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Aviso - </strong> Um alerta de aviso simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="info"
        dismissible
        className="alert-dismissible d-flex align-items-center border border-info"
        role="alert"
      >
        <IconifyIcon
          icon="solar:info-circle-bold-duotone"
          className="fs-20 me-1"
        />
        <div className="lh-1">
          <strong>Informação - </strong> Um alerta informativo simples — veja
          isso!
        </div>
      </Alert>
      <Alert
        variant="light"
        dismissible
        className="alert-dismissible d-flex align-items-center border border-light"
        role="alert"
      >
        <IconifyIcon icon="solar:atom-bold-duotone" className="fs-20 me-1" />
        <div className="lh-1">
          <strong>Claro - </strong> Um alerta claro simples — veja isso!
        </div>
      </Alert>
      <Alert
        variant="dark"
        dismissible
        className="alert-dismissible d-flex align-items-center border border-dark mb-0"
        role="alert"
      >
        <IconifyIcon icon="solar:balloon-bold-duotone" className="fs-20 me-1" />
        <div className="lh-1">
          <strong>Escuro - </strong> Um alerta escuro simples — veja isso!
        </div>
      </Alert>
    </ComponentContainerCard>
  );
};

const AdditionalContent = () => {
  return (
    <ComponentContainerCard
      title="Conteúdo Adicional"
      description={
        <>
          {' '}
          Os alertas também podem conter elementos HTML adicionais como títulos,
          parágrafos e divisores.
        </>
      }
    >
      <Alert variant="success" className="p-3" role="alert">
        <h4 className="alert-heading">Muito bem!</h4>
        <p>
          Legal, você leu com sucesso esta mensagem importante de alerta. Este
          texto de exemplo vai durar um pouco mais para que você possa ver como
          o espaçamento dentro de um alerta funciona com este tipo de conteúdo.
        </p>
        <hr className="border-success border-opacity-25" />
        <p className="mb-0">
          Sempre que necessário, use as utilitárias de margem para manter tudo
          organizado.
        </p>
      </Alert>
      <Alert variant="secondary" className="p-3 d-flex" role="alert">
        <span>
          {' '}
          <IconifyIcon
            height={32}
            width={32}
            icon="solar:bell-bing-bold-duotone"
            className="fs-1 me-2"
          />{' '}
        </span>
        <div>
          <h4 className="alert-heading">Muito bem!</h4>
          <p>
            Legal, você leu com sucesso esta mensagem importante de alerta. Este
            texto de exemplo vai durar um pouco mais para que você possa ver
            como o espaçamento dentro de um alerta funciona com este tipo de
            conteúdo.
          </p>
          <hr className="border-secondary border-opacity-25" />
          <p className="mb-0">
            Sempre que necessário, use as utilitárias de margem para manter tudo
            organizado.
          </p>
        </div>
      </Alert>
      <Alert variant="primary" className="d-flex p-3 mb-0" role="alert">
        <span>
          {' '}
          <IconifyIcon
            height={32}
            width={32}
            icon="solar:cloudy-sun-bold-duotone"
            className="fs-1 me-2"
          />{' '}
        </span>
        <div>
          <h4 className="alert-heading">Muito bem!</h4>
          <p>
            Legal, você leu com sucesso esta mensagem importante de alerta. Este
            texto de exemplo vai durar um pouco mais para que você possa ver
            como o espaçamento dentro de um alerta funciona com este tipo de
            conteúdo.
          </p>
          <hr className="border-primary border-opacity-25" />
          <p className="mb-0">
            Sempre que necessário, use as utilitárias de margem para manter tudo
            organizado.
          </p>
        </div>
      </Alert>
    </ComponentContainerCard>
  );
};

const Alerts = () => {
  return (
    <>
      <PageBreadcrumb title="Alerta" />
      <Row>
        <Col lg={12} xl={6}>
          <DefaultAlert />
        </Col>
        <Col lg={12} xl={6}>
          <DismissingAlert />
        </Col>
        <Col lg={12} xl={6}>
          <LinkColor />
        </Col>
        <Col lg={12} xl={6}>
          <CustomAlerts />
        </Col>
        <Col lg={12} xl={6}>
          <AdditionalContent />
        </Col>
      </Row>
    </>
  );
};

export default Alerts;
