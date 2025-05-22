import IconifyIcon from '@/components/wrappers/IconifyIcon';
import useToggle from '@/hooks/useToggle';
import { Link } from 'react-router-dom';
import { CardBody, Collapse } from 'react-bootstrap';
import ComposeEmailModal from './ComposeEmailModal';

const EmailNavigationMenu = ({
  showAllEmails,
  showStarredEmails,
  isOpenCompose,
  toggleCompose,
}) => {
  const { isTrue, toggle } = useToggle(true);
  const { isTrue: isLabels, toggle: toggleLabels } = useToggle(true);

  return (
    <div className="card email-sidebar">
      <div
        className="offcanvas-xxl offcanvas-start"
        tabIndex={-1}
        id="email-sidebar"
        aria-labelledby="email-sidebarLabel"
      >
        <CardBody>
          <div className="d-flex justify-content-between gap-2 align-items-center mb-2">
            <button
              type="button"
              onClick={toggleCompose}
              className="btn btn-danger fw-semibold w-100"
              data-bs-toggle="modal"
              data-bs-target="#email-compose-modal"
            >
              Compor
            </button>
            <button
              type="button"
              className="btn btn-sm btn-icon btn-soft-danger ms-auto d-xl-none"
              data-bs-dismiss="offcanvas"
              data-bs-target="#email-sidebar"
              aria-label="Fechar"
            >
              <IconifyIcon icon="tabler:x" />
            </button>
          </div>
          <div className="email-menu-list d-flex flex-column gap-1">
            <Link to="" onClick={showAllEmails}>
              <IconifyIcon
                icon="solar:inbox-outline"
                className="me-2 fs-18 text-muted"
              />
              <span>Caixa de entrada</span>
              <span className="badge bg-danger-subtle fs-12 text-danger ms-auto">
                21
              </span>
            </Link>
            <Link to="">
              <IconifyIcon
                icon="solar:map-arrow-right-outline"
                className="me-2 fs-18 text-muted"
              />
              <span>Enviados</span>
            </Link>
            <Link to="" onClick={showStarredEmails}>
              <IconifyIcon
                icon="solar:star-outline"
                className="me-2 fs-18 text-muted"
              />
              <span>Destacados</span>
            </Link>
            <Link to="">
              <IconifyIcon
                icon="solar:clock-circle-outline"
                className="me-2 fs-18 text-muted"
              />
              <span>Agendados</span>
            </Link>
            <Link to="">
              <IconifyIcon
                icon="solar:clapperboard-edit-outline"
                className="me-2 fs-18 text-muted"
              />
              <span>Rascunhos</span>
            </Link>
          </div>
        </CardBody>
        <CardBody className="border-top border-light">
          <div
            onClick={toggle}
            className="btn-link d-flex align-items-center text-muted fw-bold fs-12 text-uppercase mb-0"
            data-bs-toggle="collapse"
            data-bs-target="#other"
            aria-expanded="false"
            aria-controls="other"
          >
            Outros{' '}
            <IconifyIcon icon="tabler:chevron-down" className="ms-auto" />
          </div>
          <Collapse in={isTrue}>
            <div>
              <div className="email-menu-list d-flex flex-column gap-1 mt-2">
                <Link to="">
                  <IconifyIcon
                    icon="solar:mailbox-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Todas as mensagens</span>
                </Link>
                <Link to="">
                  <IconifyIcon
                    icon="solar:trash-bin-trash-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Lixeira</span>
                </Link>
                <Link to="">
                  <IconifyIcon
                    icon="solar:info-square-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Spam</span>
                </Link>
                <Link to="">
                  <IconifyIcon
                    icon="solar:chat-round-line-outline"
                    className="me-2 fs-18 text-muted"
                  />
                  <span>Chats</span>
                </Link>
              </div>
            </div>
          </Collapse>
        </CardBody>
        <CardBody className="border-top border-light">
          <div
            onClick={toggleLabels}
            className="btn-link d-flex align-items-center text-muted fw-bold fs-12 text-uppercase mb-0"
            data-bs-toggle="collapse"
            data-bs-target="#labels"
            aria-expanded="false"
            aria-controls="labels"
          >
            Rótulos{' '}
            <IconifyIcon icon="tabler:chevron-down" className="ms-auto" />
          </div>
          <Collapse in={isLabels}>
            <div>
              <div className="email-menu-list d-flex flex-column gap-1 mt-2">
                <Link to="">
                  <IconifyIcon
                    icon="solar:bolt-circle-bold-duotone"
                    className="text-success fs-16 me-2"
                  />
                  <span>Pessoal</span>
                </Link>
                <Link to="">
                  <IconifyIcon
                    icon="solar:bolt-circle-bold-duotone"
                    className="text-danger fs-16 me-2"
                  />
                  <span>Cliente</span>
                </Link>
                <Link to="">
                  <IconifyIcon
                    icon="solar:bolt-circle-bold-duotone"
                    className="text-info fs-16 me-2"
                  />
                  <span>Marketing</span>
                </Link>
                <Link to="">
                  <IconifyIcon
                    icon="solar:bolt-circle-bold-duotone"
                    className="text-secondary fs-16 me-2"
                  />
                  <span>Escritório</span>
                </Link>
              </div>
            </div>
          </Collapse>
        </CardBody>
      </div>
      <ComposeEmailModal
        isOpen={isOpenCompose}
        toggleComposeModal={toggleCompose}
      />
    </div>
  );
};

export default EmailNavigationMenu;
