import React from "react";
import ReactApexChart from "react-apexcharts";

const series = [
  {
    data: [8.5, 8.5, 7.5, 7.5],
  },
];

const options = {
  chart: {
    id: "apexchart-example",
    toolbar: {
      show: false,
    },
    color: "white"
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: 'dark',
      type: 'vertical',
      shadeIntensity: 1,
      gradientToColors: undefined,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
      colorStops: [
        {
          offset: 0,
          color: "#3AA4F6",
          opacity: 1,
        },
        {
          offset: 100,
          color: "#986BFF",
          opacity: 1,
        },
      ],
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#ffffff'],
      fontSize: '12px',
    },
  },
  xaxis: {
    categories: ["War & Conflict", "Terrorism", "Cyber threats", "Espionage"],
    labels: {
      style: {
        fontSize: "10px",
        colors: '#ffffff'  
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "10px",
        colors: '#ffffff' 
      },
    },
  },
  grid: {
    borderColor: '#40475D',
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      dataLabels: {
        position: 'top',
      },
    },
  },
  
};

const RiskTypeBar = () => {
  return (
    <div className="chart-item border p-0 min-w-[300px]">
      <h1 className="subtitle m-0 pt-2 pl-3">Risk Type</h1>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
      />
    </div>
  );
};

export default RiskTypeBar;
