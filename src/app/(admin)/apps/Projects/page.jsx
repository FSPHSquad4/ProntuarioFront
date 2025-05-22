import PageBreadcrumb from '@/components/PageBreadcrumb';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Col, Pagination, Row } from 'react-bootstrap';
import Head from './components/Head';
import Projects from './components/Projects';

const ProjectsPage = () => {
  return (
    <>
      <PageBreadcrumb title="Projeto" />
      <Head />
      <Projects />
      <Row className="align-items-center mb-3">
        <Col sm={6}>
          <div>
            <p className="fs-14 m-0 text-body text-muted">
              Exibindo <span className="text-body fw-semibold">6</span> de{' '}
              <span className="text-body fw-semibold">52</span> projetos
            </p>
          </div>
        </Col>
        <Col sm={6}>
          <div className="float-sm-end">
            <Pagination className="pagination-boxed mb-sm-0">
              <Pagination.Item className=" disabled">
                <IconifyIcon icon="tabler:chevron-left" />
              </Pagination.Item>
              <Pagination.Item className=" active">1</Pagination.Item>
              <Pagination.Item>2</Pagination.Item>
              <Pagination.Item>3</Pagination.Item>
              <Pagination.Item>4</Pagination.Item>
              <Pagination.Item>5</Pagination.Item>
              <Pagination.Item>
                <IconifyIcon icon="tabler:chevron-right" />
              </Pagination.Item>
            </Pagination>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProjectsPage;
