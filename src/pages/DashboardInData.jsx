/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import ContexualScore from "../components/ContexualScore";
import {
	AngleDown,
	AngleDown3,
	AngleUp,
	AngleUp3,
	AviationIcon,
	CyberSpace,
	EqualIcon,
	InternationalIcon,
	Invalid,
	LockIcon,
	Minus,
	NationalIcon,
	NovaEngineIcon,
	OrganizationIcon,
	PeopleIcon,
	Plus,
} from "../components/Icon";
import Layout from "../components/Layout";
import PolarChart from "../components/PolarChart";
import PortfolioRiskScore from "../components/PortfolioRiskScore";
import RiskScoreChart from "../components/RiskScoreChart";
import RiskTypeBar from "../components/RiskTypeBar";
import RiskTypesChart from "../components/RiskTypesChart";
import SentimentAnalysis from "../components/SentimentAnalysis";
import WorkIcon from '@mui/icons-material/Work';
import { warStatusData,statistics} from "../assets/data/data";


const DashboardInData = () => {


	const [sidebarChangeState, setSidebarChangeState] = useState(false);
	const [activeWarStatus, setActiveWarStatus] = useState(null);
	const location = useLocation();

	return (
		<Layout
			setSidebarChangeState={setSidebarChangeState}
			sidebar={<SidebarInformations />} >
			<div className="dashboard-data-top">
			 
				{warStatusData?.map((item, index) => (
					<div
						className={`war-status-item ${
							activeWarStatus === index ? "active" : ""}`}
						onClick={() => setActiveWarStatus(index)}
						key={index}
						style={{ "--base": item.color }}>
						<div className="d-flex justify-content-between align-items-center">
							<div className="d-flex align-items-center gap-1">
								<img src={item.img} alt="" className="flag" />
								<div>
									<h6 className="name">{item.name}</h6>
								</div>
							</div>
							<div className="score">{item.score}</div>
						</div>
						<div className="d-flex align-items-center justify-content-between">
							<div className="text-14 subtext">{item.subtitle}</div>
							<img src={item.map} alt="" className="mw-100" />
						</div>
					</div>
				))}
			</div>
			<div className="mt-4">
				<div className="card h-100 __card __bg-for-skyline">
					<div className="card-body">
						<div className="chart-wrapper">
							<div className="chart-item p-3 p-sm-4">
								<div className="proceed-caution">
									<div
										className="score"
										style={{
											background: `url('/img/trigon-bg.png') no-repeat center center / 100% 100%`,
										}}
									>
										<span>7.5</span>
									</div>
									<button
										style={{
											background: `url('/img/caution-bg.png') no-repeat center center / 100% 100%`,
										}}
										type="button"
										className="no-gutter" >
										Proceed With Caution
									</button>
								</div>
								<div className="caution-progress flex flex-col justify-between gap-2">
									{statistics?.map((item, index) => (
										<div
											className="caution-progress-item"
											key={index} >
											<div className="img">
												<img src={item.img} alt="" />
												<div className="score">
													{item.score > 50 ? (
														<AngleUp3 />
													) : item.score < 50 ? (
														<AngleDown3 />
													) : (
														<EqualIcon />
													)}
												</div>
											</div>
											<div className="progress">
												<div
													className="progress-bar"
													style={{
														width: item.score + "%",
														background: item.color,
													}}
												></div>
											</div>
										</div>
									))}
								</div>
							</div>
							{/* Bar Chart */}
							<PortfolioRiskScore />
							{/* Spline Chart */}
							<ContexualScore />
							{/* War Casualties */}
							<PolarChart />
							{/* War Casualties */}
							<RiskTypeBar />
						</div>
					</div>
				</div>
			</div>
			{(location?.pathname === "/dashboard" ||
				location?.pathname === "/dashboard/risk-scores") && (
				<>
					<div className="mt-4">
						<div className="row g-4">
							<div className="col-lg-6">
								<RiskScoreChart />
							</div>
							<div className="col-lg-6">
								{sidebarChangeState ? <RiskTypesChart /> : ""}
							</div>
						</div>
					</div>
					<div className="mt-4">
						<SentimentAnalysis />
					</div>
				</>
			)}
		</Layout>
	);
};
const SidebarInformations = () => {
	const [actives, setActives] = useState("1")
	return (
		<>
			<SidebarCollapseItem title="SECURITY PROFILE">
			<div className="title-area mb-2">
                    <h6 className="title font-semibold">PORTFOLIO</h6>
                    
                </div>
                <div className='border-[1px] border-[#4ED2EF] rounded w-full p-1 py-2 flex items-center gap-1'>
                  <p className={`border-[1px] border-[#4ED2EF] cursor-pointer rounded m-0 flex items-center justify-center h-[22px]  min-w-[79px] leading-[0px] ${actives === "wo"?"bg-[#4ED2EF] text-black":"text-white"}`}   onClick={()=>setActives("wo")}>Worldwide</p>
                 <div className='w-full  grid grid-cols-4 gap-1'>
                 <div className={`border-[1px] cursor-pointer rounded   w-full flex items-center justify-center h-[22px] border-[#4ED2EF] gap-1 ${actives ==='1' ?"bg-[#4ED2EF] text-black":""}`}
                    onClick={()=>setActives("1")}><WorkIcon style={{fontSize:"13px"}}/> 1</div>
                   <div className={`border-[1px] cursor-pointer rounded   w-full flex items-center justify-center h-[22px] border-[#4ED2EF] gap-1 ${actives ==='2' ?"bg-[#4ED2EF] text-black":""}`} onClick={()=>setActives("2")}><WorkIcon style={{fontSize:"13px"}}/> 2</div>
                   <div className={`border-[1px] cursor-pointer rounded   w-full flex items-center justify-center h-[22px] border-[#4ED2EF] gap-1 ${actives ==='3' ?"bg-[#4ED2EF] text-black":""}`} onClick={()=>setActives("3")}><WorkIcon style={{fontSize:"13px"}}/> 3</div>
                   <div className={`border-[1px] cursor-pointer rounded   w-full flex items-center justify-center h-[22px] border-[#4ED2EF] gap-1 ${actives === '4' ?"bg-[#4ED2EF] text-black":""}`} onClick={()=>setActives("4")}><WorkIcon style={{fontSize:"13px"}}/> 4</div>
                 </div>
                </div>
                <h6 className="font-semibold title mb-2 mt-3 ">RISK PROFILE</h6>
                <ul className="aviation-menus">
                    <li>
                        <Link to="#">
                            <PeopleIcon />
                            <span>People</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <OrganizationIcon />
                            <span>ORGANISATION</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <AviationIcon />
                            <span>AVIATION</span>
                        </Link>
                    </li>
                    {/* <li>
                        <Link to="#">
                            <CyberSpace />
                            <span>CYBERSECURITY</span>
                        </Link>
                    </li> */}
                </ul>
                <h6 className="title mb-2 mt-3 font-semibold">RISK SCORE</h6>
                <div className="risk-score-menu-item mb-1">
                    <span className="icon"></span>
                    <span>4.0 MINIMUM</span>
                    <div className="d-flex gap-2 ms-auto">
                        <button className="no-gutter">
                            <Minus />
                        </button>
                        <button className="no-gutter">
                            <Plus />
                        </button>
                    </div>
                </div>
			</SidebarCollapseItem>
			<SidebarCollapseItem title="MANUKAI DATA" height="60%">
				 <button className="flex items-center gap-3 font-semibold text-[#C5F5FF] bg-[#02181D73] w-full p-2 rounded-lg"> <Invalid /> RISK SCORES</button>
			</SidebarCollapseItem>
		</>
	);
};
export const SidebarCollapseItem = ({ title, messageCount, children ,height}) => {
	const [open, setOpen] = useState(true);
	return (
		<>
			<div className="sidebar--item" style={{height:height}}>
				{messageCount && <span className="msg-count">{messageCount}</span>}
				<button
					className="sidebar--item-title no-gutter"
					onClick={() => setOpen(!open)}>
					{title}
					{open ? <span className="minus" /> : <span className="plus" />}
				</button>
				<Collapse in={open}>
					<div>
						<div className="sidebar--item-body">{children}</div>
					</div>
				</Collapse>
			</div>
		</>
	);
};
export const CustomMenuItem = ({
	icon,
	icon2,
	title,
	submenu,
	riskstatus,
	textstyle,
	tweakText,
	url
}) => {
	const [open, setOpen] = useState(false);
	const [firstRender, setFirstRender] = useState(true);
 
	return (
		<>
			<li>
				<NavLink
					to={url}
					onClick={(e) => {
					if (submenu?.length > 0) e.preventDefault();
                    setFirstRender(false);setOpen(!open);}}
					className={`${riskstatus ? riskstatus : ""}`}
					style={{ fontStyle: textstyle ? textstyle : "" }}
					>
					{icon && <span className="icon">{icon}</span>}
					<button className="flex w-full items-center   justify-between"> 
						<span>{title}</span> <span>{tweakText}</span> </button>
					{icon2 && <span className="ms-auto">{icon2}</span>}
					{submenu?.length > 0 ? open ? <AngleUp /> : <AngleDown /> : null}
				</NavLink>
				<Collapse in={open}>
					<div className={`${firstRender ? "first-render" : ""}`}>
						{submenu?.length > 0 ? (
							<ul className="submenu">
								{submenu?.map((item, index) => (
									<CustomMenuItem {...item} key={index} />
								))}
							</ul>
						) : null}
					</div>
				</Collapse>
			</li>
		</>
	);
};


export default DashboardInData;
