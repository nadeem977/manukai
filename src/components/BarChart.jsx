import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
	const series = [
		{
			name: "Free Cash Flow",
			data: [8, 12, 10, 84, 93, 2, 4, 30, 75, 16],
		},
	];
	const options = {
		chart: {
			type: "bar",
			height: 350,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: "55%",
				endingShape: "rounded",
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: false,
		},
		xaxis: {
			categories: [8, 12, 10, 84, 93, 2, 4, 30, 75, 16],
		},
		yaxis: {
			show: false,
		},
		fill: {
			opacity: 1,
		},
		tooltip: {
			y: {
				formatter: (val) => " thousands",
			},
		},
	};
	return (
		<div className="chart-item border">
			<h6 className="subtitle" style={{ marginBottom: "-14px" }}>
				Global Threat Index
			</h6>
			<ReactApexChart
				options={options}
				series={series}
				type="bar"
				height={120}
			/>
		</div>
	);
};

export default BarChart;
