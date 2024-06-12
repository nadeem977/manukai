import React from "react";
import { Dots } from "./Icon";

const SplineChart = () => {
	return (
		<div className="chart-item px-0 pb-0 chart-2 overflow-hidden">
			<h6 className="subtitle m-0 px-3 mb-2">Threat Dispersion</h6>
			<div className="position-relative">
				<div className="chart-count">
					7
					<span className="dots">
						<Dots />
					</span>
				</div>
				<img src="/img/spline-chart.png" className="w-100" alt="" />
			</div>
		</div>
	);
};

export default SplineChart;
