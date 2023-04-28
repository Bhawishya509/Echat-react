import React from "react";
import ReactECharts from "echarts-for-react";
import { WineData } from "../../Data/WineData";

const LineChart = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 50, left: 50 },
    xAxis: {
      type: "category",
      name: "Flavanoids",
      nameLocation: "middle",
      nameGap: 30,
      data: WineData.map((wine) => wine.Flavanoids),
    },
    yAxis: {
      type: "value",
      name: "Ash",
      nameLocation: "middle",
      nameGap: 25,
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

  return <ReactECharts option={options} />;
};

export default LineChart;
