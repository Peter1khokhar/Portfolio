import React from 'react'
import { FaInstagram, FaFacebook , FaLinkedin , FaTelegram} from "react-icons/fa6";

function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 '>
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaInstagram size={24}/>
                    <FaFacebook  size={24}/>
                    <FaLinkedin  size={24}/>
                    <FaTelegram  size={24}/>
                </div>
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