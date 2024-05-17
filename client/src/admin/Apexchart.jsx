import React from "react";
import Chart from "react-apexcharts"
export default function AphexChart() {
    return React.createElement(Chart, {
      type: "pie",
      width:500,
      height:400,
      series: [30, 45, 55],
      options: {
        labels: ["Booking", "Users", "Rooms"],
        legend: {
          show: false
        },
        colors: ["#1e62d6", "#154596", "#184eab"],
      }
    });
  }