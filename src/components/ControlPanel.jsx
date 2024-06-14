import React, { useState } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { AIcons, IconsRadars, KeyIcons, KysIconsColors, NewsItemsH, PausIcons, SoundIcons } from "./Icon";
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@material-ui/styles';  
import MuiSelect from './MuiSelect';

 

const CustomCheckbox = styled(Checkbox)({
    '& .MuiSvgIcon-root': {
        fontSize: '18px',
        transform: 'scale(0.8)',
        borderRadius: '50%',
    },
});




const ControlPanel = () => {

    const [active1, setActive1] = useState("1")
    const [active2, setActive2] = useState("1")
    const[defualtvalues, setDefualtvalues] = useState({okval:"(“protest” & “demonstration”) + “rally” + “disobedience” + (“public assembly” & (“environment” + “green” + “co2”))",warnval:"(“protest” & “demonstration”) ",critval:"(“protest” & “demonstration”) "})
    return (
        <>
            <section className="p-2">
                <div className="border-[1.5px] border-[#4ED2EF80] w-full shadoBax mt-3 p-2 rounded flex  flex-col gap-2 lg:flex-row">
                    <div className='w-full max-w-[420px] pr-2 border-r-[1px] border-[#FFFFFF3B]'>
                        <button className="text-[18px] flex items-center gap-2"><SettingsIcon /> Control Panel</button>
                        <div className="border-[1.5px] mt-2 font-medium border-[#4ED2EF80] rounded p-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <button className={`border-[1px] text-[12px] justify-center border-[#4ED2EF80] 
                                rounded px-2 p-1 flex items-center gap-2 ${active1 === "1" ? "bg-[#12A5C6] text-black" : ""}`}
                                onClick={() => setActive1("1")}>
                                <NewsItemsH width="15px" actives={active1} /> News Articles
                            </button>
                            <button className={`border-[1px] text-[12px] justify-center border-[#4ED2EF80] rounded px-2 p-1 flex items-center gap-2 ${active1 === "2" ? "bg-[#12A5C6] text-black" : ""}`} onClick={() => setActive1("2")}>
                                <AIcons actives={active1} /> Social Media
                            </button>
                            <button className={`border-[1px] text-[12px] justify-center border-[#4ED2EF80] rounded px-2 p-1 flex items-center gap-1
                               ${active1 === "3" ? "bg-[#12A5C6] text-black" : ""}`} onClick={() => setActive1("3")}>
                                <IconsRadars actives={active1} /> Dark Web
                            </button>
                        </div>
                        <div className="border-[1.5px] mt-2 font-medium text-[12px] border-[#4ED2EF80] rounded p-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <button className={`border-[1px] justify-center text-[12px] border-[#4ED2EF80] rounded px-2 p-1 flex items-center gap-2
                                 ${active2 === "1" ? "bg-[#12A5C6] text-black" : ""}`} onClick={() => setActive2("1")}>
                                <KeyIcons color={"white"} actives={active2} />Keyword Scraping
                            </button>
                            <button className={`border-[1px] justify-center text-[12px] border-[#4ED2EF80] rounded px-2 p-1 flex items-center gap-2
                                ${active2 === "2" ? "bg-[#12A5C6] text-black" : ""}`} onClick={() => setActive2("2")}>
                                <SoundIcons actives={active2} /> EasyGPT Scraping <small className='text-[#FFE600] mt-[-5px]'>PRO+</small>
                            </button>
                        </div>
                        <div className="mt-3">
                            <div className="items-center grid grid-cols-1 sm:grid-cols-2 my-1 gap-2">
                                <div>
                                    <p>From:</p>
                                    <MuiSelect/>
                                </div>
                                <div>
                                    <p>Till:</p>
                                    <div className="w-full">
                                    <MuiSelect/>
							</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="min-w-[170px]">
                                <h1 className="text-[12px] ">News Origin:</h1>
                                <div className="border-[1px] mt-1 rounded border-[#4ED2EF80]">
                                    <div className="h-[70px] overflow-y-auto">
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
                                            <div
                                                key={i}
                                                className={`flex p-1 items-center text-[10px] justify-between ${i % 2 === 0 ? 'bg-transparent' : 'bg-[#00000024]'}`}
                                            >
                                                Worldwide
                                                <DeleteSharpIcon style={{ color: "#F73838A3", fontSize: "13px", cursor: "pointer" }} />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex bg-[#00000024]  p-1 items-center justify-between">
                                        <input type="text" placeholder="Add account here..." className="bg-transparent text-[10px] italic w-full border-none outline-none" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div>
                                    <h1 className="pl-1 text-[14px] mb-1">Surveillance Tasks:</h1>
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
                                    <h1 className="pl-1 text-[14px] mb-1">Bell Notifications:</h1>
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
                        </div>
                    </div>
                    <div className='flex flex-col justify-between gap-2 w-full'>
                        <div className='flex flex-col gap-2 w-full h-full'>
                        <div className='border-[1px] border-[#4ED2EF80] p-1 rounded min-h-[72px] h-full flex flex-col justify-between gap-1'>
                            <div className='flex items-baseline gap-3 h-full'>
                                <div className='flex items-center gap-1  min-w-[60px] max-w-[60px] text-[#3CCF6E] text-[11px]'>
                                    <KysIconsColors color={"#3CCF6E"} />OK</div>
                                
                                 <textarea className='w-full h-full text-[#4ED2EF80] resize-none bg-transparent border-none outline-none' value={defualtvalues.okval} 
                                 onChange={(e)=>setDefualtvalues((prev)=>({...prev,okval:e.target.value}))}></textarea>
                            </div>
                            <div className='w-full flex justify-end mb-[-8px]'><i class="bi bi-check-lg text-[#3CCF6E] "></i></div>
                        </div>

                        <div className='border-[1px] border-[#4ED2EF80] p-1 rounded min-h-[72px] h-full flex flex-col justify-between gap-1'>
                            <div className='flex gap-3 items-baseline h-full'>
                                <div className='flex items-center gap-1 min-w-[60px] max-w-[60px]  text-[#F7D240] text-[11px] '><KysIconsColors color={"#F7D240"} />WARN</div>
                               
                                <textarea className='w-full h-full text-[#4ED2EF80] resize-none bg-transparent border-none outline-none' value={defualtvalues.warnval} 
                                 onChange={(e)=>setDefualtvalues((prev)=>({...prev,warnval:e.target.value}))}></textarea>
                            </div>
                            <div className='w-full flex justify-end mb-[-8px]'><i class="bi bi-check-lg text-[#3CCF6E]"></i></div>
                        </div>

                        <div className='border-[1px] border-[#4ED2EF80] p-1 rounded min-h-[72px] h-full flex flex-col justify-between gap-1'>
                            <div className='flex gap-3 h-full items-baseline'>
                                <div className='flex items-center gap-1 min-w-[60px]
                                 max-w-[60px] text-[#D23123] text-[11px]'><KysIconsColors color={"#D23123"} />CRIT</div>
                             
                                <textarea className='w-full h-full text-[#4ED2EF80] resize-none bg-transparent border-none outline-none' value={defualtvalues.critval} 
                                 onChange={(e)=>setDefualtvalues((prev)=>({...prev,critval:e.target.value}))}></textarea>
                            </div>
                            <div className='w-full flex items-center justify-end text-[#D23123] mb-[-10px]'><small>Syntax Error</small><i class="bi bi-x text-[18px]"></i></div>
                        </div>
                        </div>

                        <div className='flex items-center justify-between gap-2 flex-wrap w-full'>
                            <div className='flex items-center gap-1 flex-wrap mt-3 ml-[-5px]'>
                                <div className="flex items-center ">
                                    <CustomCheckbox style={{ color: "#C5F5FF", width: '30px', padding: 0 }} id="f21" defaultChecked />
                                    <label htmlFor="f21" className="text-[white] cursor-pointer">Auto-Translate Keywords</label>
                                </div>
                                <div className="flex items-center">
                                    <CustomCheckbox style={{ color: "#C5F5FF", width: '30px', padding: 0 }} id="f31" />
                                    <label htmlFor="f31" className="text-[white] cursor-pointer">Show Translations</label>
                                </div>
                            </div>
                            <div className='flex items-center gap-1 mt-3'>
                                <button className='px-2 py-[2px] bg-[#258499] rounded text-[white]'>Import</button>
                                <button className='px-2 py-[2px] bg-[#258499] rounded text-[white]'>Export</button>
                                &#160;&#160;
                                <button className='px-2 py-[2px] bg-[#6F6F6F] rounded text-[white]'>Cancel</button>
                                <button className='px-2 py-[2px] bg-[#009C2C] rounded text-[white] w-[120px] h-[25px] text-[15px] gap-1 flex items-center'>
                                    <i class="bi bi-check2 text-[18px]"></i> Save & Exit</button>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default ControlPanel