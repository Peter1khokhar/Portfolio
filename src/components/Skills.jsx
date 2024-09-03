import React from 'react'

function About() {
    


  return (
    <>
    <div name="Skills" className='max-w-screen-2xl container mx-auto mt-14 px-6 md:px-20  '>

        <div className='text-center'>
        <h1 className='text-3xl font-bold mt-6 text-orange-600 font-sans'>My Skills</h1>
        <p className='font-semibold font-sans'>dyaan se dekh bhai .</p>
        
        </div>
        <br />
        <div className='grid grid-cols-1 md:grid-cols-2 text-center lg:grid-cols-3 gap-7 gap-x-10'>

        <div className='bg-orange-100   p-8  rounded-3xl'>
        <h1 className='text-orange-600 font-sans font-semibold text-center text-2xl'>Web Designing </h1>
        <p className='text-justify font-sans '>I will provide you with not only fluid and responsive websites but also optimized on. Our Skilled developers will create a website which you will fall in love with!
        </p>
        </div>

        <div className='bg-orange-100 p-8 rounded-3xl'>
        <h1 className='text-orange-600 font-sans font-semibold text-center text-2xl'>UX/UI Design</h1>
        <p className='text-justify font-sans'>we offer top-notch UI and UX design services that are meticulously crafted to provide an exceptional user experience and visually stunning interfaces.</p>
        </div>
        
        <div className='bg-orange-100  p-8  rounded-3xl'>
        <h1 className='text-orange-600 font-semibold font-sans text-center text-2xl'>E-Commerce Websites</h1>
        <p className='text-justify font-sans '>we excel in delivering comprehensive e-commerce website services designed to transform your online business.</p>
        </div>

        <div className='bg-orange-100 p-8  rounded-3xl'>
        <h1 className='text-orange-600 font-semibold font-sans text-center text-2xl'>Digital Marketing</h1><br />
        <p className='text-justify font-sans '>we specialize in providing a full suite of digital marketing services designed to elevate your brand’s online presence and drive measurable results..</p>
        </div>

        <div className='bg-orange-100 p-8  rounded-3xl'>
        <h1 className='text-orange-600 font-semibold font-sans text-center text-2xl'>Development Training</h1>
        <p className='text-justify font-sans'>If you are Looking for Making your Career in Web Development Industry you are on right place. the Premium Web Development Training institute in Batala. </p>
        </div>
          
        </div>
    </div>
    <br />
    {/* <hr className='shadow-md ' /> */}
    </>
  )
}

export default About