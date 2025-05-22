import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import {
  Card,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'react-bootstrap';

const Reminders = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="d-flex justify-content-between align-items-center border-bottom border-dashed">
        <h4 className="header-title mb-0">Lembretes Futuros</h4>
        <Dropdown className="float-end">
          <DropdownToggle
            as={'a'}
            className="drop-arrow-none card-drop"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <IconifyIcon icon="ri:more-2-fill" className="fs-18" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem>Relatório de Vendas</DropdownItem>
            <DropdownItem>Exportar Relatório</DropdownItem>
            <DropdownItem>Lucro</DropdownItem>
            <DropdownItem>Ação</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
      <ul className="list-group mb-0 list-group-flush">
        <li className="list-group-item border-light">
          <div className="d-flex align-items-center gap-2">
            <div className="me-1">
              <IconifyIcon icon="ri:circle-fill" className="text-primary" />
            </div>
            <div>
              <h5 className="mb-1">Reunião com o Gerente</h5>
              <span className="text-muted fs-12 text-truncate d-block">
                24 de Fevereiro de 2025 - 10:30 às 12:45
              </span>
            </div>
            <div className="ms-auto">
              <a
                href="#"
                className="text-decoration-underline fw-semibold ms-auto link-offset-2"
              >
                Ver <i className="ti ti-arrow" />
              </a>
            </div>
          </div>
        </li>
        <li className="list-group-item border-light">
          <div className="d-flex align-items-center gap-2">
            <div className="me-1">
              <IconifyIcon icon="ri:circle-fill" className="text-success" />
            </div>
            <div>
              <h5 className="mb-1">Reunião da Equipe</h5>
              <span className="text-muted fs-12 text-truncate d-block">
                25 de Fevereiro de 2025 - 9:00 às 9:30
              </span>
            </div>
            <div className="ms-auto">
              <a
                href="#"
                className="text-decoration-underline fw-semibold ms-auto link-offset-2"
              >
                Ver <i className="ti ti-arrow" />
              </a>
            </div>
          </div>
        </li>
        <li className="list-group-item border-light">
          <div className="d-flex align-items-center gap-2">
            <div className="me-1">
              <IconifyIcon icon="ri:circle-fill" className="text-danger" />
            </div>
            <div>
              <h5 className="mb-1">Apresentação para Cliente</h5>
              <span className="text-muted fs-12 text-truncate d-block">
                26 de Fevereiro de 2025 - 14:00 às 16:00
              </span>
            </div>
            <div className="ms-auto">
              <a
                href="#"
                className="text-decoration-underline fw-semibold ms-auto link-offset-2"
              >
                Ver <i className="ti ti-arrow" />
              </a>
            </div>
          </div>
        </li>
        <li className="list-group-item border-light">
          <div className="d-flex align-items-center gap-2">
            <div className="me-1">
              <IconifyIcon icon="ri:circle-fill" className="text-warning" />
            </div>
            <div>
              <h5 className="mb-1">Início do Projeto</h5>
              <span className="text-muted fs-12 text-truncate d-block">
                27 de Fevereiro de 2025 - 11:00 às 13:00
              </span>
            </div>
            <div className="ms-auto">
              <a
                href="#"
                className="text-decoration-underline fw-semibold ms-auto link-offset-2"
              >
                Ver <i className="ti ti-arrow" />
              </a>
            </div>
          </div>
        </li>
        <li className="list-group-item border-light">
          <div className="d-flex align-items-center gap-2">
            <div className="me-1">
              <IconifyIcon icon="ri:circle-fill" className="text-info" />
            </div>
            <div>
              <h5 className="mb-1">Revisão Mensal</h5>
              <span className="text-muted fs-12 text-truncate d-block">
                28 de Fevereiro de 2025 - 15:00 às 17:00
              </span>
            </div>
            <div className="ms-auto">
              <a
                href="#"
                className="text-decoration-underline fw-semibold ms-auto link-offset-2"
              >
                Ver <i className="ti ti-arrow" />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </Card>
  );
};

export default Reminders;
