import React, { useEffect,useState ,useContext} from "react";
import { SidebarCollapseItem } from "../pages/DashboardInData";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Link, useLocation } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { AppContext } from "../contexts/authContext";
import { Beta, Check, NationalIcon, NovaEngineIcon } from "./Icon";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const stylesummry = {
  borderRadius: "10px",
  width: "90%",
  marginLeft: "1rem",
  paddingLeft: "3px"
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&::before': {
    display: 'none',
  },
  background: "transparent",
  color: "white",
  border: "none",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    border: "none",
  },
  '& .MuiSvgIcon-root': {
    color: "white"
  },
  '& .css-yw020d-MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(-90deg)',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

const SideBarComponent = () => {


  return (
    <>
      <SidebarCollapseItem title="INTELLIGENCE">
     <div className="flex flex-col gap-2">
      <ManukaiGPTBars/>
     <SearchBars/>
     <Surveillance/>
     <Intelligence/>
     </div>
      </SidebarCollapseItem>
    </>
  );
}

export default SideBarComponent;



export const SearchBars = ()=>{


  const location = useLocation().pathname;
  const [expanded, setExpanded] = React.useState(false);
  const [editname ,setEditName] = useState("")
  const { newSearch, setSearch} = useContext(AppContext)



  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }; 
  const handelrename = (event)=>{
    if(event.key === "Enter"){
      setEditName("") 
    }
  }
	const CreateNewChat = (event) => {
    event.stopPropagation();
	  setSearch((prev) => {
		  const newNumber = prev[prev.length - 1] + 1;
		  return [...prev, newNumber];
	  });
	};
	const removingchat = (event) => {
	  setSearch((prev) => {
	 return prev.slice(0, -1);
	  });
	};
