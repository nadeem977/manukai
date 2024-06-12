/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link, NavLink,useLocation } from "react-router-dom";
import {AngleDown,AngleUp,} from "../components/Icon";
import Layout from "../components/Layout";
import dyamiIcon from "../assets/img/dyami.png"
import CheckIcon from '@mui/icons-material/Check';


const CyberSpacePage = () => {
    
	return <Layout sidebar={<SidebarInformations />}></Layout>;
};


const SidebarInformations = () => {

	return (
		<>
			<SidebarCollapseItem title="SECURITY PROFILE" width={"98%"}>
				 
			<div className="position-relative flex items-center gap-1">
					<div className="left-center-abs-icon">
						{/* <LockIcon /> */}
						<img src={dyamiIcon} alt="icon" />
					</div>
					<select className="form-select form-select-2  pl-12 text-20">
						<option className="options" value="Dyami Partners">Dyami Partners </option>
						<option className="options"  value="Dyami Partners">Dyami Partners</option>
					</select>
					<CheckIcon className="absolute right-10" style={{fill:"#29CB26",fontSize:"15px"}}/>
					
				</div>
			</SidebarCollapseItem>
			 
		</>
	);
};
export const SidebarCollapseItem = ({ title, messageCount, children,width }) => {
	const [open, setOpen] = useState(true); 
	return (
		<>
			<div className="sidebar--item " style={{height:width}}>
				{messageCount && <span className="msg-count">{messageCount}</span>}
				<button
					className="sidebar--item-title no-gutter"
					onClick={() => setOpen(!open)}
				>
					{title}{" "}
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
export const CustomMenuItem = ({ url, icon,icon2, title, submenu, riskstatus,bg }) => {
	const [open, setOpen] = useState(false);
	const [firstRender, setFirstRender] = useState(false);
	 const location = useLocation().pathname
	 console.log(location)
	return (
		<>
			<li>
				<NavLink
					to={url}
					onClick={(e) => {
						if (submenu?.length > 0) e.preventDefault();
						setFirstRender(false);
						setOpen(!open);
					}}
					className={`${location ===url?"bg-[#0c262e]":"bg-[#0e2b34]"}`} style={{background:`${bg} !importent`}}>
					{icon && <span className="icon">{icon}</span>}
					<span className="text">{title}</span>
					{icon2 && <span className="icon">{icon2}</span>}
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
 
export default CyberSpacePage;
