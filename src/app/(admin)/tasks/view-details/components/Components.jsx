import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import { Card, CardBody, CardHeader, Col } from 'react-bootstrap';

const Components = () => {
  return (
    <Col xl={4}>
      <Card>
        <CardHeader className="d-flex justify-content-between align-items-center border-bottom border-dashed">
          <h4 className="header-title">Comentários (51)</h4>
          <div>
            <select className="form-select form-select-sm">
              <option selected>Recentes</option>
              <option value={1}>Mais úteis</option>
              <option value={2}>Maior para menor</option>
              <option value={3}>Menor para maior</option>
            </select>
          </div>
        </CardHeader>
        <CardBody>
          <div className="d-flex">
            <img
              className="me-2 rounded-circle"
              src={avatar3}
              alt="Imagem genérica"
              height={32}
            />
            <div className="flex-1">
              <h5 className="mt-0">
                Barry Gould
                <small className="text-muted fw-normal float-end">
                  há 5 horas
                </small>
              </h5>
              Ótimo trabalho, me faz lembrar de The Money Pit.
              <br />
              <a href="" className="text-muted fs-13 d-inline-block mt-2">
                <IconifyIcon icon="tabler:corner-up-left" /> Responder
              </a>
              <div className="d-flex align-items-start mt-3">
                <a className="pe-2" href="#">
                  <img
                    src={avatar4}
                    className="rounded-circle"
                    alt="Imagem genérica"
                    height={32}
                  />
                </a>
                <div className="flex-1">
                  <h5 className="mt-0">
                    Louis Hill
                    <small className="text-muted fw-normal float-end">
                      há 3 horas
                    </small>
                  </h5>
                  Eu mesmo estou no meio de uma animação de timelapse! (Muito
                  diferente, no entanto.) Coisa incrível.
                  <br />
                  <a href="" className="text-muted fs-13 d-inline-block mt-2">
                    <IconifyIcon icon="tabler:corner-up-left" /> Responder
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-start mt-3">
            <img
              className="me-2 rounded-circle"
              src={avatar5}
              alt="Imagem genérica"
              height={32}
            />
            <div className="flex-1">
              <h5 className="mt-0">
                Aaron Wilson
                <small className="text-muted fw-normal float-end">
                  há 1 dia
                </small>
              </h5>
              Seria muito bom ter.
              <br />
              <a href="" className="text-muted fs-13 d-inline-block mt-2">
                <IconifyIcon icon="tabler:corner-up-left" /> Responder
              </a>
            </div>
          </div>
          <div className="text-center mt-2">
            <a href="" className="text-danger">
              <IconifyIcon icon="tabler:loader" className=" ti-spin me-1" />{' '}
              Carregar mais
            </a>
          </div>
          <div className="border rounded mt-4">
            <form action="#" className="comment-area-box">
              <textarea
                rows={3}
                className="form-control border-0 resize-none"
                placeholder="Seu comentário..."
                defaultValue={''}
              />
              <div className="p-2 bg-light d-flex justify-content-between align-items-center">
                <div>
                  <a href="#" className="btn btn-sm px-1 btn-light">
                    <IconifyIcon icon="tabler:upload" className="" />
                  </a>
                  <a href="#" className="btn btn-sm px-1 btn-light">
                    <IconifyIcon icon="tabler:at" className="" />
                  </a>
                </div>
                <button type="submit" className="btn btn-sm btn-success">
                  <IconifyIcon icon="tabler:send" className=" me-1" />
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Components;
