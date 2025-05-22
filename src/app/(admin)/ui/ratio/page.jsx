import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageBreadcrumb from '@/components/PageBreadcrumb';
import { Col, Row } from 'react-bootstrap';

//

const Ratio1 = () => {
  return (
    <ComponentContainerCard
      title="Proporção Responsiva de Vídeo 21:9"
      description={
        <>
          Use a classe <code>.ratio-21x9</code>
        </>
      }
    >
      <div className="ratio ratio-21x9">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
      </div>
    </ComponentContainerCard>
  );
};

const Ratio2 = () => {
  return (
    <ComponentContainerCard
      title="Proporção Responsiva de Vídeo 1:1"
      description={
        <>
          Use a classe <code>.ratio-1x1</code>
        </>
      }
    >
      <div className="ratio ratio-1x1">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
      </div>
    </ComponentContainerCard>
  );
};

const Ratio3 = () => {
  return (
    <ComponentContainerCard
      title="Proporção Responsiva de Vídeo 16:9"
      description={
        <>
          Use a classe <code>.ratio-16x9</code>
        </>
      }
    >
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
      </div>
    </ComponentContainerCard>
  );
};

const Ratio4 = () => {
  return (
    <ComponentContainerCard
      title="Proporção Responsiva de Vídeo 4:3"
      description={
        <>
          Use a classe <code>.ratio-4x3</code>
        </>
      }
    >
      <div className="ratio ratio-4x3">
        <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" />
      </div>
    </ComponentContainerCard>
  );
};

const Ratio = () => {
  return (
    <>
      <PageBreadcrumb title="Proporção" />
      <Row>
        <Col xl={6}>
          <Ratio1 />
          <Ratio2 />
        </Col>
        <Col xl={6}>
          <Ratio3 />
          <Ratio4 />
        </Col>
      </Row>
    </>
  );
};

export default Ratio;
