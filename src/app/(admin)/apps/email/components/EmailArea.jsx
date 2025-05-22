import { emailsData } from '@/assets/data/social';
import amazonImg from '@/assets/images/brands/amazon.svg';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useToggle from '@/hooks/useToggle';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Card,
  CardBody,
  Col,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from 'react-bootstrap';
import EmailNavigationMenu from './EmailNavigationMenu';

const EmailArea = () => {
  const [emails, setEmails] = useState(emailsData);
  const { isTrue, toggle } = useToggle();
  const { isTrue: isOpenCompose, toggle: isToggleCompose } = useToggle();

  const showAllEmails = () => {
    setEmails(emailsData);
  };

  /**
   * Mostra apenas os e-mails com estrela
   */
  const showStarredEmails = () => {
    setEmails(emailsData.filter((e) => e.isStar));
  };

  return (
    <>
      <EmailNavigationMenu
        isOpenCompose={isOpenCompose}
        toggleCompose={isToggleCompose}
        showAllEmails={showAllEmails}
        showStarredEmails={showStarredEmails}
      />
      <Card className="flex-grow-1">
        <div className="border-start border-light h-100">
          <CardBody className="py-2">
            <div className="d-flex align-items-center gap-2">
              <button
                type="button"
                className="btn btn-light d-xxl-none d-flex p-1"
                data-bs-toggle="offcanvas"
                data-bs-target="#email-sidebar"
                aria-controls="email-sidebar"
              >
                <IconifyIcon icon="tabler:menu-2" className="fs-17" />
              </button>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
              </div>
              <div className="d-flex align-items-center">
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="danger-tooltip">
                      Marcar como lido
                    </Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-ghost-light text-dark rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    data-bs-title="<span class='fs-12'>Marcar como lido</span>"
                  >
                    <IconifyIcon icon="ri:mail-open-line" className="fs-18" />
                  </button>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="danger-tooltip">Arquivar</Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-ghost-light text-dark rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    data-bs-title="<span class='fs-12'>Arquivar</span>"
                  >
                    <IconifyIcon
                      icon="ri:inbox-archive-line"
                      className="fs-18"
                    />
                  </button>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="danger-tooltip">Excluir</Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-icon btn-ghost-light text-dark rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    data-bs-title="<span class='fs-12'>Excluir</span>"
                  >
                    <IconifyIcon icon="tabler:trash" className="fs-18" />
                  </button>
                </OverlayTrigger>

                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip className="danger-tooltip">
                      Reportar como spam
                    </Tooltip>
                  }
                >
                  <button
                    type="button"
                    className="btn btn-icon btn-sm btn-ghost-light text-dark rounded-circle"
                    data-bs-toggle="tooltip"
                    data-bs-html="true"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                    data-bs-title="<span class='fs-12'>Reportar como spam</span>"
                  >
                    <IconifyIcon
                      icon="ri:delete-bin-2-line"
                      className="fs-18"
                    />
                  </button>
                </OverlayTrigger>
              </div>
              <div className="ms-auto d-xl-flex d-none">
                <div className="app-search">
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Buscar e-mail..."
                  />
                  <IconifyIcon
                    icon="ri:search-line"
                    className="fs-18 app-search-icon text-muted"
                  />
                </div>
              </div>
            </div>
          </CardBody>
          <div className="border-top border-light">
            <div className="table-responsive">
              <Table className="table-hover mail-list mb-0">
                <tbody>
                  {emails.map((item, idx) => {
                    return (
                      <tr
                        className="position-relative"
                        key={idx}
                        onClick={toggle}
                      >
                        <td className="ps-3">
                          <input
                            className="form-check-input position-relative z-2"
                            type="checkbox"
                          />
                        </td>
                        <td>
                          <button className="btn p-0 text-warning fs-16 flex-shrink-0">
                            {item.isStar ? (
                              <IconifyIcon icon="tabler:star-filled" />
                            ) : (
                              <IconifyIcon icon="tabler:star" />
                            )}
                          </button>
                        </td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <img
                              src={item.image}
                              alt="avatar do usuário"
                              className="avatar-md rounded-circle"
                            />
                            <h5 className="fs-14 mb-0 fw-medium">
                              <Link to="#" className="link-reset text-truncate">
                                {item.name}
                              </Link>
                            </h5>
                          </div>
                        </td>
                        <td>
                          <Link
                            data-bs-toggle="modal"
                            to="#email-details-modal"
                            role="button"
                            aria-controls="email-details-modal"
                            className="link-reset text-truncate fs-14 fw-semibold stretched-link"
                          >
                            {item.subTitle}
                          </Link>
                        </td>
                        <td>
                          <div>
                            <span className="fs-14 text-muted text-truncate mb-0">
                              {' '}
                              {item.description}
                            </span>
                          </div>
                        </td>
                        <td>
                          {item.isAttachment && (
                            <Link
                              to="#"
                              className="link-reset text-truncate text-nowrap"
                            >
                              {' '}
                              <IconifyIcon icon="tabler:paperclip" />{' '}
                              {item.isAttachment}{' '}
                            </Link>
                          )}
                        </td>
                        <td>
                          <p className="fs-12 text-muted mb-0 text-end text-truncate">
                            5 de jan, 15:45
                          </p>
                        </td>
                        {item.variant && (
                          <td className="pe-3">
                            <IconifyIcon
                              icon="solar:bolt-circle-bold-duotone"
                              className={`text-${item.variant} fs-16 ms-2 align-middle`}
                            />
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Card>
      <Offcanvas
        show={isTrue}
        onHide={toggle}
        placement={'end'}
        className="offcanvas-end w-lg-50"
        tabIndex={-1}
        id="email-details-modal"
        aria-labelledby="email-details-modalLabel"
      >
        <OffcanvasHeader className="d-flex flex-wrap gap-2 align-items-start">
          <img
            className="me-2 rounded-circle"
            src={avatar2}
            alt="imagem de placeholder"
            height={40}
          />
          <div className="flex-grow-1">
            <h6 className="fs-16 mb-1">Steven Smith</h6>
            <p className="text-muted mb-0">De: jonathan@domain.com</p>
          </div>
          <div>
            <button
              type="button"
              className="btn-close"
              onClick={toggle}
              data-bs-dismiss="offcanvas"
              aria-label="Fechar"
            />
          </div>
        </OffcanvasHeader>
        <OffcanvasBody>
          <h5 className="fs-18">
            Sua recompensa de Otimização Gráfica de autor elite está pronta!
          </h5>
          <hr />
          <p>Olá Coderthemes!</p>
          <p>
            Clicar em ‘Order Service’ no lado direito da página acima levará
            você para a página de pedidos. Este serviço tem as seguintes
            Diretrizes de Briefing que precisam ser preenchidas antes de fazer o
            seu pedido:
          </p>
          <ol>
            <li>
              Suas preferências de design (Cor, estilo, formas, fontes, outros){' '}
            </li>
            <li>Diga-me, por que o seu item é diferente? </li>
            <li>
              Você quer destacar algum recurso específico do seu item? Se sim,
              por favor me conte{' '}
            </li>
            <li>
              Você tem alguma preferência ou algo específico que gostaria de
              mudar ou melhorar na página do seu item?{' '}
            </li>
            <li>
              Você quer incluir o logo do seu item ou do seu fornecedor na
              página? Se sim, por favor envie-o em formato vetorial (Ai ou EPS){' '}
            </li>
            <li>Por favor, me forneça o texto ou a cópia para exibição</li>
          </ol>
          <p>
            Preencher este formulário com as informações acima garantirá que
            eles possam começar o trabalho rapidamente.
          </p>
          <p>
            Você pode concluir o seu pedido colocando o código do cupom na caixa
            de código promocional e clicando em ‘Aplicar Cupom’.
          </p>
          <p>
            <b>Atenciosamente,</b> <br /> Graphic Studio
          </p>
          <hr />
          <h5 className="mb-3 fw-bold">Anexos</h5>
          <Row>
            <Col md={4}>
              <a href="#!" className="d-block">
                <div className="d-flex align-items-center justify-content-between text-dark">
                  <span className="d-inline-block text-truncate fs-13">
                    files.pdf
                  </span>
                  <IconifyIcon
                    icon="tabler:download"
                    className="text-muted fs-14"
                  />
                </div>
              </a>
            </Col>
          </Row>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default EmailArea;
