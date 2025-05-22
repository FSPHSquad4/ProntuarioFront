import AllTimeLineChart from './components/AllTimeLineChart';
import PageBreadcrumb from '@/components/PageBreadcrumb';
const TimelineChart = () => {
  return <>
      <PageBreadcrumb title='Gráfico Linha do Tempo' />
      <AllTimeLineChart />
    </>;
};
export default TimelineChart;