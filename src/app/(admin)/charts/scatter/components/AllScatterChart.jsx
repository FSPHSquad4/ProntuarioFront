import ComponentContainerCard from '@/components/ComponentContainerCard';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {
  dateTimeScatterChartOpts,
  scatterChartOpts,
  scatterImagesChartOpts,
} from '../data';
import { Col, Row } from 'react-bootstrap';

const ScatterChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Dispersão (XY)">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={scatterChartOpts}
          series={scatterChartOpts.series}
          type="scatter"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ScatterDatetimeChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Dispersão - Data e Hora">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={dateTimeScatterChartOpts}
          series={dateTimeScatterChartOpts.series}
          type="scatter"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ScatterImagesChart = () => {
  return (
    <ComponentContainerCard title="Dispersão - Imagens">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={scatterImagesChartOpts}
          series={scatterImagesChartOpts.series}
          type="scatter"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const AllScatterChart = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <ScatterChart />
        </Col>
        <Col xl={6}>
          <ScatterDatetimeChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ScatterImagesChart />
        </Col>
      </Row>
    </>
  );
};

export default AllScatterChart;
