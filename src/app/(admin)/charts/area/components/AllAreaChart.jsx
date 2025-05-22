import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactApexChart from 'react-apexcharts';
import {
  basicChartOpts,
  dateTimeChartChartOpts,
  NegativeValuesChartOpts,
  nullValuesChartOpts,
  splineChartOpts,
  stackedChartOpts,
  timeSeriesChartOpts,
} from '../data';
import { Col, Row } from 'react-bootstrap';

const BasicAreaChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Área Básico">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={basicChartOpts}
          series={basicChartOpts.series}
          type="area"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const SplineArea = () => {
  return (
    <ComponentContainerCard title="Área Spline">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={splineChartOpts}
          series={splineChartOpts.series}
          type="area"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const DatetimeChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Área - Eixo X com Data e Hora">
      <div className="toolbar apex-toolbar">
        <button id="one_month" className="btn btn-sm btn-light">
          1M
        </button>
        &nbsp;
        <button id="six_months" className="btn btn-sm btn-light">
          6M
        </button>
        &nbsp;
        <button id="one_year" className="btn btn-sm btn-light active">
          1A
        </button>
        &nbsp;
        <button id="ytd" className="btn btn-sm btn-light">
          Ano Atual
        </button>
        &nbsp;
        <button id="all" className="btn btn-sm btn-light">
          TODOS
        </button>
      </div>
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={dateTimeChartChartOpts}
          series={dateTimeChartChartOpts.series}
          type="area"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const NegativeValuesChart = () => {
  return (
    <ComponentContainerCard title="Área com Valores Negativos">
      <div dir="ltr">
        <div
          id="area-chart-negative"
          className="apex-charts"
          data-colors="#0acf97,#ffbc00"
        />
        <ReactApexChart
          height={380}
          options={NegativeValuesChartOpts}
          series={NegativeValuesChartOpts.series}
          type="area"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const StackedArea = () => {
  return (
    <ComponentContainerCard title="Área Empilhada">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={stackedChartOpts}
          series={stackedChartOpts.series}
          type="area"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const TimeSeriesChart = () => {
  return (
    <ComponentContainerCard title="Série Temporal Irregular">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={timeSeriesChartOpts}
          series={timeSeriesChartOpts.series}
          type="area"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const NullValuesChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Área com Valores Nulos">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={nullValuesChartOpts}
          series={nullValuesChartOpts.series}
          type="area"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const AllAreaChart = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <BasicAreaChart />
        </Col>
        <Col xl={6}>
          <SplineArea />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <DatetimeChart />
        </Col>
        <Col xl={6}>
          <NegativeValuesChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <StackedArea />
        </Col>
        <Col xl={6}>
          <TimeSeriesChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <NullValuesChart />
        </Col>
      </Row>
    </>
  );
};

export default AllAreaChart;
