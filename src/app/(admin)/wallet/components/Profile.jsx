import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import avatar9 from '@/assets/images/users/avatar-9.jpg';
import {
  Card,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'react-bootstrap';

const Profile = () => {
  return (
    <Card>
      <div className="text-center card-body">
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
        <div>
          <img
            src={avatar9}
            className="rounded-circle avatar-xl img-thumbnail mb-3"
            alt="imagem de perfil"
          />
          <p className="text-muted fs-13 mb-4">
            Olá, sou um designer web apaixonado e criativo, com um olhar atento
            para estética e funcionalidade.
          </p>
          <div className="text-start">
            <p className="text-muted fs-13">
              <strong>Nome Completo :</strong>{' '}
              <span className="ms-2">Johnathan Deo</span>
            </p>
            <p className="text-muted fs-13">
              <strong>Celular :</strong>
              <span className="ms-2">(123) 123 1234</span>
            </p>
            <p className="text-muted fs-13">
              <strong>Email :</strong>{' '}
              <span className="ms-2">coderthemes@gmail.com</span>
            </p>
            <p className="text-muted fs-13">
              <strong>Localização :</strong> <span className="ms-2">EUA</span>
            </p>
          </div>
          <ul className="list-inline mt-2 mb-0">
            <li className="list-inline-item">
              <a
                href=""
                className="border border-primary text-primary rounded-circle p-1 fs-16 d-flex justify-content-center align-items-center"
              >
                <IconifyIcon icon="tabler:brand-facebook" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href=""
                className="border border-danger text-danger rounded-circle p-1 fs-16 d-flex justify-content-center align-items-center"
              >
                <IconifyIcon icon="tabler:brand-google" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href=""
                className="border border-info text-info rounded-circle p-1 fs-16 d-flex justify-content-center align-items-center"
              >
                <IconifyIcon icon="tabler:brand-twitter" />
              </a>
            </li>
            <li className="list-inline-item">
              <a
                href=""
                className="border border-secondary text-secondary rounded-circle p-1 fs-16 d-flex justify-content-center align-items-center"
              >
                <IconifyIcon icon="tabler:brand-github" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};
export default Profile;
