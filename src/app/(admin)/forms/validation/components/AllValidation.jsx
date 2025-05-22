import ComponentContainerCard from '@/components/ComponentContainerCard';
import React, { useState } from 'react';
import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
} from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import InputGroupText from 'react-bootstrap/esm/InputGroupText';

const ValidacaoEstilosPersonalizados = () => {
  const [validado, setValidado] = useState(false);

  const handleSubmit = (evento) => {
    const formulario = evento.currentTarget;
    if (formulario.checkValidity() === false) {
      evento.preventDefault();
      evento.stopPropagation();
    }
    setValidado(true);
  };

  return (
    <ComponentContainerCard
      title="Estilos Personalizados"
      description={
        <>
          Os estilos personalizados de feedback aplicam cores, bordas, estilos
          de foco e ícones de fundo personalizados para melhorar a comunicação
          do feedback. Ícones de fundo para&nbsp;
          <code>&lt;select&gt;</code>s estão disponíveis apenas com&nbsp;
          <code>.form-select</code>, e não com <code>.form-control</code>.
        </>
      }
    >
      <Form
        className="needs-validation"
        noValidate
        validated={validado}
        onSubmit={handleSubmit}
      >
        <FormGroup className="mb-3">
          <FormLabel>Nome</FormLabel>
          <FormControl
            type="text"
            id="validationCustom01"
            placeholder="Nome"
            defaultValue="Mark"
            required
          />
          <Feedback>Parece bom!</Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Sobrenome</FormLabel>
          <FormControl
            type="text"
            id="validationCustom02"
            placeholder="Sobrenome"
            defaultValue="Otto"
            required
          />
          <Feedback>Parece bom!</Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Usuário</FormLabel>
          <InputGroup>
            <InputGroupText id="inputGroupPrepend">@</InputGroupText>
            <FormControl
              type="text"
              id="validationCustomUsername"
              placeholder="Usuário"
              required
            />
            <Feedback type="invalid">
              Por favor, escolha um nome de usuário.
            </Feedback>
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Cidade</FormLabel>
          <FormControl
            type="text"
            id="validationCustom03"
            placeholder="Cidade"
            required
          />
          <Feedback type="invalid">
            Por favor, informe uma cidade válida.
          </Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>Estado</FormLabel>
          <FormControl
            type="text"
            id="validationCustom04"
            placeholder="Estado"
            required
          />
          <Feedback type="invalid">
            Por favor, informe um estado válido.
          </Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormLabel>CEP</FormLabel>
          <FormControl
            type="text"
            id="validationCustom05"
            placeholder="CEP"
            required
          />
          <Feedback type="invalid">Por favor, informe um CEP válido.</Feedback>
        </FormGroup>
        <FormGroup className="mb-3">
          <FormCheck
            id="invalidCheck"
            required
            label="Concordo com os termos e condições"
            feedback="Você deve concordar antes de enviar."
            feedbackType="invalid"
          />
        </FormGroup>
        <Button variant="primary" type="submit">
          Enviar formulário
        </Button>
      </Form>
    </ComponentContainerCard>
  );
};

const ValidacaoTooltips = () => {
  const [validado, setValidado] = useState(false);

  const handleSubmit = (evento) => {
    const formulario = evento.currentTarget;
    if (!formulario.checkValidity()) {
      evento.preventDefault();
      evento.stopPropagation();
    }
    setValidado(true);
  };

  return (
    <ComponentContainerCard
      title="Tooltips"
      description={
        <>
          Se o layout do seu formulário permitir, você pode trocar as
          classes&nbsp;
          <code>
            .{'{'}valid|invalid{'}'}-feedback
          </code>{' '}
          por&nbsp;
          <code>
            .{'{'}valid|invalid{'}'}-tooltip
          </code>{' '}
          para exibir o feedback de validação em um tooltip estilizado.
          Certifique-se de que o elemento pai tenha{' '}
          <code>position: relative</code>&nbsp; para posicionamento correto do
          tooltip. No exemplo abaixo, as classes de coluna já possuem essa
          configuração, mas seu projeto pode exigir um ajuste diferente.
        </>
      }
    >
      <Form
        className="needs-validation"
        noValidate
        validated={validado}
        onSubmit={handleSubmit}
      >
        <FormGroup className="position-relative mb-3">
          <FormLabel>Nome</FormLabel>
          <FormControl
            type="text"
            placeholder="Nome"
            defaultValue="Mark"
            required
          />
          <Feedback tooltip>Parece bom!</Feedback>
          <Feedback type="invalid" tooltip>
            Por favor, informe seu nome.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>Sobrenome</FormLabel>
          <FormControl
            type="text"
            placeholder="Sobrenome"
            defaultValue="Otto"
            required
          />
          <Feedback tooltip>Parece bom!</Feedback>
          <Feedback type="invalid" tooltip>
            Por favor, informe seu sobrenome.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>Usuário</FormLabel>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <FormControl type="text" placeholder="Usuário" required />
            <Feedback type="invalid" tooltip>
              Por favor, escolha um nome de usuário único e válido.
            </Feedback>
          </InputGroup>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>Cidade</FormLabel>
          <FormControl type="text" placeholder="Cidade" required />
          <Feedback type="invalid" tooltip>
            Por favor, informe uma cidade válida.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>Estado</FormLabel>
          <FormControl type="text" placeholder="Estado" required />
          <Feedback type="invalid" tooltip>
            Por favor, informe um estado válido.
          </Feedback>
        </FormGroup>
        <FormGroup className="position-relative mb-3">
          <FormLabel>CEP</FormLabel>
          <FormControl type="text" placeholder="CEP" required />
          <Feedback type="invalid" tooltip>
            Por favor, informe um CEP válido.
          </Feedback>
        </FormGroup>
        <Button variant="primary" type="submit">
          Enviar formulário
        </Button>
      </Form>
    </ComponentContainerCard>
  );
};

const TodasValidacoes = () => {
  return (
    <Row>
      <Col lg={6}>
        <ValidacaoEstilosPersonalizados />
      </Col>
      <Col lg={6}>
        <ValidacaoTooltips />
      </Col>
    </Row>
  );
};

export default TodasValidacoes;
