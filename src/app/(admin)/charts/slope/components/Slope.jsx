import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const Slope = () => {
  const slopeChartOpts = {
    series: [
      {
        name: 'Azul',
        data: [
          {
            x: 'Jan',
            y: 43,
          },
          {
            x: 'Fev',
            y: 58,
          },
        ],
      },
      {
        name: 'Verde',
        data: [
          {
            x: 'Jan',
            y: 33,
          },
          {
            x: 'Fev',
            y: 38,
          },
        ],
      },
      {
        name: 'Vermelho',
        data: [
          {
            x: 'Jan',
            y: 55,
          },
          {
            x: 'Fev',
            y: 21,
          },
        ],
      },
    ],
    colors: ['#39afd1'],
    chart: {
      height: 350,
      width: 400,
      type: 'line',
    },
    plotOptions: {
      line: {
        isSlopeChart: true,
      },
    },
  };

  const MultipleSlopeChartOpts = {
    series: [
      {
        name: 'Azul',
        data: [
          {
            x: 'Categoria 1',
            y: 503,
          },
          {
            x: 'Categoria 2',
            y: 580,
          },
          {
            x: 'Categoria 3',
            y: 135,
          },
        ],
      },
      {
        name: 'Verde',
        data: [
          {
            x: 'Categoria 1',
            y: 733,
          },
          {
            x: 'Categoria 2',
            y: 385,
          },
          {
            x: 'Categoria 3',
            y: 715,
          },
        ],
      },
      {
        name: 'Laranja',
        data: [
          {
            x: 'Categoria 1',
            y: 255,
          },
          {
            x: 'Categoria 2',
            y: 211,
          },
          {
            x: 'Categoria 3',
            y: 441,
          },
        ],
      },
      {
        name: 'Vermelho',
        data: [
          {
            x: 'Categoria 1',
            y: 428,
          },
          {
            x: 'Categoria 2',
            y: 749,
          },
          {
            x: 'Categoria 3',
            y: 559,
          },
        ],
      },
    ],
    chart: {
      height: 350,
      width: 600,
      type: 'line',
    },
    plotOptions: {
      line: {
        isSlopeChart: true,
      },
    },
    tooltip: {
      followCursor: true,
      intersect: false,
      shared: true,
    },
    dataLabels: {
      background: {
        enabled: true,
      },
      formatter(val, opts) {
        const seriesName = opts.w.config.series[opts.seriesIndex].name;
        return val !== null ? seriesName : '';
      },
    },
    colors: ['#45bbe0', '#f9bc0b', '#777edd', '#0acf97'],
    yaxis: {
      show: true,
      labels: {
        show: true,
      },
    },
    xaxis: {
      position: 'bottom',
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
    },
    stroke: {
      width: [2, 3, 4, 2],
      dashArray: [0, 0, 5, 2],
      curve: 'smooth',
    },
  };

  return (
    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <h4 className="header-title mb-4">Gráfico de Slope Básico</h4>
            <div dir="ltr">
              <ReactApexChart
                height={350}
                width={400}
                options={slopeChartOpts}
                series={slopeChartOpts.series}
                type="line"
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <h4 className="header-title mb-4">Gráfico de Múltiplos Slopes</h4>
            <div dir="ltr">
              <ReactApexChart
                height={350}
                options={MultipleSlopeChartOpts}
                series={MultipleSlopeChartOpts.series}
                type="line"
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Slope;
