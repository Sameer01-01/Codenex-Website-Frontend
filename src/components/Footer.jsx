import f1 from '../assets/f1.png'
import f2 from '../assets/f2.png'
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";


const Footer = () => {
    return (
        <>
            <hr />
            <footer className="bg-black flex">
                <div>

                    <div className="pt-6 pl-5">
                        <img src={f1} alt="" className='absolute w-[70px] ' />
                        <p className='text-white text-xl mt-3 w-[300px] ml-20'>Codenex is one of the most active clubs in whole SRM!! </p>
                        <img src={f2} alt="" className='w-[70px] absolute ml-[375px] -mt-7 ' />
                    </div>
                    <div className='flex gap-4 pt-20 pl-24 pb-10'>
                        <div className='border-2 rounded-full p-3 hover:border-cyan-300 flex items-center justify-center transition-colors duration-200'>
                            <GrInstagram size={20} className='text-white hover:text-cyan-300' />
                        </div>
                        <div className='border-2 rounded-full p-3 hover:border-cyan-300 flex items-center justify-center transition-colors duration-200'>
                            <FaTwitter size={20} className='text-white hover:text-cyan-300' />
                        </div>
                        <div className='border-2 rounded-full p-3 hover:border-cyan-300 flex items-center justify-center transition-colors duration-200'>
                            <FaLinkedinIn size={20} className='text-white hover:text-cyan-300' />
                        </div>
                        <div className='border-2 rounded-full p-3 hover:border-cyan-300 flex items-center justify-center transition-colors duration-200'>
                            <IoLogoWhatsapp size={20} className='text-white hover:text-cyan-300' />
                        </div>
                    </div>


                </div>

                <div className=' pt-28 '>
                    <div >
                        <p className='text-white ml-[950px]'>SRMIST KTR</p>
                        <p className='text-white mt-3 ml-[855px]'>codenex.club@srmist.com</p>
                        <p className='text-white mt-3 ml-[918px]'>+91-0000000000</p>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer