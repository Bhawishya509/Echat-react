import ReactEcharts from "echarts-for-react";
import React, { Suspense } from "react";
import { WineData } from "../../Data/WineData";

const BarChart = () => {
let data1 = [];
let data2 = [];
let data3 = [];

WineData.map((wine) => {
  if (wine.Alcohol === 1) {
    data1.push(wine.Magnesium);
  } else if (wine.Alcohol === 2) {
    data2.push(wine.Magnesium);
  } else {
    data3.push(wine.Magnesium);
  }
  return null;
});

let minMagnesiumPerAlcoholType = [
  Math.min(...data1),
  Math.min(...data2),
  Math.min(...data3),
];

const options = {
  grid: { top: 8, right: 8, bottom: 50, left: 50 },
  xAxis: {
    type: "category",
    name: "Alcohol categories",
    nameLocation: 'middle',
    nameGap: 30,
    data: ["Alcohol category 1", "Alcohol category 2", "Alcohol category 3"],
  },
  yAxis: {
    type: "value",
    name: "minimum Magnesium / Alcohol category",
    nameLocation: 'middle',
    nameGap: 25,
  },
  series: [
    {
      data: minMagnesiumPerAlcoholType,
      type: "bar",
      smooth: true,
      
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

  return (
    <main>
      <section>
        <Suspense fallback={<div>Loading...</div>}>
          <ReactEcharts option={options} />{" "}
        </Suspense>
      </section>
    </main>
  );
}

export default BarChart;
