import { Link } from 'react-router-dom'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import mapview from "../../../assets/img/map-view.png"
import microsoft from "../../../assets/img/microsoft.png"
import { GoogleIcon } from '../../Icon';
 


const Login = () => {




    return (
        <div className=' object-cover ' style={{ backgroundImage: `url(${mapview})`, backgroundColor: "rgb(0,0,0,0.85)" }}>
            <main className="min-h-screen h-full  flex self-center place-content-center place-items-center">
                <div className=" bg-opacity-10 backdrop-blur space-y-5 relative w-full  max-w-[461px] mx-3 sm:mx-auto  p-4 shadow-xl h-full min-h-[531px] border-[1px]  border-[#4ED2EF80] bg-[#03191E4D] rounded-xl">
                    <div className="mt-2">
                        <h3 className="text-white text-xl font-semibold sm:text-[24px]">Sign in to your account</h3>
                        <p>Don’t have an account? <Link to="/Register" className='underline hover:text-white'>Join here</Link></p>
                    </div>
                    <div className="space-y-5 mt-5">
                        <button className='w-full p-2 text-[20px]   rounded border-[1px] border-[#4ED2EF80] flex items-center gap-5'>
                            <span className='ml-2'><GoogleIcon /></span>
                            Continue with Google
                        </button>
                    </div>
                    <div className="space-y-5">
                        <button className='w-full p-2 text-[20px]   rounded border-[1px] border-[#4ED2EF80] flex items-center gap-5'>
                            <img src={microsoft} alt="icons" className='w-[25px] ml-3' />
                            Continue with Microsoft
                        </button>
                    </div>
                    <div className='flex flex-row text-center w-full'>
                        <div className='border-b-[1px]  border-[#4ED2EF80] mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit'>OR</div><div className='border-b-[1px]  border-[#4ED2EF80] mb-2.5 ml-2 w-full'></div>
                    </div>
                    <div className="space-y-5">
                        <Link to="/CreateAccount" className='hover:text-white'>
                            <button className='w-full text-[20px] p-2  rounded border-[1px] border-[#4ED2EF80] flex items-center gap-5'>
                                <span className='ml-2'> <EmailOutlinedIcon style={{ fontSize: "30px" }} /></span>
                                Continue with Email
                            </button>
                        </Link>
                    </div>
                    <div className='text-[#9F9F9F] mt-5 absolute bottom-4 left-3 text-[13px]'>
                        By joining, you agree to the Manukai <Link className='underline hover:text-white'>Terms of Services</Link> and to occasionally receive emails from us. Please read our <Link className='underline hover:text-white'>Privacy Policy</Link> to learn how we use your personal data
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login