import React from 'react';
import AllBoxplotChart from './components/AllBoxplotChart';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const BoxplotChart = () => {
  return <>
      <PageBreadcrumb title='Gráfico Boxplot' />
      <AllBoxplotChart />
    </>;
};
export default BoxplotChart;