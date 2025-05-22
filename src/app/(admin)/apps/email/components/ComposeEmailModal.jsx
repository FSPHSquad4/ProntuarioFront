import sellersImg from '@/assets/images/brands/amazon.svg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import { useState } from 'react';
import {
  Card,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Row,
} from 'react-bootstrap';
import ReactQuill from 'react-quill-new';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import 'react-quill-new/dist/quill.snow.css';

const ComposeEmailModal = ({ isOpen, toggleComposeModal }) => {
  const [quillEditorContent, setQuillEditorContent] =
    useState('Escrevendo algo...');

  return (
    <>
      <Modal
        id="email-details-modal"
        className="fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="email-details-modalLabel"
        aria-hidden="true"
      >
        <ModalHeader className="d-flex flex-wrap gap-2 align-items-start">
          <img
            className="me-2 rounded-circle"
            src={avatar2}
            alt="imagem de placeholder"
            height={40}
          />
          <div className="flex-grow-1">
            <h6 className="fs-16">Steven Smith</h6>
            <p className="text-muted mb-0">De: jonathan@domain.com</p>
          </div>
          <div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Fechar"
            />
          </div>
        </ModalHeader>
        <ModalBody>
          <h5 className="fs-18">
            Sua recompensa de Otimização Gráfica de autor elite está pronta!
          </h5>
          <hr />
          <p>Olá Coderthemes!</p>
          <p>
            Clicar em 'Order Service' no lado direito da página acima
            apresentará uma página de pedido. Este serviço possui as seguintes
            Diretrizes de Briefing que precisam ser preenchidas antes de fazer o
            pedido:
          </p>
          <ol>
            <li>
              Suas preferências de design (Cor, estilo, formas, fontes, outros){' '}
            </li>
            <li>Conte-me, o que torna seu item diferente? </li>
            <li>
              Você quer destacar algum recurso específico do seu item? Se sim,
              por favor me avise{' '}
            </li>
            <li>
              Você tem alguma preferência ou algo específico que gostaria de
              mudar ou melhorar na página do seu item?{' '}
            </li>
            <li>
              Você quer incluir o logo do seu item ou do seu fornecedor na
              página? Se sim, envie-o para mim em formato vetorial (Ai ou EPS){' '}
            </li>
            <li>Por favor, forneça-me o texto para exibir</li>
          </ol>
          <p>
            Preencher este formulário com as informações acima garantirá que
            eles possam começar o trabalho rapidamente.
          </p>
          <p>
            Você pode completar seu pedido colocando seu código de cupom na
            caixa de código promocional e clicando em ‘Aplicar Cupom’.
          </p>
          <p>
            <b>Atenciosamente,</b> <br /> Graphic Studio
          </p>
          <hr />
          <h5 className="mb-3">Anexos</h5>
          <Row>
            <Col xl={6}>
              <Card className="mb-1 shadow-none border border-light">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col xs={'auto'}>
                      <div className="avatar-lg">
                        <span className="avatar-title bg-soft-primary text-primary rounded">
                          .ZIP
                        </span>
                      </div>
                    </Col>
                    <Col className="ps-0">
                      <Link to="" className="text-muted fw-bold">
                        Osen-admin-design.zip
                      </Link>
                      <p className="mb-0">2.3 MB</p>
                    </Col>
                    <Col xs={'auto'}>
                      <Link to="" className="btn btn-link btn-lg text-muted">
                        <IconifyIcon icon="tabler:download" />
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
            <Col xl={6}>
              <Card className="mb-1 shadow-none border border-light">
                <div className="p-2">
                  <Row className="align-items-center">
                    <Col xs={'auto'}>
                      <img
                        src={sellersImg}
                        className="avatar-lg rounded"
                        alt="imagem de arquivo"
                      />
                    </Col>
                    <Col className="ps-0">
                      <Link to="" className="text-muted fw-bold">
                        Dashboard-design.jpg
                      </Link>
                      <p className="mb-0">3.25 MB</p>
                    </Col>
                    <Col xs={'auto'}>
                      <Link to="" className="btn btn-link btn-lg text-muted">
                        <IconifyIcon icon="tabler:download" />
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="gap-1 py-2">
          <button
            className="btn btn-primary"
            data-bs-target="#email-compose-modal"
            data-bs-toggle="modal"
          >
            <IconifyIcon
              icon="tabler:arrow-back-up"
              className="align-text-bottom me-1"
            />{' '}
            Responder
          </button>
          <button
            className="btn btn-primary"
            data-bs-target="#email-compose-modal"
            data-bs-toggle="modal"
          >
            <IconifyIcon
              icon="tabler:arrow-big-right"
              className="align-text-bottom me-1"
            />{' '}
            Encaminhar
          </button>
        </ModalFooter>
      </Modal>

      <Modal
        size="lg"
        show={isOpen}
        onHide={toggleComposeModal}
        id="email-compose-modal"
        className="modal-dialog-centered fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="email-compose-modalLabel"
        aria-hidden="true"
      >
        <ModalHeader className="py-2">
          <ModalTitle as={'h4'} id="email-compose-modalLabel">
            Nova Mensagem
          </ModalTitle>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Fechar"
          />
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="mb-2">
              <label htmlFor="msgto" className="form-label">
                Para
              </label>
              <input
                type="text"
                id="msgto"
                className="form-control"
                placeholder="Exemplo@email.com"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="mailsubject" className="form-label">
                Assunto
              </label>
              <input
                type="text"
                id="mailsubject"
                className="form-control"
                placeholder="Seu assunto"
              />
            </div>
            <div>
              <label className="form-label">Mensagem</label>
              <ReactQuill
                className="mb-4"
                theme="snow"
                value={quillEditorContent}
                onChange={setQuillEditorContent}
                style={{
                  height: 150,
                }}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter className="py-2">
          <button
            type="button"
            className="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Enviar Mensagem
          </button>
          <button
            type="button"
            className="btn btn-light"
            onClick={toggleComposeModal}
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ComposeEmailModal;
