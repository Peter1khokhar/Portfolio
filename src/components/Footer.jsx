import React from 'react'
import { FaInstagram, FaFacebook , FaLinkedin , FaTelegram} from "react-icons/fa6";

function Footer() {
  return (
    <>
    
    <footer className='backdrop-blur-md bg-white/30 py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
            <div className='flex flex-col items-center justify-center'>
                <ul className='flex space-x-4'>
                   <li><a href="https://www.instagram.com/peterkhokhar_/"> <FaInstagram size={24}/></a></li>
                   <li> <a href=""><FaFacebook  size={24}/></a></li>
                    <li><a href="https://www.linkedin.com/in/peter-khokhar-4aa988274"><FaLinkedin  size={24}/></a></li>
                   <li> <a href="http://t.me/Shahji1256"><FaTelegram  size={24}/></a></li>
                </ul>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                    <p>&copy; 2024 Peter khokhar Technical studio / All rights Reversed</p>
                </div>
            </div>
        </div>
    </footer>
    </>
    
  )
}

export default Footer