import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import avatar2 from '@/assets/images/users/avatar-2.jpg';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Card>
      <CardHeader className="border-bottom border-dashed">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-1">Redesign do Painel Administrativo Adminto</h4>
            <p className="fw-semibold mb-0">
              <span className="badge bg-danger">Urgente</span>{' '}
            </p>
          </div>
          <Dropdown align="end">
            <DropdownToggle
              as="a"
              className="drop-arrow-none card-drop"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <IconifyIcon icon="ri:more-2-fill" className="fs-18" />
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-end">
              <DropdownItem>
                <IconifyIcon icon="tabler:paperclip" className="me-1" />
                Anexo
              </DropdownItem>
              <DropdownItem>
                <IconifyIcon icon="tabler:pencil" className="me-1" />
                Editar
              </DropdownItem>
              <DropdownItem>
                <IconifyIcon icon="tabler:copy" className="me-1" />
                Marcar como Duplicado
              </DropdownItem>
              <div className="dropdown-divider" />
              <DropdownItem className="text-danger">
                <IconifyIcon icon="tabler:trash" className="me-1" />
                Excluir
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardHeader>
      <CardBody>
        <Row>
          <Col lg={4} sm={6}>
            <div className="d-flex align-items-start">
              <div className="me-2 align-self-center">
                <IconifyIcon icon="ri:hashtag" className="h2 m-0 text-muted" />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="mb-1 text-muted fs-12">ID da Tarefa</p>
                <h5 className="m-0 text-truncate">#MN2048</h5>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="d-flex align-items-start">
              <div className="me-2 align-self-center">
                <img
                  src={avatar2}
                  alt="avatar2"
                  className="avatar-sm rounded-circle"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="mb-1 text-muted fs-12">Atribuído a</p>
                <h5 className="m-0 text-truncate">Darnell McCormick</h5>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="d-flex align-items-start">
              <div className="me-2 align-self-center">
                <IconifyIcon
                  width={16}
                  height={16}
                  icon="ri:calendar-event-line"
                  className="h2 m-0 text-muted"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="mb-1 text-muted fs-12">Data de Vencimento</p>
                <h5 className="m-0 text-truncate">Hoje às 10h</h5>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-4">
          <div>
            <h5>Visão geral:</h5>
            <p className="text-muted">
              Redesenhamos completamente e melhoramos nosso painel
              administrativo para oferecer uma experiência mais intuitiva,
              eficiente e fácil de usar. Com uma interface moderna, navegação
              aprimorada e design responsivo, o novo painel oferece uma
              experiência contínua em todos os dispositivos, garantindo fluxos
              de trabalho mais suaves e funcionalidade aprimorada para todos os
              usuários.
            </p>
            <div className="mt-3">
              <h5>Tags:</h5>
              <div>
                <a href="#" className="badge badge-soft-primary p-1">
                  Photoshop
                </a>
                &nbsp;
                <a href="#" className="badge badge-soft-primary p-1">
                  Html
                </a>
                &nbsp;
                <a href="#" className="badge badge-soft-primary p-1">
                  Css
                </a>
                &nbsp;
                <a href="#" className="badge badge-soft-primary p-1">
                  Bootstrap
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h5>Checklists/Subtarefas</h5>
            <div className="form-check mt-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="checklistcheck01"
              />
              <label
                className="form-check-label strikethrough"
                htmlFor="checklistcheck01"
              >
                Encontrar os documentos do contrato antigo
              </label>
            </div>
            <div className="form-check mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checklistcheck02"
              />
              <label
                className="form-check-label strikethrough"
                htmlFor="checklistcheck02"
              >
                Organizar reunião com os associados de vendas para entender a
                necessidade em detalhes
              </label>
            </div>
            <div className="form-check mt-1">
              <input
                className="form-check-input"
                type="checkbox"
                id="checklistcheck03"
              />
              <label
                className="form-check-label strikethrough"
                htmlFor="checklistcheck03"
              >
                Garantir que todos os pequenos detalhes sejam cobertos
              </label>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Dashboard;
