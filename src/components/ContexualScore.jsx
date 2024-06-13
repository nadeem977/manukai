import React from "react";
import ReactApexChart from "react-apexcharts";
import MenuItem from '@mui/material/MenuItem'; 
import Select from '@mui/material/Select'; 
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomSelect = styled(Select)(({ theme }) => ({
	width: '100%',
	backgroundColor: '#6E6E6E1A',
	border: 'none',
	outline: 'none',
	color: 'white',
	fontSize: "12px",
	borderRadius: '2px',
	'& .MuiSelect-select': {
		paddingRight: '10px',
		padding: '6px 10px',
	},
	'& .MuiSelect-icon': {
		color: '#3CCCEC',
		width: "10px",
	},
	'& .MuiInputBase-input': {
		color: 'white',
	},
	'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
	'&:hover .MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
	'& .MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
	'& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
		paddingRight: '10px',
		fontSize: "12px",
	}
}));

const CustomMenuProps = {
	PaperProps: {
		style: {
			backgroundColor: 'transparent',
			borderRadius: '10px',
			color: "white",
			backdropFilter: "blur(20px)"
		},
	},
};

const series = [
	{
		data: [0, 30, 50, 80, 50, 30, 0],
	},
];

const options = {
	chart: {
		height: 170,
		type: "area",
		toolbar: {
			show: false,
		},
	},

	colors: ["#E3AE2500", "#FF222200", "#05760900"],
	fill: {
		colors: ["#07414E", "#E91E63", "#9C27B0"],
		opacity: 0.9,
		type: "gradient",
		gradient: {
			shade: "dark",
			type: "horizontal",
			shadeIntensity: 0.5,
			gradientToColors: ["#2CCAF0", "#07414E"],
			inverseColors: true,
			opacityFrom: 1,
			opacityTo: 1,
			colorStops: [],
		},
		image: {
			src: [],
			width: undefined,
			height: undefined,
		},
		pattern: {
			style: "verticalLines",
			width: 6,
			height: 6,
			strokeWidth: 2,
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		curve: "smooth",
	},
	xaxis: {
		labels: {
			show: false,
			maxWidth: 30,
		},
	},
	yaxis: {
		labels: {
			style: {
				fontSize: "8px",
			},
		},
	},
	tooltip: {
		enabled: true,
		theme: 'dark',
		style: {
			fontSize: '12px',
		},
		y: {
			formatter: function (val) {
				return `Value: ${val}`;
			}
		},
		marker: {
			show: true,
		},
	},
	annotations: {
		points: [{
			x: new Date().getTime(),
			y: 80,
			marker: {
				size: 8,
				fillColor: "#fff",
				strokeColor: "#2698FF",
				radius: 2,
			},
			label: {
				borderColor: "#2698FF",
				offsetY: 0,
				style: {
					color: "#fff",
					background: "#2698FF",
				},
				text: 'NOW',
			}
		}]
	},
};

const ContexualScore = () => {
	const [age, setAge] = React.useState('');
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<div className="chart-item p-0">
			<div className="d-flex justify-content-between p-3 pb-0">
				<h6
					className="subtitle flex-grow-1"
					style={{ marginBottom: "-14px" }}
				>
					Contextual Score
				</h6>
				<div className="min-w-[94px] h-[19px]">
					<CustomSelect
						value={age}
						onChange={handleChange}
						displayEmpty
						inputProps={{ 'aria-label': 'Without label' }}
						IconComponent={KeyboardArrowDownIcon}
						MenuProps={CustomMenuProps}  >
						<MenuItem value="">
							Portfolio 3y
						</MenuItem>
						<MenuItem value={10}>7 Day</MenuItem>
						<MenuItem value={20}>10 Day</MenuItem>
						<MenuItem value={30}>15 Day</MenuItem>
					</CustomSelect>
				</div>
			</div>
			<div className="risk-chart-2">
				<ReactApexChart options={options} series={series} type="area" />
			</div>
		</div>
	);
};

export default ContexualScore;
