import React from "react";
// import logoBlack from "../assets/img/logo-black.svg";
// import logo from "../assets/img/logo.svg";
import { ClearIcon } from "./Icon";
const Sidebar = ({ sidebarOpen, setSidebarOpen, theme, children }) => {
	return (
		<>
			<div className={`sidebar ${sidebarOpen ? "active" : ""}`}>
				<button
					type="button"
					className="no-gutter d-lg-none text-white clear-icon"
					onClick={() => setSidebarOpen(false)}
				>
					<ClearIcon />
				</button>
				{/* <div className="sidebar-logo">
					<img src={theme === "premiere" ? logoBlack : logo} alt="" />
				</div> */}
				<div className="line1" />
				{children}
			</div>
		</>
	);
};

export default Sidebar;
