import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const CustomSelect = styled(Select)(({ theme }) => ({
	width: '100%',
	border: '1px solid #4ED2EF80',
	outline: 'none',
	color: 'white',
	fontSize: "10px",
	borderRadius: '4px',
	'& .MuiSelect-select': {
		paddingRight: '10px',
		padding: '5px',
	},
	'& .MuiSelect-icon': {
		color: 'white',
		width: "15px",
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
		paddingRight: '22px',
		color: 'white',
		fontSize: "10px",
	}
}));
const CustomMenuProps = {
	PaperProps: {
		style: {
			backgroundColor: 'transparent',
			borderRadius: '0px',
			color: "white",
			backdropFilter: "blur(20px)"
		},
	},
};

const SelectComponet = ({data,defaults}) => {
    const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<>
			<div className="w-fit px-[3px]">
				<CustomSelect
					value={age}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					IconComponent={KeyboardArrowDownIcon}
					MenuProps={CustomMenuProps}  >
					<MenuItem value="">
					{defaults}
					</MenuItem>
					{data.map((item,i)=>(
					<MenuItem value={i}>{item}</MenuItem>
					))}
					
				</CustomSelect>
			</div>
		</>
	)
}


export default SelectComponet