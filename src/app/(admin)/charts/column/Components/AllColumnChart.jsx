import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactApexChart from 'react-apexcharts';
import {
  basicColumnChartOpts,
  columnGroupChartOpts,
  columnMarkersChartOpts,
  datalabelsColumnChartOpts,
  distributedColumnChartOpts,
  fullStackedColumnChartOpts,
  negativeColumnChartOpts,
  rangeColumnChartOpts,
  rotateColumnChartOpts,
  stackedColumnChartOpts,
} from '../data';
import DynamicLoaded from './DynamicLoaded';
import { Col, Row } from 'react-bootstrap';

const BasicColumnChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Colunas Simples">
      <div dir="ltr">
        <ReactApexChart
          height={396}
          options={basicColumnChartOpts}
          series={basicColumnChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const DatalabelsChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Colunas com Rótulos de Dados">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={datalabelsColumnChartOpts}
          series={datalabelsColumnChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const StackedColumnChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Colunas Empilhadas">
      <div dir="ltr">
        <ReactApexChart
          height={396}
          options={stackedColumnChartOpts}
          series={stackedColumnChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const FullStackedColumnChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Colunas Empilhadas 100%">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={fullStackedColumnChartOpts}
          series={fullStackedColumnChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ColumnMarkersChart = () => {
  return (
    <ComponentContainerCard title="Coluna com Marcadores">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={columnMarkersChartOpts}
          series={columnMarkersChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ColumnGroupChart = () => {
  return (
    <ComponentContainerCard title="Coluna com Rótulo de Grupo">
      <div dir="ltr">
        <ReactApexChart
          height={396}
          options={columnGroupChartOpts}
          series={columnGroupChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ColumnRotatedChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Colunas com Rótulos Rotacionados & Anotações">
      <div dir="ltr">
        <ReactApexChart
          height={396}
          options={rotateColumnChartOpts}
          series={rotateColumnChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ColumnNegativeValuesChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Colunas com Valores Negativos">
      <div dir="ltr">
        <ReactApexChart
          height={396}
          options={negativeColumnChartOpts}
          series={negativeColumnChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const DistributedColumnChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Colunas Distribuídas">
      <div dir="ltr">
        <ReactApexChart
          height={396}
          options={distributedColumnChartOpts}
          series={distributedColumnChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const RangeColumnChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Colunas de Faixa">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={rangeColumnChartOpts}
          series={rangeColumnChartOpts.series}
          type="rangeBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const AllColumnChart = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <BasicColumnChart />
        </Col>
        <Col xl={6}>
          <DatalabelsChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <StackedColumnChart />
        </Col>
        <Col xl={6}>
          <FullStackedColumnChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ColumnMarkersChart />
        </Col>
        <Col xl={6}>
          <ColumnGroupChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ColumnRotatedChart />
        </Col>
        <Col xl={6}>
          <ColumnNegativeValuesChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <DistributedColumnChart />
        </Col>
        <Col xl={6}>
          <RangeColumnChart />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <DynamicLoaded />
        </Col>
      </Row>
    </>
  );
};

export default AllColumnChart;
