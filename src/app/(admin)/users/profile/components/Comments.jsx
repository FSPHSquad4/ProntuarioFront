import IconifyIcon from '@/components/wrappers/IconifyIcon';
import React from 'react';
import avatar1 from '@/assets/images/users/avatar-1.jpg';
import small1 from '@/assets/images/small/small-1.jpg';
import small2 from '@/assets/images/small/small-2.jpg';
import small3 from '@/assets/images/small/small-3.jpg';
import avatar3 from '@/assets/images/users/avatar-3.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import { Card, CardBody } from 'react-bootstrap';

const Comments = () => {
  return (
    <Card>
      <CardBody>
        <form method="post" className="mb-4">
          <div className="input-group">
            <textarea
              rows={3}
              className="form-control"
              placeholder="Postar uma nova mensagem"
              defaultValue={''}
            />
            <button className="btn btn-primary btn-sm">Enviar</button>
          </div>
          <ul className="nav nav-pills bg-light bg-opacity-50 rounded-bottom mt-n1 pt-1 d-flex justify-content-start">
            <li className="nav-item">
              <a href="#" className="nav-link fs-18 px-2 py-1">
                <IconifyIcon icon="tabler:user" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link fs-18 px-2 py-1">
                <IconifyIcon icon="tabler:send" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link fs-18 px-2 py-1">
                <IconifyIcon icon="tabler:camera" />
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link fs-18 px-2 py-1">
                <IconifyIcon icon="tabler:mood-smile" />
              </a>
            </li>
          </ul>
        </form>
        <div className="d-flex align-items-top mb-2">
          <img
            src={avatar1}
            alt="avatar1"
            className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
          />
          <div className="flex-grow-1">
            <h5 className="mt-0">
              <a href="#" className="text-dark">
                Adam Jansen
              </a>
              <small className="ms-1 text-muted">há cerca de 2 minutos</small>
            </h5>
            <p>
              História baseada na ideia de time lapse, animação será postada em
              breve!
            </p>
            <div>
              <a href="">
                <img alt="" src={small1} className="avatar-md rounded" />
              </a>
              &nbsp;
              <a href="">
                <img alt="" src={small2} className="avatar-md rounded" />
              </a>
              &nbsp;
              <a href="">
                <img alt="" src={small3} className="avatar-md rounded" />
              </a>
            </div>
            <div className="d-flex gap-2 align-items-center fs-14 pt-2 mb-3">
              <a href="#" className="text-muted">
                <IconifyIcon icon="tabler:thumb-up" />
              </a>
              <a href="#" className="text-muted">
                <IconifyIcon icon="tabler:thumb-down" />
              </a>
              <a href="#" className="text-muted">
                Responder
              </a>
            </div>
            <div className="d-flex align-items-top mb-2">
              <img
                src={avatar3}
                alt="avatar3"
                className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
              />
              <div className="flex-grow-1">
                <h5 className="mt-0">
                  <a href="#" className="text-dark">
                    John Smith
                  </a>
                  <small className="ms-1 text-muted">há cerca de 1 hora</small>
                </h5>
                <p>Uau, impressionante!</p>
                <div className="d-flex gap-2 align-items-center fs-14">
                  <a href="#" className="text-muted">
                    <IconifyIcon icon="tabler:thumb-up" />
                  </a>
                  <a href="#" className="text-muted">
                    <IconifyIcon icon="tabler:thumb-down" />
                  </a>
                  <a href="#" className="text-muted">
                    Responder
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-top">
              <img
                src={avatar4}
                alt="avatar4"
                className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
              />
              <div className="flex-grow-1">
                <h5 className="mt-0">
                  <a href="#" className="text-dark">
                    Matt Cheuvront
                  </a>
                  <small className="ms-1 text-muted">há cerca de 2 horas</small>
                </h5>
                <p>Uau, isso é realmente legal.</p>
                <div className="d-flex gap-2 align-items-center fs-14 mb-3">
                  <a href="#" className="text-muted">
                    <IconifyIcon icon="tabler:thumb-up" />
                  </a>
                  <a href="#" className="text-muted">
                    <IconifyIcon icon="tabler:thumb-down" />
                  </a>
                  <a href="#" className="text-muted">
                    Responder
                  </a>
                </div>
                <div className="d-flex align-items-top mb-2">
                  <img
                    src={avatar5}
                    alt="avatar5"
                    className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mt-0">
                      <a href="#" className="text-dark">
                        Stephanie Walter
                      </a>
                      <small className="ms-1 text-muted">
                        há cerca de 3 horas
                      </small>
                    </h5>
                    <p>Bom trabalho, me faz pensar no filme "The Money Pit".</p>
                    <div className="d-flex gap-2 align-items-center fs-14">
                      <a href="#" className="text-muted">
                        <IconifyIcon icon="tabler:thumb-up" />
                      </a>
                      <a href="#" className="text-muted">
                        <IconifyIcon icon="tabler:thumb-down" />
                      </a>
                      <a href="#" className="text-muted">
                        Responder
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-top mb-3">
          <img
            src={avatar6}
            alt="avatar6"
            className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
          />
          <div className="flex-grow-1">
            <h5 className="mt-0">
              <a href="#" className="text-dark">
                John Smith
              </a>
              <small className="ms-1 text-muted">há cerca de 4 horas</small>
            </h5>
            <p>
              Estou no meio de uma animação em time lapse também! (Muito
              diferente, porém.) Coisas incríveis.
            </p>
            <div className="d-flex gap-2 align-items-center fs-14">
              <a href="#" className="text-muted">
                <IconifyIcon icon="tabler:thumb-up" />
              </a>
              <a href="#" className="text-muted">
                <IconifyIcon icon="tabler:thumb-down" />
              </a>
              <a href="#" className="text-muted">
                Responder
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-top mb-3">
          <img
            src={avatar7}
            alt="avatar7"
            className="flex-shrink-0 comment-avatar avatar-sm rounded me-2"
          />
          <div className="flex-grow-1">
            <h5 className="mt-0">
              <a href="#" className="text-dark">
                Nicolai Larson
              </a>
              <small className="ms-1 text-muted">há cerca de 10 horas</small>
            </h5>
            <p>
              A parallax está um pouco estranha, mas O.o aquela construção da
              casa é impressionante!!
            </p>
            <div className="d-flex gap-2 align-items-center fs-14">
              <a href="#" className="text-muted">
                <IconifyIcon icon="tabler:thumb-up" />
              </a>
              <a href="#" className="text-muted">
                <IconifyIcon icon="tabler:thumb-down" />
              </a>
              <a href="#" className="text-muted">
                Responder
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a href="" className="text-danger">
            <IconifyIcon icon="tabler:loader" className="me-1" />
            Carregar mais{' '}
          </a>
        </div>
      </CardBody>
    </Card>
  );
};

export default Comments;
