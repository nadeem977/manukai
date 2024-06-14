import React, { useEffect,useState } from "react";
import { SidebarCollapseItem } from "../pages/DashboardInData";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Link, useLocation } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


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

const SideBarComponent = ({ data }) => {


  const location = useLocation().pathname;
  const [expanded, setExpanded] = React.useState(false);
  const [editname ,setEditName] = useState("")
  // const[newChat, setNewChat] =useState(["1","2","3","4"])
  useEffect(() => {
    const panelToExpand = data.find((item, index) => {
      return item.submenu.some(subItem => subItem.url === location);
    });

    if (panelToExpand) {
      const panelIndex = data.indexOf(panelToExpand);
      setExpanded(`panel${panelIndex}`);
    } else {
      setExpanded(false);
    }
  }, [location, data]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
   
  const handelrename = (event)=>{
    if(event.key === "Enter"){
      setEditName("") 
    }
  }


  return (
    <>
      <SidebarCollapseItem title="INTELLIGENCE">
        <ul className="manukai-data-menu">
          {data.map((item, i) => (
            <Accordion
              key={i}
              expanded={expanded === `panel${i}`}
              onChange={handleChange(`panel${i}`)}>
              <AccordionSummary
                expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: 'white' }} />}
                aria-controls={`panel${i}-content`}
                id={`panel${i}-header`}
                style={{ ...stylesummry, background: item.icon2 ? "#0f2128" : item?.bg, color: item.icon2 ? "white" : "#C5F5FF" }}>
                <div className="flex items-center gap-3 w-full text-[16px] pr-3">
                  {item.icon} {item.title} {item.icon2 || item?.icon3}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="submenu">
                  {item.submenu.map((subItem, inx) => (
                    <li key={inx}>
                      <div className={`chamkila overflow-visible   ${location === subItem.url ? "bg-[#0f2128] text-white" : "textred"}`}>
                   {editname === inx ? <input type="text" className="p-1 my-2 w-full bg-[#4ED2EF80] text-black  border-none" onKeyDown={handelrename}/>:
                   <Link to={subItem.url} className="w-full h-full p-[10px] hover:text-white">{subItem.title}</Link>}
                      {location === subItem.url ?  <div className="sideDropdown"> 
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                          <i class="bi bi-three-dots-vertical"></i>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="top-[-50px] p-0">
                            <Dropdown.Item onClick={()=>setEditName(inx)}>Rename</Dropdown.Item>
                            <Dropdown.Item>Delete</Dropdown.Item> 
                          </Dropdown.Menu>
                        </Dropdown>
                        </div>:<p>{subItem?.icon2}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </AccordionDetails>  
            </Accordion>
          ))}
        </ul>
      </SidebarCollapseItem>
    </>
  );
}

export default SideBarComponent;
