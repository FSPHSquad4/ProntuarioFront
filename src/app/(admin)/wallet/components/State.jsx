import React from 'react';
import { stateData } from '../data';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import {
  Card,
  CardBody,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';

const StateCard = ({ title, colors, value, series }) => {
  const OrdersChartOpts = {
    series: [series],
    chart: {
      type: 'radialBar',
      height: 81,
      width: 81,
      sparkline: {
        enabled: false,
      },
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        hollow: {
          margin: 0,
          size: '50%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 5,
            fontSize: '14px',
            fontWeight: '600',
            formatter: function (val) {
              return val + 'k';
            },
          },
        },
      },
    },
    grid: {
      padding: {
        top: -18,
        bottom: -20,
        left: -20,
        right: -20,
      },
    },
    colors: colors,
  };

  return (
    <Card>
      <div className="d-flex card-header justify-content-between align-items-center">
        <div>
          <h4 className="header-title">{title}</h4>
        </div>
        <Dropdown align={'end'}>
          <DropdownToggle
            as={'a'}
            className="drop-arrow-none card-drop"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <IconifyIcon icon="ri:more-2-fill" className="fs-18" />
          </DropdownToggle>
          <DropdownMenu className="dropdown-menu-end">
            <DropdownItem>Relatório de Vendas</DropdownItem>
            <DropdownItem>Exportar Relatório</DropdownItem>
            <DropdownItem>Lucro</DropdownItem>
            <DropdownItem>Ação</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <CardBody className="pt-0">
        <div className="d-flex align-items-end gap-2 justify-content-between">
          <div className="text-end flex-shrink-0">
            <ReactApexChart
              width={81}
              height={81}
              options={OrdersChartOpts}
              series={OrdersChartOpts.series}
              type="radialBar"
            />
          </div>
          <div className="text-end">
            <h3 className="fw-semibold">{value}</h3>
            <p className="text-muted mb-0">Desde o mês passado</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

const State = () => {
  return (
    <Row className="row-cols-xxl-4 row-cols-md-2 row-cols-1">
      {stateData.map((item, idx) => (
        <Col key={idx}>
          <StateCard {...item} />
        </Col>
      ))}
    </Row>
  );
};

export default State;
