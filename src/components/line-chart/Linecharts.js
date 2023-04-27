import ReactECharts from "echarts-for-react";
import { WineData } from "../../Data/WineData";
const options = {
  grid: { top: 8, right: 8, bottom: 24, left: 36 },
  xAxis: {
    type: "category",
    data: WineData.map((wine) => "Flavanoids" + wine.Flavanoids),
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: WineData.map((wine) => wine.Ash),
      type: "line",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};
const LineChart = () => {
  return <ReactECharts option={options} />; 

};

export default LineChart;
