import React from 'react';
import Contacts from './components/Contacts';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Card, CardHeader, Col, Pagination, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const ContactPage = () => {
  return (
    <>
      <PageBreadcrumb title="Contato" />
      <Row>
        <Col xs={12}>
          <Card>
            <CardHeader className="justify-content-between d-flex gap-2">
              <a href="" className="btn btn-danger">
                <IconifyIcon icon="tabler:circle-plus" className="fs-20 me-2" />{' '}
                Adicionar Novo
              </a>
              <form className="d-flex align-items-start flex-wrap justify-content-sm-end gap-2">
                <div className="d-flex align-items-start flex-wrap">
                  <label
                    htmlFor="membersearch-input"
                    className="visually-hidden"
                  >
                    Buscar
                  </label>
                  <input
                    type="search"
                    className="form-control"
                    id="membersearch-input"
                    placeholder="Buscar..."
                  />
                </div>
                <button type="button" className="btn btn-success">
                  <IconifyIcon icon="tabler:settings" className="fs-20" />
                </button>
              </form>
            </CardHeader>
          </Card>
        </Col>
      </Row>
      <Contacts />
      <Row className=" align-items-center mb-3">
        <Col sm={6}>
          <div>
            <p className="fs-14 m-0 text-body text-muted">
              Exibindo <span className="text-body fw-semibold">12</span> de{' '}
              <span className="text-body fw-semibold">229</span> membros
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="float-sm-end">
            <Pagination className="pagination-rounded mb-sm-0">
              <Pagination.Item className=" disabled">
                <IconifyIcon icon="tabler:chevron-left" />
              </Pagination.Item>
              <Pagination.Item className="">1</Pagination.Item>
              <Pagination.Item className=" active">2</Pagination.Item>
              <Pagination.Item className="">3</Pagination.Item>
              <Pagination.Item className="">4</Pagination.Item>
              <Pagination.Item className="">5</Pagination.Item>
              <Pagination.Item className="">
                <IconifyIcon icon="tabler:chevron-right" />
              </Pagination.Item>
            </Pagination>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ContactPage;
