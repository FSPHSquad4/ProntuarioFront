import ComponentContainerCard from '@/components/ComponentContainerCard';
import { FileUploader } from '@/components/FileUploader';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import PageBreadcrumb from '@/components/PageBreadcrumb';

//

const FileUploads = () => {
  return (
    <>
      <PageBreadcrumb title="Upload de Arquivos" />
      <ComponentContainerCard
        title="Upload de Arquivos com Dropzone"
        description={
          <>
            {' '}
            O DropzoneJS é uma biblioteca de código aberto que permite uploads
            de arquivos via arrastar e soltar, com pré-visualização de imagens.
          </>
        }
      >
        <FileUploader
          icon="ri:upload-cloud-2-line"
          text="Arraste os arquivos aqui ou clique para fazer o upload."
          extraText="(Este é apenas um dropzone de demonstração. Os arquivos selecionados não são realmente enviados.)"
        />
      </ComponentContainerCard>
      <div className="d-none" id="uploadPreviewTemplate">
        <Card className="mt-1 mb-0 shadow-none border">
          <div className="p-2">
            <Row className="align-items-center">
              <Col xs={'auto'}>
                <img
                  data-dz-thumbnail
                  src="#"
                  className="avatar-sm rounded bg-light"
                  alt="avatar"
                />
              </Col>
              <Col className="ps-0">
                <Link to="" className="text-muted fw-bold" data-dz-name />
                <p className="mb-0" data-dz-size />
              </Col>
              <Col xs="auto">
                <Link
                  to=""
                  className="btn btn-link btn-lg text-muted"
                  data-dz-remove
                >
                  <i className="ti ti-x" />
                </Link>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    </>
  );
};
export default FileUploads;
