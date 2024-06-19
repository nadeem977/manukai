import React, { useState } from "react";
import Layout from "../components/Layout";
import SideBarConponet from "../components/SideBarConponet";
import SettingsIcon from '@mui/icons-material/Settings';
import { KysIconsColors, PausIcons, PlayIcons } from "../components/Icon";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ControlPanel from "../components/ControlPanel";
import { tableData } from "../assets/data/data";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 
const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&::before': {
        display: 'none',
    },
}));


const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
))(({ theme }) => ({
    '& .MuiAccordionSummary-content': {
        margin: 0,
        padding: 0
    },
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(-90deg)',
    },
}));


const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));

const Surveillance = () => {
    
    const [panelOpen, setPanelOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const[pousPlay ,setPousPlay] = useState(true);
    const[rating ,setRating] = useState("");
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Layout sidebar={<SideBarConponet/>}>
            <div className="bg-[#091D22] p-3 rounded-[19px]">
                <div className="border-[1.2px] rounded-[14px] border-[#4ED2EF80] w-full setHeight overflow-y-auto">
                    <div className="border-b border-[#4ED2EF80] p-2 flex items-center justify-between flex-wrap gap-2">
                        <div>
                            <h1 className="text_title text-[18px] md:text-3xl">BALI AIRPORT SECURITY</h1>
                            <div className="flex items-center gap-1 mt-1">
                                <div className="alertred pl-1 text-[14px]">3 CRIT</div>
                                <div className="alert-yellow pl-1 text-[14px]">11 WARN</div>
                                <div className="alert-green pl-1 text-[14px]">64 OK</div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-[13px] justify-end">
                                <button
                                    className={`text-[18px] w-[170px] border-[1px] gap-1 justify-center flex items-center rounded px-2 border-[#12A5C6] py-[5px] ${panelOpen ? "bg-[#12A5C6] text-white" : "text-[#12A5C6]"}`}
                                    onClick={() => setPanelOpen(!panelOpen)}>
                                    <SettingsIcon /> Control Panel
                                </button>
                                <div className="cursor-pointer ml-1" onClick={()=>setPousPlay(!pousPlay)}>
                                   {pousPlay ? <PausIcons/>:<PlayIcons/>}
                                </div>
                                <div className="cursor-pointer flex items-center">
                                    <DeleteSharpIcon style={{ color: "#F73838A3",fontSize:"27px" }} />
                                </div>
                            </div>
                            <div className="alertred pr-2 text-[14px] mt-2">LIVE Scraping | Updated 1 min ago</div>
                        </div>
                    </div>
                    {panelOpen && <ControlPanel />}
                    <div className="p-2 overflow-x-auto">
                        <section className="min-w-[1300px] bg-[#0F2A31] text-white  rounded">
                            <div className="flex items-center justify-between gap-1 text-[#B3B3B3] border-b-[1px] border-[#2b2b37] text-[11px] pr-4">
                                <p className="p-2 flex items-center w-[60px]"># <ExpandMoreIcon style={{ fontSize: "15px" }} /></p>
                                <p className="p-2 flex items-start tracking-[2px] w-[60px]">FAV</p>
                                <p className="p-2 flex justify-center tracking-[2px] w-[60px]">RISK</p>
                                <p className="p-2 flex items-start tracking-[2px] w-[250px]">TITLE</p>
                                <p className="p-2 flex items-start tracking-[2px] w-[250px]">KEYWORDS</p>
                                <p className="p-2 flex items-start tracking-[2px] w-[100px]">SOURCE</p>
                                <p className="p-2 flex items-start tracking-[2px]  w-[140px]">COUNTRY</p>
                                <p className="p-2 flex items-start tracking-[2px]  w-[125px]">DATE</p>
                                <p className="p-2 flex items-start tracking-[2px]  w-[50px]">URL</p>
                                <p className="p-2 flex items-start tracking-[2px]  w-[80px]">LANG</p>
                                <p className="p-2 flex items-start tracking-[2px]  w-[50px] mr-3">SEEN</p>
                               
                            </div>
                            {tableData?.map((item, i) => (
                                <React.Fragment key={i}>
                                    <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}
                                        style={{ background: i % 2 === 0 ? "#0F252A" : "transparent", color: "white", padding: 0,border:expanded === `panel${i}`?"1px solid #12A5C6":"" }}>
                                        <AccordionSummary style={{ padding: 0 }}
                                            expandIcon={<ArrowForwardIosSharpIcon style={{ color: "#54ACBF", fontSize: "15px", marginRight:"10px" }} />}
                                            aria-controls={`panel${i}-content`}
                                            id={`panel${i}-header`}>
                                            <div className="w-full flex items-center justify-between  gap-1">
                                                <p className="px-2 w-[60px] text-[14px] text-[#B3B3B3]">{item?.point}</p>
                                                <p className="px-2 w-[60px] text-[#B3B3B3]">
                                                    <i className={`bi ${rating===i ?"bi-star-fill text-[#F7D240]":"bi-star"}  text-[16px]`} 
                                                    onClick={()=>setRating(i)}>
                                                    </i></p>
                                                <p className={`w-[60px] uppercase rounded font-semibold flex items-center justify-center h-[30px]
                                                     ${item.risk.toLocaleLowerCase() === "ok" ? "bg-[#4D9F69] text-black"
                                                        : item.risk.toLocaleLowerCase() === "crit" ? "bg-[#A8372D] text-white" : "bg-[#F7D240] text-black"}`}>
                                                    {item?.risk}</p>
                                                <p className="px-2 w-[250px] text-[16px] font-semibold">{item?.title}</p>
                                                <p className="px-2 w-[250px] text-[14px]">{item?.keywords}</p>
                                                <p className="px-2 w-[100px]">{item?.scoure}</p>
                                                <p className="px-2 w-[140px]">{item?.countery}</p>
                                                <p className="px-2 w-[125px]">{item?.date}</p>
                                                <p className="px-2 w-[50px] text-[#54ACBF]">link</p>
                                                <p className="px-2 w-[80px] text-[#54ACBF]">{item?.lang}</p>
                                                <p className="px-2 w-[50px] text-[#4C9D68] uppercase">{item?.seen}</p>
                                            </div>
                                        </AccordionSummary>
                                        <AccordionDetails style={{padding:0}}>
                                            <div className="flex gap-1 ">
                                                <div className="w-[90%] py-4 px-2">
                                                    <h1 className="text-[14px] font-bold">{item?.alarts}</h1>
                                                </div>
                                                <div className="overflow-y-auto w-[80%] h-[170px]">
                                               <div className="w-full flex h-full
                                                 flex-col gap-2 border-r border-l border-[#FFFFFF3B] p-2">
                                                    <div className="flex  gap-3 
                                                   rounded-[10px] p-1 min-h-[40px] bg-[#00000017] text-[#37BC64] ">
                                                        <KysIconsColors color="#37BC64" />
                                                        <p className="mt-[-3px]">{item?.successms}</p>
                                                    </div>
                                                    <div className="flex gap-3 
                                                   rounded-[10px] min-h-[40px] bg-[#00000017] p-1 text-[#F7D240] ">
                                                        <KysIconsColors color="#F7D240"/>
                                                        
                                                    </div>
                                                    <div className="flex  gap-3 
                                                    rounded-[10px] min-h-[40px] bg-[#00000017] p-1 text-[#A8372D] ">
                                                       <KysIconsColors color="#A8372D"/>
                                                       
                                                    </div>
                                                 
                                                </div>
                                               </div>
                                                <div className="w-full p-2 overflow-y-auto h-[180px]">
                                                <p className="text-[14px] "><span className="font-bold">Executive Summary:</span> <span className="italic">{item?.desc}</span></p>
                                                </div>
                                            </div>
                                        </AccordionDetails>
                                    </Accordion>
                                </React.Fragment>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
            </Layout>
        </>
    );
};

export default Surveillance;
