import ReactEcharts from "echarts-for-react";
import React, { Suspense } from "react";
// const WineData = React.lazy(() => import("../../Data/WineData"));
import { WineData } from "../../Data/WineData";

const options = {
  grid: { top: 20, right: 40, bottom: 20, left: 40 },
  xAxis: {
    type: "category",
    data: WineData.map(wine =>  "Alcohol type"  + wine.Alcohol),
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: WineData.map(wine => wine.Magnesium),
      type: "bar",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

function BarChart() {
  return (
    <main>
      <section>
      <Suspense fallback={<div>Loading...</div>}> {/* So it will still wait untill our component will not load..*/}
      <ReactEcharts option={options} />{" "} {/*  and here i am passing thats data rom data.js*/}
    </Suspense>
      </section>
    </main>
   
  );
}

export default BarChart;
