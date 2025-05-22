import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Card, CardBody, Col, Row } from 'react-bootstrap';

const FunnelChart = () => {
  const funnelChartOpts = {
    series: [
      {
        name: 'Série do Funil',
        data: [1380, 1100, 990, 880, 740, 548, 330, 200],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      dropShadow: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    colors: ['#777edd', '#0acf97', '#fd7e14', '#fa5c7c'],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Funil de recrutamento',
      align: 'center',
    },
    xaxis: {
      categories: [
        'Fonte',
        'Filtrado',
        'Avaliado',
        'Entrevista RH',
        'Técnico',
        'Verificado',
        'Oferecido',
        'Contratado',
      ],
    },
    legend: {
      show: false,
    },
  };

  const funnelPyramidChartOpts = {
    series: [
      {
        name: '',
        data: [200, 330, 548, 740, 880, 990, 1100, 1380],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      dropShadow: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    colors: [
      '#F44F5E',
      '#E55A89',
      '#D863B1',
      '#CA6CD8',
      '#B57BED',
      '#8D95EB',
      '#62ACEA',
      '#4BC3E6',
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex];
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Gráfico Pirâmide',
      align: 'center',
    },
    xaxis: {
      categories: [
        'Doces',
        'Alimentos Processados',
        'Gorduras Saudáveis',
        'Carne',
        'Feijões & Legumes',
        'Laticínios',
        'Frutas & Vegetais',
        'Cereais',
      ],
    },
    legend: {
      show: false,
    },
  };

  return (
    <Row>
      <Col xl={6}>
        <Card>
          <CardBody>
            <h4 className="header-title mb-4">Gráfico Funil</h4>
            <div dir="ltr">
              <ReactApexChart
                height={350}
                options={funnelChartOpts}
                series={funnelChartOpts.series}
                type="bar"
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl={6}>
        <Card>
          <CardBody>
            <h4 className="header-title mb-4">Gráfico Pirâmide</h4>
            <div dir="ltr">
              <ReactApexChart
                height={350}
                options={funnelPyramidChartOpts}
                series={funnelPyramidChartOpts.series}
                type="bar"
                className="apex-charts"
              />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default FunnelChart;
