import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import {
  basicHeatmapChartOpts,
  HeatmapColorRangeChartOpts,
  HeatmapRangeShadesChartOpts,
  multipleSeriesHeatmapChartOpts,
} from '../data';

const GraficoHeatmapBasico = () => {
  return (
    <ComponentContainerCard title="Heatmap Básico - Série Única">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={basicHeatmapChartOpts}
          series={basicHeatmapChartOpts.series}
          type="heatmap"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoHeatmapMultiplo = () => {
  return (
    <ComponentContainerCard title="Heatmap - Múltiplas Séries">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={multipleSeriesHeatmapChartOpts}
          series={multipleSeriesHeatmapChartOpts.series}
          type="heatmap"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoHeatmapFaixaDeCor = () => {
  return (
    <ComponentContainerCard title="Heatmap - Faixa de Cores">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={HeatmapColorRangeChartOpts}
          series={HeatmapColorRangeChartOpts.series}
          type="heatmap"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoHeatmapFaixaSemSombreamento = () => {
  return (
    <ComponentContainerCard title="Heatmap - Faixa sem Sombreamento">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={HeatmapRangeShadesChartOpts}
          series={HeatmapRangeShadesChartOpts.series}
          type="heatmap"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const TodosGraficoHeatmap = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <GraficoHeatmapBasico />
        </Col>
        <Col xl={6}>
          <GraficoHeatmapMultiplo />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <GraficoHeatmapFaixaDeCor />
        </Col>
        <Col xl={6}>
          <GraficoHeatmapFaixaSemSombreamento />
        </Col>
      </Row>
    </>
  );
};

export default TodosGraficoHeatmap;
