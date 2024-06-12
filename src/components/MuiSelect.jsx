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
	fontSize: "18px",
	borderRadius: '10px',
	'& .MuiSelect-select': {
		paddingRight: '20px',
		padding: '6px 10px',
	},
	'& .MuiSelect-icon': {
		color: '#3CCCEC',
		width: "20px",
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
		paddingRight: '25px',
		color: 'white',
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

const MuiSelect = () => {

	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<>
			<div className="w-full">
				<CustomSelect
					value={age}
					onChange={handleChange}
					displayEmpty
					inputProps={{ 'aria-label': 'Without label' }}
					IconComponent={KeyboardArrowDownIcon}
					MenuProps={CustomMenuProps}  >
					<MenuItem value="">
						30-04-2024
					</MenuItem>
					<MenuItem value={10}>30-04-2024 1</MenuItem>
					<MenuItem value={20}>30-04-2024 2</MenuItem>
					<MenuItem value={30}>30-04-2024 3</MenuItem>
				</CustomSelect>
			</div>
		</>
	)
}

export default MuiSelect