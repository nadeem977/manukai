import { faker } from "@faker-js/faker";
import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
	scales: {
		x: {
			display: false,
			type: "category",
			grid: {
				drawBorder: false,
			},
			ticks: {
				display: false,
			},
		},
		y: {
			display: false,
			grid: {
				drawBorder: false,
			},
			ticks: {
				color: "#4ED2EF",
				display: false,
				callback: function (value, index, values) {
					return value;
				},
			},
		},
	},
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
	labels,
	datasets: [
		{
			fill: true,
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
			borderColor: "rgba(114, 235, 53, 0.5)",
			backgroundColor: "rgba(114, 235, 53, 0.5)",
			lineTension: 0,
			pointRadius: 0,
		},
	],
};

export function SourcesChart() {
	return (
		<div
			className="mt-xxl-n30"
			style={{ widht: "50%", maxWidth: "230px", marginLeft: "auto" }}
		>
			<div className="text-12 text-base">RISK SCORE HISTORY</div>
			<div className="text-12 mb-2 d-flex justify-content-between gap-2 align-items-center">
				<span>PEAK 9.7 </span>
				<span className="border-top-dashed flex-grow-1"></span>
				<span>9.5</span>
			</div>
			<div className="text-12 text-base">
				<span>
					LAST WK <span className="text-danger">9.7</span>
				</span>
			</div>
			<Line options={options} data={data} height={80} />
		</div>
	);
}
