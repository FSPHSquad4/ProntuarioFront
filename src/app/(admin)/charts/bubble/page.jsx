import React from 'react';
import AllBubbleChart from './components/AllBubbleChart';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const BubbleChart = () => {
  return <>
      <PageBreadcrumb title='Gráfico Bolha' />
      <AllBubbleChart />
    </>;
};
export default BubbleChart;