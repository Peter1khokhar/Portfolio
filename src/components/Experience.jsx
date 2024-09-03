import React from 'react'
import html from '/src/images/html.jpg'
import tailwindlogo from '/src/images/tailwindlogo.png'
import database from '/src/images/database.avif'
import figma from '/src/images/figma.png'
import javascript from '/src/images/javascript.png'

function Experience(){ 
        const cardItem=[

            {
                id : 1,
                logo: html,
                name:'HTML'
            },
            {
                id : 2,
                logo: tailwindlogo,
                name:'Tailwind CSS'
            },   
            {
                id : 3,
                logo: javascript,
                name:'Javascript'
            },    {
                id : 4,
                logo: database,
                name:'Database'
            },    {
                id : 5,
                logo: figma,
                name:'Figma'
            },
            
        ]
        
        return (
            <>
    <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 mt-14 md:px-20'>

        <div className='text-center'>
        <h1 className='text-4xl text-orange-600 font-sans font-bold mt-6'>Experience</h1>
        <p className=' font-semibold font-sans'>I have more than 1 year experience in these technologis 
        </p>
        </div>
            <br />
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
            {/* <div> */}
                {
                    cardItem.map(({id, logo, name})=> (
                        <div className='flex flex-col items-center justify-center border-[2px] rounded-full shadow-md cursor-pointer hover:scale-110 duration-200 md:h-[200px] md:w-[200px]'
                         key={id}>
                            <img src={logo} className="w-[150px]  rounded-full" alt="me" />
                            <div className='px-2  font-sans text-xl mb-2'>{name}</div>

                        </div>
                    ))
                }

            {/* </div> */}
        </div>
        <br />
        
       
    </div>
    <hr className='shadow-2xl ' />

    </>
  )
}

export default Experience