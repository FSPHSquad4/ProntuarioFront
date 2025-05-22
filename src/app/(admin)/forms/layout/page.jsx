import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Col, Form, Row } from 'react-bootstrap';

const BasicForm = () => {
  return (
    <ComponentContainerCard
      title="Exemplo Básico"
      description={
        <>
          Aqui está um exemplo rápido para demonstrar os estilos de formulário
          do Bootstrap. Continue lendo para documentação sobre classes
          necessárias, layout de formulário e mais.
        </>
      }
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Endereço de Email
          </label>
          <Form.Control
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Digite seu email"
          />
          <small id="emailHelp" className="form-text text-muted">
            Nunca compartilharemos seu email com ninguém.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Senha
          </label>
          <Form.Control
            type="password"
            id="exampleInputPassword1"
            placeholder="Senha"
          />
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkmeout0"
            />
            <label className="form-check-label" htmlFor="checkmeout0">
              Marque aqui!
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </Form>
    </ComponentContainerCard>
  );
};

const HorizontalForm = () => {
  return (
    <ComponentContainerCard
      title="Formulário Horizontal"
      description={
        <>
          Crie formulários horizontais com o grid adicionando a classe{' '}
          <code>.row</code> aos grupos de formulário e usando as classes{' '}
          <code>.col-*-*</code> para especificar a largura de seus rótulos e
          controles. Certifique-se de adicionar <code>.col-form-label</code> aos
          seus <code>&lt;label&gt;</code>s para que fiquem centralizados
          verticalmente com seus controles de formulário associados.
        </>
      }
    >
      <form className="form-horizontal">
        <Row className="mb-3">
          <label htmlFor="inputEmail3" className="col-3 col-form-label">
            Email
          </label>
          <Col xs={9}>
            <Form.Control type="email" id="inputEmail3" placeholder="Email" />
          </Col>
        </Row>
        <Row className="mb-3">
          <label htmlFor="inputPassword3" className="col-3 col-form-label">
            Senha
          </label>
          <Col xs={9}>
            <Form.Control
              type="password"
              id="inputPassword3"
              placeholder="Senha"
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <label htmlFor="inputPassword5" className="col-3 col-form-label">
            Confirmar Senha
          </label>
          <Col xs={9}>
            <Form.Control
              type="password"
              id="inputPassword5"
              placeholder="Digite a senha novamente"
            />
          </Col>
        </Row>
        <Row className="mb-3 justify-content-end">
          <Col xs={9}>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkmeout"
              />
              <label className="form-check-label" htmlFor="checkmeout">
                Marque aqui!
              </label>
            </div>
          </Col>
        </Row>
        <div className="justify-content-end row">
          <Col xs={9}>
            <button type="submit" className="btn btn-info">
              Entrar
            </button>
          </Col>
        </div>
      </form>
    </ComponentContainerCard>
  );
};

const InlineForm = () => {
  return (
    <ComponentContainerCard
      title="Formulário em Linha"
      description={
        <>
          Use as classes <code>.row-cols-lg-auto</code>, <code>.g-3</code> e{' '}
          <code>.align-items-center</code> para exibir uma série de rótulos,
          controles de formulário e botões em uma única linha horizontal. Os
          controles de formulário dentro de formulários em linha variam
          ligeiramente de seus estados padrão. Os controles só aparecem em linha
          em viewports com pelo menos 576px de largura para considerar viewports
          estreitas em dispositivos móveis.
        </>
      }
    >
      <form className="row row-cols-lg-auto g-3 align-items-center">
        <Col xs={12}>
          <label htmlFor="staticEmail2" className="visually-hidden">
            Email
          </label>
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail2"
            defaultValue="email@exemplo.com"
          />
        </Col>
        <Col xs={12}>
          <label htmlFor="inputPassword2" className="visually-hidden">
            Senha
          </label>
          <Form.Control
            type="password"
            id="inputPassword2"
            placeholder="Senha"
          />
        </Col>
        <Col xs={12}>
          <button type="submit" className="btn btn-primary">
            Confirmar identidade
          </button>
        </Col>
      </form>
      <h6 className="fs-13 mt-3">Dimensionamento automático</h6>
      <form>
        <Row className="gy-2 gx-2 align-items-center">
          <Col xs={'auto'}>
            <label className="visually-hidden" htmlFor="inlineFormInput">
              Nome
            </label>
            <Form.Control
              type="text"
              className="mb-2"
              id="inlineFormInput"
              placeholder="João Silva"
            />
          </Col>
          <Col xs={'auto'}>
            <label className="visually-hidden" htmlFor="inlineFormInputGroup">
              Nome de usuário
            </label>
            <div className="input-group mb-2">
              <div className="input-group-text">@</div>
              <Form.Control
                type="text"
                id="inlineFormInputGroup"
                placeholder="Nome de usuário"
              />
            </div>
          </Col>
          <Col xs={'auto'}>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="autoSizingCheck"
              />
              <label className="form-check-label" htmlFor="autoSizingCheck">
                Lembrar de mim
              </label>
            </div>
          </Col>
          <Col xs={'auto'}>
            <button type="submit" className="btn btn-primary mb-2">
              Enviar
            </button>
          </Col>
        </Row>
      </form>
    </ComponentContainerCard>
  );
};

