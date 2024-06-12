/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Collapse, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FilterIcon, MessageIcon, MinusIcon, PlusIcon } from "./Icon";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import { useTheme } from './ThemeContext'; // Adjust the import path as needed


const Layout = ({ background, sidebar, setSidebarChangeState, children }) => {

	
	const [sidebarOpen, setSidebarOpen] = React.useState(false);
	const { theme, handleThemeChange } = useTheme(); // Use theme from context
  
	React.useEffect(() => {
	  const timer = setTimeout(() => {
		setSidebarChangeState(false);
	  }, 300);
	  const timer2 = setTimeout(() => {
		setSidebarChangeState(true);
	  }, 310);
	  return () => {
		clearTimeout(timer);
		clearTimeout(timer2);
	  };
	}, [sidebarOpen]);

	React.useEffect(() => {
		const timer = setTimeout(() => {
			setSidebarChangeState(false);
		}, 300);
		const timer2 = setTimeout(() => {
			setSidebarChangeState(true);
		}, 310);
		return () => clearTimeout(timer, timer2);
	}, [sidebarOpen]);

	return (
		<>
			<TopHeader
				setSidebarOpen={setSidebarOpen}
				sidebarOpen={sidebarOpen}
				handleTheme={handleThemeChange} // Update to use handleThemeChange from context
				theme={theme}
			/>

			<main className={`main-section`}>
				<Sidebar
				sidebarOpen={sidebarOpen}
				setSidebarOpen={setSidebarOpen}
				theme={theme}
				>
					{sidebar ? (
						sidebar
					) : (
						<>
							<div className="sidebar-tabs">
								<div className="sidebar-tabs-group">
									<NavLink to="/">Overview</NavLink>
									<NavLink to="/dashboard">Data</NavLink>
									<NavLink to="/int-deck">Int-Deck</NavLink>
								</div>
							</div>
							<SidebarItem
								icon={<FilterIcon />}
								open={true}
								title="Filters"
							>
								<h6 className="text-16 text-83EAFF font-semibold mt-3">
									Change since
								</h6>
								<select className="form-select form-select-2">
									<option>Last Login [2d+4h35]</option>
									<option>Last Login [2d+4h35]</option>
									<option>Last Login [2d+4h35]</option>
								</select>
								<h6 className="text-16 text-83EAFF font-semibold mt-3">
									Current Arear Focuse
								</h6>
								<Form.Check
									type={"checkbox"}
									id="ukrain"
									label={"Ukraine"}
								/>
								<div className="d-flex justify-content-between">
									<Form.Check
										type={"checkbox"}
										id="Cybersecurity"
										label={"Cybersecurity"}
									/>
									<span>
										<PlusIcon />
									</span>
								</div>
								<ul className="dots-list mt-2">
									<li>
										<span>Critical Infrastructure</span>
										<span className="icon">
											<MinusIcon />
										</span>
									</li>
									<li>
										<span>Aviation</span>
										<span className="icon">
											<MinusIcon />
										</span>
									</li>
									<li>
										<span>Logistics & Freight</span>
										<span className="icon">
											<MinusIcon />
										</span>
									</li>
								</ul>
							</SidebarItem>
							<div className="line1" />
							<SidebarItem
								icon={<MessageIcon />}
								open={true}
								title="Messages"
								notifyCount={1}
							>
								<h6 className="text-16 font-semibold text-base m-0 mt-3">
									Manukai Central <span className="yellow-dot"></span>
								</h6>
								<span className="text-12 text-00B1FF">
									20 Oct 23 - 10:55
								</span>
								<div className="mt-3  text-14 text-white mb-2 pb-1">
									Scheduled Maintenance on Our Servers
								</div>
								<ul className="dots-list ps-0">
									<li>
										{" "}
										<span style={{ width: "40px" }}>From :</span> 23
										Oct 23 23:00Z
									</li>
									<li>
										{" "}
										<span style={{ width: "40px" }}>Till :</span> 23
										Oct 23 23:00Z
									</li>
								</ul>
							</SidebarItem>
						</>
					)}
				</Sidebar>
				<div className={`article  ${sidebarOpen ? "active" : ""}`}>
					<div
						className={`nav-line d-none d-lg-block ${
							sidebarOpen ? "active" : ""
						}`}
						onClick={() => setSidebarOpen(!sidebarOpen)}
					/>
					<div className="ps-xl-3 h-100" >{children}</div>
				</div>
			</main>
		</>
	);
};

export const SidebarItem = ({
	title,
	icon,
	children,
	open: firstOpen,
	notifyCount,
}) => {
	const [open, setOpen] = React.useState(firstOpen);
	return (
		<>
			<div className="sidebar-item">
				<div className="sidebar-item-title" onClick={() => setOpen(!open)}>
					{notifyCount && <span className="count">{notifyCount}</span>}
					{icon && icon}
					<span className="me-auto">{title}</span>
					{open ? <MinusIcon /> : <PlusIcon />}
				</div>
				<Collapse in={open}>
					<div>{children}</div>
				</Collapse>
			</div>
		</>
	);
};

export default Layout;
