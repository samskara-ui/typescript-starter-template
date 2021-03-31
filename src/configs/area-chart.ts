import {
  AxisScaleType,
  CartesianChart,
  VisualizationType,
} from "@samskara-ui/d3-charts";

const options = {
  series: [
    {
      visualization: VisualizationType.Area,
      name: "Area series",
      color: "green",
      xIndex: 0,
      yIndex: 0,
      visible: true,
      tooltip: {
        visible: false,
        formatter: () => "",
      },
      data: [],
    },
  ],
  xAxis: [
    {
      title: "XAxis label",
      scale: AxisScaleType.Time,
      grid: {
        visible: true,
        color: "#D3D3D3",
      },
      visible: true,
      opposite: false,
      color: "#4b0082",
    },
  ],
  yAxis: [
    {
      title: "YAxis Label",
      scale: AxisScaleType.Linear,
      grid: {
        visible: true,
        color: "#D3D3D3",
      },
      visible: true,
      opposite: false,
      color: "#4b0082",
    },
  ],
};

export const buildAreaChart = (container: HTMLElement) => {
  const chart = new CartesianChart(container, options);

  let count = 0;

  setInterval(() => {
    chart.addPoint(
      "Area series",
      {
        x: Date.now(),
        y: Math.random() * 1000 * count++,
      },
      true
    );
  }, 2000);
};
