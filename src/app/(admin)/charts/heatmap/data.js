function generateData(count, yrange) {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = (i + 1).toString();
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push({
      x: x,
      y: y,
    });
    i++;
  }
  return series;
}

export const basicHeatmapChartOpts = {
  chart: {
    height: 380,
    type: 'heatmap',
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#5b69bc'],
  series: [
    {
      name: 'Métrica 1',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 2',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 3',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 4',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 5',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 6',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 7',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 8',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 9',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ],
  xaxis: {
    type: 'category',
  },
};

export const multipleSeriesHeatmapChartOpts = {
  chart: {
    height: 380,
    type: 'heatmap',
  },
  dataLabels: {
    enabled: false,
  },
  colors: [
    '#F3B415',
    '#F27036',
    '#663F59',
    '#6A6E94',
    '#4E88B4',
    '#00A7C6',
    '#18D8D8',
    '#A9D794',
    '#46AF78',
  ],
  series: [
    {
      name: 'Métrica 1',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 2',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 3',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 4',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 5',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 6',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 7',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 8',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 9',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ],
  xaxis: {
    type: 'category',
  },
};

export const HeatmapColorRangeChartOpts = {
  chart: {
    height: 380,
    type: 'heatmap',
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      colorScale: {
        ranges: [
          {
            from: -30,
            to: 5,
            name: 'Baixo',
            color: '#fa5c7c',
          },
          {
            from: 6,
            to: 20,
            name: 'Médio',
            color: '#f9c851',
          },
          {
            from: 21,
            to: 45,
            name: 'Alto',
            color: '#39afd1',
          },
          {
            from: 46,
            to: 55,
            name: 'Extremo',
            color: '#10c469',
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: 'Jan',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Fev',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Mar',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Abr',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Mai',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Jun',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Jul',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Ago',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Set',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
  ],
};

export const HeatmapRangeShadesChartOpts = {
  chart: {
    height: 380,
    type: 'heatmap',
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    heatmap: {
      radius: 30,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 50,
            color: '#10c469',
          },
          {
            from: 51,
            to: 100,
            color: '#f9c851',
          },
        ],
      },
    },
  },
  colors: ['#10c469', '#f9c851'],
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
    },
  },
  series: [
    {
      name: 'Métrica 1',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 2',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 3',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 4',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 5',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 6',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 7',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 8',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Métrica 8',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ],
  xaxis: {
    type: 'category',
  },
  grid: {
    borderColor: '#f1f3fa',
  },
};
