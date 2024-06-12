import React from "react";
import { Dropdown } from "react-bootstrap";
import {
	Hamburger2,
	InvalidIcon,
	ManIcon,
	Organization,
	PlaneIcon,
} from "../components/Icon";
import Layout from "../components/Layout";
import { SourcesChart } from "../components/SourcesChart";

const Dashboard = () => {
	return (
		<Layout>
			<div className="risk-score">
				<div className="risk-score-left">
					<h6>
						<InvalidIcon />
						Overall Risk Score
					</h6>
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
							className="no-gutter"
						>
							Proceed With Caution
						</button>
					</div>
				</div>
				<div className="risk-score-right">
					<img src="/img/pie-chart.png" alt="" />
					<div className="cont">
						<div className="text-base" style={{ "--base": "#16BFD6" }}>
							1 Alert With Rs Level {">"}9
						</div>
						<div className="text-base" style={{ "--base": "#17D113" }}>
							2 Alerts With Rs Change {">"} 3
						</div>
						<div className="text-base" style={{ "--base": "#FFB100" }}>
							- 0 . 7 Overall Change Since Last Log In
						</div>
					</div>
				</div>
			</div>
			<div className="flex-grow-1 scroll-card-wrapper">
				<div className="row g-4 h-100">
					<div className="col-md-6 col-xxl-4 h-100">
						<div className="card __card h-100 scroll-card">
							<div className="card-header">
								<div className="card-left-content">
									<h6 className="subtitle text-uppercase">
										top alerts by{" "}
										<span className="text-base">level</span>
									</h6>
									<div className="alert-text">Alerts 7</div>
								</div>
								<Dropdown>
									<Dropdown.Toggle className="no-gutter">
										<Hamburger2 />
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item>Edit</Dropdown.Item>
										<Dropdown.Item>Delete</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="card-body p-0 py-3 overflow-y-auto">
								{data?.map((item, index) => (
									<AlertItem item={item} key={index} index={index} />
								))}
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xxl-4 h-100">
						<div className="card __card h-100 scroll-card">
							<div className="card-header">
								<div className="card-left-content">
									<h6 className="subtitle text-uppercase">
										top alerts by{" "}
										<span className="text-base">Change</span>
									</h6>
									<div className="alert-text">Alerts 8</div>
								</div>
								<Dropdown>
									<Dropdown.Toggle className="no-gutter">
										<Hamburger2 />
									</Dropdown.Toggle>
									<Dropdown.Menu>
										<Dropdown.Item>Edit</Dropdown.Item>
										<Dropdown.Item>Delete</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</div>
							<div className="card-body p-0 py-3 overflow-y-auto">
								{data2?.map((item, index) => (
									<AlertItem item={item} key={index} index={index} />
								))}
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xxl-4 h-100">
						<DashboardOvewview />
					</div>
				</div>
			</div>
		</Layout>
	);
};

const AlertItem = ({ item, index }) => {
	return (
		<>
			<div className="alert-item">
				<div className="title-area">
					<div className="left">
						<img src={item?.img} alt="" />
						<div>
							<h6>{item?.title}</h6>
							<span>{item?.country}</span>
						</div>
					</div>
					<div className="right">
						<span
							style={{
								color: item?.inc > 0 ? "#FF1717" : "#45FF17",
							}}
						>
							{item?.inc > 0 ? "+" : ""}
							{item?.inc?.toFixed(1)}
						</span>
						<span
							className="rating"
							style={{ background: item?.ratingColor }}
						>
							{item?.rating}
						</span>
					</div>
				</div>
				<div className="info-area">
					<div className="info">
						{item?.info?.map((info) => (
							<div
								className="info-item"
								style={{
									background: info?.bg,
								}}
							>
								{info?.name}
							</div>
						))}
					</div>
					<div className="d-flex gap-2">
						<button
							type="button"
							className="info-button"
							disabled={!item?.man}
						>
							<ManIcon />
						</button>
						<button
							type="button"
							className="info-button"
							disabled={!item?.organization}
						>
							<Organization />
						</button>
						<button
							type="button"
							className="info-button"
							disabled={!item?.plane}
						>
							<PlaneIcon />
						</button>
					</div>
				</div>
				<div className="d-flex justify-content-between gap-2 mt-2">
					<div
						className="text-base font-semibold text-14"
						style={{ "--base": "#4ED2EF" }}
					>
						{item?.subtext}
					</div>
					<div className="d-flex align-items-center gap-1">
						{item?.update && (
							<span className="badge __badge-sm">{item?.update}</span>
						)}
						<span className="text-10">22 Dec 23 22:51</span>
					</div>
				</div>
			</div>
			{index !== data?.length - 1 && <div className="line1" />}
		</>
	);
};

