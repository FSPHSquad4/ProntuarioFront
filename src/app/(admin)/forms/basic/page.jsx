import ComponentContainerCard from '@/components/ComponentContainerCard';
import React from 'react';
import {
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  Row,
} from 'react-bootstrap';

const InputTypes = () => {
  return (
    <ComponentContainerCard
      title="Tipos de Input"
      description={
        <>
          Controles de formulário mais comuns, campos de entrada baseados em
          texto. Inclui suporte para todos os tipos HTML5: <code>text</code>,{' '}
          <code>password</code>, <code>datetime</code>,{' '}
          <code>datetime-local</code>, <code>date</code>, <code>month</code>,{' '}
          <code>time</code>, <code>week</code>, <code>number</code>,{' '}
          <code>email</code>, <code>url</code>, <code>search</code>,{' '}
          <code>tel</code>, e <code>color</code>.
        </>
      }
    >
      <Row>
        <Col lg={6}>
          <Form>
            <div className="mb-3">
              <label htmlFor="simpleinput" className="form-label">
                Texto
              </label>
              <Form.Control type="text" id="simpleinput" />
            </div>
            <div className="mb-3">
              <label htmlFor="example-email" className="form-label">
                Email
              </label>
              <Form.Control
                type="email"
                id="example-email"
                name="example-email"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="example-password" className="form-label">
                Senha
              </label>
              <Form.Control
                type="password"
                id="example-password"
                defaultValue="password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="example-palaceholder" className="form-label">
                Placeholder
              </label>
              <Form.Control
                type="text"
                id="example-palaceholder"
                placeholder="placeholder"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="example-textarea" className="form-label">
                Área de texto
              </label>
              <Form.Control
                as={'textarea'}
                id="example-textarea"
                rows={5}
                defaultValue={''}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="example-readonly" className="form-label">
                Somente leitura
              </label>
              <Form.Control
                type="text"
                id="example-readonly"
                readOnly
                defaultValue="Valor somente leitura"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="example-disable" className="form-label">
                Desabilitado
              </label>
              <Form.Control
                type="text"
                id="example-disable"
                disabled
                defaultValue="Valor desabilitado"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="example-static" className="form-label">
                Controle estático
              </label>
              <Form.Control
                type="text"
                readOnly
                className="form-control-plaintext"
                id="example-static"
                defaultValue="email@exemplo.com"
              />
            </div>
            <div className="mb-0">
              <label htmlFor="example-helping" className="form-label">
                Texto de ajuda
              </label>
              <Form.Control
                type="text"
                id="example-helping"
                className="mb-1"
                placeholder="Texto de ajuda"
              />
              <span className="help-block">
                <small>
                  Um bloco de texto de ajuda que quebra em uma nova linha e pode
                  se estender além de uma linha.
                </small>
              </span>
            </div>
          </Form>
        </Col>
        <Col lg={6}>
          <form>
            <div className="mb-3">
              <label htmlFor="example-select" className="form-label">
                Input Select
              </label>
              <Form.Select id="example-select">
                <option>1</option>
                <option value={1}>Um</option>
                <option value={2}>Dois</option>
                <option value={3}>Três</option>
                <option value={4}>Quatro</option>
                <option value={5}>Cinco</option>
              </Form.Select>
            </div>
            <div className="mb-3">
              <label htmlFor="example-multiselect" className="form-label">
                Seleção Múltipla
              </label>
              <Form.Select id="example-multiselect" multiple>
                <option value={1}>Um</option>
                <option value={2}>Dois</option>
                <option value={3}>Três</option>
                <option value={4}>Quatro</option>
                <option value={5}>Cinco</option>
              </Form.Select>
            </div>
            <div className="mb-3">
              <label htmlFor="example-fileinput" className="form-label">
                Input de arquivo padrão
              </label>
              <Form.Control type="file" id="example-fileinput" />
            </div>
            <div className="mb-3">
              <label htmlFor="example-date" className="form-label">
                Data
              </label>
              <Form.Control id="example-date" type="date" name="date" />
            </div>
            <div className="mb-3">
              <label htmlFor="example-month" className="form-label">
                Mês
              </label>
              <Form.Control id="example-month" type="month" name="month" />
            </div>
            <div className="mb-3">
              <label htmlFor="example-time" className="form-label">
                Hora
              </label>
              <Form.Control id="example-time" type="time" name="time" />
            </div>
            <div className="mb-3">
              <label htmlFor="example-week" className="form-label">
                Semana
              </label>
              <Form.Control id="example-week" type="week" name="week" />
            </div>
            <div className="mb-3">
              <label htmlFor="example-number" className="form-label">
                Número
              </label>
              <Form.Control id="example-number" type="number" name="number" />
            </div>
            <div className="mb-3">
              <label htmlFor="example-color" className="form-label">
                Cor
              </label>
              <Form.Control
                id="example-color"
                type="color"
                className="w-100"
                name="color"
                defaultValue="#727cf5"
              />
            </div>
            <div className="mb-0">
              <label htmlFor="example-range" className="form-label">
                Intervalo
              </label>
              <Form.Range id="example-range" name="range" min={0} max={100} />
            </div>
          </form>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};

const FloatingLabels = () => {
  return (
    <ComponentContainerCard
      title="Labels Flutuantes"
      description={
        <>
          Envolva um par de elementos{' '}
          <code>&lt;input class=&quot;form-control&quot;&gt;</code> e{' '}
          <code>&lt;label&gt;</code> em <code>.form-floating</code> para
          habilitar labels flutuantes com campos de formulário textuais do
          Bootstrap. Um <code>placeholder</code> é necessário em cada{' '}
          <code>&lt;input&gt;</code> pois nosso método de labels flutuantes
          apenas com CSS usa o pseudo-elemento <code>:placeholder-shown</code>.
          Observe também que o <code>&lt;input&gt;</code> deve vir primeiro para
          que possamos utilizar um seletor irmão (ex., <code>~</code>).
        </>
      }
    >
      <Row>
        <Col lg={6}>
          <h5 className="mb-3">Exemplo</h5>
          <div className="form-floating mb-3">
            <Form.Control
              type="email"
              id="floatingInput"
              placeholder="nome@exemplo.com"
            />
            <label htmlFor="floatingInput">Endereço de email</label>
          </div>
          <div className="form-floating">
            <Form.Control
              type="password"
              id="floatingPassword"
              placeholder="Senha"
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <h5 className="mb-3 mt-4">Áreas de texto</h5>
          <div className="form-floating">
            <Form.Control
              as={'textarea'}
              placeholder="Deixe um comentário aqui"
              id="floatingTextarea"
              style={{
                height: 100,
              }}
              defaultValue={''}
            />
            <label htmlFor="floatingTextarea">Comentários</label>
          </div>
        </Col>
        <Col lg={6}>
          <h5 className="mb-3">Selects</h5>
          <div className="form-floating">
            <Form.Select
              id="floatingSelect"
              aria-label="Exemplo de select com label flutuante"
            >
              <option>Abra este menu de seleção</option>
              <option value={1}>Um</option>
              <option value={2}>Dois</option>
              <option value={3}>Três</option>
            </Form.Select>
            <label htmlFor="floatingSelect">Funciona com selects</label>
          </div>
          <h5 className="mb-3 mt-4">Layout</h5>
          <Row className="g-2">
            <div className="col-md">
              <div className="form-floating">
                <Form.Control
                  type="email"
                  id="floatingInputGrid"
                  placeholder="nome@exemplo.com"
                  defaultValue="mdo@exemplo.com"
                />
                <label htmlFor="floatingInputGrid">Endereço de email</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <Form.Select
                  id="floatingSelectGrid"
                  aria-label="Exemplo de select com label flutuante"
                >
                  <option>Abra este menu de seleção</option>
                  <option value={1}>Um</option>
                  <option value={2}>Dois</option>
                  <option value={3}>Três</option>
                </Form.Select>
                <label htmlFor="floatingSelectGrid">Funciona com selects</label>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </ComponentContainerCard>
  );
};

const SelectForm = () => {
  return (
    <ComponentContainerCard
      title="Select"
      description={
        <>
          Menus <code>&lt;select&gt;</code> precisam apenas de uma classe
          personalizada, <code>.form-select</code> para ativar os estilos
          personalizados.
        </>
      }
    >
      <Form.Select className="mb-3">
        <option>Abra este menu de seleção</option>
        <option value={1}>Um</option>
        <option value={2}>Dois</option>
        <option value={3}>Três</option>
      </Form.Select>
      <Form.Select className="form-select-lg mb-3">
        <option>Abra este menu de seleção</option>
        <option value={1}>Um</option>
        <option value={2}>Dois</option>
        <option value={3}>Três</option>
      </Form.Select>
      <Form.Select className="form-select-sm mb-3">
        <option>Abra este menu de seleção</option>
        <option value={1}>Um</option>
        <option value={2}>Dois</option>
        <option value={3}>Três</option>
      </Form.Select>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Opções
        </label>
        <Form.Select id="inputGroupSelect01">
          <option>Escolha...</option>
          <option value={1}>Um</option>
          <option value={2}>Dois</option>
          <option value={3}>Três</option>
        </Form.Select>
      </div>
      <div className="input-group">
        <Form.Select
          id="inputGroupSelect04"
          aria-label="Exemplo de select com botão addon"
        >
          <option>Escolha...</option>
          <option value={1}>Um</option>
          <option value={2}>Dois</option>
          <option value={3}>Três</option>
        </Form.Select>
        <button className="btn btn-outline-secondary" type="button">
          Botão
        </button>
      </div>
    </ComponentContainerCard>
  );
};

const SwitchesForm = () => {
  return (
    <ComponentContainerCard
      title="Switches"
      description={
        <>
          Um switch tem a marcação de um checkbox personalizado mas usa a classe{' '}
          <code>.form-switch</code> para renderizar um botão toggle. Switches
          também suportam o atributo <code>disabled</code>.
        </>
      }
    >
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          id="customSwitch1"
        />
        <label className="form-check-label" htmlFor="customSwitch1">
          Alterne este elemento switch
        </label>
      </div>
      <div className="form-check form-switch mt-1">
        <input
          type="checkbox"
          className="form-check-input"
          disabled
          id="customSwitch2"
        />
        <label className="form-check-label" htmlFor="customSwitch2">
          Elemento switch desabilitado
        </label>
      </div>
    </ComponentContainerCard>
  );
};

const CheckboxesForm = () => {
  return (
    <ComponentContainerCard
      title="Checkboxes"
      description={
        <>
          Cada checkbox e input de rádio <code>&lt;input&gt;</code> e par{' '}
          <code>&lt;label&gt;</code> é envolvido em um <code>&lt;div&gt;</code>{' '}
          para criar nosso controle personalizado. Estruturalmente, esta é a
          mesma abordagem que nosso <code>.form-check</code> padrão.
        </>
      }
    >
      <div className="mt-3">
        <div className="form-check mb-1">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheck1"
          />
          <label className="form-check-label" htmlFor="customCheck1">
            Marque este checkbox personalizado
          </label>
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheck2"
          />
          <label className="form-check-label" htmlFor="customCheck2">
            Marque este checkbox personalizado
          </label>
        </div>
      </div>
      <h6 className="fs-15 mt-3">Em linha</h6>
      <div className="mt-2">
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheck3"
          />
          <label className="form-check-label" htmlFor="customCheck3">
            Marque este checkbox personalizado
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheck4"
          />
          <label className="form-check-label" htmlFor="customCheck4">
            Marque este checkbox personalizado
          </label>
        </div>
      </div>
      <h6 className="fs-15 mt-3">Desabilitado</h6>
      <div className="mt-2">
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheck5"
            defaultChecked
            disabled
          />
          <label className="form-check-label" htmlFor="customCheck5">
            Marque este checkbox personalizado
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="checkbox"
            className="form-check-input"
            id="customCheck6"
            disabled
          />
          <label className="form-check-label" htmlFor="customCheck6">
            Marque este checkbox personalizado
          </label>
        </div>
      </div>
      <h6 className="fs-15 mt-3">Cores</h6>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="customCheckcolor1"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customCheckcolor1">
          Checkbox Padrão
        </label>
      </div>
      <div className="form-check form-checkbox-success mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="customCheckcolor2"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customCheckcolor2">
          Checkbox Sucesso
        </label>
      </div>
      <div className="form-check form-checkbox-info mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="customCheckcolor3"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customCheckcolor3">
          Checkbox Info
        </label>
      </div>
      <div className="form-check form-checkbox-secondary mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="customCheckcolor6"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customCheckcolor6">
          Checkbox Secundário
        </label>
      </div>
      <div className="form-check form-checkbox-warning mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="customCheckcolor4"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customCheckcolor4">
          Checkbox Alerta
        </label>
      </div>
      <div className="form-check form-checkbox-danger mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="customCheckcolor5"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customCheckcolor5">
          Checkbox Perigo
        </label>
      </div>
      <div className="form-check form-checkbox-dark">
        <input
          type="checkbox"
          className="form-check-input"
          id="customCheckcolor7"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customCheckcolor7">
          Checkbox Escuro
        </label>
      </div>
    </ComponentContainerCard>
  );
};

const Radios = () => {
  return (
    <ComponentContainerCard
      title="Radios"
      description={
        <>
          Cada checkbox e input de rádio <code>&lt;input&gt;</code> e par{' '}
          <code>&lt;label&gt;</code> é envolvido em um <code>&lt;div&gt;</code>{' '}
          para criar nosso controle personalizado. Estruturalmente, esta é a
          mesma abordagem que nosso <code>.form-check</code> padrão.
        </>
      }
    >
      <div className="mt-3">
        <div className="form-check mb-1">
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="customRadio1">
            Alterne este radio personalizado
          </label>
        </div>
        <div className="form-check">
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="customRadio2">
            Ou alterne este outro radio personalizado
          </label>
        </div>
      </div>
      <h6 className="fs-15 mt-3">Em linha</h6>
      <div className="mt-2">
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="customRadio3"
            name="customRadio1"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="customRadio3">
            Alterne este radio personalizado
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="customRadio4"
            name="customRadio1"
            className="form-check-input"
          />
          <label className="form-check-label" htmlFor="customRadio4">
            Ou alterne este outro radio personalizado
          </label>
        </div>
      </div>
      <h6 className="fs-15 mt-3">Desabilitado</h6>
      <div className="mt-2">
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="customRadio5"
            name="customRadio2"
            className="form-check-input"
            disabled
          />
          <label className="form-check-label" htmlFor="customRadio5">
            Alterne este radio personalizado
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="customRadio6"
            name="customRadio2"
            className="form-check-input"
            defaultChecked
            disabled
          />
          <label className="form-check-label" htmlFor="customRadio6">
            Ou alterne este outro radio personalizado
          </label>
        </div>
      </div>
      <h6 className="fs-15 mt-3">Cores</h6>
      <div className="form-check mb-2">
        <input
          type="radio"
          id="customRadiocolor1"
          name="customRadiocolor1"
          className="form-check-input"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customRadiocolor1">
          Radio Padrão
        </label>
      </div>
      <div className="form-check form-radio-success mb-2">
        <input
          type="radio"
          id="customRadiocolor2"
          name="customRadiocolor2"
          className="form-check-input"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customRadiocolor2">
          Radio Sucesso
        </label>
      </div>
      <div className="form-check form-radio-info mb-2">
        <input
          type="radio"
          id="customRadiocolor3"
          name="customRadiocolor3"
          className="form-check-input"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customRadiocolor3">
          Radio Info
        </label>
      </div>
      <div className="form-check form-radio-secondary mb-2">
        <input
          type="radio"
          id="customRadiocolor6"
          name="customRadiocolor6"
          className="form-check-input"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customRadiocolor6">
          Radio Secundário
        </label>
      </div>
      <div className="form-check form-radio-warning mb-2">
        <input
          type="radio"
          id="customRadiocolor4"
          name="customRadiocolor4"
          className="form-check-input"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customRadiocolor4">
          Radio Alerta
        </label>
      </div>
      <div className="form-check form-radio-danger mb-2">
        <input
          type="radio"
          id="customRadiocolor5"
          name="customRadiocolor5"
          className="form-check-input"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customRadiocolor5">
          Radio Perigo
        </label>
      </div>
      <div className="form-check form-radio-dark">
        <input
          type="radio"
          id="customRadiocolor7"
          name="customRadiocolor7"
          className="form-check-input"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="customRadiocolor7">
          Radio Escuro
        </label>
      </div>
    </ComponentContainerCard>
  );
};

const InputSizes = () => {
  return (
    <ComponentContainerCard
      title="Tamanhos de Input"
      description={
        <>
          Defina alturas usando classes como <code>.input-lg</code>, e defina
          larguras usando classes de coluna do grid como <code>.col-lg-*</code>.
        </>
      }
    >
      <Form>
        <div className="mb-3">
          <label htmlFor="example-input-small" className="form-label">
            Pequeno
          </label>
          <input
            type="text"
            id="example-input-small"
            name="example-input-small"
            className="form-control form-control-sm"
            placeholder=".input-sm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="example-input-normal" className="form-label">
            Normal
          </label>
          <input
            type="text"
            id="example-input-normal"
            name="example-input-normal"
            className="form-control"
            placeholder="Normal"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="example-input-large" className="form-label">
            Grande
          </label>
          <input
            type="text"
            id="example-input-large"
            name="example-input-large"
            className="form-control form-control-lg"
            placeholder=".input-lg"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="example-gridsize" className="form-label">
            Tamanhos do Grid
          </label>
          <Row>
            <Col sm={4}>
              <input
                type="text"
                id="example-gridsize"
                className="form-control"
                placeholder=".col-sm-4"
              />
            </Col>
          </Row>
        </div>
      </Form>
    </ComponentContainerCard>
  );
};

const InputGroup = () => {
  return (
    <ComponentContainerCard
      title="Grupo de Input"
      description={
        <>
          Estenda facilmente controles de formulário adicionando texto, botões
          ou grupos de botões em qualquer lado de inputs textuais, selects
          personalizados e inputs de arquivo personalizados
        </>
      }
    >
      <form>
        <div className="mb-3">
          <label className="form-label">Estático</label>
          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Usuário"
              aria-label="Usuário"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Dropdowns</label>
          <Dropdown className="input-group">
            <DropdownToggle
              as={'button'}
              className="btn btn-primary"
              type="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Ação</DropdownItem>
              <DropdownItem>Outra ação</DropdownItem>
              <DropdownItem>Algo mais aqui</DropdownItem>
            </DropdownMenu>
            <input
              type="text"
              placeholder=""
              className="form-control"
              aria-describedby="basic-addon1"
            />
          </Dropdown>
        </div>
        <div className="mb-3">
          <label className="form-label">Botões</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nome de usuário do destinatário"
              aria-label="Nome de usuário do destinatário"
            />
            <button className="btn btn-dark" type="button">
              Botão
            </button>
          </div>
        </div>
        <Row className="g-2">
          <Col sm={6}>
            <label className="form-label">Input de arquivo</label>
            <input className="form-control" type="file" id="inputGroupFile04" />
          </Col>
          <Col sm={6}>
            <label htmlFor="formFileMultiple01" className="form-label">
              Input de múltiplos arquivos
            </label>
            <input
              className="form-control"
              type="file"
              id="formFileMultiple01"
              multiple
            />
          </Col>
        </Row>
      </form>
    </ComponentContainerCard>
  );
};

const CustomSwitch = () => {
  return (
    <ComponentContainerCard
      title="Switch Personalizado"
      description={<>Aqui estão alguns tipos de switches.</>}
    >
      <input type="checkbox" id="switch0" data-switch="none" />
      &nbsp;
      <label htmlFor="switch0" data-on-label data-off-label />
      &nbsp;
      <input type="checkbox" id="switch1" defaultChecked data-switch="bool" />
      &nbsp;
      <label
        htmlFor="switch1"
        data-on-label="Ligado"
        data-off-label="Desligado"
      />
      &nbsp;
      <input
        type="checkbox"
        id="switch2"
        defaultChecked
        data-switch="primary"
      />
      &nbsp;
      <label
        htmlFor="switch2"
        data-on-label="Ligado"
        data-off-label="Desligado"
      />
      &nbsp;
      <input
        type="checkbox"
        id="switch3"
        defaultChecked
        data-switch="success"
      />
      &nbsp;
      <label htmlFor="switch3" data-on-label="Sim" data-off-label="Não" />
      &nbsp;
      <input type="checkbox" id="switch4" defaultChecked data-switch="info" />
      &nbsp;
      <label
        htmlFor="switch4"
        data-on-label="Ligado"
        data-off-label="Desligado"
      />
      &nbsp;
      <input
        type="checkbox"
        id="switch5"
        defaultChecked
        data-switch="warning"
      />
      &nbsp;
      <label htmlFor="switch5" data-on-label="Sim" data-off-label="Não" />
      &nbsp;
      <input type="checkbox" id="switch6" defaultChecked data-switch="danger" />
      &nbsp;
      <label
        htmlFor="switch6"
        data-on-label="Ligado"
        data-off-label="Desligado"
      />
      &nbsp;
      <input
        type="checkbox"
        id="switch7"
        defaultChecked
        data-switch="secondary"
      />
      &nbsp;
      <label htmlFor="switch7" data-on-label="Sim" data-off-label="Não" />
      &nbsp;
      <input
        type="checkbox"
        id="switchdis"
        data-switch="primary"
        defaultChecked
        disabled
      />
      &nbsp;
      <label
        htmlFor="switchdis"
        data-on-label="Ligado"
        data-off-label="Desligado"
      />
    </ComponentContainerCard>
  );
};

const BasicForms = () => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <InputTypes />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FloatingLabels />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <SelectForm />
        </Col>
        <Col lg={6}>
          <SwitchesForm />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <CheckboxesForm />
        </Col>
        <Col lg={6}>
          <Radios />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <InputSizes />
        </Col>
        <Col lg={6}>
          <InputGroup />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <CustomSwitch />
        </Col>
      </Row>
    </>
  );
};

export default BasicForms;
