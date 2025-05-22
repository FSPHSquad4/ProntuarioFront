import moment from 'moment';

export const basicTimelineChartOpts = {
  series: [
    {
      data: [
        {
          x: 'Código',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime(),
          ],
        },
        {
          x: 'Teste',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime(),
          ],
        },
        {
          x: 'Validação',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime(),
          ],
        },
        {
          x: 'Implantação',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-18').getTime(),
          ],
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'rangeBar',
    toolbar: {
      show: false,
    },
  },
  colors: ['#ff5b5b'],
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false,
    },
  },
};

export const distributedTimelineChartOpts = {
  series: [
    {
      data: [
        {
          x: 'Análise',
          y: [
            new Date('2019-02-27').getTime(),
            new Date('2019-03-04').getTime(),
          ],
          fillColor: '#777edd',
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime(),
          ],
          fillColor: '#0acf97',
        },
        {
          x: 'Codificação',
          y: [
            new Date('2019-03-07').getTime(),
            new Date('2019-03-10').getTime(),
          ],
          fillColor: '#fa5c7c',
        },
        {
          x: 'Testes',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime(),
          ],
          fillColor: '#45bbe0',
        },
        {
          x: 'Implantação',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-17').getTime(),
          ],
          fillColor: '#39afd1',
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'rangeBar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        hideOverflowingLabels: false,
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      const label = opts.w.globals.labels[opts.dataPointIndex];
      const a = moment(val[0]);
      const b = moment(val[1]);
      const diff = b.diff(a, 'days');
      return label + ': ' + diff + (diff > 1 ? ' dias' : ' dia');
    },
    style: {
      colors: ['#f3f4f5', '#fff'],
    },
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: true,
  },
};

export const multiSeriesTimelineChartOpts = {
  series: [
    {
      name: 'Bob',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime(),
          ],
        },
        {
          x: 'Código',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime(),
          ],
        },
        {
          x: 'Teste',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Joe',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime(),
          ],
        },
        {
          x: 'Código',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
        {
          x: 'Teste',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-19').getTime(),
          ],
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'rangeBar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      const a = moment(val[0]);
      const b = moment(val[1]);
      const diff = b.diff(a, 'days');
      return diff + (diff > 1 ? ' dias' : ' dia');
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100],
    },
  },
  colors: ['#35b8e0', '#39afd1'],
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false,
    },
  },
  legend: {
    position: 'top',
  },
};

export const advancedTimelineChartOpts = {
  series: [
    {
      name: 'Bob',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-08').getTime(),
          ],
        },
        {
          x: 'Código',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime(),
          ],
        },
        {
          x: 'Código',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-07').getTime(),
          ],
        },
        {
          x: 'Teste',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-09').getTime(),
          ],
        },
        {
          x: 'Teste',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-11').getTime(),
          ],
        },
        {
          x: 'Validação',
          y: [
            new Date('2019-03-11').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-01').getTime(),
            new Date('2019-03-03').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Joe',
      data: [
        {
          x: 'Design',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-05').getTime(),
          ],
        },
        {
          x: 'Teste',
          y: [
            new Date('2019-03-06').getTime(),
            new Date('2019-03-16').getTime(),
          ],
          goals: [
            {
              name: 'Pausa',
              value: new Date('2019-03-10').getTime(),
              strokeColor: '#CD2F2A',
            },
          ],
        },
        {
          x: 'Código',
          y: [
            new Date('2019-03-03').getTime(),
            new Date('2019-03-07').getTime(),
          ],
        },
        {
          x: 'Implantação',
          y: [
            new Date('2019-03-20').getTime(),
            new Date('2019-03-22').getTime(),
          ],
        },
        {
          x: 'Design',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-16').getTime(),
          ],
        },
      ],
    },
    {
      name: 'Dan',
      data: [
        {
          x: 'Código',
          y: [
            new Date('2019-03-10').getTime(),
            new Date('2019-03-17').getTime(),
          ],
        },
        {
          x: 'Validação',
          y: [
            new Date('2019-03-05').getTime(),
            new Date('2019-03-09').getTime(),
          ],
          goals: [
            {
              name: 'Pausa',
              value: new Date('2019-03-07').getTime(),
              strokeColor: '#CD2F2A',
            },
          ],
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'rangeBar',
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
    },
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false,
    },
  },
  stroke: {
    width: 1,
  },
  colors: ['#5b69bc', '#10c469', '#fa5c7c'],
  fill: {
    type: 'solid',
    opacity: 0.6,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
  },
};

export const groupTimelineChartOpts = {
  series: [
    // George Washington
    {
      name: 'George Washington',
      data: [
        {
          x: 'Presidente',
          y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    // John Adams
    {
      name: 'John Adams',
      data: [
        {
          x: 'Presidente',
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: 'Vice-presidente',
          y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()],
        },
      ],
    },
    // Thomas Jefferson
    {
      name: 'Thomas Jefferson',
      data: [
        {
          x: 'Presidente',
          y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()],
        },
        {
          x: 'Vice-presidente',
          y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()],
        },
        {
          x: 'Secretário de Estado',
          y: [
            new Date(1790, 2, 22).getTime(),
            new Date(1793, 11, 31).getTime(),
          ],
        },
      ],
    },
    // Aaron Burr
    {
      name: 'Aaron Burr',
      data: [
        {
          x: 'Vice-presidente',
          y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()],
        },
      ],
    },
    // George Clinton
    {
      name: 'George Clinton',
      data: [
        {
          x: 'Vice-presidente',
          y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()],
        },
      ],
    },
    // John Jay
    {
      name: 'John Jay',
      data: [
        {
          x: 'Secretário de Estado',
          y: [new Date(1794, 2, 22).getTime(), new Date(1795, 9, 19).getTime()],
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'rangeBar',
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '80%',
    },
  },
  xaxis: {
    type: 'datetime',
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
  },
};
