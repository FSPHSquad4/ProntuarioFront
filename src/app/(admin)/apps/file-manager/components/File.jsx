import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Offcanvas,
  Table,
} from 'react-bootstrap';
import useToggle from '@/hooks/useToggle';
import OffcanvasCard from './OffcanvasCard';
import { getAllFiles } from '@/helpers/data';
import { useFetchData } from '@/hooks/useFetchData';

const File = () => {
  const { isTrue, toggle } = useToggle();
  console.log(isTrue);
  const recentData = useFetchData(getAllFiles);
  return (
    <>
      <div className="card w-100">
        <div className="p-3 d-flex align-items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            className="btn btn-sm btn-icon btn-light d-xxl-none d-flex p-1"
            data-bs-toggle="offcanvas"
            data-bs-target="#fileManagerSidebar"
            aria-controls="fileManagerSidebar"
          >
            <IconifyIcon icon="ri:menu-2-line" className="lh-1 fs-17" />
          </button>
          <h4 className="header-title me-auto">Arquivos</h4>
          <a
            href="#"
            className="link-reset fw-medium text-decoration-underline link-offset-2"
          >
            Ver Todos <IconifyIcon icon="ri:arrow-right-line" />
          </a>
        </div>
        <div className="table-responsive">
          <Table className="table-centered table-nowrap border-top mb-0">
            <thead className="bg-light bg-opacity-25">
              <tr>
                <th className="ps-3 fw-bold fs-12 text-uppercase text-muted">
                  Nome
                </th>
                <th className="fs-12 fw-bold text-uppercase text-muted">
                  Enviado Por
                </th>
                <th className="fs-12 fw-bold text-uppercase text-muted">
                  Tamanho
                </th>
                <th className="fs-12 fw-bold text-uppercase text-muted">
                  Última Atualização
                </th>
                <th className="fs-12 fw-bold text-uppercase text-muted">
                  Membros
                </th>
                <th
                  className="fs-12 fw-bold text-uppercase text-muted"
                  style={{
                    width: 80,
                  }}
                >
                  Ação
                </th>
              </tr>
            </thead>
            <tbody>
              {recentData?.map((item, idx) => (
                <tr key={idx}>
                  <td className="ps-3">
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className={`flex-shrink-0 avatar-md bg-${item.fileVariant}-subtle d-inline-flex align-items-center justify-content-center rounded-2`}
                      >
                        <IconifyIcon
                          icon={item.icon}
                          className={`fs-22 text-${item.fileVariant}`}
                        />
                      </div>
                      <div>
                        <span className="fw-medium">
                          <a href="" className="text-reset">
                            {item.title}
                          </a>
                        </span>
                        <p className="mb-0 fs-12">{item.file}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <div>
                        <a href="">
                          {item.user?.image && (
                            <img
                              src={item.user?.image}
                              className="rounded-circle avatar-md"
                              alt="amigo"
                            />
                          )}
                        </a>
                      </div>
                      <div>
                        <p className="mb-0 fw-medium">{item.user?.name}</p>
                        <span className="fs-12">{item.user?.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{item.size} MB</td>
                  <td>
                    {item.date.toLocaleString('pt-br', {
                      month: 'short',
                      day: '2-digit',
                      year: 'numeric',
                    })}
                  </td>
                  <td>
                    <div className="avatar-group flex-nowrap">
                      {item.members.map((member, idx) => (
                        <div className="avatar avatar-sm" key={idx}>
                          <span
                            className={`avatar-title bg-${member.variant} rounded-circle fw-bold`}
                          >
                            {member.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>
                    <Dropdown className="dropdown flex-shrink-0 text-muted">
                      <DropdownToggle
                        as={'a'}
                        className="drop-arrow-none fs-20 link-reset"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <IconifyIcon icon="ri:more-2-fill" />
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>
                          <IconifyIcon icon="ri:share-line" className="me-1" />{' '}
                          Compartilhar
                        </DropdownItem>
                        <DropdownItem>
                          <IconifyIcon icon="ri:link" className="me-1" /> Obter
                          Link Compartilhável
                        </DropdownItem>
                        <DropdownItem href={avatar1} download>
                          <IconifyIcon
                            icon="ri:download-line"
                            className="me-1"
                          />
                          Baixar
                        </DropdownItem>
                        <DropdownItem>
                          <IconifyIcon
                            icon="ri:pushpin-2-line"
                            className=" me-1"
                          />{' '}
                          Fixar
                        </DropdownItem>
                        <DropdownItem>
                          <IconifyIcon
                            icon="ri:edit-box-line"
                            className="me-1"
                          />{' '}
                          Editar
                        </DropdownItem>
                        <DropdownItem>
                          <IconifyIcon
                            icon="ri:delete-bin-line"
                            className="me-1"
                          />{' '}
                          Excluir
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      {isTrue && (
        <Offcanvas
          show={isTrue}
          onHide={toggle}
          className=" offcanvas-xl offcanvas-start file-manager"
          tabIndex={-1}
          id="fileManagerSidebar"
          aria-labelledby="fileManagerSidebarLabel"
        >
          <OffcanvasCard toggle={toggle} />
        </Offcanvas>
      )}
    </>
  );
};

export default File;
