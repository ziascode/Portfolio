import heroBack from '../assets/back1.jpg';
import { XIcon, MinusCircleIcon } from '@heroicons/react/solid';
import { FaLinkedin, FaLinkedinIn, FaInstagram, FaPhone} from 'react-icons/fa';
import { MdEmail } from "react-icons/md";

function Banner() {
    return (
        <div className='relative'>
            <div className='bg-cover bg-center h-screen' style={{ 
                    backgroundImage: `url(${heroBack})` }}>
            </div>
            <div className='absolute top-40 w-full text-center'>
                <h1 className='font-bold text-6xl md:text-7xl'>Hi, I'm Zia</h1>
                <h1 className='font-bold text-[27px] md:text-3xl px-30 pt-3'>A Front-End Developer</h1>
                <a href="#projects">
                    <button className='my-[30vh] py-4 px-7 text-lg bg-indigo-100 shadow-lg shadow-zinc-800 hover:shadow-zinc-800 hover:shadow-2xl hover:scale-105 transition transform duration-150 ease-out rounded-xl font-semibold'>Explore Portfolio</button>
                </a>
                {/* linkedin, phone, email, ig */}
                <div className=' iconz absolute hidden bottom-16 xl:-bottom-10 w-full icons text-md justify-center pb-10 space-x-10'>
                    <a href="https://www.linkedin.com/in/zia-y/" target='_blank'><div className='border-indigo-300 border-opacity-100 border-2 text-indigo-300  rounded-full p-2 cursor-pointer'><FaLinkedinIn/></div></a>
                    <a href="mailto:ZIAYOUSAF94@GMAIL.COM"><div className='border-indigo-300 border-opacity-100 border-2 text-indigo-300  rounded-full p-2 cursor-pointer'><MdEmail/></div></a>
                    <a href=""><div className='border-indigo-300 border-opacity-100 border-2 text-indigo-300  rounded-full p-2 cursor-pointer'><FaInstagram/></div></a>
                    <a href=""><div className='border-indigo-300 border-opacity-100 border-2 text-indigo-300  rounded-full p-2 cursor-pointer'><FaPhone/></div></a>
                    
                </div>
            </div>
        </div>
    );
  }
  
  export default Banner;
  