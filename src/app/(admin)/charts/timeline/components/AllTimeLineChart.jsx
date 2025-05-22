import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactApexChart from 'react-apexcharts';
import {
  advancedTimelineChartOpts,
  basicTimelineChartOpts,
  distributedTimelineChartOpts,
  groupTimelineChartOpts,
  multiSeriesTimelineChartOpts,
} from '../data';
import { Col, Row } from 'react-bootstrap';

const BasicTimeline = () => {
  return (
    <ComponentContainerCard title="Linha do Tempo Básica">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={basicTimelineChartOpts}
          series={basicTimelineChartOpts.series}
          type="rangeBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const DistributedTimeline = () => {
  return (
    <ComponentContainerCard title="Linha do Tempo Distribuída">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={distributedTimelineChartOpts}
          series={distributedTimelineChartOpts.series}
          type="rangeBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const MultiSeriesTimeline = () => {
  return (
    <ComponentContainerCard title="Linha do Tempo com Múltiplas Séries">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={multiSeriesTimelineChartOpts}
          series={multiSeriesTimelineChartOpts.series}
          type="rangeBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const AdvancedTimeline = () => {
  return (
    <ComponentContainerCard title="Linha do Tempo Avançada">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={advancedTimelineChartOpts}
          series={advancedTimelineChartOpts.series}
          type="rangeBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const MultipleGroupTimeline = () => {
  return (
    <ComponentContainerCard title="Múltiplas Séries - Linhas Agrupadas">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={groupTimelineChartOpts}
          series={groupTimelineChartOpts.series}
          type="rangeBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const AllTimeLineChart = () => {
  return (
    <div>
      <Row>
        <Col xl={6}>
          <BasicTimeline />
        </Col>
        <Col xl={6}>
          <DistributedTimeline />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <MultiSeriesTimeline />
        </Col>
        <Col xl={6}>
          <AdvancedTimeline />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <MultipleGroupTimeline />
        </Col>
      </Row>
    </div>
  );
};

export default AllTimeLineChart;
