import React, { useState } from 'react';
import { Link, } from "react-router-dom";
import {
    AviationIcon, 
    Minus,
    OrganizationIcon,
    PeopleIcon,
    Plus,
} from "../components/Icon";
import { SidebarCollapseItem } from '../pages/CyberSpacePage';
import WorkIcon from '@mui/icons-material/Work';




const SideBarProfile = () => {
    const [actives, setActives] = useState("1")
 
    return (
        <>
            <SidebarCollapseItem title="SECURITY PROFILE">
                <div className="title-area mb-2">
                    <h6 className="title font-semibold">PORTFOLIO</h6>
                    <Link to="#" className='border-[1.5px] px-1 rounded border-[#4ED2EF] hover:text-white w-[79px] h-[17px] flex items-center justify-center'>
                        <p className='m-0 text-[10px] '>Exit Editor <i className="bi bi-check-lg text-green-500 text-[12px]"></i></p>
                    </Link>
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
        </>
    )
}

export default SideBarProfile