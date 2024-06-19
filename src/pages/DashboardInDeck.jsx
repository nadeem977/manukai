/* eslint-disable jsx-a11y/iframe-has-title */
import React, {useEffect, useState } from "react";
import {AddModelIcon,MinusIcons,ReaportIcon,VerifiedIcon,} from "../components/Icon";
import Layout from "../components/Layout";
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import { data } from "../assets/data/data"
import SideBarConponet from "../components/SideBarConponet";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import TagMannager from "../components/TagMannager";

const CustomSelect = styled(Select)(({ theme }) => ({
	width: '100%',
	// backgroundColor: '#6E6E6E1A',
	border: 'none',
	outline: 'none',
	color: '#29BFE3',
	fontSize: "18px",
	borderRadius: '2px',
	'& .MuiSelect-select': {
		paddingRight: '20px',
		padding: '0px 10px 0px 0px ',
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
		color: '#29BFE3',
		fontSize: "18px",
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


const DashboardInDeck = () => {

	const [addmodel, setAddModel] = useState([1]);
    const [boxlength ,setBoxLength] = useState(2)
	const addModelstest = () => {
	  setAddModel((prev) => {
		if (prev.length < 4) {
		  const newNumber = prev[prev.length - 1] + 1;
		  return [...prev, newNumber];
		}
		return prev;
	  });
	};
  
	const removeModelstest = () => {
	  setAddModel((prev) => {
		if (prev.length > 1) {
		  return prev.slice(0, -1);
		}
		return prev;
	  });
	};
 useEffect(()=>{
	setBoxLength(addmodel?.length)
 },[addmodel])


	return (
		<Layout sidebar={<SideBarConponet  />}>
			 <div className="flex-grow-1 scroll-card-wrapper">
      <div className={`flex gap-2 ${boxlength === 1 ? 'flex-col gap-y-5' : 
	  `xl:grid ${boxlength === 2 ?"xl:grid-cols-2":boxlength === 3?"xl:grid-cols-3":"xl:grid-cols-4"}`}`}>

        {addmodel.length > 1 ? (
          addmodel.map((_, i) => (
            <div key={i}>
              <HistoryCards
                removeModelstest={removeModelstest}
                addModelstest={addModelstest}
                addmodel={addmodel}
              />
            </div>
          ))
        ) : (
          <HistoryCardssignle
            removeModelstest={removeModelstest}
            addModelstest={addModelstest}
          />
        )}
      </div>
    </div>
		</Layout>
	);
};
const HistoryCards = ({ addModelstest, removeModelstest, addmodel }) => {

 
	const[translatetoggle ,setTranslatetoggle] = React.useState(true);
	const[profanitytoggle ,setProfanitytoggle] = React.useState(true);
	const [age, setAge] = React.useState('');
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	 

	return (
		<>
			<div className="card __card  max-h-[95vh] lg:max-h-[88vh] ">
				<div className="border-b-2 border-[#4ED2EF0F] p-3">
					<div className={`flex justify-between gap-1 flex-col sm:flex-row flex-wrap `}>
						<div className="card-left-content">
							<div className="w-fit ml-1">
								<CustomSelect
									value={age}
									onChange={handleChange}
									displayEmpty
									inputProps={{ 'aria-label': 'Without label' }}
									IconComponent={KeyboardArrowDownIcon}
									MenuProps={CustomMenuProps}  >
									<MenuItem value="">
										Mixed
									</MenuItem>
									<MenuItem value={10}>News</MenuItem>
									<MenuItem value={20}>Social Media</MenuItem>
									<MenuItem value={30}>Dark Web</MenuItem>
								</CustomSelect>
							</div>

							<div className="alert-text pl-1">Items 26</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2 flex-wrap">
								<button className="bg-[#4ED2EF] px-1
								text-[10px] flex items-center h-[22px] gap-1 font-semibold text-black rounded">
									<i className="bi bi-eye font-bold text-[17pxpx]"></i> Add To Surveillance</button>
								 
									<div className="cursor-pointer" onClick={addModelstest}><AddModelIcon/></div>
									<div className="cursor-pointer"  onClick={removeModelstest}><MinusIcons/></div>
							</div>
							<div className="flex items-center gap-2 flex-wrap">
								<button className={`border-[1px] border-[#4ED2EF] ${translatetoggle?"bg-[#4ED2EF] text-black":"  text-[#4ED2EF]"} w-fit px-1 flex items-center text-[10px] h-[20px] gap-1 font-semibold  rounded`}
								 onClick={()=>setTranslatetoggle(!translatetoggle)}>
									<i className="bi bi-check2 text-[17px] "></i>Translate</button>
								<button className={`border-[1px] border-[#4ED2EF] ${profanitytoggle?"bg-[#4ED2EF] text-black":"  text-[#4ED2EF]"}  w-fit px-1 font-semibold text-[10px] h-[20px] rounded flex items-center gap-1`} 
								onClick={()=>setProfanitytoggle(!profanitytoggle)}>
									<i className="bi bi-check2 text-[17px]"></i>Profanity Filter</button>
							</div>
						</div>
					</div>
					<div className="mt-3">
					<TagMannager/>
					</div>
				</div>
				<div className="card-body py-2 px-0 overflow-y-auto">
					{data.map((item, index) => {
						return (
							<div className={`history-item ${index % 2 === 0 ? "bg-[#0d252b]" : "bg-[#091d23]"}`} key={index}>
								<div className="history-item-header">
									<div className="history-item-header-left">
										<img src={item.userImage} alt="" />
										<div className="history-item-header-left-content">
											<h6 className="text-[12px] font-semibold flex items-cneter gap-1">
												{item.name} <VerifiedIcon />
											</h6>
											<span className="username text-[11px]">
												{item.username}
											</span>
										</div>
									</div>
									<div className="history-item-header-right">
										<div className="flex items-center gap-1 text-[#9D9D9D] text-[9px] mb-1"><p>10:05:35Z 28/05/24</p><SpeakerNotesOffIcon style={{ fontSize: "12px" }} /></div>
										<button className="no-gutter float-end text-white" type="button">
											{item.icon}
										</button>
									</div>
								</div>
								<div className="history-item-body">
									<p className="text-13 mb-2 text-white">
										{item.text}{" "}
										{item?.tags?.map((item, i) => (
											<span
												className="d-inline"
												key={i}
												style={{ color: "var(--base)" }}
											>
												{item}
											</span>
										))}{" "}
									</p>
									{item.img && (
										<div className="history-item-body-img">
											<img src={item.img} alt="" />
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
const HistoryCardssignle = ({ addModelstest, removeModelstest, addmodel }) => {

 
	const [age, setAge] = React.useState('');
	const[translatetoggle ,setTranslatetoggle] = React.useState(false);
	const[profanitytoggle ,setProfanitytoggle] = React.useState(false);
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	 
	return (
		<>
			<div className="card __card  max-h-[95vh] lg:max-h-[88vh] ">
				<div className="border-b-2 border-[#4ED2EF0F] p-3">
					<div className={`flex justify-between gap-1 flex-col sm:flex-row `}>
						<div className="card-left-content">
							<div className="w-fit ml-1">
								<CustomSelect
									value={age}
									onChange={handleChange}
									displayEmpty
									inputProps={{ 'aria-label': 'Without label' }}
									IconComponent={KeyboardArrowDownIcon}
									MenuProps={CustomMenuProps}  >
									<MenuItem value="">
										Mixed
									</MenuItem>
									<MenuItem value={10}>News</MenuItem>
									<MenuItem value={20}>Social Media</MenuItem>
									<MenuItem value={30}>Dark Web</MenuItem>
								</CustomSelect>
							</div>

							<div className="alert-text pl-1 text-white">Items 26</div>
						</div>
						<div className="flex gap-3">
						<TagMannager/>
							<div className="flex flex-col justify-between gap-2">
								<div className="flex items-center gap-2 flex-wrap">
									<button className="bg-[#4ED2EF] px-2
								text-[13px] flex items-center h-[31px] gap-1 font-semibold text-black rounded">
										<i className="bi bi-eye font-bold text-[17px]"></i> Add To Surveillance</button>
									 
									<div className="cursor-pointer" onClick={addModelstest}><AddModelIcon/></div>
									<div className="cursor-pointer"  onClick={removeModelstest}><MinusIcons/></div>
								</div>
								<div className="flex items-center gap-2 flex-wrap">
									<button className={`border-[1px] border-[#4ED2EF] ${translatetoggle?"bg-[#4ED2EF] text-black":"text-[#12A5C6]"} w-fit px-2 flex items-center text-[12px] h-[25px] gap-1 font-semibold   rounded`} onClick={()=>setTranslatetoggle(!translatetoggle)}>
										<SpeakerNotesIcon style={{fontSize:"13px" ,marginTop:"2px"}}/>Translate</button>
									<button className={`border-[1px] border-[#4ED2EF] ${profanitytoggle?"bg-[#4ED2EF] text-black":"text-[#12A5C6] "} w-fit px-2 font-semibold text-[12px] h-[25px] rounded flex items-center gap-1`}
									onClick={()=>setProfanitytoggle(!profanitytoggle)}>
										<ReaportIcon color={`${profanitytoggle?"black":"#4ED2EF"}`}/> Profanity Filter</button>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div className="card-body py-2 px-0 overflow-y-auto">
					{data.map((item, index) => {
						return (
							<div className={` p-4 ${index % 2 === 0 ? "bg-[#0d252b]" : "bg-[#091d23]"} flex-col lg:flex-row flex items-center `} key={index}>
								{item.img && (
									<div className="border-r-[1.5px] border-[#4ED2EF0F] mr-5 pr-5">
										<img src={item.img} alt="" className="h-[217px] max-w-[400px] lg:min-w-[400px] w-full min-w-[250px] object-cover rounded-md" />
									</div>
								)}
								<div className="flex flex-col items-baseline">
									<div className="flex items-center justify-between w-full">
										<div className="flex items-center gap-2">
											<img src={item.userImage} alt="" className="w-[42px] h-[42px]" />
											<div className="flex flex-col">
												<h6 className="text-[12px] font-semibold flex items-cneter gap-1">
													{item.name} <VerifiedIcon />
												</h6>
												<span className="username text-[11px] text-[#AAB8C2]">
													{item.username}
												</span>
											</div>
										</div>
										<div className="history-item-header-right">
											<div className="flex items-center gap-1 text-[#9D9D9D] text-[9px] mb-1">
												<p>10:05:35Z 28/05/24</p><SpeakerNotesOffIcon style={{ fontSize: "12px" }} /></div>

										</div>
									</div>
									<div className="history-item-body">
										<p className="text-13 my-2 text-white">
											{item.text}{" "}
											{item?.tags?.map((item, i) => (
												<span
													className="d-inline"
													key={i}
													style={{ color: "var(--base)" }}>
													{item}
												</span>
											))}{" "}
										</p>
										<button className="no-gutter  text-white" type="button">
											{item.icon}
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
 

export default DashboardInDeck;


