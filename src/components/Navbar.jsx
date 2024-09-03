import React, { useState } from 'react'
import pic from "/src/images/peter khokhar.png"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';



function Navbar() {
    const [menu,setMenu]=useState(false)
    const navItems=[
        {
            id:1,
            text:'Home'
        },
        {
            id:2,
            text:'Skills'
        },
        {
            id:3,
            text:'My Projects'
        },
        {
            id:4,
            text:'Experience'
        },
        {
            id:5,
            text:'Contact'
        },
    ]
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md bg-white fixed'>
        <div className='flex justify-between items-center h-16 '>
            <div className='flex space-x-2'>
                <img src={pic} className='h-14 w-14' alt="me" />
                <h1 className='font-bold text-xl font-sans cursor-pointer'>Peter Khokhar
                <p className='text-sm font-sans'>Web Designer</p>
                </h1>
            </div>

            {/* dekstop navbar*/}

            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                        navItems.map(({id,text}) =>(
                            <li className='hover:scale-105 font-sans hover:bg-orange-600 hover:text-white p-3 rounded-2xl cursor-pointer duration-200' key={id}>
                                <Link to={text} 
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass='active'
                                >{text}</Link></li>
                        ))
                    }
                    {/* <li className='hover:scale-105 cursor-pointer duration-200'>Home</li>
                    <li className='hover:scale-105 cursor-pointer duration-200'>About</li>
                    <li className='hover:scale-105 cursor-pointer duration-200'>My Projects</li>
                    <li className='hover:scale-105 cursor-pointer duration-200'>Experience</li>
                    <li className='hover:scale-105 cursor-pointer duration-200'>Contact us </li> */}
                </ul>

                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                    {menu?< RxCross1 size={24}/>: <RxHamburgerMenu size={24} />}
            
                </div>

            </div>
        </div>

{/* mobile navbar*/}
{
    menu &&(

        <div className=' bg-white flex flex-col items-center justify-center h-52 '>
                 <ul className='md:hidden space-y-4'>
                 {
                        navItems.map(({id,text}) =>(
                            <li className='hover:scale-105 cursor-pointer duration-200 font-sans' key={id}>
                            <Link to={text} 
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass='active'
                            >{text}</Link></li>
                        ))
                    }
                </ul>
        </div>
    )
}

    </div>
    </>
  )
}

export default Navbar