useEffect(()=>{
 if(location.length <13){
   setExpanded("panel1")
 }
},[location])
  return (
    <>
     <ul className="manukai-data-menu">
            <Accordion
              expanded={expanded === `panel1`}
              onChange={handleChange(`panel1`)}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
                aria-controls={`panel1-content`}
                id={`panel1-header`}
                style={{ ...stylesummry,
                    background:location.slice(0,9)==="/int-deck"?
                    location.length >13?"#0E2B34":"#0f2128":"#0E2B34"}}>
                <div className={`flex items-center gap-3 w-full text-[16px] pr-3 
                ${location.length >13 ?"text-[#C5F5FF]":"text-white"}
                `}>
                <NovaEngineIcon color={`${location.length >13?"#C5F5FF":"white"}`} /> Manukai Search {location.length >13 ? null:<Check /> }
                </div>
              </AccordionSummary>
              <AccordionDetails> 
                <ul className="submenu">
               <li> <div className="chamkila my-2 pading overflow-visible  bg-[#0f2128] text-white"
                onClick={CreateNewChat}>New Search</div></li>
                  {newSearch?.map((_, inx) => (
                    <li key={inx}>
                      <div className={`chamkila overflow-visible   ${location === `/int-deck/${inx}` ? "bg-[#0f2128] text-white" : "textred"}`}>
                   {editname === inx ? <input type="text" className="p-1 my-2 w-full bg-[#4ED2EF80] text-black  border-none" onKeyDown={handelrename}/>:
                   <Link to={`/int-deck/${inx}`} className="w-full h-full p-[10px] hover:text-white">New Search {inx +1}</Link>}
                       <div className="sideDropdown"> 
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <i className="bi bi-three-dots-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="top-[-50px] p-0">
                            <Dropdown.Item onClick={()=>setEditName(inx)}>Rename</Dropdown.Item>
                            <Dropdown.Item onClick={removingchat}>Delete</Dropdown.Item> 
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>  
            </Accordion>
          
        </ul>
    </>
  );

}
export const ManukaiGPTBars = ()=>{


  const location = useLocation().pathname;
  const [expanded, setExpanded] = React.useState(false);
  const [editname ,setEditName] = useState("")
  const { newChat, setNewChat} = useContext(AppContext)

 
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }; 
  const handelrename = (event)=>{
    if(event.key === "Enter"){
      setEditName("") 
    }
  }
	const CreateNewChat = (event) => {
    event.stopPropagation();
	  setNewChat((prev) => {
		  const newNumber = prev[prev.length - 1] + 1;
		  return [...prev, newNumber];
	  });
	};
	const removingchat = () => {
	  setNewChat((prev) => {
	 return prev.slice(0, -1);
	  });
	};


  useEffect(()=>{
    if(location.slice(0,20)==="/int-deck/ManukaiGPT"){
      setExpanded("panel1")
    }
   },[location])


  return (
    <>
     <ul className="manukai-data-menu">
            <Accordion
              expanded={expanded === `panel1`}
              onChange={handleChange(`panel1`)}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
                aria-controls={`panel1-content`}
                id={`panel1-header`}
                style={{ ...stylesummry, background:location.slice(0,20)==="/int-deck/ManukaiGPT"?"#0f2128":"#0C262E6E"
                 }}>
                <div className={`flex items-center gap-3 w-full text-[16px] pr-3 
                ${location.slice(0,20)==="/int-deck/ManukaiGPT" ?"text-white":"text-[#C5F5FF]"}`}>
                <ChatBubbleOutlineIcon style={{color: location.slice(0,20)==="/int-deck/ManukaiGPT"? "white":"#C5F5FF"}} />Manukai GPT {
                 location.slice(0,20)==="/int-deck/ManukaiGPT"? <Check /> :null}
                </div>
              </AccordionSummary>
              <AccordionDetails> 
                <ul className="submenu">
               <li> <div className="chamkila my-2 pading overflow-visible  bg-[#0f2128] text-white"
                onClick={CreateNewChat}>New Chat</div></li>
                  {newChat?.map((_, inx) => (
                    <li key={inx}>
                      <div className={`chamkila overflow-visible   
                      ${location  === `/int-deck/ManukaiGPT/${inx}` ? "bg-[#0f2128] text-white" : "textred"}`}>
                   {editname === inx ? <input type="text" className="p-1 my-2 w-full bg-[#4ED2EF80] text-black  border-none" onKeyDown={handelrename}/>:
                   <Link to={`/int-deck/ManukaiGPT/${inx}`}
                    className="w-full h-full p-[10px] hover:text-white">New Chat {inx +1}</Link>}
                       <div className="sideDropdown"> 
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <i className="bi bi-three-dots-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="top-[-50px] p-0">
                            <Dropdown.Item onClick={()=>setEditName(inx)}>Rename</Dropdown.Item>
                            <Dropdown.Item onClick={removingchat}>Delete</Dropdown.Item> 
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>  
            </Accordion>
          
        </ul>
    </>
  );

}
export const Surveillance = ()=>{


  const location = useLocation().pathname;
  const [expanded, setExpanded] = React.useState(false);
  const [editname ,setEditName] = useState("")
  const {  newSurvel, setSurvel} = useContext(AppContext)

 
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }; 
  const handelrename = (event)=>{
    if(event.key === "Enter"){
      setEditName("") 
    }
  }
	const CreateNewChat = (event) => {
    event.stopPropagation();
	  setSurvel((prev) => {
		  const newNumber = prev[prev.length - 1] + 1;
		  return [...prev, newNumber];
	  });
	};
	const removingchat = () => {
	  setSurvel((prev) => {
	 return prev.slice(0, -1);
	  });
	};

  useEffect(()=>{
    if(location.slice(0,22)==="/int-deck/Surveillance"){
      setExpanded("panel1")
    }
   },[location])



  return (
    <>
     <ul className="manukai-data-menu">
            <Accordion
              expanded={expanded === `panel1`}
              onChange={handleChange(`panel1`)}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
                aria-controls={`panel1-content`}
                id={`panel1-header`}
                style={{ ...stylesummry,
                   background:location.slice(0,22)==="/int-deck/Surveillance"?"#0f2128":"#0C262E6E"
                 }}>
                <div className={`flex items-center gap-3 w-full text-[16px] pr-3
                 ${location.slice(0,22)==="/int-deck/Surveillance" ?"text-white":"text-[#C5F5FF]"}`}>
                <i className={`bi bi-eye ml-1 text-[16px] 
                ${location.slice(0,22)==="/int-deck/Surveillance" ?"text-white":"text-[#C5F5FF]"}`}></i>Surveillance 
                {location.slice(0,22)==="/int-deck/Surveillance" ?<Check />:null}
                </div>
              </AccordionSummary>
              <AccordionDetails> 
                <ul className="submenu">
               <li> <div className="chamkila my-2 pading overflow-visible  bg-[#0f2128] text-white"
                onClick={CreateNewChat}>News item</div></li>
                  {newSurvel?.map((_, inx) => (
                    <li key={inx}>
                      <div className={`chamkila overflow-visible   
                      ${location  === `/int-deck/Surveillance/${inx}` ? "bg-[#0f2128] text-white" : "textred"}`}>
                   {editname === inx ? <input type="text" className="p-1 my-2 w-full bg-[#4ED2EF80] text-black  border-none" onKeyDown={handelrename}/>:
                   <Link to={`/int-deck/Surveillance/${inx}`}
                    className="w-full h-full p-[10px] hover:text-white">News item {inx +1}</Link>}
                       <div className="sideDropdown"> 
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <i className="bi bi-three-dots-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="top-[-50px] p-0">
                            <Dropdown.Item onClick={()=>setEditName(inx)}>Rename</Dropdown.Item>
                            <Dropdown.Item onClick={removingchat}>Delete</Dropdown.Item> 
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>  
            </Accordion>
          
        </ul>
    </>
  );

}
export const Intelligence = ()=>{


  const location = useLocation().pathname;
  const [editname ,setEditName] = useState("")
  const {  newSurvel, setSurvel} = useContext(AppContext)
  
  const [expanded, setExpanded] = React.useState(false);
 
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  }; 
  const handelrename = (event)=>{
    if(event.key === "Enter"){
      setEditName("") 
    }
  }
	// const CreateNewChat = () => {
	//   setSurvel((prev) => {
	// 	  const newNumber = prev[prev.length - 1] + 1;
	// 	  return [...prev, newNumber];
	//   });
	// };
	// const removingchat = () => {
	//   setSurvel((prev) => {
	//  return prev.slice(0, -1);
	//   });
	// };

  return (
    <>
     <ul className="manukai-data-menu">
            <Accordion
              expanded={expanded === `panel1`}
              onChange={handleChange(`panel1`)}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
                aria-controls={`panel1-content`}
                id={`panel1-header`}
                style={{ ...stylesummry,
                   background: "#0C262E6E"
                 }}>
                <div className="flex items-center text-[#C5F5FF] gap-3 w-full text-[16px] pr-3">
                <NationalIcon  color="#C5F5FF"/> Map Intelligence 
                <Beta />
                </div>
              </AccordionSummary>
              <AccordionDetails> 
                <ul className="submenu">
               <li> <div className="chamkila my-2 pading overflow-visible  bg-[#0C262E6E] text-white"
                // onClick={CreateNewChat}
                >New Chat</div></li>
                  {/* {newSurvel?.map((_, inx) => (
                    <li key={inx}>
                      <div className={`chamkila overflow-visible   
                      ${location  === `/int-deck/Surveillance/${inx}` ? "bg-[#0f2128] text-white" : "textred"}`}>
                   {editname === inx ? <input type="text" className="p-1 my-2 w-full bg-[#4ED2EF80] text-black  border-none" onKeyDown={handelrename}/>:
                   <Link to={`/int-deck/Surveillance/${inx}`}
                    className="w-full h-full p-[10px] hover:text-white">New Chat {inx +1}</Link>}
                       <div className="sideDropdown"> 
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <i className="bi bi-three-dots-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="top-[-50px] p-0">
                            <Dropdown.Item onClick={()=>setEditName(inx)}>Rename</Dropdown.Item>
                            <Dropdown.Item 
                            // onClick={removingchat}
                            >Delete</Dropdown.Item> 
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>
                      </div>
                    </li>
                  ))} */}
                </ul>
              </AccordionDetails>  
            </Accordion>
          
        </ul>
    </>
  );

}
