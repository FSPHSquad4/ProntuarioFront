import React from 'react';
import AllPieChart from './components/AllPieChart';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const PieChart = () => {
  return <>
      <PageBreadcrumb title='Gráfico de pizza' />
      <AllPieChart />
    </>;
};
export default PieChart;