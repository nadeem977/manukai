import React, { useEffect, useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import { AppContext } from "../contexts/authContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AIcons, IconsRadars, NewsItemsH } from "./Icon";
import MuiSelect from "./MuiSelect";
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@material-ui/styles';  

const CustomCheckbox = styled(Checkbox)({
    '& .MuiSvgIcon-root': {
        fontSize: '18px',
        transform: 'scale(0.8)',
        borderRadius: '50%',
    },
});

const Addsurveillance = ({ openmo }) => {
  const { openmodal, setOpenmodal, openmodals, setOpenmodals } =
    useContext(AppContext);
  const [open, setOpen] = React.useState(false);
  const [active1, setActive1] = useState("1");
  const [defaultval ,setdefaultval] = React.useState("'protest' , 'demonstration' , 'rally' , 'activism' , 'disobedience' , 'public assembly' ,  'march' , 'strike' ");
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setOpenmodal(false);
    setOpenmodals(false);
  };

  useEffect(() => {
    if (openmodal || openmo) {
      handleOpen();
    }
  }, [openmodal, openmo]);

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className=" trnd absolute top-[50%] left-[50%] w-full max-w-[421px] rounded-lg border-[1px] border-[#12A5C6]">
            <div className="w-full border-b-[1px] border-[#B3B3B3] p-2 flex items-center justify-between">
              <h1 className="tracking-widest text-[#12A5C6] text-[18px] font-bold">
                Add Task To <i className="bi bi-eye font-bold text-[17pxpx] text-[#12A5C6]" ></i>Surveillance
              </h1>
              <ExpandMoreIcon className="rotate-180 "/>
            </div>
           <div className="p-2">
           <div className=" mt-2 pr-10 font-medium grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                className={`border-[1px] text-[12px] justify-center border-[#4ED2EF80] 
                    rounded px-2 p-1 flex items-center gap-2 ${active1 === "1"? "bg-[#12A5C6] text-black": ""}`}
                onClick={() => setActive1("1")}>
                <NewsItemsH width="15px" actives={active1} /> News Articles
              </button>
              <button
                className={`border-[1px] text-[12px] justify-center border-[#4ED2EF80] rounded px-2 p-1 flex items-center gap-2 ${
                  active1 === "2" ? "bg-[#12A5C6] text-black" : ""}`}
                onClick={() => setActive1("2")}>
                <AIcons actives={active1} /> Social Media
              </button>
              <button
                className={`border-[1px] text-[12px] justify-center border-[#4ED2EF80] rounded px-2 p-1 flex items-center gap-1
                               ${active1 === "3"? "bg-[#12A5C6] text-black": ""}`}onClick={() => setActive1("3")}>
                <IconsRadars actives={active1} /> Dark Web
              </button>
            </div>
            <div className="items-center grid grid-cols-1 sm:grid-cols-2 my-1 gap-2 text-[15px] mt-2">
              <div>
                <p>From:</p>
                <MuiSelect />
              </div>
              <div>
                <p>Till:</p>
                <MuiSelect />
              </div>
            </div>
                <h1 className="mt-3 mb-2 text-[17px] ">Accounts:</h1>
            <div className="items-center grid grid-cols-1 sm:grid-cols-2 my-1 gap-2 text-[15px]">
              <div>
                <p>Telegram:</p>
                <MuiSelect />
              </div>
              <div>
                <p>Signal:</p>
                <MuiSelect />
              </div>
            </div>
            <div className="mt-3 text-[15px]">
                <p>Scraping method:</p>
                <MuiSelect />
              </div>

             <div className="text-[15px] mt-3">
                <p>Scraping keywords:</p>
                <textarea className="w-full resize-none border-[1px] border-[#4ED2EF80] 
                p-1 rounded-lg outline-none text-[#4ED2EF80] min-h-[72px] bg-transparent" value={defaultval} onChange={(e)=>setdefaultval(e.target.value)}></textarea>
             </div> 
             <div className="flex flex-col gap-3 my-3">
                                <div>
                                    <h1 className="pl-1 text-[14px] mb-1">Monitor Threats:</h1>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                            <CustomCheckbox style={{ color: "#C5F5FF", width: '20px', padding: 0 }} id="f1" defaultChecked />
                                            <label htmlFor="f1" className="text-[#3CCF6E] cursor-pointer">Ok</label>
                                        </div>
                                        <div className="flex items-center ">
                                            <CustomCheckbox style={{ color: "#C5F5FF", width: '20px', padding: 0 }} id="f2" defaultChecked />
                                            <label htmlFor="f2" className="text-[#F7D240] cursor-pointer">WARN</label>
                                        </div>
                                        <div className="flex items-center">
                                            <CustomCheckbox style={{ color: "#C5F5FF", width: '20px', padding: 0 }} id="f3" defaultChecked />
                                            <label htmlFor="f3" className="text-[#D23123] cursor-pointer">CRIT</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="pl-1 text-[14px] mb-1">Notifications:</h1>
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center">
                                            <CustomCheckbox style={{ color: "#C5F5FF", width: '20px', padding: 0 }} id="f10" defaultChecked />
                                            <label htmlFor="f10" className="text-[#3CCF6E] cursor-pointer">Ok</label>
                                        </div>
                                        <div className="flex items-center">
                                            <CustomCheckbox style={{ color: "#C5F5FF", width: '20px', padding: 0 }} id="f12" defaultChecked />
                                            <label htmlFor="f12" className="text-[#F7D240] cursor-pointer">WARN</label>
                                        </div>
                                        <div className="flex items-center">
                                            <CustomCheckbox style={{ color: "#C5F5FF", width: '20px', padding: 0 }} id="f13" defaultChecked />
                                            <label htmlFor="f13" className="text-[#D23123] cursor-pointer">CRIT</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-3">
                            <button className='px-2 py-[2px] bg-[#6F6F6F] rounded text-[white]'>Cancel</button>
                                <button className='px-2 py-[2px] bg-[#009C2C] rounded text-[white] w-[120px] h-[25px] text-[15px] gap-1 flex items-center'onClick={handleClose}>
                                    <i className="bi bi-check2 text-[18px]"></i> Save & Exit</button>
                            </div>
           </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Addsurveillance;
