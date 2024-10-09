import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { FaReact } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { ReactTyped } from "react-typed";
import pic from "/src/images/png.png"

import { motion } from 'framer-motion';







function Home() {
  return (
    <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
        <div className='flex flex-col md:flex-row'>

{/* left side  */}
            <div className=' md:w-1/2 mt-16 md:mt-40 order-2 md:order-1 '>
                <span className=' text-xl md:text-3xl font-sans'>Welcome to my Feed</span>
                <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1 className='font-bold font-sans '>Hello, I'm a </h1>
                {/* <span className='text-red-700 font-bold'>Developer</span> */}
                <ReactTyped strings={["Web Designer" ,"Graphic Designer", "Coder"]} className='text-orange-600 font-extrabold font-sans ' loop={true} backSpeed={50} typeSpeed={40} />

                </div>
                <p className='text-md md:text-md font-sans text-justify mt-4'>I Design, develop, and transform your visions into efficient result-driven digital solutions. I create static and dynamic websites with best-proven technologies. Businesses today have truly realized the power of digital marketing. I offering the most competitive solutions in the sphere of digital marketing, website designing, web development, and graphic designing.</p>
                <br />

                {/* social media icons */}
                <div className='flex flex-col md:flex-row items-center justify-between mt-5 space-y-4 md:space-y-0'>

                <div className='space-y-2 bg-orange-600 shadow-lg rounded-3xl md:rounded-bl-[80px] p-8'> 
                    <h1 className='font-bold text-white text-center'> Availabe on </h1>
                    <ul className='flex space-x-5'>
                        <li><a href="https://www.instagram.com/peterkhokhar_/"><FaInstagram className='text-2xl text-white hover:scale-110 duration-200 curser-pointer' /></a></li>
                        <li><FaFacebook className='text-2xl text-white hover:scale-110 duration-200 curser-pointer' /></li>
                        <li><a href="https://www.linkedin.com/in/peter-khokhar-4aa988274"><FaLinkedin className='text-2xl text-white hover:scale-110 duration-200 curser-pointer'/></a></li>
                        <li><a href="http://t.me/Shahji1256"><FaTelegram className='text-2xl text-white hover:scale-110 duration-200 curser-pointer'/></a></li>
                    </ul>

                 </div>

                 <div className='space-y-2 bg-orange-600 shadow-lg rounded-3xl md:rounded-ee-[80px]  p-8 md:p-6 '> 
                    <h1 className='font-bold text-white text-center'> Currently Working on </h1>
                    <div className='flex space-x-5 '>
                        <FaReact className='text-2xl text-white md:text-3xl hover:scale-110 duration-200 rounded-full  curser-pointer ' />
                        <FaNode className='text-2xl text-white md:text-4xl hover:scale-110 duration-200 rounded-full  curser-pointer ' />
                        <SiExpress className='text-2xl text-white md:text-3xl hover:scale-110 duration-200 rounded-full  curser-pointer '/>
                        <SiMongodb className='text-2xl text-white md:text-3xl hover:scale-110 duration-200 rounded-full  curser-pointer '/>
                    </div>

                 </div>

                </div>
            </div>

{/* right side  */}

            <div className='md:w-1/2 mt-16 md:ml-48 md:mt-20 order-1'>
            <div>

           
            <img src={pic} alt="me" className='rounded-e-full  md:w-[450px] md:h-[450px]' />
            </div>
            </div>
        </div>
    </div>
    <br />
    <hr className='shadow-xl  '/>
    </>
  )
}

export default Home