const DashboardOvewview = () => {
	const [tab, setTab] = React.useState("overview");
	return (
		<>
			<div className="card __card h-100 scroll-card">
				<div className="card-header">
					<div className="card-left-content">
						<h6 className="subtitle">Overview</h6>
						<div className="tab--group">
							<button
								type="button"
								className={tab === "overview" ? "active" : ""}
								onClick={() => setTab("overview")}
							>
								Main
							</button>
							<button
								type="button"
								className={tab === "deck" ? "active" : ""}
								onClick={() => setTab("deck")}
							>
								AI Deck
							</button>
							<button
								type="button"
								className={tab === "updates" ? "active" : ""}
								onClick={() => setTab("updates")}
							>
								Updates
							</button>
						</div>
					</div>
					<Dropdown>
						<Dropdown.Toggle className="no-gutter">
							<Hamburger2 />
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item>Edit</Dropdown.Item>
							<Dropdown.Item>Delete</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="card-body p-2 overflow-y-auto overview-tab-content">
					{tab === "overview" && <TabContentItem />}
					{tab === "deck" && <TabContentItem />}
					{tab === "updates" && <TabContentItem />}
				</div>
			</div>
		</>
	);
};
export const TabContentItem = () => {
	return (
		<>
			<div className="fadeIn">
				<div className="title-area pb-2">
					<div className="left">
						<img src={"/img/flags/usa.png"} alt="" />
						<div>
							<h6>John Kennedy AIRPORT, IRGC DDOS</h6>
							<span>USA, New York</span>
						</div>
					</div>
					<div className="right">
						<span className="rating" style={{ background: "#A6C100" }}>
							5.5
						</span>
					</div>
				</div>
				<div className="tab-info-content">
					<span className="text-base text-12">LOCATION</span>
					<h6 className="text-14 font-medium mb-3">
						JOHN F KENNEDY INTL AIRPORT <br /> QUEENS, NY 12430 <br />{" "}
						UNITED STATES OF AMERICA{" "}
					</h6>
					<div className="text-12 d-flex gap-2">
						<div className="item flex-grow-1 w-200px pe-3">
							<div className="d-flex justify-content-between">
								<span className="text-base">FROM</span>
								<span>10 AUG 2023 - 10:00</span>
							</div>
							<div className="d-flex justify-content-between">
								<span className="text-base">TILL</span>
								<span>12 AUG 2023 - 10:00</span>
							</div>
						</div>
						<div className="item flex-grow-1 w-200px pe-3">
							<div className="d-flex justify-content-between">
								<span className="text-base">CREDIBILITY</span>
								<span>VERY HIGH</span>
							</div>
							<div className="d-flex justify-content-between">
								<span className="text-base">IMPACT</span>
								<span>EXTREME</span>
							</div>
						</div>
					</div>
					<span className="text-base text-12">THREAT DESCRIPTION</span>
					<div className="text-12 mb-3">
						Multiple sources describe a credible threat of a violent and
						lethal attacks by a Islamic state sympathizing hate group
						called American Jihad (AJ). AJ made several threads on social
						media against airlines and specially JFK airport terminal 4.{" "}
						<br /> Verified by other sources.
					</div>
					<span className="text-base text-12">POTENTIAL TARGETS</span>
					<ul className="dots-list ps-0 gap-0">
						<li>Airlines, aircraft and their staff</li>
						<li>Corporate aircraft and their staff</li>
						<li>Individual travellers</li>
					</ul>
					<span className="text-base text-12 d-block mt-3">SOURCES</span>
					<ul className="dots-list ps-0 gap-0">
						<li>Social (multiple)</li>
						<li>HUMINT</li>
					</ul>
					<SourcesChart />
				</div>
			</div>
		</>
	);
};
const data = [
	{
		img: "/img/flags/netherland.png",
		title: "Water Treatment Plant Data Leak",
		country: "The Netherlands",
		rating: "8.5",
		inc: 2.7,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Hacktivists",
				bg: "#1B4367",
			},
		],
		update: "Update",
		ratingColor: "#FF4117",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/romania.png",
		title: "Power Grid Cyberattack",
		country: "Romania",
		rating: "8.1",
		inc: 1.9,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Zero-Day",
				bg: "#1B6743",
			},
			{
				name: "Sabotage",
				bg: "#4F1B67",
			},
		],
		update: "Update",
		ratingColor: "#FF5D17",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/switzerland.png",
		title: "Hospital Systems Breached",
		country: "Switzerland",
		rating: "7.4",
		inc: 0.0,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Data Beaches",
				bg: "#8A4F09",
			},
			{
				name: "Identity Theft",
				bg: "#2D2493",
			},
		],
		update: "New",
		ratingColor: "#FF7817",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/ukrain.png",
		title: "Kyiv Aiport Website Defaced",
		country: "Ukraine",
		rating: "6.7",
		inc: 0.4,
		subtext: "Aviation",
		info: [
			{
				name: "Hacktivists",
				bg: "#1B4367",
			},
			{
				name: "Sabotage",
				bg: "#4F1B67",
			},
		],
		ratingColor: "#FFA217",
		man: true,
		organization: true,
		plane: true,
	},
	{
		img: "/img/flags/ukrain.png",
		title: "Odessa Port Cyberattack",
		country: "Ukraine",
		rating: "6.1",
		inc: -2.4,
		subtext: "Logistics & Freight",
		info: [
			{
				name: "Act Of War",
				bg: "#791212",
			},
		],
		ratingColor: "#E1B826",
		man: false,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/netherland.png",
		title: "Water Treatment Plant Data Leak",
		country: "The Netherlands",
		rating: "8.5",
		inc: 2.7,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Hacktivists",
				bg: "#1B4367",
			},
		],
		update: "Update",
		ratingColor: "#FF4117",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/romania.png",
		title: "Power Grid Cyberattack",
		country: "Romania",
		rating: "8.1",
		inc: 1.9,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Zero-Day",
				bg: "#1B6743",
			},
			{
				name: "Sabotage",
				bg: "#4F1B67",
			},
		],
		update: "Update",
		ratingColor: "#FF5D17",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/switzerland.png",
		title: "Hospital Systems Breached",
		country: "Switzerland",
		rating: "7.4",
		inc: 0.0,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Data Beaches",
				bg: "#8A4F09",
			},
			{
				name: "Identity Theft",
				bg: "#2D2493",
			},
		],
		update: "New",
		ratingColor: "#FF7817",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/ukrain.png",
		title: "Kyiv Aiport Website Defaced",
		country: "Ukraine",
		rating: "6.7",
		inc: 0.4,
		subtext: "Aviation",
		info: [
			{
				name: "Hacktivists",
				bg: "#1B4367",
			},
			{
				name: "Sabotage",
				bg: "#4F1B67",
			},
		],
		ratingColor: "#FFA217",
		man: true,
		organization: true,
		plane: true,
	},
	{
		img: "/img/flags/ukrain.png",
		title: "Odessa Port Cyberattack",
		country: "Ukraine",
		rating: "6.1",
		inc: -2.4,
		subtext: "Logistics & Freight",
		info: [
			{
				name: "Act Of War",
				bg: "#791212",
			},
		],
		ratingColor: "#E1B826",
		man: false,
		organization: true,
		plane: false,
	},
];
const data2 = [
	{
		img: "/img/flags/usa.png",
		title: "John Kennedy AIRPORT, IRGC DDOS",
		country: "USA, New York",
		rating: "8.5",
		inc: 4.2,
		subtext: "Aviation",
		info: [
			{
				name: "DDOS",
				bg: "#31A6CB",
			},
		],
		update: "Update",
		ratingColor: "#A6C100",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/romania.png",
		title: "Lockbit 3.0 On Romanian Airline",
		country: "Romania",
		rating: "8.1",
		inc: 3,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Ransomware",
				bg: "#980354",
			},
			{
				name: "Data Beaches",
				bg: "#8A4F09",
			},
		],
		update: "Update",
		ratingColor: "#8FD61B",
		man: true,
		organization: true,
		plane: true,
	},
	{
		img: "/img/flags/netherland.png",
		title: "Water Treatment Plant Data Leak",
		country: "The Netherlands",
		rating: "8.5",
		inc: 2.7,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Hacktivists",
				bg: "#1B4367",
			},
		],
		update: "Update",
		ratingColor: "#FF4117",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/usa.png",
		title: "Cyber Incident Railway Systems",
		country: "USA, New York",
		rating: "6.0",
		inc: 2.4,
		subtext: "Logistics & Freight",
		info: [
			{
				name: "Sabotage",
				bg: "#4F1B67",
			},
		],
		ratingColor: "#E1B92C",
		man: true,
		organization: true,
		plane: true,
	},
	{
		img: "/img/flags/china.png",
		title: "Possible Aviation GPS Spoofing",
		country: "China",
		rating: "3.2",
		inc: 2.1,
		subtext: "Aviation",
		info: [
			{
				name: "Anomaly",
				bg: "#404040",
			},
		],
		ratingColor: "#61D605",
		man: false,
		organization: false,
		plane: true,
	},
	{
		img: "/img/flags/usa.png",
		title: "John Kennedy AIRPORT, IRGC DDOS",
		country: "USA, New York",
		rating: "8.5",
		inc: 4.2,
		subtext: "Aviation",
		info: [
			{
				name: "DDOS",
				bg: "#31A6CB",
			},
		],
		update: "Update",
		ratingColor: "#A6C100",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/romania.png",
		title: "Lockbit 3.0 On Romanian Airline",
		country: "Romania",
		rating: "8.1",
		inc: 3,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Ransomware",
				bg: "#980354",
			},
			{
				name: "Data Beaches",
				bg: "#8A4F09",
			},
		],
		update: "Update",
		ratingColor: "#8FD61B",
		man: true,
		organization: true,
		plane: true,
	},
	{
		img: "/img/flags/netherland.png",
		title: "Water Treatment Plant Data Leak",
		country: "The Netherlands",
		rating: "8.5",
		inc: 2.7,
		subtext: "Critical Infrastructure",
		info: [
			{
				name: "Hacktivists",
				bg: "#1B4367",
			},
		],
		update: "Update",
		ratingColor: "#FF4117",
		man: true,
		organization: true,
		plane: false,
	},
	{
		img: "/img/flags/usa.png",
		title: "Cyber Incident Railway Systems",
		country: "USA, New York",
		rating: "6.0",
		inc: 2.4,
		subtext: "Logistics & Freight",
		info: [
			{
				name: "Sabotage",
				bg: "#4F1B67",
			},
		],
		ratingColor: "#E1B92C",
		man: true,
		organization: true,
		plane: true,
	},
	{
		img: "/img/flags/china.png",
		title: "Possible Aviation GPS Spoofing",
		country: "China",
		rating: "3.2",
		inc: 2.1,
		subtext: "Aviation",
		info: [
			{
				name: "Anomaly",
				bg: "#404040",
			},
		],
		ratingColor: "#61D605",
		man: false,
		organization: false,
		plane: true,
	},
];
export default Dashboard;
