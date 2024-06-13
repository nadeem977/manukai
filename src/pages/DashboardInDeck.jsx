/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import {
	AddModelIcon,
	Beta,
	Check,
	Hamburger2,
	Instagram,
	MinusIcon,
	MinusIcons,
	NationalIcon,
	NovaEngineIcon,
	PlusIcon,
	ReaportIcon,
	SearchIcon,
	Twitter,
	VerifiedIcon,
} from "../components/Icon";
import iconP from "../assets/img/iconP.png"
import Layout from "../components/Layout";
import { SearchForm } from "../components/TopHeader";
import { CustomMenuItem, SidebarCollapseItem } from "./DashboardInData";
import miniicon from "../assets/img/mini.png"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SpeakerNotesOffIcon from '@mui/icons-material/SpeakerNotesOff';
import { data, manukaidatamenu, ManukaiSearch } from "../assets/data/data"
import SideBarConponet from "../components/SideBarConponet";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

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
		<Layout sidebar={<SideBarConponet data={ManukaiSearch} />}>
			 <div className="flex-grow-1 scroll-card-wrapper">
      <div className={`flex gap-2 ${boxlength === 1 ? 'flex-col gap-y-5' : `xl:grid xl:grid-cols-2 2xl:grid-cols-${boxlength}`}`}>

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

	const [searchOpen, setSearchOpen] = React.useState(false);
	const [age, setAge] = React.useState('');
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const searchFormRef = useRef(null);
	const handleClickOutside = (event) => {
		if (searchFormRef.current && !searchFormRef.current.contains(event.target)) {
			setSearchOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

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

							<div className="alert-text pl-1">Items 26</div>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2 flex-wrap">
								<button className="bg-[#4ED2EF] px-1
								text-[10px] flex items-center h-[22px] gap-1 font-semibold text-black rounded">
									<i class="bi bi-eye font-bold text-[17pxpx]"></i> Add To Surveillance</button>
								{/* <div className="border-[1.6px] border-[#4ED2EF] max-h-[20px] rounded-[4px] flex items-center ">
									<i class="bi bi-dash cursor-pointer text-white" onClick={removeModelstest}></i>
									<p className="border-l-[1.5px] border-[#4ED2EF] rounded-full h-[25px]" />
									<i class="bi bi-plus cursor-pointer text-white" onClick={addModelstest}></i>
								</div> */}
									<div className="cursor-pointer" onClick={addModelstest}><AddModelIcon/></div>
									<div className="cursor-pointer"  onClick={removeModelstest}><MinusIcons/></div>
							</div>
							<div className="flex items-center gap-2 flex-wrap">
								<button className="bg-[#4ED2EF] w-fit px-1 flex items-center text-[10px] h-[20px] gap-1 font-semibold text-black rounded">
									<i class="bi bi-check2 text-[17px] "></i>Translate</button>
								<button className="bg-[#4ED2EF] w-fit px-1 font-semibold text-black text-[10px] h-[20px] rounded flex items-center gap-1">
									<i class="bi bi-check2 text-[17px]"></i>Profanity Filter</button>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-2 w-full border-[1.5px] h-[36px] rounded 
				overflow-hidden  border-[#4ED2EF80] pr-3  mt-3">
						<div
							onClick={() => setSearchOpen(!searchOpen)}

							className="w-full p-2 py-3 text-[14px] h-full text-[#787878] flex items-center bg-transparent outline-none border-none" >
							Search
						</div>
						<SearchIcon />
					</div>
					<div ref={searchFormRef} className={`search-form-area w-full left-0 top-[80px] ${searchOpen ? "active" : ""}`}>
						<form className="search-form">
							<input
								type="text"
								className="form-control"
								placeholder="Search anything.."
								onBlur={() => setSearchOpen(false)}
							/>
							<button type="submit" className="no-gutter">
								<SearchIcon />
							</button>
						</form>
						<div className="search-suggestion overflow-y-auto">
							<h6 className="title">Search option</h6>
							<ul className="list">
								<li>
									<strong>Key:</strong>
									<span>Keywords</span>
								</li>
								<li>
									<strong>Media:</strong>
									<span>
										Said by a group of news sources in a country
									</span>
								</li>
								<li>
									<strong>Media Name:</strong>
									<span>Said By a specific news source</span>
								</li>
								<li>
									<strong>Country: </strong>
									<span>
										Said by Country Officials and government
										representatives
									</span>
								</li>
								<li>
									<strong>From:</strong>
									<span>
										Specific Influential Figures or Politicians
									</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex items-center gap-2 mt-3 flex-wrap">
						<button className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">War <i class="bi bi-x-lg"></i></button>
						<button className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">Ukraine <i class="bi bi-x-lg"></i></button>
						<button className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">Russia <i class="bi bi-x-lg"></i></button>
						<button className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">Hamas <i class="bi bi-x-lg"></i></button>
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

	const [searchOpen, setSearchOpen] = React.useState(false);
	const [age, setAge] = React.useState('');
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const searchFormRef = useRef(null);
	const handleClickOutside = (event) => {
		if (searchFormRef.current && !searchFormRef.current.contains(event.target)) {
			setSearchOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

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
							<div>
						<div className="flex items-center gap-2 w-full lg:w-[347px] border-[1.5px] h-[36px] rounded 	overflow-hidden  border-[#4ED2EF80] pr-3 ">
									<div onClick={() => setSearchOpen(!searchOpen)}
										className="w-full p-2 py-3 relative text-[14px] h-full text-[#787878] flex items-center bg-transparent outline-none border-none" >
										Search
									</div>
									<SearchIcon />
								</div>
								<div ref={searchFormRef} className={`search-form-area w-full left-0 top-[80px] ${searchOpen ? "active" : ""}`}>
									<form className="search-form">
										<input
											type="text"
											className="form-control"
											placeholder="Search anything.."
											onBlur={() => setSearchOpen(false)}
										/>
										<button type="submit" className="no-gutter">
											<SearchIcon />
										</button>
									</form>
									<div className="search-suggestion overflow-y-auto">
										<h6 className="title">Search option</h6>
										<ul className="list">
											<li>
												<strong>Key:</strong>
												<span>Keywords</span>
											</li>
											<li>
												<strong>Media:</strong>
												<span>
													Said by a group of news sources in a country
												</span>
											</li>
											<li>
												<strong>Media Name:</strong>
												<span>Said By a specific news source</span>
											</li>
											<li>
												<strong>Country: </strong>
												<span>
													Said by Country Officials and government
													representatives
												</span>
											</li>
											<li>
												<strong>From:</strong>
												<span>
													Specific Influential Figures or Politicians
												</span>
											</li>
										</ul>
									</div>
								</div>
								<div className="flex items-center gap-2 mt-3 flex-wrap">
									<button className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">War <i class="bi bi-x-lg"></i></button>
									<button className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">Ukraine <i class="bi bi-x-lg"></i></button>
									<button className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">Russia <i class="bi bi-x-lg"></i></button>
									<button className="bg-[#114652] text-[10px] p-1 px-2 rounded-[5px] border-[1px] border-[#4ED2EF]">Hamas <i class="bi bi-x-lg"></i></button>
								</div>
							</div>
							<div className="flex flex-col justify-between gap-2">
								<div className="flex items-center gap-2 flex-wrap">
									<button className="bg-[#4ED2EF] px-2
								text-[13px] flex items-center h-[31px] gap-1 font-semibold text-black rounded">
										<i class="bi bi-eye font-bold text-[17px]"></i> Add To Surveillance</button>
									{/* <div className="border-[1.6px] border-[#4ED2EF] max-h-[20px] rounded-[4px] flex items-center ">
										<i class="bi bi-dash cursor-pointer text-white mt-auto " ></i>
										<p className="border-l-[1.5px] border-[#4ED2EF] rounded-full h-[25px]" />
										<i class="bi bi-plus cursor-pointer text-white mt-auto" ></i>
									</div> */}
									<div className="cursor-pointer" onClick={addModelstest}><AddModelIcon/></div>
									<div className="cursor-pointer"  onClick={removeModelstest}><MinusIcons/></div>
								</div>
								<div className="flex items-center gap-2 flex-wrap">
									<button className="border-[1px] border-[#4ED2EF] w-fit px-2 flex items-center text-[12px] h-[25px] gap-1 font-semibold text-[#12A5C6]  rounded">
										<SpeakerNotesIcon style={{fontSize:"13px" ,marginTop:"2px"}}/>Translate</button>
									<button className="border-[1px] border-[#4ED2EF] w-fit px-2 font-semibold text-[#12A5C6] text-[12px] h-[25px] rounded flex items-center gap-1">
										<ReaportIcon/> Profanity Filter</button>
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
// const SidebarInformations = () => {
// 	return (
// 		<>
// 			<SidebarCollapseItem title="INTELLIGENCE">
// 				<ul className="manukai-data-menu">
// 					{manukaidatamenu?.map((item, index) => (
// 						<CustomMenuItem {...item} key={index} />
// 					))}
// 				</ul>
// 			</SidebarCollapseItem>
// 		</>
// 	);
// };



export default DashboardInDeck;


