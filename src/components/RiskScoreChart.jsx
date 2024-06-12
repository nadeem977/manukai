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
                color: "#ffffff",  // Ensuring the color is set to white
                font: {
                    size: 12,  // Setting a font size
                    weight: 'bold',  // Optionally setting font weight
                },
            },
        },
        y: {
            display: true,
            grid: {
                color: "#ffffff2a",
            },
            ticks: {
                color: "#ffffff", 
                font: {
                    size: 12,  // Setting a font size
                    weight: 'bold',  // Optionally setting font weight
                },
                callback: function (value, index, values) {
                    return value;
                },
            },
        },
    },
};

const labels = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
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
    ],
};

const RiskScoreChart = () => {
    return (
        <div className="card __card h-100">
            <div className="card-body">
                <div className="card-header pt-0 px-0 d-flex flex-wrap mb-2 align-items-center justify-content-between">
                    <h6 className="text-base m-0" style={{ fontSize: "20px" }}>
                        Risk Score
                    </h6>
                    <button type="button" className="no-gutter text-14 text-white flex items-center gap-2">
                        <DownloadIcon /> Save file
                    </button>
                </div>
                <div className="legends pt-2 pb-2">
                    <div className="item pl-5" style={{ "--base": "#63ABFD" }}>
                        <div className="circle"></div>
                        <span className="text-[11px]">Portfolio</span>
                    </div>
                </div>
                <div style={{ maxHeight: "600px" }} className="line-chart-1 text-white">
                    <Line options={options} data={data} />
                </div>
                <div className="mainChecks">
                    <div className="form-check-group flex items-center  gap-2 mt-4">
                        <Form.Check type={"checkbox"} id="espi" label={"Portfolio"} />
                        <Form.Check type={"checkbox"} id="crime" label={"Israel"} />
                        <Form.Check type={"checkbox"} id="Yemen" label={"Yemen"} />
                        <Form.Check type={"checkbox"} id="Ukraine" label={"Ukraine"} />
                        <Form.Check type={"checkbox"} id="Russia" label={"Russia"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiskScoreChart;
