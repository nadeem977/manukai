import React from "react";
import ReactApexChart from "react-apexcharts";
import MuiSelect from "./MuiSelect";
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
  fontSize:"12px",
	borderRadius: '2px', 
	'& .MuiSelect-select': {
	  paddingRight: '10px', 
	  padding: '6px 10px',
	},
	'& .MuiSelect-icon': {
	  color: '#3CCCEC',
    width:"10px",
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
  '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
     paddingRight: '10px',
     fontSize:"12px",
  }
  }));
  
  const CustomMenuProps = {
	PaperProps: {
	  style: {
		backgroundColor: 'transparent',
		borderRadius: '10px',
		color:"white",
		backdropFilter:"blur(20px)"
	  },
	},
  };

const series = [
  {
    data: [100, 80, 70, 51, 62, 109, 100],
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
  fill: {
    type: "gradient",
    gradient: {
      shade: 'dark',
      type: 'vertical', // This ensures the gradient is applied vertically
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 45.67, 100],
      colorStops: [
        {
          offset: 0,
          color: "#057609",
          opacity: 1
        },
        {
          offset: 45.67,
          color: "#E3AE25",
          opacity: 1
        },
        {
          offset: 100,
          color: "#FF2222",
          opacity: 1
        }
      ]
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false, // Hide the stroke line
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: {
      style: {
        fontSize: "8px",
      },
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
    enabled: false,
  },
};
 
const PortfolioRiskScore = () => {

  const [age, setAge] = React.useState('');
	const handleChange = (event) => {
	  setAge(event.target.value);
	};

  return (
    <div className="chart-item border p-0">
      <div className="d-flex justify-content-between p-3 pb-0">
        <h6
          className="subtitle flex-grow-1"
          style={{ marginBottom: "-14px" }}>
          Portfolio Risk Score
        </h6>
       <div className="min-w-[68px] h-[19px]">
       <CustomSelect
      value={age}
      onChange={handleChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      IconComponent={KeyboardArrowDownIcon} 
      MenuProps={CustomMenuProps}  >
      <MenuItem value="">
      score
      </MenuItem>
      <MenuItem value={10}>7 Day</MenuItem>
      <MenuItem value={20}>10 Day</MenuItem>
      <MenuItem value={30}>15 Day</MenuItem>
    </CustomSelect>
       </div>
      </div>
      <div className="risk-chart-1">
        <ReactApexChart options={options} series={series} type="area" />
      </div>
    </div>
  );
};

export default PortfolioRiskScore;
