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
	Filler,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { DownloadIcon } from "./Icon";
import { Form } from "react-bootstrap";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler 
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
			position: "bottom",
			labels: {
				color: 'white',
				boxWidth: 10,
				padding: 15,
				border: {
					radius: 60
				},
				font: {
					size: 12
				}
			}
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
				callback: function (value) {
					return value;
				},
			},
		},
	},
};

const labels = [
	"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const data = {
	labels,
	datasets: [
		{
			label: 'War & Conflict',
			fill: true,
			data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
			borderColor: "#63ABFD",
			backgroundColor: "rgba(99, 171, 253, 0.5)",
		},
		{
			label: 'Terrorism',
			fill: true,
			data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
			borderColor: "#FDC963",
			backgroundColor: "rgba(253, 201, 99, 0.5)",
		},
		{
			label: 'Cyber Threats',
			fill: true,
			data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
			borderColor: "#FD6363",
			backgroundColor: "rgba(253, 99, 99, 0.5)",
		},
		{
			label: 'Espionage',
			fill: true,
			data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
			borderColor: "#4BC749",
			backgroundColor: "rgba(75, 199, 73, 0.5)",
		},
	],
};

const RiskTypesChart = () => {
	return (
		<div className="card __card">
			<div className="card-body">
				<div className="card-header pt-0 px-0 d-flex flex-wrap mb-2 align-items-center justify-content-between">
					<h6 className="text-base m-0 text-[#4ED2EF]" style={{ fontSize: "20px" }}>
						Risk Types
					</h6>
					<button type="button" className="no-gutter text-14 text-white flex items-center gap-2">
						<DownloadIcon /> Save file
					</button>
				</div>
				<div className="legends pt-2 pb-2 pl-5">
					<div className="item" style={{ "--base": "#63ABFD" }}>
						<div className="circle" style={{ background: "#63ABFD" }}></div>
						<span className="text-[11px]">War & Conflict</span>
					</div>
					<div className="item" style={{ "--base": "#FDC963" }}>
						<div className="circle" style={{ background: "#FDC963" }}></div>
						<span className="text-[11px]">Terrorism</span>
					</div>
					<div className="item" style={{ "--base": "#FD6363" }}>
						<div className="circle" style={{ background: "#FD6363" }}></div>
						<span className="text-[11px]">Cyber Threats</span>
					</div>
					<div className="item" style={{ "--base": "#4BC749" }}>
						<div className="circle" style={{ background: "#4BC749" }}></div>
						<span className="text-[11px]">Espionage</span>
					</div>
				</div>
				<div style={{ maxHeight: "600px" }} className="line-chart-2">
					<Line options={options} data={data} />
				</div>
				<div className="mainChecks">
					<div className="form-check-group flex items-center gap-x-2 mt-4 flex-wrap">
						<Form.Check type={"checkbox"} id="War" label={"War & Conflict"} />
						<Form.Check type={"checkbox"} id="Terrorism" label={"Terrorism"} />
						<Form.Check type={"checkbox"} id="Cyber" label={"Cyber Threats"} />
						<Form.Check type={"checkbox"} id="Espionage" label={"Espionage"} />
						<Form.Check type={"checkbox"} id="Infrastructure" label={"Infrastructure"} />
						<Form.Check type={"checkbox"} id="Civil" label={"Civil Unrest"} />
						<Form.Check type={"checkbox"} id="Financial" label={"Financial"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RiskTypesChart;
