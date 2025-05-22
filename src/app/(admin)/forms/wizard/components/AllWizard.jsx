import React, { useRef, useState } from 'react';
import { Button, Card, Col, Form, ProgressBar, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import StepWizard from 'react-step-wizard';
import { Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const WizardButtons = ({
  onPrev,
  onNext,
  activeStep,
  totalSteps,
  onFinish,
  goToFirstStep,
}) => (
  <div className="d-flex wizard justify-content-between flex-wrap gap-2 mt-3">
    <div className="first">
      <Button
        href="javascript:void(0);"
        onClick={goToFirstStep}
        disabled={activeStep === 1}
        className="btn btn-primary"
      >
        Primeiro
      </Button>
    </div>
    <div className="d-flex flex-wrap gap-2">
      <div className="previous">
        <Button
          href="javascript:void(0);"
          onClick={onPrev}
          disabled={activeStep === 1}
          className="btn btn-primary"
        >
          <i className="bx bx-left-arrow-alt me-2" /> Voltar
        </Button>
      </div>
      <div className="next">
        <Button
          href="javascript:void(0);"
          onClick={onNext}
          disabled={activeStep === totalSteps}
          className="btn btn-primary mt-3 mt-md-0"
        >
          Próximo <i className="bx bx-right-arrow-alt ms-2" />
        </Button>
      </div>
    </div>
    <div className="last">
      <Button
        href="javascript:void(0);"
        onClick={onFinish}
        disabled={activeStep === totalSteps}
        className="btn btn-primary mt-3 mt-md-0"
      >
        Finalizar
      </Button>
    </div>
  </div>
);

const BasicWizard = () => {
  const wizardRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    if (wizardRef.current) {
      wizardRef.current.nextStep();
      setActiveStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (wizardRef.current) {
      wizardRef.current.previousStep();
      setActiveStep((prev) => prev - 1);
    }
  };

  const goToStep = (stepIndex) => {
    if (wizardRef.current) {
      wizardRef.current.goToStep(stepIndex);
      setActiveStep(stepIndex);
    }
  };

  const finishStep = () => {
    if (wizardRef.current) {
      wizardRef.current.goToStep(steps.length);
      setActiveStep(steps.length);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const steps = ['Conta', 'Perfil', 'Finalizar'];

  return (
    <Card>
      <Card.Body className="overflow-hidden">
        <h4 className="header-title mb-3">Assistente Básico</h4>

        <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
          {steps.map((step, idx) => (
            <li key={idx} className="nav-item">
              <Button
                className={`nav-link rounded-0 py-2 ${
                  activeStep === idx + 1 ? 'active' : ''
                }`}
                onClick={() => goToStep(idx + 1)}
              >
                <i className="bi bi-person-circle fs-18 align-middle me-1" />
                <span className="d-none d-sm-inline">{step}</span>
              </Button>
            </li>
          ))}
        </ul>

        <StepWizard
          instance={(wizard) => {
            wizardRef.current = wizard;
          }}
          onStepChange={(stats) => setActiveStep(stats.activeStep)}
        >
          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="email" column md={3}>
                  Email
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    {...register('email', {
                      required: 'Email é obrigatório',
                    })}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors?.email?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="password" column md={3}>
                  Senha
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    {...register('password', {
                      required: 'Senha é obrigatória',
                    })}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.password?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="confirmPassword" column md={3}>
                  Confirme sua senha
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirme sua senha"
                    {...register('confirmPassword', {
                      required: 'Confirmação de senha é obrigatória',
                    })}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.confirmPassword?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <WizardButtons
                onPrev={prevStep}
                onNext={nextStep}
                activeStep={activeStep}
                totalSteps={steps.length}
                onFinish={finishStep}
                goToFirstStep={() => goToStep(1)}
              />
            </Form>
          </div>

          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="fname" column md={3}>
                  Nome
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="text"
                    id="fname"
                    placeholder="Digite seu nome"
                    {...register('fname', {
                      required: 'Nome é obrigatório',
                    })}
                    isInvalid={!!errors.fname}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.fname?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="lname" column md={3}>
                  Sobrenome
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="text"
                    id="lname"
                    placeholder="Digite seu sobrenome"
                    {...register('lname', {
                      required: 'Sobrenome é obrigatório',
                    })}
                    isInvalid={!!errors.lname}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.lname?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="phone" column md={3}>
                  Telefone
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="text"
                    id="phone"
                    placeholder="Digite seu telefone"
                    {...register('phone', {
                      required: 'Telefone é obrigatório',
                    })}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.phone?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <WizardButtons
                onPrev={prevStep}
                onNext={nextStep}
                activeStep={activeStep}
                totalSteps={steps.length}
                onFinish={finishStep}
                goToFirstStep={() => goToStep(1)}
              />
            </Form>
          </div>

          <div>
            <Row>
              <Col sm={12}>
                <div className="text-center">
                  <h2 className="mt-0">
                    <i className="mdi mdi-check-all"></i>
                  </h2>
                  <h3 className="mt-0">Obrigado!</h3>

                  <p className="w-75 mb-2 mx-auto">
                    Seus dados foram registrados com sucesso! Agradecemos por
                    completar o cadastro em nosso sistema.
                  </p>

                  <div className="mb-3">
                    <Form.Check type="checkbox" className="d-inline-block">
                      <Form.Check.Input
                        type="checkbox"
                        {...register('terms', {
                          required: 'Você deve aceitar os termos e condições',
                        })}
                      />
                      <Form.Check.Label>
                        Eu concordo com os Termos e Condições
                      </Form.Check.Label>
                    </Form.Check>
                    {errors.terms && (
                      <div className="text-danger">
                        <>{errors.terms.message}</>
                      </div>
                    )}
                  </div>
                </div>
              </Col>

              <Col sm={12}>
                <WizardButtons
                  onPrev={prevStep}
                  onNext={nextStep}
                  activeStep={activeStep}
                  totalSteps={steps.length}
                  onFinish={finishStep}
                  goToFirstStep={() => goToStep(1)}
                />
              </Col>
            </Row>
          </div>
        </StepWizard>
      </Card.Body>
    </Card>
  );
};

const WizardWithProgressbar = () => {
  const wizardRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = () => {
    if (wizardRef.current) {
      wizardRef.current.nextStep();
      setActiveStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (wizardRef.current) {
      wizardRef.current.previousStep();
      setActiveStep((prev) => prev - 1);
    }
  };

  const goToStep = (stepIndex) => {
    if (wizardRef.current) {
      wizardRef.current.goToStep(stepIndex);
      setActiveStep(stepIndex);
    }
  };

  const finishStep = () => {
    if (wizardRef.current) {
      wizardRef.current.goToStep(steps.length);
      setActiveStep(steps.length);
    }
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const steps = ['Conta', 'Perfil', 'Finalizar'];

  return (
    <Card>
      <Card.Body className="overflow-hidden">
        <h4 className="header-title mb-3">Assistente com Barra de Progresso</h4>

        <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
          {steps.map((step, idx) => (
            <li key={idx} className="nav-item">
              <Button
                className={`nav-link rounded-0 py-2 ${
                  activeStep === idx + 1 ? 'active' : ''
                }`}
                onClick={() => goToStep(idx + 1)}
              >
                <i className="bi bi-person-circle fs-18 align-middle me-1" />
                <span className="d-none d-sm-inline">{step}</span>
              </Button>
            </li>
          ))}
        </ul>

        <ProgressBar
          animated
          striped
          variant="success"
          style={{
            height: '7px',
          }}
          now={(activeStep / 3) * 100}
          className="mb-3 progress-sm"
        />

        <StepWizard
          instance={(wizard) => {
            wizardRef.current = wizard;
          }}
          onStepChange={(stats) => setActiveStep(stats.activeStep)}
        >
          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="email" column md={3}>
                  Email
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="email"
                    id="email"
                    placeholder="Digite seu email"
                    {...register('email', {
                      required: 'Email é obrigatório',
                    })}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.email?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="password" column md={3}>
                  Senha
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    {...register('password', {
                      required: 'Senha é obrigatória',
                    })}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.password?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="confirmPassword" column md={3}>
                  Confirme sua senha
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirme sua senha"
                    {...register('confirmPassword', {
                      required: 'Confirmação de senha é obrigatória',
                    })}
                    isInvalid={!!errors.confirmPassword}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.confirmPassword?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <WizardButtons
                onPrev={prevStep}
                onNext={nextStep}
                activeStep={activeStep}
                totalSteps={steps.length}
                onFinish={finishStep}
                goToFirstStep={() => goToStep(1)}
              />
            </Form>
          </div>

          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="fname" column md={3}>
                  Nome
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="text"
                    id="fname"
                    placeholder="Digite seu nome"
                    {...register('fname', {
                      required: 'Nome é obrigatório',
                    })}
                    isInvalid={!!errors.fname}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.fname?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="lname" column md={3}>
                  Sobrenome
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="text"
                    id="lname"
                    placeholder="Digite seu sobrenome"
                    {...register('lname', {
                      required: 'Sobrenome é obrigatório',
                    })}
                    isInvalid={!!errors.lname}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.lname?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label htmlFor="phone" column md={3}>
                  Telefone
                </Form.Label>
                <Col md={9}>
                  <Form.Control
                    type="text"
                    id="phone"
                    placeholder="Digite seu telefone"
                    {...register('phone', {
                      required: 'Telefone é obrigatório',
                    })}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    <>{errors.phone?.message}</>
                  </Form.Control.Feedback>
                </Col>
              </Form.Group>

              <WizardButtons
                onPrev={prevStep}
                onNext={nextStep}
                activeStep={activeStep}
                totalSteps={steps.length}
                onFinish={finishStep}
                goToFirstStep={() => goToStep(1)}
              />
            </Form>
          </div>

          <div>
            <Row>
              <Col sm={12}>
                <div className="text-center">
                  <h2 className="mt-0">
                    <i className="mdi mdi-check-all"></i>
                  </h2>
                  <h3 className="mt-0">Obrigado!</h3>

                  <p className="w-75 mb-2 mx-auto">
                    Agradecemos por completar todas as etapas. Seus dados foram
                    registrados com sucesso em nosso sistema.
                  </p>

                  <div className="mb-3">
                    <Form.Check type="checkbox" className="d-inline-block">
                      <Form.Check.Input
                        type="checkbox"
                        {...register('terms', {
                          required: 'Você deve aceitar os termos e condições',
                        })}
                      />
                      <Form.Check.Label>
                        Eu concordo com os Termos e Condições
                      </Form.Check.Label>
                    </Form.Check>
                    {errors.terms && (
                      <div className="text-danger">
                        <>{errors.terms.message}</>
                      </div>
                    )}
                  </div>
                </div>
              </Col>

              <Col sm={12}>
                <WizardButtons
                  onPrev={prevStep}
                  onNext={nextStep}
                  activeStep={activeStep}
                  totalSteps={steps.length}
                  onFinish={finishStep}
                  goToFirstStep={() => goToStep(1)}
                />
              </Col>
            </Row>
          </div>
        </StepWizard>
      </Card.Body>
    </Card>
  );
};

const schema = yup.object({
  email: yup
    .string()
    .email('Por favor, digite um email válido')
    .required('Por favor, digite o email'),
  password: yup.string().required('Por favor, digite a senha'),
  fName: yup.string().required('Por favor, digite o nome'),
  lName: yup.string().required('Por favor, digite o sobrenome'),
});

const WizardWithFormValidation = () => {
  const { handleSubmit, control, trigger } = useForm({
    resolver: yupResolver(schema),
  });
  const wizardRef = useRef(null);
  const [activeStep, setActiveStep] = useState(1);

  const nextStep = async () => {
    if (activeStep === 1) {
      const isValidStep1 = await trigger(['email', 'password']);
      if (isValidStep1 && wizardRef.current) {
        wizardRef.current.nextStep();
        setActiveStep((prev) => prev + 1);
      } else {
        console.log('Validação da etapa 1 falhou');
      }
    }

    if (activeStep === 2) {
      const isValidStep2 = await trigger(['fName', 'lName']);
      if (isValidStep2 && wizardRef.current) {
        wizardRef.current.nextStep();
        setActiveStep((prev) => prev + 1);
      } else {
        console.log('Validação da etapa 2 falhou');
      }
    }
  };

  const prevStep = () => {
    if (wizardRef.current) {
      wizardRef.current.previousStep();
      setActiveStep((prev) => prev - 1);
    }
  };

  const goToStep = (stepIndex) => {
    if (wizardRef.current) {
      wizardRef.current.goToStep(stepIndex);
      setActiveStep(stepIndex);
    }
  };

  const finishStep = () => {
    if (wizardRef.current) {
      wizardRef.current.goToStep(steps.length);
      setActiveStep(steps.length);
    }
  };

  const steps = ['Conta', 'Perfil', 'Finalizar'];

  return (
    <>
      <Card>
        <Card.Body className="overflow-hidden">
          <h4 className="header-title mb-3">Assistente com Validação</h4>

          <ul className="nav nav-pills nav-justified form-wizard-header mb-3">
            {steps.map((step, idx) => (
              <li key={idx} className="nav-item">
                <Button
                  className={`nav-link rounded-0 py-2 ${
                    activeStep === idx + 1 ? 'active' : ''
                  }`}
                  onClick={() => goToStep(idx + 1)}
                >
                  <i className="bi bi-person-circle fs-18 align-middle me-1" />
                  <span className="d-none d-sm-inline">{step}</span>
                </Button>
              </li>
            ))}
          </ul>

          <StepWizard
            instance={(wizard) => {
              wizardRef.current = wizard;
            }}
            onStepChange={(stats) => setActiveStep(stats.activeStep)}
          >
            <div>
              <Controller
                control={control}
                name="email"
                render={({ field, fieldState }) => (
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      {...field}
                      type="email"
                      isInvalid={!!fieldState.error}
                    />
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <Controller
                control={control}
                name="password"
                render={({ field, fieldState }) => (
                  <Form.Group className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      {...field}
                      type="password"
                      isInvalid={!!fieldState.error}
                    />
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <WizardButtons
                onPrev={prevStep}
                onNext={nextStep}
                activeStep={activeStep}
                totalSteps={steps.length}
                onFinish={finishStep}
                goToFirstStep={() => goToStep(1)}
              />
            </div>

            <div>
              <Controller
                control={control}
                name="fName"
                render={({ field, fieldState }) => (
                  <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      {...field}
                      type="text"
                      isInvalid={!!fieldState.error}
                    />
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <Controller
                control={control}
                name="lName"
                render={({ field, fieldState }) => (
                  <Form.Group className="mb-3">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                      {...field}
                      type="text"
                      isInvalid={!!fieldState.error}
                    />
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              />
              <WizardButtons
                onPrev={prevStep}
                onNext={nextStep}
                activeStep={activeStep}
                totalSteps={steps.length}
                onFinish={finishStep}
                goToFirstStep={() => goToStep(1)}
              />
            </div>

            <div>
              <Row>
                <Col sm={12}>
                  <div className="text-center">
                    <h2>
                      <i className="mdi mdi-check-all"></i>
                    </h2>
                    <h3>Obrigado!</h3>
                    <p>
                      Todos os dados foram validados e registrados com sucesso.
                      Agradecemos por completar o cadastro.
                    </p>
                  </div>
                </Col>
                <Col sm={12}>
                  <WizardButtons
                    onPrev={prevStep}
                    onNext={nextStep}
                    activeStep={activeStep}
                    totalSteps={steps.length}
                    onFinish={finishStep}
                    goToFirstStep={() => goToStep(1)}
                  />
                </Col>
              </Row>
            </div>
          </StepWizard>
        </Card.Body>
      </Card>
    </>
  );
};

const FormWizard = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xl={6}>
          <BasicWizard />
        </Col>

        <Col xl={6}>
          <WizardWithProgressbar />
        </Col>
      </Row>

      <Row>
        <Col lg={6}>
          <WizardWithFormValidation />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FormWizard;
