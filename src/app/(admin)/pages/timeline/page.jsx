import small1 from '@/assets/images/small/small-1.jpg';
import small2 from '@/assets/images/small/small-2.jpg';
import small4 from '@/assets/images/small/small-4.jpg';
import small7 from '@/assets/images/small/small-7.jpg';
import avatar10 from '@/assets/images/users/avatar-10.jpg';
import avatar4 from '@/assets/images/users/avatar-4.jpg';
import avatar5 from '@/assets/images/users/avatar-5.jpg';
import avatar6 from '@/assets/images/users/avatar-6.jpg';
import avatar7 from '@/assets/images/users/avatar-7.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const TimelinePage = () => {
  const timeLine3 = [avatar4, avatar5, avatar6, avatar7];
  const timeLine4 = [small7, small4, small1, small2];
  return (
    <>
      <PageBreadcrumb title="Linha do Tempo" />
      <Row className="justify-content-center">
        <Col xxl={10}>
          <div className="timeline" dir="ltr">
            <div className="timeline-show mb-3 text-center">
              <h5 className="m-0 time-show-name">Hoje</h5>
            </div>
            <div className="timeline-lg-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt shadow-none" />
                  <span className="timeline-icon avatar-sm">
                    <span className="avatar-title bg-light rounded-circle">
                      <IconifyIcon
                        icon="solar:sticker-smile-circle-2-bold-duotone"
                        className="text-success fs-28"
                      />
                    </span>
                  </span>
                  <div className="mb-2">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2 text-dark fw-semibold fs-16">
                        Projeto Concluído: Conquistas e Resultados
                      </p>
                      <p className="mb-0">Há 1hr</p>
                    </div>
                    <p className="mb-1">
                      <IconifyIcon
                        icon="tabler:checks"
                        className="text-success me-1 fs-16"
                      />
                      Objetivos e metas do projeto cumpridos com sucesso dentro
                      do prazo estipulado.
                    </p>
                    <p className="mb-0">
                      <IconifyIcon
                        icon="tabler:checks"
                        className="text-success me-1 fs-16"
                      />
                      Entregamos resultados de alta qualidade que atendem ou
                      superam as expectativas das partes interessadas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-lg-item timeline-item-right">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow shadow-none" />
                  <span className="timeline-icon avatar-sm">
                    <span className="avatar-title bg-light rounded-circle">
                      <IconifyIcon
                        icon="solar:sticker-smile-circle-2-bold-duotone"
                        className="text-success fs-28"
                      />
                    </span>
                  </span>
                  <div className="d-flex align-items-center  gap-2">
                    <img
                      src={avatar10}
                      alt="avatar"
                      className="avatar-lg rounded-circle border border-light border-2"
                    />
                    <div>
                      <p className="text-dark fw-medium fs-15 mb-0">
                        Sara Johnson
                      </p>
                      <p className="mb-0">srajhnson@yeti.com</p>
                    </div>
                    <div className="ms-auto">
                      <p className="mb-0">Há 2hr</p>
                    </div>
                  </div>
                  <p className="mb-2 text-dark fw-semibold fs-16 my-3">
                    Entrou como desenvolvedora full stack
                  </p>
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12">
                    html
                  </span>
                  &nbsp;
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12">
                    CSS
                  </span>
                  &nbsp;
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12">
                    JavaScript
                  </span>
                  &nbsp;
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12">
                    NodeJS
                  </span>
                  &nbsp;
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12">
                    ExpressJS
                  </span>
                  &nbsp;
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12">
                    ExpressJS
                  </span>
                  &nbsp;
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12">
                    Django
                  </span>
                  &nbsp;
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12">
                    MySQL
                  </span>
                  &nbsp;
                  <span className="badge bg-light-subtle border text-dark fw-medium px-2 py-1 fs-12 my-1">
                    PostgreSQL
                  </span>
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="timeline-lg-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt shadow-none" />
                  <span className="timeline-icon avatar-sm">
                    <span className="avatar-title bg-light rounded-circle">
                      <IconifyIcon
                        icon="solar:sticker-smile-circle-2-bold-duotone"
                        className="text-success fs-28"
                      />
                    </span>
                  </span>
                  <div className="mb-2">
                    <div className="d-flex justify-content-between">
                      <p className="mb-2 text-dark fw-semibold fs-16">
                        Iniciada Reunião da Empresa
                      </p>
                      <p className="mb-0">Há 2hr</p>
                    </div>
                    <div className="d-flex flex-wrap align-items-center my-1 gap-1">
                      <div className="avatar-group">
                        {timeLine3.map((img, idx) => (
                          <div className="avatar" key={idx}>
                            <img
                              src={img}
                              alt="avatar"
                              className="rounded-circle avatar-sm"
                            />
                          </div>
                        ))}
                        <div className="avatar">
                          <div className="avatar-sm">
                            <span className="avatar-title bg-dark text-white fs-18 rounded-circle">
                              <IconifyIcon icon="tabler:plus" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="mb-0 ms-1 fs-14">
                        +23 Funcionários Participaram da Reunião
                      </p>
                    </div>
                    <p className="mb-0 mt-3 text-dark fw-semibold">
                      Tópico:{' '}
                      <span className="text-muted fw-medium">
                        Novo projeto e painel de administração
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-lg-item timeline-item-right">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow shadow-none" />
                  <span className="timeline-icon avatar-sm">
                    <span className="avatar-title bg-light rounded-circle">
                      <IconifyIcon
                        icon="solar:sticker-smile-circle-2-bold-duotone"
                        className="text-success fs-28"
                      />
                    </span>
                  </span>
                  <div className="">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <h4 className="text-dark mb-0 fw-semibold">
                        {' '}
                        Novo Lançamento do Admin no Bootstrap{' '}
                        <span className="badge bg-success-subtle text-success px-2 py-1 fs-11 ms-1">
                          Novo Lançamento
                        </span>
                      </h4>
                      <p className="mb-0">Há 3hr</p>
                    </div>
                    <p>
                      Comece com nossa empresa de componentes web e elementos
                      interativos construídos sobre o Bootstrap.
                    </p>
                    <div className="timeline-album mb-3">
                      {timeLine4.map((img, idx) => (
                        <Link to="" key={idx}>
                          <img src={img} alt="avatar" className="rounded-3" />
                        </Link>
                      ))}
                    </div>
                    <Button variant="primary" size="sm">
                      Mostrar Mais
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-lg-item timeline-item-left">
              <div className="timeline-desk">
                <div className="timeline-box">
                  <span className="arrow-alt shadow-none" />
                  <span className="timeline-icon avatar-sm">
                    <span className="avatar-title bg-light rounded-circle">
                      <IconifyIcon
                        icon="solar:sticker-smile-circle-2-bold-duotone"
                        className="text-success fs-28"
                      />
                    </span>
                  </span>
                  <div className="">
                    <div className="d-flex align-items-center  gap-2 mb-3">
                      <img
                        src={avatar5}
                        alt="avatar"
                        className="avatar-lg rounded-circle border border-light border-2"
                      />
                      <div>
                        <h4 className="text-dark  fw-semibold">
                          {' '}
                          Designado para servir como diretor do projeto
                        </h4>
                        <span className="text-dark">
                          <small>Há 4hr</small>
                        </span>
                      </div>
                    </div>
                    <p className="mb-2">
                      Estamos felizes em ter uma nova adição para a liderança do
                      projeto.
                    </p>
                    <p className="mb-1">
                      <IconifyIcon
                        icon="tabler:check"
                        className="text-success me-1 fs-16"
                      />
                      Iniciando o projeto para o cliente.
                    </p>
                    <p className="mb-0">
                      <IconifyIcon
                        icon="tabler:check"
                        className="text-success me-1 fs-16"
                      />
                      Acompanhamento diário com reuniões presenciais e de
                      equipe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="timeline-show text-center">
              <h5 className="m-0 time-show-name">Ontem</h5>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TimelinePage;
