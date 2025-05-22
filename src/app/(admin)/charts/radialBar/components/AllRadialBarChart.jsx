import ComponentContainerCard from '@/components/ComponentContainerCard';
import ReactApexChart from 'react-apexcharts';
import { Col, Row } from 'react-bootstrap';
import {
  basicRadialBarChartOpts,
  circleChartOpts,
  circleImageChartOpts,
  gradientCircularChartOpts,
  multipleRadialBarsChartOpts,
  semiCircleChartOpts,
  strokedCircularChartOpts,
} from '../data';

const BasicRadialBarChart = () => {
  return (
    <ComponentContainerCard title="Gráfico Radial Básico">
      {/* <div dir="ltr"> */}
      <ReactApexChart
        height={320}
        options={basicRadialBarChartOpts}
        series={basicRadialBarChartOpts.series}
        type="radialBar"
        className="apex-charts"
      />
      {/* </div> */}
    </ComponentContainerCard>
  );
};

const MultipleRadialBars = () => {
  return (
    <ComponentContainerCard title="Vários Gráficos Radiais">
      {/* <div dir="ltr"> */}
      <ReactApexChart
        height={320}
        options={multipleRadialBarsChartOpts}
        series={multipleRadialBarsChartOpts.series}
        type="radialBar"
        className="apex-charts"
      />
      {/* </div> */}
    </ComponentContainerCard>
  );
};

const CircleChart = () => {
  return (
    <ComponentContainerCard title="Gráfico Circular - Ângulo Personalizado">
      <div className="text-center" dir="ltr">
        <ReactApexChart
          height={380}
          options={circleChartOpts}
          series={circleChartOpts.series}
          type="radialBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const CircleImageChart = () => {
  return (
    <ComponentContainerCard title="Gráfico Circular com Imagem">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={circleImageChartOpts}
          series={circleImageChartOpts.series}
          type="radialBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const StrokedCircularChart = () => {
  return (
    <ComponentContainerCard title="Indicador Circular com Contorno">
      <div dir="ltr">
        <ReactApexChart
          height={380}
          options={strokedCircularChartOpts}
          series={strokedCircularChartOpts.series}
          type="radialBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const GradientCircularChart = () => {
  return (
    <ComponentContainerCard title="Gráfico Circular com Gradiente">
      <div dir="ltr">
        <ReactApexChart
          height={330}
          options={gradientCircularChartOpts}
          series={gradientCircularChartOpts.series}
          type="radialBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const SemiCircleChart = () => {
  return (
    <ComponentContainerCard title="Indicador Semicircular">
      <div dir="ltr">
        <ReactApexChart
          options={semiCircleChartOpts}
          series={semiCircleChartOpts.series}
          type="radialBar"
          className="apex-charts"
        />
      </div>
    </ComponentContainerCard>
  );
};

const AllRadialBarChart = () => {
  return (
    <>
      <Row>
        <Col xl={6}>
          <BasicRadialBarChart />
        </Col>
        <Col xl={6}>
          <MultipleRadialBars />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <CircleChart />
        </Col>
        <Col xl={6}>
          <CircleImageChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <StrokedCircularChart />
        </Col>
        <Col xl={6}>
          <GradientCircularChart />
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <SemiCircleChart />
        </Col>
      </Row>
    </>
  );
};

export default AllRadialBarChart;
