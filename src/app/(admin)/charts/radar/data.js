export const basicRadarChartOpts = {
  chart: {
    height: 350,
    type: 'radar',
  },
  series: [
    {
      name: 'Série 1',
      data: [80, 50, 30, 40, 100, 20],
    },
  ],
  colors: ['#5b69bc'],
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
};

export const polygonRadarChartOpts = {
  chart: {
    height: 350,
    type: 'radar',
  },
  series: [
    {
      name: 'Série 1',
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ],
  labels: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  plotOptions: {
    radar: {
      size: 140,
    },
  },
  colors: ['#FF4560'],
  markers: {
    size: 4,
    colors: ['#fff'],
    strokeWidth: 2,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
  yaxis: {
    tickAmount: 7,
    labels: {
      formatter: function (val, i) {
        if (i % 2 === 0) {
          return val;
        } else {
          return '';
        }
      },
    },
  },
};

export const multipleSeriesOpts = {
  chart: {
    height: 350,
    type: 'radar',
    toolbar: {
      show: false,
    },
  },
  series: [
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
  ],
  stroke: {
    width: 0,
  },
  fill: {
    opacity: 0.4,
  },
  markers: {
    size: 0,
  },
  legend: {
    offsetY: -10,
  },
  colors: ['#727cf5', '#02a8b5', '#fd7e14'],
  labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
};
