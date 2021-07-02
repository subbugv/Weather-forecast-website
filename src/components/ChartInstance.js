import Chart from "chart.js/auto";
import React, { useEffect, createRef } from "react";

export default function ChartInstance({ city }) {
  const chartRef = createRef();
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
    // console.log(myChartRef)
    // myChartRef.clearRect(0, 0, window.innerHeight, window.innerWidth);
    new Chart(myChartRef, config);
  });
  
  console.log(city, process.env.REACT_APP_API_KEY);
  return (
    <div>
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
}
