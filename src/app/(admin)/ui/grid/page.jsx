import PageBreadcrumb from '@/components/PageBreadcrumb';
// 
import React from 'react';
import { Card, CardBody, Col, Row, Table } from 'react-bootstrap';

// 

const GridOptions = () => {
  return <Card>
      <CardBody>
        <h4 className="header-title mb-1">Opções de Grid</h4>
        <p className="text-muted">
          Veja como os aspectos do sistema de grade Bootstrap funcionam em vários dispositivos com uma tabela útil.
        </p>
        <div className="table-responsive">
          <Table className="table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th />
                <th className="text-center">
                  Muito Pequeno<br />
                  <small>&lt;576px</small>
                </th>
                <th className="text-center">
                  Pequeno<br />
                  <small>≥576px</small>
                </th>
                <th className="text-center">
                  Médio<br />
                  <small>≥768px</small>
                </th>
                <th className="text-center">
                  Grande<br />
                  <small>≥992px</small>
                </th>
                <th className="text-center">
                  Extra Grande<br />
                  <small>≥1200px</small>
                </th>
                <th className="text-center">
                  Extra Grande<br />
                  <small>≥1400px</small>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-nowrap" scope="row">Container <code className="fw-normal">max-width</code></th>
                <td>None (auto)</td>
                <td>540px</td>
                <td>720px</td>
                <td>960px</td>
                <td>1140px</td>
                <td>1320px</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Classes</th>
                <td><code>.col-</code></td>
                <td><code>.col-sm-</code></td>
                <td><code>.col-md-</code></td>
                <td><code>.col-lg-</code></td>
                <td><code>.col-xl-</code></td>
                <td><code>.col-xxl-</code></td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">#  colunas</th>
                <td colSpan={6}>12</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Gutter width</th>
                <td colSpan={6}>1.25rem (0.625rem on left and right)</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Custom gutters</th>
                <td colSpan={6}>Yes</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Nestable</th>
                <td colSpan={6}>Yes</td>
              </tr>
              <tr>
                <th className="text-nowrap" scope="row">Ordenação de colunas</th>
                <td colSpan={6}>Yes</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>;
};
const GridExample = () => {
  return <Card>
      <CardBody>
        <h4 className="header-title mb-3">Exemplo Grid</h4>
        <div className="grid-structure">
          <Row>
            <Col lg={12}>
              <div className="grid-container">
                col-lg-12
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={11}>
              <div className="grid-container">
                col-lg-11
              </div>
            </Col>
            <Col lg={1}>
              <div className="grid-container">
                col-lg-1
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={10}>
              <div className="grid-container">
                col-lg-10
              </div>
            </Col>
            <Col lg={2}>
              <div className="grid-container">
                col-lg-2
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={9}>
              <div className="grid-container">
                col-lg-9
              </div>
            </Col>
            <Col lg={3}>
              <div className="grid-container">
                col-lg-3
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <div className="grid-container">
                col-lg-8
              </div>
            </Col>
            <Col lg={4}>
              <div className="grid-container">
                col-lg-4
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <div className="grid-container">
                col-lg-7
              </div>
            </Col>
            <Col lg={5}>
              <div className="grid-container">
                col-lg-5
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="grid-container">
                col-lg-6
              </div>
            </Col>
            <Col lg={6}>
              <div className="grid-container">
                col-lg-6
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={5}>
              <div className="grid-container">
                col-lg-5
              </div>
            </Col>
            <Col lg={7}>
              <div className="grid-container">
                col-lg-7
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <div className="grid-container">
                col-lg-4
              </div>
            </Col>
            <Col lg={8}>
              <div className="grid-container">
                col-lg-8
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <div className="grid-container">
                col-lg-3
              </div>
            </Col>
            <Col lg={9}>
              <div className="grid-container">
                col-lg-9
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="grid-container">
                col-lg-2
              </div>
            </Col>
            <Col lg={10}>
              <div className="grid-container">
                col-lg-10
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={1}>
              <div className="grid-container">
                col-lg-1
              </div>
            </Col>
            <Col lg={11}>
              <div className="grid-container">
                col-lg-11
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="grid-container">
                col-lg-2
              </div>
            </Col>
            <Col lg={3}>
              <div className="grid-container">
                col-lg-3
              </div>
            </Col>
            <Col lg={4}>
              <div className="grid-container">
                col-lg-4
              </div>
            </Col>
            <Col lg={2}>
              <div className="grid-container">
                col-lg-2
              </div>
            </Col>
            <Col lg={1}>
              <div className="grid-container">
                col-lg-1
              </div>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>;
};
const Grid = () => {
  return <>
      <PageBreadcrumb title='Grid' />
      <Row>
        <Col xs={12}>
          <GridOptions />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <GridExample />
        </Col>
      </Row>
    </>;
};
export default Grid;