import React from 'react';
import AllWizard from './components/AllWizard';
import PageBreadcrumb from '@/components/PageBreadcrumb';

// 

const WizardPage = () => {
  return <>
      <PageBreadcrumb title='Multi Step' />
      <AllWizard />
    </>;
};
export default WizardPage;