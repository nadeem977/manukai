import React, { useState, useRef, useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import {
	ArowRounded,
	ArrowIconsRounded,
	CyberSpaceIcon,
	DashboardViewIcon,
	Hamburger,
	IntelDeckIcon,
	LightIons,
	MapViewIcon,
	SearchIcon,
} from "./Icon";
import ExtensionIcon from '@mui/icons-material/Extension';
import logoBlack from "../assets/img/logo-black.svg";
import logo from "../assets/img/logo.svg";
import WorkIcon from '@mui/icons-material/Work';
import franceimg from "../assets/img/france.png"
import kindomimg from "../assets/img/kindom.png"
import tatiimg from "../assets/img/tati.png"
import plstingimg from "../assets/img/palstin.png"
import rusiaimg from "../assets/img/rusia.png"
import egyptgimg from "../assets/img/egypt.png"


const TopHeader = ({ setSidebarOpen, sidebarOpen, handleTheme, theme }) => {

	const notificationRef = useRef(null);
	const [activeButton, setActiveButton] = useState("worldwide");
	const [showNotification, setShowNotification] = useState(false)
	const handleClick = (buttonIndex) => {
		setActiveButton(buttonIndex);
	};

	const handleOutsideClick = (event) => {
		if (notificationRef.current && !notificationRef.current.contains(event.target)) {
			setShowNotification(false);
		}
	};

	useEffect(() => {
		if (showNotification) {
			document.addEventListener("mousedown", handleOutsideClick);
		} else {
			document.removeEventListener("mousedown", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
		};
	}, [showNotification]);


	return (
		<>
			<header className="header-section">
				<Link className="header-logo">
					<img src={theme === "premiere" ? logoBlack : logo} alt="" />
				</Link>
				<div className="top_bar">
					<div className="header-tabs-group">
						<NavLink to="/map-view">
							<MapViewIcon />
							<span className="d-none d-md-block">MapView</span>
						</NavLink>
						<NavLink to="/dashboard">
							<DashboardViewIcon />
							<span className="d-none d-md-block">Dashboard</span>
						</NavLink>
						<NavLink to="/int-deck">
							<IntelDeckIcon />
							<span className="d-none d-md-block">Inteldeck</span>
						</NavLink>
						<NavLink to="/cyberspace" className={"cyberspace"}>
							<ExtensionIcon style={{ fill: '#369AB3' }} />
							<span className="d-none d-md-block text-[#1F9CB8]">SOLUTIONS </span>
							<small className="beta">BETA</small>
						</NavLink>
					</div>
					<div className="setIcons">

						<div className="mainnotif relative mt-2">
							<i className="bi bi-bell text-[30px] mt-2" onClick={() => setShowNotification(!showNotification)}></i>
							<span className="bell text-[10px]">4</span>

							<div ref={notificationRef} className={`absolute bg-opacity-10 backdrop-blur notishado w-[370px] h-[400px] overflow-y-auto 2xl:h-auto
      top-10 right-0 border-[1px] border-[#4ED2EF80] rounded-[10px] bg-[#03191E4D]
      transition-all duration-300 ease-in-out
      ${showNotification ? "opacity-100 translate-y-0 pointer-events-auto" : "pointer-events-none opacity-0 translate-y-10 "}`}>
								<h1 className="text-[#12A5C6] px-2 py-1 pt-2 text-[17px] font-bold tracking-widest">Notifications</h1>
								<div className="flex p-2 items-center gap-2 border-b-[1px] pb-1 border-[#B3B3B3] justify-between w-full">
									<button
										className={`text-[12px]   noticbtn ${activeButton === 'worldwide' ? 'active' : ''}`}
										onClick={() => handleClick('worldwide')}>
										Worldwide
									</button>
									{[1, 2, 3, 4].map((buttonIndex) => (
										<button
											key={buttonIndex}
											className={`flex items-center noticbtn ${activeButton === buttonIndex ? 'active' : ''}`}
											onClick={() => handleClick(buttonIndex)}>
											<WorkIcon style={{ fontSize: '15px' }} />
											{buttonIndex}
											{buttonIndex === 2 && (
												<span className="bg-[#EC9121] w-[14px] h-[14px] flex items-center text-[10px] left-[5px] absolute top-[9px] justify-center rounded-full">4</span>
											)}
										</button>
									))}
									<button
										className={`relative noticbtn ${activeButton === 'eye' ? 'active' : ''}`}
										onClick={() => handleClick('eye')}>
										<i className="bi bi-eye text-[18px]"></i>
										<span className="bg-[#EC9121] w-[14px] h-[14px] flex items-center text-[10px] left-[9px] absolute top-[12px] justify-center rounded-full">2</span>
									</button>
								</div>

								<h1 className="text-[16px] p-2 font-semibold">New</h1>
								<div className="flex mb-1 justify-between hover:bg-[#06D1FF33] p-1 pl-[6px] rounded mx-[2px] cursor-pointer ">
									<div className="flex items-center gap-2 ">
										<span className="flex items-baseline">
											<img src={franceimg} alt="icons" />
											<ArrowIconsRounded />
										</span>
										<span>
											<p className="text-[14px] font-semibold">FRANCE, Risk Surge</p>
											<p className="text-[#2CCAF0] text-[10px]">26 May 24, 10:15Z  —  24h Surge</p>
										</span>
									</div>
									<div className="flex items-center gap-1">
										<span className="textshblack text-[#FF0808] font-semibold">+2.1</span>
										<div className="flex flex-col px-1 text-center rounded min-w-[21px] 
												     min-h-[21px] bg-[#FF4308] text-[11px]">
											<span className="leading-[13.13px] textshblack">7.8</span>
											<span className="leading-[9.55px] textshblack">AI</span></div>
									</div>
								</div>

								<div className="border-b-[1.5px] py-2 border-t-[1.5px] border-[#FFFFFF33]">
									<div className="flex flex-col gap-1">
										<h1 className="text-[16px] p-2  font-semibold">Last 48h</h1>

										<div className="flex justify-between hover:bg-[#06D1FF33] p-1 pl-[6px] rounded mx-[2px] cursor-pointer ">
											<div className="flex items-center gap-2 ">
												<span className="flex items-baseline">
													<img src={kindomimg} alt="icons" />
													<LightIons />
												</span>
												<span>
													<p className="text-[14px] font-semibold">UNITED KINGDOM, AI Insight</p>
													<p className="text-[#2CCAF0] text-[10px]">26 May 24, 10:15Z  —  24h Surge</p>
												</span>
											</div>
											<div className="flex items-center gap-1">
												<div className="flex flex-col px-1 rounded min-w-[21px] 
												     min-h-[21px] bg-[#FFBA08] text-[11px]">
													<span className="leading-[13.13px] textshblack">6.3</span>
													<span className="leading-[9.55px] text-[7px] textshblack">LIVE</span></div>
												<div className="flex flex-col px-1 rounded min-w-[21px] 
												     min-h-[21px] bg-[#FF4308] text-center text-[11px]">
													<span className="leading-[13.13px] textshblack">7.6</span>
													<span className="leading-[9.55px] textshblack">AI</span></div>
											</div>
										</div>

										<div className="flex justify-between hover:bg-[#06D1FF33] p-1 pl-[6px] rounded mx-[2px] cursor-pointer ">
											<div className="flex items-center gap-2 ">
												<span className="flex items-baseline">
													<img src={tatiimg} alt="icons" />
													<ArowRounded />
												</span>
												<span>
													<p className="text-[14px] font-semibold">ISRAEL, High Risk Alert</p>
													<p className="text-[#2CCAF0] text-[10px]">27 May 24, 14:25Z  —  Risk ≥ 7.0</p>
												</span>
											</div>
											<div className="flex items-center gap-1">
												<span className="textshblack text-[#FF0808] font-semibold">+1.4</span>
												<div className="flex flex-col px-1 rounded min-w-[21px] 
												     min-h-[21px] bg-[#FF4308] text-center text-[11px]">
													<span className="leading-[13.13px] textshblack">7.8</span>
													<span className="leading-[9.55px] textshblack">AI</span>
												</div>
											</div>
										</div>

									</div>
								</div>

								<div className="flex flex-col gap-1 pb-2">
									<h1 className="text-[16px] p-2  font-semibold">Last Week</h1>

									<div className="flex justify-between hover:bg-[#06D1FF33] p-1 pl-[6px] rounded mx-[2px] cursor-pointer ">
										<div className="flex items-center gap-2 ">
											<span className="flex items-baseline">
												<img src={plstingimg} alt="icons" />
												<ArowRounded />
											</span>
											<span>
												<p className="text-[14px] font-semibold">PALESTINE, High Risk Alert</p>
												<p className="text-[#2CCAF0] text-[10px]">27 May 24, 14:25Z  —  Risk ≥ 7.0</p>
											</span>
										</div>
										<div className="flex items-center gap-1">
											<span className="textshblack text-[#FF0808] font-semibold">+1.1</span>
											<div className="flex flex-col px-1 rounded min-w-[21px] 
												     min-h-[21px] bg-[#FF0808] text-center text-[11px]">
												<span className="leading-[13.13px] textshblack">9.4</span>
												<span className="leading-[9.55px] textshblack">AI</span></div>
										</div>
									</div>

									<div className="flex justify-between hover:bg-[#06D1FF33] p-1 pl-[6px] rounded mx-[2px] cursor-pointer ">
										<div className="flex items-center gap-2 ">
											<span className="flex items-baseline">
												<img src={egyptgimg} alt="icons" />
												<ArowRounded />
											</span>
											<span>
												<p className="text-[14px] font-semibold">EGYPT, High Risk Alert</p>
												<p className="text-[#2CCAF0] text-[10px]">27 May 24, 14:25Z  —  Risk ≥ 7.0</p>
											</span>
										</div>
										<div className="flex items-center gap-1">
											<span className="textshblack text-[#FF0808] font-semibold">+0.4</span>
											<div className="flex flex-col px-1 rounded min-w-[21px] 
												     min-h-[21px] bg-[#FFBA08] text-center text-[11px]">
												<span className="leading-[13.13px] textshblack">5.8</span>
												<span className="leading-[9.55px] textshblack">AI</span></div>
										</div>
									</div>

									<div className="flex justify-between hover:bg-[#06D1FF33] p-1 pl-[6px] rounded mx-[2px] cursor-pointer ">
										<div className="flex items-center gap-2 ">
											<span className="flex items-baseline">
												<img src={rusiaimg} alt="icons" />
												<ArowRounded />
											</span>
											<span>
												<p className="text-[14px] font-semibold">RUSSIA, High Risk Alert</p>
												<p className="text-[#2CCAF0] text-[10px]">27 May 24, 14:25Z  —  Risk ≥ 7.0</p>
											</span>
										</div>
										<div className="flex items-center gap-1">
											<span className="textshblack text-[#FF0808] font-semibold">+1.4</span>
											<div className="flex flex-col px-1 rounded min-w-[21px] 
												     min-h-[21px] bg-[#FFBA08] text-center text-[11px]">
												<span className="leading-[13.13px] textshblack">6.7</span>
												<span className="leading-[9.55px] textshblack">AI</span></div>
										</div>
									</div>

								</div>

							</div>
						</div>
						<Dropdown>
							<Dropdown.Toggle className="menu-dropdown-button">
								<img src="/img/user.png" alt="" />
								<span className="d-none d-sm-block textDyn">Dyami</span>
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item>Profile</Dropdown.Item>
								<Dropdown.Item onClick={() => handleTheme("classic")}>
									Manukai Classic
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleTheme("pacific")}>
									Manukai Pacific
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleTheme("skyline")}>
									Manukai Skyline
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleTheme("black")}>
									Manukai Black
								</Dropdown.Item>
								<Dropdown.Item onClick={() => handleTheme("premiere")}>
									Manukai Premire
								</Dropdown.Item>
								<Dropdown.Item>Order</Dropdown.Item>
								 <Link to="/Login"   className="w-full pl-4  dropdown-item" >Login</Link>
								<Dropdown.Item className="d-lg-none">Log Out</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</div>
				{/* <SearchForm /> */}
				<button
					type="button"
					className="no-gutter d-lg-none text-white"
					onClick={() => setSidebarOpen(!sidebarOpen)}>
					<Hamburger />
				</button>

			</header>
		</>
	);
};
export const SearchForm = () => {
	return (
		<>
			<form className="search-form">
				<input
					type="text"
					className="form-control"
					placeholder="Search anything.."
				/>
				<button type="submit" className="no-gutter">
					<SearchIcon />
				</button>
			</form>
		</>
	);
};

export default TopHeader;
