import React from 'react';
import AllScatterChart from './components/AllScatterChart';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const ScatterChart = () => {
  return <>
      <PageBreadcrumb title='Gráfico de Dispersão' />
      <AllScatterChart />
    </>;
};
export default ScatterChart;