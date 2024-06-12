import { Link } from 'react-router-dom'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import mapview from "../../../assets/img/map-view.png"
import microsoft from "../../../assets/img/microsoft.png"

export const GoogleIcon = () => {
    return (
        <>
            <svg className="w-7 h-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_17_40)">
                    <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                    <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                    <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                    <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                </g>
                <defs>
                    <clipPath id="clip0_17_40">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </svg></>
    )
}

const Register = () => {

 

    return (
        <>
                <div className=' object-cover min-h-screen'style={{backgroundImage:`url(${mapview})`,backgroundColor:"rgb(0,0,0,0.85)"}}>
            <main className="min-h-screen flex self-center place-content-center place-items-center">
                <div className=" bg-opacity-10 backdrop-blur space-y-5 relative w-full  max-w-[461px] mx-3 sm:mx-auto  p-4 shadow-xl h-full min-h-[531px] border-[1px]  border-[#4ED2EF80] bg-[#03191E4D] rounded-xl">
                    <div className="mt-2">
                        <h3 className="text-white text-xl font-semibold sm:text-[24px]">Sign in to your account</h3>
                        <p>Don’t have an account? <Link to="/Login" className='underline hover:text-white'>Sign in</Link></p>
                    </div> 
                    <div  className="space-y-5 mt-5">
                        <button className='w-full p-2 text-[20px]   rounded border-[1px] border-[#4ED2EF80] flex items-center gap-5'>
                        <span className='ml-2'><GoogleIcon /></span>
                            Continue with Google
                            </button>
                    </div>
                    <div  className="space-y-5">
                        <button className='w-full p-2 text-[20px]   rounded border-[1px] border-[#4ED2EF80] flex items-center gap-5'>
                        <img src={microsoft} alt="icons" className='w-[25px] ml-3'/>
                            Continue with Microsoft
                            </button>
                    </div>
                    <div className='flex flex-row text-center w-full'>
                        <div className='border-b-[1px]  border-[#4ED2EF80] mb-2.5 mr-2 w-full'></div><div className='text-sm font-bold w-fit'>OR</div><div className='border-b-[1px]  border-[#4ED2EF80] mb-2.5 ml-2 w-full'></div>
                    </div>
                    <div  className="space-y-5">
                      <Link to="/CreateAccount" className='hover:text-white'>
                      <button className='w-full text-[20px] p-2  rounded border-[1px] border-[#4ED2EF80] flex items-center gap-5'>
                         <span className='ml-2'> <EmailOutlinedIcon style={{fontSize:"30px"}}/></span>
                            Continue with Email
                            </button>
                            </Link>
                    </div>
                  <div className='text-[#9F9F9F] mt-5 absolute bottom-4 left-3 '>
                  By joining, you agree to the Manukai <Link className='underline hover:text-white'>Terms of Services</Link> and to occasionally receive emails from us. Please read our <Link className='underline hover:text-white'>Privacy Policy</Link> to learn how we use your personal data
                  </div>
                </div>
            </main>
        </div>
        </>
    )
}

export default Register