const HorizontalSizingForm = () => {
  return (
    <ComponentContainerCard
      title="Dimensionamento de rótulos em formulário horizontal"
      description={
        <>
          Certifique-se de usar <code>.col-form-label-sm</code> ou{' '}
          <code>.col-form-label-lg</code> em seus <code>&lt;label&gt;</code>s ou{' '}
          <code>&lt;legend&gt;</code>s para seguir corretamente o tamanho de{' '}
          <code>.form-control-lg</code> e <code>.form-control-sm</code>.
        </>
      }
    >
      <form>
        <Row className="mb-2">
          <label
            htmlFor="colFormLabelSm"
            className="col-sm-2 col-form-label col-form-label-sm"
          >
            Email
          </label>
          <Col sm={12}>
            <Form.Control
              type="email"
              className="form-control-sm"
              id="colFormLabelSm"
              placeholder="col-form-label-sm"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
            Email
          </label>
          <Col sm={12}>
            <Form.Control
              type="email"
              id="colFormLabel"
              placeholder="col-form-label"
            />
          </Col>
        </Row>
        <Row>
          <label
            htmlFor="colFormLabelLg"
            className="col-sm-2 col-form-label col-form-label-lg"
          >
            Email
          </label>
          <Col sm={10}>
            <Form.Control
              type="email"
              className="form-control-lg"
              id="colFormLabelLg"
              placeholder="col-form-label-lg"
            />
          </Col>
        </Row>
      </form>
    </ComponentContainerCard>
  );
};

const FormRow = () => {
  return (
    <ComponentContainerCard
      title="Linha de Formulário"
      description={
        <>
          Adicionando <code>.row</code> e <code>.g-2</code>, você pode ter
          controle sobre a largura da calha tanto na direção em linha quanto em
          bloco.
        </>
      }
    >
      <form>
        <Row className="g-2">
          <Col md={6} className="mb-3">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <Form.Control type="email" id="inputEmail4" placeholder="Email" />
          </Col>
          <Col md={6} className="mb-3">
            <label htmlFor="inputPassword4" className="form-label">
              Senha
            </label>
            <Form.Control
              type="password"
              id="inputPassword4"
              placeholder="Senha"
            />
          </Col>
        </Row>
        <div className="mb-3">
          <label htmlFor="inputAddress" className="form-label">
            Endereço
          </label>
          <Form.Control
            type="text"
            id="inputAddress"
            placeholder="Rua Principal, 1234"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputAddress2" className="form-label">
            Complemento
          </label>
          <Form.Control
            type="text"
            id="inputAddress2"
            placeholder="Apartamento, estúdio ou andar"
          />
        </div>
        <Row className="g-2">
          <Col md={6} className="mb-3">
            <label htmlFor="inputCity" className="form-label">
              Cidade
            </label>
            <Form.Control type="text" id="inputCity" />
          </Col>
          <Col md={4} className="mb-3">
            <label htmlFor="inputState" className="form-label">
              Estado
            </label>
            <Form.Select id="inputState">
              <option>Escolha...</option>
              <option>Opção 1</option>
              <option>Opção 2</option>
              <option>Opção 3</option>
            </Form.Select>
          </Col>
          <Col md={2} className="mb-3">
            <label htmlFor="inputZip" className="form-label">
              CEP
            </label>
            <Form.Control type="text" id="inputZip" />
          </Col>
        </Row>
        <div className="mb-2">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input fs-15"
              id="customCheck11"
            />
            <label className="form-check-label" htmlFor="customCheck11">
              Marque esta caixa de seleção personalizada
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Entrar
        </button>
      </form>
    </ComponentContainerCard>
  );
};

const LayoutPages = () => {
  return (
    <>
      <Row>
        <Col lg={6}>
          <BasicForm />
        </Col>
        <Col lg={6}>
          <HorizontalForm />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <InlineForm />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <HorizontalSizingForm />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FormRow />
        </Col>
      </Row>
    </>
  );
};

export default LayoutPages;
