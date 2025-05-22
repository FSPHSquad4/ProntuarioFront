import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactApexChart from 'react-apexcharts';
import {
  basicBarChartOpts,
  DataLabelsChartOpts,
  fullStackedBarChartOpts,
  groupedChartOpts,
  imageBarChartOpts,
  markersBarChartOpts,
  negativeBarChartOpts,
  patternBarChartOpts,
  reversedBarChartOpts,
  stackedBarChartOpts,
} from '../data';
import { Col, Row } from 'react-bootstrap';

const BasicBarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Barra Básico">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={basicBarChartOpts}
          series={basicBarChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GroupedBarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Barra Agrupada">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={groupedChartOpts}
          series={groupedChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const StackedBarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Barra Empilhada">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={stackedBarChartOpts}
          series={stackedBarChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const Stacked100BarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Barra Empilhada 100%">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={fullStackedBarChartOpts}
          series={fullStackedBarChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const NegativeValuesBarChart = () => {
  return (
    <ComponentContainerCard title="Barra com Valores Negativos">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={negativeBarChartOpts}
          series={negativeBarChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ReversedBarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Barra Revertido">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={reversedBarChartOpts}
          series={reversedBarChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const ImageBarChart = () => {
  return (
    <ComponentContainerCard title="Barra com Imagem de Preenchimento">
      <div dir="ltr">
        <ReactApexChart
          height={450}
          options={imageBarChartOpts}
          series={imageBarChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const DataLabelsBarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Barra com Rótulos de Dados Personalizados">
      <div dir="ltr">
        <ReactApexChart
          height={450}
          options={DataLabelsChartOpts}
          series={DataLabelsChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const PatternedBarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico de Barra com Padrões">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={patternBarChartOpts}
          series={patternBarChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const MarkersChart = () => {
  return (
    <ComponentContainerCard title="Barra com Marcadores">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={markersBarChartOpts}
          series={markersBarChartOpts.series}
          type="bar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const AllBarChart = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <BasicBarChart />
        </Col>
        <Col xl={6}>
          <GroupedBarChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <StackedBarChart />
        </Col>
        <Col xl={6}>
          <Stacked100BarChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <NegativeValuesBarChart />
        </Col>
        <Col xl={6}>
          <ReversedBarChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <ImageBarChart />
        </Col>
        <Col xl={6}>
          <DataLabelsBarChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <PatternedBarChart />
        </Col>
        <Col xl={6}>
          <MarkersChart />
        </Col>
      </Row>
    </>
  );
};

export default AllBarChart;
