import LogoBox from '@/components/LogoBox';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import SimplebarReactClient from '@/components/wrappers/SimplebarReactClient';
import React, { lazy, Suspense } from 'react';
import FallbackLoading from '@/components/FallbackLoading';
import { getMenuItems } from '@/helpers/Manu';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import { Dropdown, DropdownHeader, DropdownItem, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { useLayoutContext } from '@/context/useLayoutContext';
import HoverMenuToggle from './components/HoverMenuToggle';
// import AppMenu from './components/AppMenu'

const AppMenu = lazy(() => import('./components/AppMenu'));
const LeftSideBar = () => {
  const menuItems = getMenuItems();
  const {
    mainMenu,
    changeMainMenuSize
  } = useLayoutContext();
  const changeMenu = () => {
    if (mainMenu.size == 'default') {
      changeMainMenuSize('condensed');
    } else if (mainMenu.size == 'full') {
      changeMainMenuSize('default');
    }
  };
  const {
    toggleBackdrop
  } = useLayoutContext();
  return <div className="sidenav-menu">
      <LogoBox />
      {/* <button  className="button-sm-hover">
        <IconifyIcon icon='ri:circle-line' className="align-middle" />
       </button> */}
      <HoverMenuToggle />
      <button onClick={changeMenu} className="sidenav-toggle-button">
        <IconifyIcon icon='ri:menu-5-line' className="fs-20" />
      </button>

      <SimplebarReactClient data-simplebar>
        <div className="sidenav-user">
          <Dropdown className="dropdown-center text-center">
            <DropdownToggle as={'a'} className="topbar-link text-reset drop-arrow-none px-2" data-bs-toggle="dropdown" type="button" aria-haspopup="false" aria-expanded="false">
              <img src={avatar1} width={46} className="rounded-circle" alt="user-image" />
              <span className="d-flex gap-1 sidenav-user-name my-2">
                <span>
                  <span className="mb-0 fw-semibold lh-base fs-15">Adryan de Lima</span>
                  <p className="my-0 fs-13 text-muted">Diretor Geral</p>
                </span>
                <IconifyIcon icon='ri:arrow-down-s-line' className="d-block sidenav-user-arrow align-middle mt-1" />
              </span>
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
              <DropdownItem className=" active fw-semibold text-danger">
                <IconifyIcon icon='ri:logout-box-line' className="me-1 fs-16 align-middle" />
                <span className="align-middle">Sair</span>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>

        <Suspense fallback={<FallbackLoading />}>
          <AppMenu menuItems={menuItems} />
        </Suspense>

        <div className="help-box text-center">
          <h5 className="fw-semibold fs-16">Acesso Ilimitado</h5>
          <p className="mb-3 text-muted">Atualize para o plano para obter acesso a relatórios ilimitados</p>
          <a href="" className="btn btn-danger btn-sm">Atualizar</a>
        </div>
        <div className="clearfix" />
      </SimplebarReactClient>
    </div>;
};
export default LeftSideBar;