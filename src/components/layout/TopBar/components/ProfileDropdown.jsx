import React from 'react';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
const ProfileDropdown = () => {
  return <div className="topbar-item nav-user">
      <Dropdown>
        <DropdownToggle className="topbar-link drop-arrow-none px-2" data-bs-toggle="dropdown" data-bs-offset="0,25" type="button" aria-haspopup="false" aria-expanded="false">
          <img src={avatar1} width={32} className="rounded-circle me-lg-2 d-flex" alt="user-image" />
          <span className="d-lg-flex flex-column gap-1 d-none">
            <h5 className="my-0">Adryan de Lima</h5>
          </span>
          <IconifyIcon icon='ri:arrow-down-s-line' className="d-none d-lg-block align-middle ms-1" />
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <DropdownHeader className="noti-title">
            <h6 className="text-overflow m-0">Bem Vindo !</h6>
          </DropdownHeader>
          <DropdownItem>
            <IconifyIcon icon='ri:account-circle-line' className="me-1 fs-16 align-middle" />
            <span className="align-middle">Meu Perfil</span>
          </DropdownItem>
          <DropdownItem>
            <IconifyIcon icon='ri:wallet-3-line' className="me-1 fs-16 align-middle" />
            <span className="align-middle">Carteira : <span className="fw-semibold">R$89.25k</span></span>
          </DropdownItem>
          <DropdownItem>
            <IconifyIcon icon='ri:settings-2-line' className="me-1 fs-16 align-middle" />
            <span className="align-middle">Configurações</span>
          </DropdownItem>
          <DropdownItem>
            <IconifyIcon icon='ri:question-line' className="me-1 fs-16 align-middle" />
            <span className="align-middle">Suporte</span>
          </DropdownItem>
          <div className="dropdown-divider" />
          <DropdownItem>
            <IconifyIcon icon='ri:lock-line' className="me-1 fs-16 align-middle" />
            <span className="align-middle">Bloquear</span>
          </DropdownItem>
          <DropdownItem href="" className="active fw-semibold text-danger">
            <IconifyIcon icon='ri:logout-box-line' className="me-1 fs-16 align-middle" />
            <span className="align-middle">Sair</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>;
};
export default ProfileDropdown;