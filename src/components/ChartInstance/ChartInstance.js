import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function ChartInstance() {
  const chartRef = useRef();
  const dayDetail = useSelector((state) => state?.weather?.day);
  const tempData = dayDetail?.map((hour) => hour.temp);
  const data = {
    labels: dayDetail?.map((hour) => hour.time),
    datasets: [
      {
        label: "Temparature",
        fillColor: "#5689d6",
        strokeColor: "#5689d6",
        backgroundColor: "#5689d6",
        borderColor: "#5689d6",
        data: tempData,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: false,
          title: {
            display: false,
          },
        },
        y: {
          display: false,
          title: {
            display: false,
          },
          suggestedMin: Math.min(tempData),
          suggestedMax: Math.max(tempData),
        },
      },
    },
  };

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    const chart = new Chart(myChartRef, config);
    return () => chart.destroy();
  });
  return (
    <div style={{ margin: "20px" }}>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
}
