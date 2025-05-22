import React from 'react';
import Dashboard from './components/Dashboard';
import Attachments from './components/Attachments';
import Components from './components/Components';
import { Card, Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const ViewDetailsPage = () => {
  return (
    <>
      <PageBreadcrumb title="Visualizar Detalhes" />
      <Row>
        <Col xl={8}>
          <Dashboard />
          <Attachments />
        </Col>
        <Components />
      </Row>
      <div className="d-none" id="uploadPreviewTemplate">
        <Card className=" mb-2 shadow-none border">
          <div className="p-2">
            <Row className=" align-items-center">
              <Col xs={'auto'}>
                <img
                  data-dz-thumbnail
                  src="#"
                  className="avatar-sm rounded bg-light"
                  alt=""
                />
              </Col>
              <Col className="ps-0">
                <a href="" className="text-muted fw-bold" data-dz-name />
                <p className="mb-0" data-dz-size />
              </Col>
              <Col xs={'auto'}>
                <a
                  href=""
                  className="btn btn-link btn-lg text-muted"
                  data-dz-remove
                >
                  <i className="fe-x" />
                </a>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    </>
  );
};
export default ViewDetailsPage;
