import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import mapview from "../../../assets/img/map-view.png"
import microsoft from "../../../assets/img/microsoft.png"
import { AppContext } from '../../../contexts/authContext';

const CreateAccount = () => {

    const [pwdshow, setPdwShow] = useState(false)
    const {setShowModal} = useContext(AppContext)
    return (
        <>
             <main className=" min-h-screen w-full flex self-center place-content-center place-items-center">
                    <div className=" bg-opacity-10 backdrop-blur space-y-5 relative w-full  max-w-[461px] mx-3 sm:mx-auto  p-4 shadow-xl h-full min-h-[531px] border-[1px]  border-[#4ED2EF80] bg-[#03191E4D] rounded-xl">
                        <div className="mt-2 flex flex-col gap-2">
                            <span className='hover:text-white cursor-pointer ' onClick={()=>setShowModal((prev)=>({...prev,login:true,register:false}))}><i className="bi bi-arrow-left"></i> Back</span>
                            <h3 className="text-white text-xl font-semibold sm:text-[24px]">Continue with your email</h3>
                        </div>
                        <div className='flex flex-col mt-5 gap-3 text-[16px] w-full h-fit'>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="12">Email</label>
                                <input type="text" placeholder='name@email.com' className='outline-none p-2 rounded bg-transparent border-[1.5px] border-[#4ED2EF80] w-full text-[#8C8C8C] text-[16px]' />
                            </div>
                            <div className="flex flex-col gap-1 relative">
                               <span className='flex justify-between gap-4'> <label htmlFor="11">Password</label> <Link className='text-[11px] underline text-[#9F9F9F] absolute bottom-11 right-1 hover:text-[#9F9F9F]'>Forgot password?</Link></span>
                                <input type={`${pwdshow ? 'text' : "password"}`} placeholder='password' className='outline-none p-2 rounded bg-transparent border-[1.5px] border-[#4ED2EF80] w-full text-[#8C8C8C] text-[16px]' />
                                <div className='absolute top-[38px] right-3 cursor-pointer' onClick={() => setPdwShow(!pwdshow)}>
                                    {pwdshow ?  <i className="bi bi-eye-fill"></i>:<i className="bi bi-eye-slash-fill"></i>}
                                </div>
                            </div>

                            <button className='border-[1.5px] mt-4 border-[#4ED2EF80] w-full p-2 rounded bg-[#C8C8C81A]'>Continue</button>

                        </div>
                        <div className='text-[#9F9F9F] mt-5 absolute bottom-4 left-3 text-[13px]'>
                            By joining, you agree to the Manukai <Link className='underline hover:text-white'>Terms of Services</Link> and to occasionally receive emails from us. Please read our <Link className='underline hover:text-white'>Privacy Policy</Link> to learn how we use your personal data
                        </div>
                    </div>
                </main>
        </>
    )
}

export default CreateAccount