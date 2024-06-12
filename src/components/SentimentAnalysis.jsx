import { faker } from "@faker-js/faker";
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Title,
	Tooltip,
} from "chart.js";
import { Form } from "react-bootstrap";
import React from "react";
import { Line } from "react-chartjs-2";
import { DownloadIcon } from "./Icon";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			type: "category",
			grid: {
				drawBorder: false,
				borderColor: "#ffffff00",
				color: "#ffffff2a",
			},
			ticks: {
				maxRotation: 0,
				minRotation: 0,
				color: "#ffffff",
			},
		},
		y: {
			display: true,
			grid: {
				color: "#ffffff2a",
			},
			ticks: {
				color: "white",
				fontWidth: 700,
				callback: function (value, index, values) {
					return value;
				},
			},
		},
	},
};

const labels = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export const data = {
	labels,
	datasets: [
		{
			data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
			borderColor: "#63ABFD",
			backgroundColor: "#63ABFD",
			lineTension: 0,
			radius: 3,
		},
		{
			data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
			borderColor: "#FD6363",
			backgroundColor: "#FD6363",
			lineTension: 0,
			radius: 3,
		},
	],
};

const SentimentAnalysis = () => { 
	return (
		<div className="card __card">
			<div className="card-body">
				<div className="card-header pt-0 px-0 d-flex flex-wrap mb-2 align-items-center justify-content-between">
					<h6 className="text-base m-0" style={{ fontSize: "20px" }}>
						Risk Score vs Actual Score
					</h6>
					<button type="button" className="no-gutter text-14 text-white flex items-center gap-2">
						<DownloadIcon /> Save file
					</button>
				</div>

				<div className="legends pt-2 pb-2 pl-5">
					<div className="item" style={{ "--base": "#63ABFD" }}>
						<div className="circle"></div>
						<span className="text-[11px]">Risk Score</span>
					</div>
					<div className="item" style={{ "--base": "#FD6363" }}>
						<div className="circle"></div>
						<span className="text-[11px]">Actual Score (Non-predictive)</span>
					</div>
				</div>
				<div style={{ maxHeight: "600px" }} className="line-chart-1">
					<Line options={options} data={data} />
				</div>
				 
				<div className="mainChecks">
					<div className="form-check-group flex items-center  gap-2 mt-4">
					<Form.Check type={"checkbox"} id="Risk Score" label={"Risk Score"} />
					<Form.Check type={"checkbox"} id="Actual" label={"Actual Score (Non-predictive)"} /> 
				</div>
				</div>
			</div>
		</div>
	);
};

const schedules = ["1h", "3h", "4h", "6h", "7h", "8h", "9h", "All"];

export default SentimentAnalysis;
