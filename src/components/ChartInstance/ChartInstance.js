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
        fillColor: "#a5d0e6",
        strokeColor: "#5689d6",
        backgroundColor: "#EBF2FB",
        borderColor: "#9BC5FA",
        data: tempData,
        pointRadius: 0,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true,
      datasets: {
        line: {
          pointRadius: 0, // disable for all `'line'` datasets
          fill: true,
          tension: 0.1,
        },
      },
      elements: {
        point: {
          radius: 0, // default to disabled in all datasets
        },
      },
      plugins: {
        tooltip: {
          // Disable the on-canvas tooltip
          enabled: false,

          external: function (context) {
            // Tooltip Element
            var tooltipEl = document.getElementById("chartjs-tooltip");

            // Create element on first render
            if (!tooltipEl) {
              tooltipEl = document.createElement("div");
              tooltipEl.id = "chartjs-tooltip";
              tooltipEl.innerHTML = "<table></table>";
              document.body.appendChild(tooltipEl);
            }

            // Hide if no tooltip
            var tooltipModel = context.tooltip;
            if (tooltipModel.opacity === 0) {
              tooltipEl.style.opacity = 0;
              return;
            }

            // Set caret Position
            tooltipEl.classList.remove("above", "below", "no-transform");
            if (tooltipModel.yAlign) {
              tooltipEl.classList.add(tooltipModel.yAlign);
            } else {
              tooltipEl.classList.add("no-transform");
            }

            function getBody(bodyItem) {
              return bodyItem.lines;
            }

            // Set Text
            if (tooltipModel.body) {
              var titleLines = tooltipModel.title || [];
              var bodyLines = tooltipModel.body.map(getBody);

              var innerHtml = "<thead>";

              titleLines.forEach(function (title) {
                innerHtml += "<tr><th>" + title + "</th></tr>";
              });
              innerHtml += "</thead><tbody>";

              bodyLines.forEach(function (body, i) {
                var colors = tooltipModel.labelColors[i];
                var style = "background:" + colors.backgroundColor;
                style += "; border-color:" + colors.borderColor;
                style += "; border-width: 2px";
                var span = '<span style="' + style + '"></span>';
                innerHtml +=
                  "<tr><td>" +
                  span +
                  body[0].substring(13) +
                  " <sup>&deg;C</sup></td></tr>";
              });
              innerHtml += "</tbody>";

              var tableRoot = tooltipEl.querySelector("table");
              tableRoot.innerHTML = innerHtml;
            }

            var position = context.chart.canvas.getBoundingClientRect();
            var bodyFont = Chart?.helpers?.toFont(
              tooltipModel.options.bodyFont
            );

            // Display, position, and set styles for font
            tooltipEl.style.opacity = 1;
            tooltipEl.style.position = "absolute";
            tooltipEl.style.left =
              position.left + window.pageXOffset + tooltipModel.caretX + "px";
            tooltipEl.style.top =
              position.top + window.pageYOffset + tooltipModel.caretY + "px";
            tooltipEl.style.font = bodyFont?.string;
            tooltipEl.style.padding =
              tooltipModel.padding + "px " + tooltipModel.padding + "px";
            tooltipEl.style.pointerEvents = "none";
          },
        },
        title: {
          display: true,
          text: "Temparature",
          align: "start",
          color: "",
          font: {
            size: 24,
            weight: "normal",
            color: "#68696b",
          },
        },
        legend: {
          align: "left",
          display: false,
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
          min: -20,
          max: 50,
          backgroundColor: "#EBF2FB",
          // suggestedMin: Math.min(tempData),
          // suggestedMax: Math.max(tempData),
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
