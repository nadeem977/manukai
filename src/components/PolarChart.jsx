import React from "react";

import ReactApexChart from "react-apexcharts";

const series = [14, 10, 7.5, 9.5];
const options = {
	labels: [
		"Ismail Haniya",
		"Benjamin Netanyahu",
		"Herzi Halevi",
		"Salah Shehade",

	],
	chart: {
		type: "polarArea",
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		polarArea: {
			rings: {
				strokeWidth: 0,
			},
			spokes: {
				strokeWidth: 0,
			},
		},
	},
	colors: ["#4BC749", "#FD6363", "#FDC963", "#63ABFD"],
	fill: {
		opacity: 1,
	},
};
const PolarChart = () => {
	return (
		<div className="chart-item p-0 charclass" style={{ minWidth: "285px" }}>
			<div className="d-flex justify-content-between p-3">
				<h6 className="subtitle flex-grow-1 m-0">
					Risk Actor Contribution
				</h6>
			</div>
			<div className="risk-chart-4 w-100">
				<ReactApexChart
					options={options}
					series={series}
					type="polarArea" 
				/>
			</div>
		</div>
	);
};

export default PolarChart;
