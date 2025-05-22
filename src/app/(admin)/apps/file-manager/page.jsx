import FIleManager from './components/FIleManager';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const FileManagerPage = () => {
  return <>
      <PageBreadcrumb title='Gerenciador de Arquivos' />
      <FIleManager />
    </>;
};
export default FileManagerPage;