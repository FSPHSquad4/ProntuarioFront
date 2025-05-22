import { CardBody } from 'react-bootstrap';
import DropzoneFormInput from './form/DropzoneFormInput';
const FileUpload = ({
  title
}) => {
  return <>
      <CardBody>
        <DropzoneFormInput
      // iconProps={{ icon: '', height: 48, width: 48, className: 'mb-4 text-primary' }}
      text="Solte os arquivos aqui ou clique para fazer upload."
      // helpText={<span className="text-muted fs-13 ">(1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed )</span>}
      showPreview />
      </CardBody>
    </>;
};
export default FileUpload;