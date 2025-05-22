import IconifyIcon from '@/components/wrappers/IconifyIcon';
import * as React from 'react';
import { Card, CardHeader, Col, Row } from 'react-bootstrap';

const Head = () => {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <CardHeader className="justify-content-between d-sm-flex gap-2">
            <a href="" className="btn btn-secondary mb-sm-0 mb-2">
              <IconifyIcon icon="tabler:circle-plus" className="fs-20 me-2" />{' '}
              Criar Projeto
            </a>
            <form className="row g-2 align-items-center">
              <Col xs={'auto'}>
                <div className="d-flex">
                  <label className="d-flex align-items-center fw-semibold">
                    Fase{' '}
                  </label>
                  <select className="form-select d-inline-block ms-2">
                    <option>Todos os Projetos(6)</option>
                    <option>Concluídos</option>
                    <option>Em Progresso</option>
                  </select>
                </div>
              </Col>
              <Col xs={'auto'}>
                <div className="d-flex">
                  <label className="d-flex align-items-center fw-semibold">
                    Ordenar
                  </label>
                  <select className="form-select d-inline-block ms-2">
                    <option>Data</option>
                    <option>Nome</option>
                    <option>Data de Conclusão</option>
                    <option>Data de Início</option>
                  </select>
                </div>
              </Col>
              <Col xs={'auto'}>
                <div className="d-flex align-items-start flex-wrap">
                  <label
                    htmlFor="membersearch-input"
                    className="visually-hidden"
                  >
                    Buscar
                  </label>
                  <input
                    type="search"
                    className="form-control border-light bg-light bg-opacity-50"
                    id="membersearch-input"
                    placeholder="Buscar..."
                  />
                </div>
              </Col>
            </form>
          </CardHeader>
        </Card>
      </Col>
    </Row>
  );
};

export default Head;
