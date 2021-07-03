import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";

export default function ChartInstance({ city }) {
  const chartRef = useRef();
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
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
          text: "Chart.js Line Chart - Cubic interpolation mode",
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          display: true,
          title: {
            display: true,
          },
        },
        y: {
          display: true,
          title: {
            display: true,
            text: "Value",
          },
          suggestedMin: -10,
          suggestedMax: 200,
        },
      },
    },
  };

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    const chart = new Chart(myChartRef, config);
    return () => chart.destroy()
  });
  return (
    <div>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
}
