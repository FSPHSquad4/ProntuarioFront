import React from 'react';
import FunnelChart from './components/FunnelChart';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const FunnelPage = () => {
  return <>
      <PageBreadcrumb title='Gráfico Funil' />
      <FunnelChart />
    </>;
};
export default FunnelPage;