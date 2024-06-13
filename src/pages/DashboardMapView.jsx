import React, { useEffect, useRef, useState } from 'react';
import { faker } from "@faker-js/faker";
import { Collapse } from "react-bootstrap";
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import '@mapbox/mapbox-gl-style-spec';
import { useTheme } from '../components/ThemeContext';
import { Form } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Map, { Source, Layer, Popup } from 'react-map-gl';
import "../../node_modules/mapbox-gl/dist/mapbox-gl.css";
import AddIcon from '@mui/icons-material/Add';
import WorkIcon from '@mui/icons-material/Work';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import {
	AngleDown2,
	AngleUp2,
	PlusBorderIcon,
	PlusRoundIcon,
	ZoomIn,
	ZoomOut,
} from "../components/Icon";
import Layout from "../components/Layout";
import { Line } from 'react-chartjs-2';
import SideBarProfile from '../components/SideBarProfile';
import SignalWifiStatusbar4BarIcon from '@mui/icons-material/SignalWifiStatusbar4Bar';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiSelect from '../components/MuiSelect';
import SelectComponet from '../components/SelectComponet';


const CustomSelect = styled(Select)(({ theme }) => ({
	width: '100%',
	backgroundColor: '#114652',
	border: 'none',
	outline: 'none',
	color: 'white',
	borderRadius: '10px',
	'& .MuiSelect-select': {
		paddingRight: '32px',
		padding: '6px 20px',
	},
	'& .MuiSelect-icon': {
		color: '#3CCCEC',
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


export const SidebarCollapseItem = ({ title, messageCount, children }) => {
	const [open, setOpen] = useState(true);
	return (
		<>
			<div className="sidebar--item">
				{messageCount && <span className="msg-count">{messageCount}</span>}
				<button className="sidebar--item-title no-gutter" onClick={() => setOpen(!open)}>
					<p className='mr-1'>{title}</p> {open ? <span className="minus" /> : <span className="plus" />}
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
export const SelectMui = () => {
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

const ACCESS_TOKEN = 'pk.eyJ1IjoiODE4YnVpbGQiLCJhIjoiY2w1aGplZzJqMDl5eDNkcHVkYzJtdnhjNiJ9.YN8DXtJ4epVhXwHe5h5M4A';

const labels = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const mapAlerts = [
	{
		img: "/img/flags/israel.png",
		name: "Israel-Hamas War",
		subname: "ISR",
		score: "+2.7",
		score2: "8.5",
		color: "#FF1717",
		color2: "#FF4117",
		location: "16 CRAWLEY GREEN RD, LUTON LU2 0QX, UK",
		from: "10 AUG 2023 - 10:00",
		to: "12 AUG 2023 - 23:59",
		credibility: "very high",
		impact: "extreme",
		description: "Lorem Ipsum",
		potential_targets: ["Potential Target 1", "Potential Target 2", "Potential Target 3"],
		sources: ["Source 1", "Source 2"],
		"lon": -74.50738466175103,
		"lat": 39.99590587875167
	},
	{
		img: "/img/flags/romania.png",
		name: "Power Grid Cyberattack",
		subname: "ROU",
		score: "+8.9",
		score2: "8.5",
		color: "#FF1717",
		color2: "#FF5D17",
		location: "16 CRAWLEY GREEN RD, LUTON LU2 0QX, UK",
		from: "10 AUG 2023 - 10:00",
		to: "12 AUG 2023 - 23:59",
		credibility: "very high",
		impact: "extreme",
		description: "Lorem Ipsum",
		potential_targets: ["Potential Target 1", "Potential Target 2", "Potential Target 3"],
		sources: ["Source 1", "Source 2"],
		"lon": -74.50146113628244,
		"lat": 40.00216797179124
	},
	{
		img: "/img/flags/switzerland.png",
		name: "Hospital Systems Breached",
		subname: "CH",
		score: "+0.0",
		score2: "8.5",
		color: "#45FF17",
		color2: "#FF7817",
		location: "16 CRAWLEY GREEN RD, LUTON LU2 0QX, UK",
		from: "10 AUG 2023 - 10:00",
		to: "12 AUG 2023 - 23:59",
		credibility: "very high",
		impact: "extreme",
		description: "Lorem Ipsum",
		potential_targets: ["Potential Target 1", "Potential Target 2", "Potential Target 3"],
		sources: ["Source 1", "Source 2"],
		"lon": -74.49403698436195,
		"lat": 39.99427219511264
	}
]
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
				color: "#ffffff",
			},
		},
		y: {
			display: true,
			grid: {
				color: "#ffffff2a",
			},
			ticks: {
				color: "white",
				fontWidth: 700,
				callback: function (value, index, values) {
					return value;
				},
			},
		},
	},
};
export const data = {
	labels,
	datasets: [
		{
			data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
			borderColor: "#FF9808",
			backgroundColor: "#FF9808",
			lineTension: 0,
			radius: 3,
		},
	],
};

const DashboardMayView = () => {


	const theme = useTheme();
	const styleMap = {
		pacific: 'mapbox://styles/818build/cltsr3r8700in01qw5rkvgy46',
		skyline: 'mapbox://styles/818build/cltzznqj200lh01qs51bmf01x',
		black: 'mapbox://styles/818build/cltzzvo8100k201qsd43v8udg',
		premiere: 'mapbox://styles/818build/cltzzvs4u00st01p78smcemp1',
		classic: 'mapbox://styles/818build/cltswzvyr006f01qw21dudnvx',
	};

	const mapStyle = styleMap[theme] || styleMap['classic'];
	const [bottomOpen, setBottomOpen] = React.useState(false);
	const [showBellNotifcation, setShowBellNotifcation] = useState(false)


	const [state, setState] = useState({
		mapAlerts: [],
		cursor: '',
		mapStyle: "map",
		popupInfo: null,
		isPopupExpanded: false
	})

	const loadAlerts = async () => {
		let alerts = await fetch("/alerts.json").then(res => res.json());
		setState(prevState => ({ ...prevState, mapAlerts: [...alerts] }))
	}

	useEffect(() => {
		if (!state.mapAlerts.length) {
			loadAlerts();
		}
	}, [state.mapAlerts.length])

	const toGeoJson = (alerts) => {
		let features = alerts.map(alert => {
			let { lat, lon } = alert;

			return {
				"type": "Feature",
				"properties": { ...alert, score: parseFloat(alert.score) },
				"geometry": { "type": "Point", "coordinates": [lon, lat] }
			}
		})

		return { "type": "FeatureCollection", "features": [...features] }
	};

	const handleClick = async (e) => {
		if (e.features.length) {
			let feature = e.features[0];
			let { lat, lng } = e.lngLat;

			setState(prevState => ({ ...prevState, popupInfo: { ...feature.properties, lat, lng } }))
		}
	}

	const renderPopupContent = (isPopupExpanded, popupInfo) => {
		if (!isPopupExpanded) {
			return <>
				<div>
					<p className='text-[13px] uppercase mt-1'>{popupInfo?.description}</p>
				</div>

				<div className='popup-footer'>
					<button onClick={() => setState(prevState => ({ ...prevState, isPopupExpanded: !prevState.isPopupExpanded }))}
						className='text-[#4ED2EF] text-[16px] flex items-center '>Expand <i className="bi bi-arrow-right-short text-[18px]"></i></button>
				</div>
			</>
		} else {
			const bgColor = popupInfo?.color2 || "#FF9808";
			const bgColor2 = popupInfo?.color || "#FF5208";
			return <>
				<div className="flex items-center gap-2 flex-wrap md:flex-row justify-between p-2">
					<div className='flex items-center gap-1'>
						<div className={`badge text-sm p-2`} style={{ background: `${bgColor}` }}>{popupInfo?.score2} </div>
						<p className='text-[13px] text-[#2CCAF0]'>LIVE RISK SCORE</p>
					</div>
					<div className='flex items-center gap-2'>
						<p className='text-[13px] text-[#2CCAF0]'>AI RISK SCORE</p>
						<div className={`badge text-sm p-2`} style={{ background: `${bgColor2}` }}> {popupInfo?.score}</div>
					</div>
				</div>
				<div className='p-2'>
					<h1 className='text-[13px] font-semibold text-[#2CCAF0]'>LOCATION</h1>
					<h1 className='uppercase text-[16px] mt-1'>{popupInfo?.location}</h1>
				</div>
				<div className='flex items-center gap-2 justify-between flex-wrap lg:flex-row'>
					<div className='p-2'>
						<div className='flex items-center gap-2 mb-1'>
							<h1 className='text-[#2CCAF0] font-semibold text-[13px]'>FROM</h1>
							<h1 className='text-[13px] uppercase font-semibold'>{popupInfo?.from}</h1>
						</div>
						<div className='flex items-center gap-2 justify-between'>
							<h1 className='text-[#2CCAF0] font-semibold text-[13px]'>TILL</h1>
							<h1 className='text-[13px] uppercase font-semibold'>{popupInfo?.to}</h1>
						</div>
					</div>
					<div className='p-2'>
						<div className='flex items-center gap-2 mb-1'>
							<h1 className='text-[#2CCAF0] font-semibold text-[13px]'>CREDIBILITY</h1>
							<h1 className='text-[13px] uppercase font-semibold'>{popupInfo?.credibility}</h1>
						</div>
						<div className='flex items-center gap-2 text-[12px] justify-between'>
							<h1 className='text-[#2CCAF0] font-semibold text-[13px]'>IMPACT</h1>
							<h1 className='text-[13px] uppercase font-semibold'>{popupInfo?.impact}</h1>
						</div>
					</div>
				</div>
				<div className='p-2'>
					<h1 className='text-[13px] text-[#2CCAF0]'>THREAT DESCRIPTION</h1>
					<p className='text-[13px] uppercase mt-1'>{popupInfo?.description}</p>
				</div>
				<div className='p-2'>
					<h1 className='text-[#2CCAF0] text-[13px] font-semibold'>Graphs</h1>
					<Line options={options} data={data} />
				</div>

			</>

		}
	}

	const { cursor, popupInfo, isPopupExpanded, mapAlerts } = state;
	const bgColor2 = popupInfo?.color || "#FF5208";


	var popupElement = document.querySelector('.mapboxgl-popup');
	if (popupElement) {
		if (isPopupExpanded) {
			popupElement.style.maxWidth = '520px';
		} else {
			popupElement.style.maxWidth = '320px';
		}
	}
	return (
		<Layout sidebar={<SidebarInformations />} background={true}>
			<div className="map-view-wrapper align-items-end">
				<div className="map-view-left ms-auto">
					<Map
						mapStyle={mapStyle}
						mapboxAccessToken={ACCESS_TOKEN}
						initialViewState={{
							longitude: -74.5,
							latitude: 40,
							zoom: 15
						}}
						projection={"mercator"}
						cursor={cursor}
						onClick={handleClick}
						onMouseEnter={() => setState(prevState => ({ ...prevState, cursor: 'pointer' }))}
						onMouseLeave={() => setState(prevState => ({ ...prevState, cursor: '' }))}
						interactiveLayerIds={['alert-point']}
						style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
					>
						<Source id="alerts" type="geojson" data={toGeoJson(mapAlerts)}>
							<Layer {...alertLayer()} />
						</Source>

						{
							popupInfo && (
								<Popup
									anchor={isPopupExpanded ? "right" : "bottom"}
									offset={isPopupExpanded ? [-15, 0] : [0, -18]}
									longitude={Number(popupInfo.lng)}
									latitude={Number(popupInfo.lat)}
									closeOnClick={false}
									onClose={() => setState(prevState => ({ ...prevState, popupInfo: null, isPopupExpanded: false }))}>
									<div className='popup-content '>
										<div className='popup-header flex '>
											<div>
												<h5 className='text-[17px] font-semibold text-[#2CCAF0]'>VIOLENT PROTESTS</h5>
												<h5 className='text-[12px] uppercase'>{popupInfo.name}</h5>
											</div>
											<div className='iconsflex gap-2'>
												{isPopupExpanded ? 
												<div className='flex  items-center gap-1 border-[2px]
												 bg-[#114652] border-[#4ED2EF] p-1 px-2 rounded  h-[27px]'>
													<div className='flex items-center gap-1'>
														<WorkIcon style={{ fontSize: "15px" }} />
														<p className='text-white text-[12px] mt-1 font-bold'>1</p></div>
													<PlusRoundIcon/>
												</div> :
													<div className={`badge text-[10px] leading-[12px] p-1`} style={{ background: `${bgColor2}` }}> {popupInfo?.score}</div>}

												<div className='m-0 relative' onClick={() => setShowBellNotifcation(true)}><i className="bi bi-bell text-[#4ED2EF] mt-1 cursor-pointer text-[20px]"></i>

													<div className={`absolute  bg-[#03191E4D] bg-opacity-10 backdrop-blur notishado ${showBellNotifcation ? "block" : 'hidden'}
													 right-60 top-[-50%] w-[452px]  h-[424px] border-[1px] border-[#4ED2EF80] rounded-[16px]`}>
														<h1 className='p-2 mt-[2px] tracking-[0.15em] text-[#12A5C6] text-[18px] font-bold flex justify-between'>Notification setting
															<div className='border-[2px] px-[1.9px] 
															flex items-center justify-center rounded border-[#4ED2EF]
															cursor-pointer bg-transparent h-[18px]'
															 onClick={(e)=>
															{ e.stopPropagation();
																setShowBellNotifcation(false)}
															 }>
																<i class="bi bi-dash text-[18px] text-white ml-[3px] font-bold leading-[0px]"></i>
																</div>
																</h1>

														<div className='border-t-[1px] border-[#B3B3B3] p-2'>
															<h1 className='text-[16px] mt-3 mb-2 font-semibold'>Risk Alerts:</h1>
															<div className="form-check-group notifcationbelslable flex flex-col gap-1">
																<Form.Check type={"checkbox"} id="Risk Score" label={<>

																	<div className='flex items-center text-[10px] capitalize'>
																		<h1 className='text-[#12A5C6]'>Risk Surge:</h1>  Notify if either risk levels surges by ≥
																		<SelectComponet data={["0.1","1.2","0.3"]} defaults="0.7"/> in <SelectComponet data={["22h","19h","1h"]} defaults="24h"/></div>
																</>} />
																<Form.Check type={"checkbox"} id="High"
																	label={<>
																		<div className='flex items-center text-[10px] capitalize'>
																			<h1 className='text-[#12A5C6]'>High Risk:</h1>Notify if either risk levels exceeds <SelectComponet data={["0.1","1.2","0.3"]} defaults="0.7"/></div>
																	</>} />
															</div>
															<div className="form-check-group notifcationbelslable">
																<h1 className='text-[16px] font-semibold mt-3 mb-2'>Predictive Alerts:</h1>
																<Form.Check type={"checkbox"} id="Insights"
																	label={<>
																		<div className='flex items-center text-[10px] capitalize'>
																			<h1 className='text-[#12A5C6]'>AI Insights: </h1> Notify if the AI risk is <SelectComponet data={["0.1","1.2","0.3"]} defaults="0.7"/>  higher than the live risk</div>
																	</>} />
															</div>
															<div>
																<h1 className='text-[16px] font-semibold mt-3 mb-2'>Advanced Alerts:</h1>
																<h1 className='flex items-center gap-1 text-[16px] font-semibold'><PlusRoundIcon /> Create Surveillance Task</h1>
															</div>
														</div>
														<div className='border-t-[1px] border-[#FFFFFF33] mt-3'>
															<div className="form-check-group lastBag p-2">
																<h1 className='flex items-center gap-1 mb-2 mt-1 text-[16px] font-semibold'>Where To Notify:</h1>
																<div className='flex items-center justify-between  flex-wrap'>
																	<Form.Check type={"checkbox"} id="Worldwide"
																		label={<><p className='text-[#4ED2EF] capitalize'>Worldwide</p></>} />
																	<Form.Check type={"checkbox"} id="1" label={<p className='text-[#12A5C6] flex gap-1 items-center'><WorkIcon style={{ fontSize: "20px" }} /> 1</p>} />
																	<Form.Check type={"checkbox"} id="2" label={<p className='text-[#12A5C6] flex gap-1 items-center'><WorkIcon style={{ fontSize: "20px" }} /> 2</p>} />
																	<Form.Check type={"checkbox"} id="3" label={<p className='text-[#12A5C6] flex gap-1 items-center'><WorkIcon style={{ fontSize: "20px" }} /> 3</p>} />
																	<Form.Check type={"checkbox"} id="4" label={<p className='text-[#12A5C6] flex gap-1 items-center'><WorkIcon style={{ fontSize: "20px" }} /> 4</p>} />
																</div>
															</div>
														</div>
														<div className='flex justify-end items-center gap-2 p-2 pt-0'>
															<button className='bg-[#6F6F6F] w-[77px] h-[25px] text-[15px] rounded '>Cancel</button>
															<button className='bg-[#009C2C] w-[155px] h-[25px] text-[15px] rounded'><i class="bi bi-check-lg"></i> Set Notification</button>
														</div>
													</div>


												</div>
												<div className='border-[2px] h-[20px] flex items-center justify-center rounded border-[#4ED2EF] cursor-pointer'
													onClick={() => setState(prevState => ({ ...prevState, popupInfo: null, isPopupExpanded: false }))}>
													<RemoveSharpIcon  />
													</div>
											</div>
										</div>

										<div className="popup-body">
											{renderPopupContent(isPopupExpanded, popupInfo)}
										</div>
									</div>
								</Popup>)
						}
					</Map>
					<div className='absolute top-0 left-0 '>
						<div className='relative p-2  flex items-center gap-1'>
						<p className='text-[#A1A1A1]'>Live Alerts </p> <p className='pr-5'>/ AI Predictive Alerts
							  <small className='text-[#FFE600] text-[10px] mt-[-10px] top-3 absolute'>PRO</small></p>  
							  /
							  <p className='pr-5 text-[#A1A1A1]'>  AI Heatmap 
								<small className='text-[#FFE600] text-[10px] mt-[-10px] top-3 absolute opacity-[0.80]'>PRO+</small></p>
						</div>
					</div>
					<div className="bottom-right-fixed">
						<button type="button" className="no-gutter">
							<ZoomIn />
						</button>
						<button type="button" className="no-gutter">
							<ZoomOut />
						</button>
					</div>
				</div>


				{!bottomOpen ? (
					<div className="map-view-collapsed-items">
						<div className='absolute bottom-12 '>
							<div className='flex items-center gap-1 font-semibold'>
								<p><WorkIcon /> 1</p>
								<p> Russo-Ukrainian </p>
							</div>
							<div className='flex items-center'>
								<p className='text-[#3CAA3A] flex font-semibold items-center gap-1 mr-2'><SignalWifiStatusbar4BarIcon /> Online </p>
								<p className='font-semibold'>—{" "} Updated 11 Seconds Ago</p>
							</div>
						</div>

						{collapseItems.map((item, i) => (
							<>
								<div className="item" key={i}>
									<div className="d-flex align-items-center gap-1 position-relative me-3">
										<img src={item.img} alt="" />
										<span className="name">{item.country}</span>
										{item.new && <span className="new">New</span>}
									</div>
									<div className="score" style={{ color: item.color }}>
										{item.score}
									</div>
									<div
										className="score2"
										style={{ color: item.color2 }}
									>
										{item.score2}
									</div>
								</div>
							</>
						))}
						<button
							className="no-gutter ms-auto text-angle-clr"
							onClick={() => setBottomOpen(!bottomOpen)}
						>
							<AngleUp2 />
						</button>
					</div>
				) : (
					<div>
						<div className="map-view-collapsed-items map-view-collapsed-items-2">
							<button
								className="no-gutter ms-auto text-angle-clr"
								onClick={() => setBottomOpen(!bottomOpen)}
								style={{
									position: "absolute",
									top: "14px",
									right: "20px",
									zIndex: "2",
								}}
							>
								<AngleDown2 />
							</button>
							<div className="w-100">
								<div className="row g-2">
									<div className="col-md-4">
										<div className="card __card">
											<div className="card-header">
												<h6 className="title m-0">
													Alerts By Score
												</h6>
											</div>
											<div className="card-body">
												{alerts?.map((item, i) => (
													<AlertItem item={item} key={i} />
												))}
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card __card">
											<div className="card-header">
												<h6 className="title m-0">
													Alerts By Change
												</h6>
											</div>
											<div className="card-body">
												{alerts2?.map((item, i) => (
													<AlertItem item={item} key={i} />
												))}
											</div>
										</div>
									</div>
									<div className="col-md-4">
										<div className="card __card">
											<div className="card-header">
												<h6 className="title m-0">
													Latest Updates
												</h6>
											</div>
											<div className="card-body">
												<table className="table latest-updates-table">
													<tbody>
														{updates?.map((item, i) => (
															<tr
																key={i}
																className={
																	item.score > 0
																		? "positive"
																		: item.score < 0
																			? "negetive"
																			: "neutral"
																}
															>
																<td>{item.title}</td>
																<td>
																	<div className="date">
																		{item.date}
																	</div>
																</td>
																<td>
																	<span className="badge">
																		{item.score}
																	</span>
																</td>
															</tr>
														))}
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
};

const alertLayer = (value) => {

	return ({
		id: 'alert-point',
		type: 'circle',
		source: 'alert',
		paint: {
			'circle-color': [
				'interpolate',
				['linear'],
				['get', 'score'],
				0, '#44ce1b', 2.5, '#bbdb44', 5, '#f7e379', 7.5, '#f2a134', 10, '#e51f1f'
			],
			'circle-radius': [
				'interpolate',
				['linear'],
				['zoom'],
				0,
				5.0,
				18,
				10
			],
			'circle-stroke-width': 2.5,
			'circle-stroke-color': '#fff'
		}
	}
	)
}

mapboxgl.accessToken = 'pk.eyJ1IjoiY21zMjU2IiwiYSI6ImNscnhvamowYTFlMGEyb3BienFtcWhpczMifQ.pr_nZd8ZBXoquLxUVH1tlA';

const SidebarInformations = () => {


	const [age, setAge] = React.useState('');

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<>
			<SideBarProfile />

			<SidebarCollapseItem title="FILTERS">
				<h6 className="title font-semibold mb-2">CATEGORIES</h6>
				<div className="form-check-group">
					<Form.Check
						type={"checkbox"}
						id="TERRORISM"
						label={"TERRORISM"}
					/>
					<Form.Check
						type={"checkbox"}
						id="civil"
						label={"CIVIL UNREST"}
					/>
					<Form.Check
						type={"checkbox"}
						id="war"
						label={"WAR & CONFLICT"}
					/>
					<Form.Check type={"checkbox"} id="espi" label={"ESPIONAGE"} />
					<Form.Check type={"checkbox"} id="crime" label={"CRIME"} />
					<Form.Check type={"checkbox"} id="finan" label={"FINANCIAL"} />
					<Form.Check
						type={"checkbox"}
						id="insfr"
						label={"INFRASTRUCTURE"}
					/>
				</div>
			</SidebarCollapseItem>
			<SidebarCollapseItem title="TIME MACHINE">
				<h6 className="title font-semibold mb-2">TIME VIEW</h6>
				<div className="sidebar-tabs-group">
					<NavLink to="/">Historical</NavLink>
					<NavLink to="/map-view">LIVE</NavLink>
				</div>
				<h6 className="title mb-2 font-semibold mt-3">SCORE RING</h6>
				<div>
					<CustomSelect
						value={age}
						onChange={handleChange}
						displayEmpty
						inputProps={{ 'aria-label': 'Without label' }}
						IconComponent={KeyboardArrowDownIcon}
						MenuProps={CustomMenuProps}  >
						<MenuItem value="">
							<em style={{fontStyle:"normal"}}>Last Login [2d+4h35] </em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</CustomSelect>
				</div>
			</SidebarCollapseItem>
			<SidebarCollapseItem title="MESSAGES" messageCount="1">
				<div className="sidebar-item p-0">
					<h6 className="text-16 font-semibold text-base m-0">
						Manukai Central <span className="yellow-dot"></span>
					</h6>
					<span className="text-12 text-00B1FF text-[#2CCAF0]">20 Oct 23 - 10:55</span>
					<div className="mt-2  text-14 text-white ">
						Thank you for participating in our closed beta
					</div>
					<ul className="dots-list gap-0 ps-0 ml-2">
						<li>
							<span style={{ width: "40px" }}>From :</span> 23 Oct 23
							23:00Z
						</li>
						<li>
							<span style={{ width: "40px" }}>Till :</span> 23 Oct 23
							23:00Z
						</li>
					</ul>
					<p className='font-semibold text-[12px]'>Provide us feedback at marc@manuk.ai</p>
				</div>
			</SidebarCollapseItem>
		</>
	);
};
const collapseItems = [
	{
		img: "/img/flags/israel.png",
		country: "Israel-Hamas",
		new: true,
		score: "8.4 (+2.1)",
		color: "#FF1717",
		color2: "#FF1717",
	},
	{
		img: "/img/flags/ukrain.png",
		country: "Ukraine War",
		new: true,
		score: "8.4",
		score2: "(+1.4)",
		color: "#FF1717",
		color2: "#FF1717",
	},
	{
		img: "/img/flags/netherlands.png",
		country: "US Outpost",
		new: true,
		score: "8.4",
		score2: "(+1.4)",
		color: "#FF1717",
		color2: "#FF1717",
	},
	{
		img: "/img/flags/israel.png",
		country: "Farmer Protests",
		new: true,
		score: "5.3",
		score2: " (-0.4)",
		color: "#FF1717",
		color2: "#17FF20",
	},
];
const AlertItem = ({ item }) => {
	return (
		<>
			<div className="alert--item">
				<div className="alert-item">
					<div className="d-flex align-items-center gap-2">
						<img src={item.img} alt="" />
						<div className="cont">
							<h6 className="name">{item.name}</h6>
							<span className="subname">{item.subname}</span>
						</div>
					</div>
					<div className="d-flex align-items-center gap-1">
						<span className="score" style={{ color: item.color }}>
							{item.score}
						</span>
						<span
							className="score2"
							style={{
								background: item.color2,
							}}
						>
							{item.score2}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
const alerts = [
	{
		img: "/img/flags/israel.png",
		name: "Israel-Hamas War",
		subname: "ISR",
		score: "+2.7",
		score2: "8.5",
		color: "#FF1717",
		color2: "#FF4117",
	},
	{
		img: "/img/flags/romania.png",
		name: "Power Grid Cyberattack",
		subname: "ROU",
		score: "+1.9",
		score2: "8.5",
		color: "#FF1717",
		color2: "#FF5D17",
	},
	{
		img: "/img/flags/switzerland.png",
		name: "Hospital Systems Breached",
		subname: "CH",
		score: "+0.0",
		score2: "8.5",
		color: "#45FF17",
		color2: "#FF7817",
	},
	{
		img: "/img/flags/ukrain.png",
		name: "Kyiv Aiport Website Defaced",
		subname: "UKR",
		score: "+2.7",
		score2: "0.4",
		color: "#FF1717",
		color2: "#FFA217",
	},
	{
		img: "/img/flags/israel.png",
		name: "Israel-Hamas War",
		subname: "ISR",
		score: "+2.7",
		score2: "8.5",
		color: "#FF1717",
		color2: "#FF4117",
	},
	{
		img: "/img/flags/romania.png",
		name: "Power Grid Cyberattack",
		subname: "ROU",
		score: "+1.9",
		score2: "8.5",
		color: "#FF1717",
		color2: "#FF5D17",
	},
	{
		img: "/img/flags/switzerland.png",
		name: "Hospital Systems Breached",
		subname: "CH",
		score: "+0.0",
		score2: "8.5",
		color: "#45FF17",
		color2: "#FF7817",
	},
	{
		img: "/img/flags/ukrain.png",
		name: "Kyiv Aiport Website Defaced",
		subname: "UKR",
		score: "+2.7",
		score2: "0.4",
		color: "#FF1717",
		color2: "#FFA217",
	},
];
const alerts2 = [
	{
		img: "/img/flags/israel.png",
		name: "John Kennedy AIRPORT, IRGC DDOS",
		subname: "ISR",
		score: "+2.7",
		score2: "8.5",
		color: "#45FF17",
		color2: "#A6C100",
	},
	{
		img: "/img/flags/romania.png",
		name: "Lockbit 3.0 On Romanian Airline",
		subname: "ROU",
		score: "+1.9",
		score2: "8.5",
		color: "#FF1717",
		color2: "#8FD61B",
	},
	{
		img: "/img/flags/switzerland.png",
		name: "Water Treatment Plant Data Leak",
		subname: "CH",
		score: "+0.0",
		score2: "8.5",
		color: "#45FF17",
		color2: "#FF7817",
	},
	{
		img: "/img/flags/ukrain.png",
		name: "Kyiv Aiport Website Defaced",
		subname: "UKR",
		score: "+2.7",
		score2: "0.4",
		color: "#FF1717",
		color2: "#FFA217",
	},
	{
		img: "/img/flags/israel.png",
		name: "John Kennedy AIRPORT, IRGC DDOS",
		subname: "ISR",
		score: "+2.7",
		score2: "8.5",
		color: "#45FF17",
		color2: "#A6C100",
	},
	{
		img: "/img/flags/romania.png",
		name: "Lockbit 3.0 On Romanian Airline",
		subname: "ROU",
		score: "+1.9",
		score2: "8.5",
		color: "#FF1717",
		color2: "#8FD61B",
	},
	{
		img: "/img/flags/switzerland.png",
		name: "Water Treatment Plant Data Leak",
		subname: "CH",
		score: "+0.0",
		score2: "8.5",
		color: "#45FF17",
		color2: "#FF7817",
	},
	{
		img: "/img/flags/ukrain.png",
		name: "Kyiv Aiport Website Defaced",
		subname: "UKR",
		score: "+2.7",
		score2: "0.4",
		color: "#FF1717",
		color2: "#FFA217",
	},
];
const updates = [
	{
		title: "48 Hour cease-fire negociations ",
		date: "23 Oct 23 01:30AM",
		score: -2.7,
	},
	{
		title: "Hamas strikes Israel with 13 rockets",
		date: "23 Oct 23 01:30AM",
		score: +1.4,
	},
	{
		title: "Israel warns for lengthy war",
		date: "23 Oct 23 01:30AM",
		score: +0.4,
	},
	{
		title: "Hamas’ shows influence on the red sea",
		date: "23 Oct 23 01:30AM",
		score: +0.7,
	},
	{
		title: "Prisoner exchange proceeds uneventful",
		date: "23 Oct 23 01:30AM",
		score: -0.7,
	},
	{
		title: "The west is divided, showing restraint",
		date: "23 Oct 23 01:30AM",
		score: +0,
	},
	{
		title: "Israel accidently targets its own POW",
		date: "23 Oct 23 01:30AM",
		score: +0.7,
	},
	{
		title: "48 Hour cease-fire negociations ",
		date: "23 Oct 23 01:30AM",
		score: -2.7,
	},
	{
		title: "Hamas strikes Israel with 13 rockets",
		date: "23 Oct 23 01:30AM",
		score: +1.4,
	},
	{
		title: "Israel warns for lengthy war",
		date: "23 Oct 23 01:30AM",
		score: +0.4,
	},
	{
		title: "Hamas’ shows influence on the red sea",
		date: "23 Oct 23 01:30AM",
		score: +0.7,
	},
	{
		title: "Prisoner exchange proceeds uneventful",
		date: "23 Oct 23 01:30AM",
		score: -0.7,
	},
	{
		title: "The west is divided, showing restraint",
		date: "23 Oct 23 01:30AM",
		score: +0,
	},
	{
		title: "Israel accidently targets its own POW",
		date: "23 Oct 23 01:30AM",
		score: +0.7,
	},
];
export default DashboardMayView;
