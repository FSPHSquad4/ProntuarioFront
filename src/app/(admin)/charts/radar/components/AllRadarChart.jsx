import ComponentContainerCard from '@/components/ComponentContainerCard';
import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Button, Col, Row } from 'react-bootstrap';
import {
  basicRadarChartOpts,
  multipleSeriesOpts,
  polygonRadarChartOpts,
} from '../data';

const BasicRadarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico Radar Básico">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={basicRadarChartOpts}
          series={basicRadarChartOpts.series}
          type="radar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const PolygonRadarChart = () => {
  return (
    <ComponentContainerCard title="Radar com Preenchimento de Polígono">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={polygonRadarChartOpts}
          series={polygonRadarChartOpts.series}
          type="radar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const MultipleSeriesChart = () => {
  const [data, setData] = useState([
    {
      name: 'Série 1',
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: 'Série 2',
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: 'Série 3',
      data: [44, 76, 78, 13, 43, 10],
    },
  ]);

  function update() {
    function randomSeries() {
      const arr = [];
      for (let i = 0; i < 6; i++) {
        arr.push(Math.floor(Math.random() * 100));
      }
      return arr;
    }
    setData([
      {
        name: 'Série 1',
        data: randomSeries(),
      },
      {
        name: 'Série 2',
        data: randomSeries(),
      },
      {
        name: 'Série 3',
        data: randomSeries(),
      },
    ]);
  }

  return (
    <ComponentContainerCard title="Radar – Múltiplas Séries">
      <ReactApexChart
        height={350}
        options={multipleSeriesOpts}
        series={data}
        type="radar"
      />
      <div className="text-center mt-2">
        <Button variant="primary" size="sm" onClick={() => update()}>
          Atualizar
        </Button>
      </div>
    </ComponentContainerCard>
  );
};

const AllRadarChart = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <BasicRadarChart />
        </Col>
        <Col xl={6}>
          <PolygonRadarChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <MultipleSeriesChart />
        </Col>
      </Row>
    </>
  );
};

export default AllRadarChart;
