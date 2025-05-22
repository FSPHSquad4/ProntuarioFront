import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import {
  annotationsChartOpts,
  brushChartOpts,
  brushChartOpts2,
  dashedLineChartOpts,
  gradientLineChartOpts,
  lineWithDataChartOpts,
  missingNullValuesChartOpts,
  simpleLineChartOpts,
  stepLineChartOpts,
  syncingChartOpts,
  syncingChartOpts2,
  zoomableTimeseriesChartOpts,
} from '../data';

const GraficoLinhaSimples = () => {
  return (
    <ComponentContainerCard title="Gráfico de Linha Simples">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={simpleLineChartOpts}
          series={simpleLineChartOpts.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const LinhaComLabelsDeDados = () => {
  return (
    <ComponentContainerCard title="Linha com Labels de Dados">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={lineWithDataChartOpts}
          series={lineWithDataChartOpts.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const SeriesTemporaisZoom = () => {
  return (
    <ComponentContainerCard title="Series Temporais com Zoom">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={zoomableTimeseriesChartOpts}
          series={zoomableTimeseriesChartOpts.series}
          type="area"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoLinhaComAnotacoes = () => {
  return (
    <ComponentContainerCard title="Gráfico de Linha com Anotações">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={annotationsChartOpts}
          series={annotationsChartOpts.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoSincronizado = () => {
  return (
    <ComponentContainerCard title="Gráficos Sincronizados">
      <ReactApexChart
        height={200}
        options={syncingChartOpts}
        series={syncingChartOpts.series}
        type="line"
        className="apex-charts"
      />
      <div dir="ltr">
        <ReactApexChart
          height={160}
          options={syncingChartOpts2}
          series={syncingChartOpts2.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoLinhaGradiente = () => {
  return (
    <ComponentContainerCard title="Gráfico de Linha com Gradiente">
      <div dir="ltr">
        <ReactApexChart
          height={350}
          options={gradientLineChartOpts}
          series={gradientLineChartOpts.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoValoresFaltandoNull = () => {
  return (
    <ComponentContainerCard title="Valores Faltando / Null">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={missingNullValuesChartOpts}
          series={missingNullValuesChartOpts.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoLinhaTracejada = () => {
  return (
    <ComponentContainerCard title="Gráfico de Linha Tracejada">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={dashedLineChartOpts}
          series={dashedLineChartOpts.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoLinhaDePasso = () => {
  return (
    <ComponentContainerCard title="Gráfico de Linha de Passo">
      <div dir="ltr">
        <ReactApexChart
          height={344}
          options={stepLineChartOpts}
          series={stepLineChartOpts.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GraficoBrush = () => {
  return (
    <ComponentContainerCard title="Gráfico Brush">
      <div dir="ltr">
        <ReactApexChart
          height={230}
          options={brushChartOpts}
          series={brushChartOpts.series}
          type="line"
          className="apex-charts"
        />
        <ReactApexChart
          height={130}
          options={brushChartOpts2}
          series={brushChartOpts2.series}
          type="line"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const TodosOsGraficosDeLinha = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <GraficoLinhaSimples />
        </Col>
        <Col xl={6}>
          <LinhaComLabelsDeDados />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <SeriesTemporaisZoom />
        </Col>
        <Col xl={6}>
          <GraficoLinhaComAnotacoes />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <GraficoSincronizado />
        </Col>
        <Col xl={6}>
          <GraficoLinhaGradiente />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <GraficoValoresFaltandoNull />
        </Col>
        <Col xl={6}>
          <GraficoLinhaTracejada />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <GraficoLinhaDePasso />
        </Col>
        <Col xl={6}>
          <GraficoBrush />
        </Col>
      </Row>
    </>
  );
};

export default TodosOsGraficosDeLinha;
