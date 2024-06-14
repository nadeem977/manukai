import React from 'react'
import Layout from '../components/Layout'
import SideBarConponet from '../components/SideBarConponet'
import dyamiimg from "../assets/img/dyami.png"
import chelimg from "../assets/img/chel.png"
import { CopyIcons, DesLikeThumbe, EditIcons, ExalIcons, LinkThumb, PlusBorderIcon, PlusRoundIcon, RepeatedArrow, SentMessage, StrokIcons } from '../components/Icon'
import { LuDownload } from "react-icons/lu";
import { RiShareForwardLine } from "react-icons/ri";
import { FiPlusSquare } from "react-icons/fi";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import ManukaiGraph from '../components/ManukaiGraph'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ChatINTELLIGENCESidebAr } from '../assets/data/data'
const options = [
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',

];
const ITEM_HEIGHT = 48;
const ManukaiGPT = () => {


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <Layout sidebar={<SideBarConponet data={ChatINTELLIGENCESidebAr} />}>
        <section className='flex gap-3 w-full h-full flex-col xl:flex-row'>

          <div className='w-full p-3 rounded-[16px] bg-[#091D22]'>

            <section className='w-full manikaiGpth overflow-y-auto'>
              <div className='flex items-center gap-3 pl-1 w-full mt-2'>
                <img src={dyamiimg} alt="icons" />
                <h1 className='text-[16px] mt-1'>first chat send by user</h1>
              </div>

              <div className='flex flex-col gap-2'>
                <div className='flex items-start gap-3 mt-5 w-full'>
                  <img src={chelimg} alt="icon" />
                  <div className='w-full flex flex-col gap-1 mt-[8px]'>
                  <h1 className='text-[#4ED2EF] text-[14px] leading-[16.94px] flex items-center gap-1'>ManukaiGPT <StrokIcons/></h1>
                    <p className='text-[18px] leading-[26px] text-white'>123123 ....</p>

                    <div className='flex flex-col gap-2'>

                      <div className='w-full relative bg-[#0F2A31] p-2 rounded-lg '>
                        <div className='w-fit absolute right-2 top-2'><EditIcons /> </div>
                        <div className='mt-2'>
                          <h1 className='text-[18px] leading-[26px] mb-1 text-white'>I have numbers for you</h1>
                          <div className='flex items-center gap-2 flex-wrap text-white'>
                            <div className='bg-[#03181E] p-2 rounded w-fit'>123123</div>
                            <div className='bg-[#03181E] p-2 rounded w-fit'>123123</div>
                            <div className='bg-[#03181E] p-2 rounded w-fit'>123123</div>
                            <div className='bg-[#03181E] p-2 rounded w-fit'>123123</div>
                          </div>
                        </div>
                      </div>

                      <div className='w-full relative bg-[#0F2A31] p-2 rounded-lg '>
                        <div className='w-fit absolute right-2 top-2'><EditIcons /> </div>
                        <div className='mt-2'>
                          <h1 className='text-[18px] leading-[26px] mb-1'>I have numbers for you (1)</h1>
                          <div className='flex items-center gap-2 flex-wrap'>
                            <div className='bg-[#03181E] p-2 rounded w-fit'>123123</div>
                            <div className='bg-[#03181E] p-2 rounded w-fit'>123123</div>
                            <div className='bg-[#03181E] p-2 rounded w-fit'>123123</div>
                            <div className='bg-[#03181E] p-2 rounded w-fit'>123123</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='flex items-start gap-3 mt-1 w-full'>
                  <img src={chelimg} alt="icon" />
                  <div className='flex flex-col gap-1 w-full'>
                    <div className='w-full bg-[#0F2A31] p-2 rounded-lg '>
                      <div className='mt-2'>
                        <h1 className='text-[18px] leading-[26px] mb-1'>123123</h1>
                      </div>
                    </div>

                    <div className='flex items-center gap-2 justify-between mt-2'>
                      <div className='flex items-center gap-2 justify-between'>
                        <div className='flex items-center gap-2'>
                          <div className='flex items-center justify-center border-[1px] rounded-full border-[#15677A] bg-[#0F2A31] w-[126px] h-[36px]'>
                            <span className='cursor-pointer'><LinkThumb /></span>
                            <span className='w-fit px-2 border-r-[1px] mx-3 cursor-pointer border-l-[1px] border-[#FFFFFF70]'>
                              <DesLikeThumbe /></span>
                            <i class="bi bi-copy cursor-pointer text-[#FFFFFF70]"></i>
                          </div>
                          <div className='rounded-full w-[34px] 
                         border-[1px] border-[#15677A] flex items-center justify-center
                      cursor-pointer h-[34px] bg-[#0F2A31]'>
                            <div>
                              <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}>
                                <MoreVertIcon style={{color:"#FFFFFF70"}}  />
                              </IconButton>
                              <Menu
                                id="long-menu"
                                MenuListProps={{
                                  'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                  style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                    background:"#091D22",
                                    color:'white'
                                  },
                                }}
                              >
                                {options.map((option) => (
                                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                  </MenuItem>
                                ))}
                              </Menu>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className='flex items-center gap-2 bg-[#0F2A31] text-white justify-center w-[134px] h-[34px] border-[1px] border-[#15677A] p-2 rounded-full'><RepeatedArrow /> Run Analysis</button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              <div className='mt-4'>
                <div className='w-full flex items-center gap-3 pl-1'>
                  <img src={dyamiimg} alt="icons" />
                  <h1 className='text-[16px] mt-1'>second+ chat sent by user</h1>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex items-start gap-3 mt-4 w-full'>
                    <img src={chelimg} alt="icon" />
                    <div className='w-full flex flex-col gap-1 mt-[8px]'>
                      <h1 className='text-[#4ED2EF] text-[14px] leading-[16.94px] flex items-center gap-1'>ManukaiGPT <StrokIcons/></h1>
                      <p className='text-[18px] leading-[26px] text-white'>123123123 .....</p>
                      <div className='flex flex-col gap-1 w-full'>
                        <div className='w-full bg-[#0F2A31] p-2 rounded-lg text-white'>
                          <h1 className='text-[18px] leading-[26px]'>123123!</h1>
                          <h1 className='text-[18px] leading-[26px] '>123123123.</h1>
                        </div>

                        <div className='flex items-center gap-2 flex-wrap mt-2'>

                          <button className='flex items-center gap-2 bg-[#0F2A31] 
                              justify-center w-fit h-[34px] border-[1px] text-white border-[#15677A] font-normal text-[14px] p-2 rounded-full'>
                            <LuDownload color='#4ED2EF' />  Save
                          </button>
                          <button className='flex items-center gap-2 bg-[#0F2A31] 
                              justify-center w-fit h-[34px] border-[1px] text-white border-[#15677A] font-normal text-[14px] p-2 rounded-full'>
                            <RiShareForwardLine color='#4ED2EF' />Share
                          </button>
                          <button className='flex items-center gap-2 bg-[#0F2A31] 
                              justify-center w-fit h-[34px] border-[1px] text-white border-[#15677A] font-normal text-[14px] p-2 rounded-full'>
                            <ExalIcons color='#4ED2EF' /> preview Excel
                          </button>
                          <button className='flex items-center gap-2 bg-[#0F2A31] 
                              justify-center w-fit h-[34px] border-[1px] text-white border-[#15677A] font-normal text-[14px] p-2 rounded-full'>
                            <ExalIcons color='#4ED2EF' /> Download Excel
                          </button>
                          <button className='flex items-center gap-2 bg-[#0F2A31] 
                              justify-center w-fit h-[34px] border-[1px] border-[#15677A] font-normal text-[14px] p-2 rounded-full text-white' >
                            <PlusRoundIcon color='#4ED2EF' /> Add to Surveillance Tasks
                          </button>


                        </div>

                      </div>
                    </div>
                  </div> 
                </div>
              </div>

            </section>
            <div className='flex items-center w-full overflow-hidden h-[60px] rounded-full bg-[#0F2A31] border-[1px] border-[#15677A]'>
              <input type="text" placeholder='What’s in your mind?...' className='w-full h-full pl-5 text-white outline-none border-none rounded-full text-[16px] bg-transparent' />
              <div className='w-[48px] h-[48px] flex items-center justify-center rounded-full bg-[#091D22] cursor-pointer mr-3'> <SentMessage /></div>
            </div>
          </div>

          <div className=' w-full xl:w-[300px] 2xl:w-[415px] flex flex-col justify-between  rounded-[16px] bg-[#091d23]'>
            <div className='manikaigraphH overflow-y-auto'>
              <div className='flex flex-col gap-1'>
                <ManukaiGraph />
                <hr className='text-[#0F2A31]' />
                <ManukaiGraph />
                
              </div>
            </div>
            <button className='add-new-graph-button h-[60px] gap-2'><PlusBorderIcon /> Add New Graph</button>
          </div>

        </section>
      </Layout>

    </>
  )
}

export default ManukaiGPT