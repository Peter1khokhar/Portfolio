
// import axios from 'axios'
import React from 'react'
// import { useForm, } from "react-hook-form"

function Contact() {

    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //   } = useForm()
    //   const onSubmit = async(data) =>
    //   {
    //     const userInfo={
    //         name:name.data,
    //         gmail:gmail.data,
    //         phoneno: phoneno.data,
    //         message:message.data
    //     }
    //     try
    //     {
    //        await axios.post("https://getform.io/f/bzyldzda", userInfo);
    //        alert('your message has been sent')
    //     } catch (error){

    //     }
        
    //   }
      

  return (
   <>
   <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mb-4 '>
    <div className='text-center'>
    <h1 className='text-4xl text-orange-600 font-bold font-sans '>Contact</h1>
    <span className='font-sans font-semibold'>Please fill out this small form for contact me </span>
    </div><br />
    <div className='flex flex-col items-center justify-center'>
        <form className='bg-gradient-to-r from-orange-300 to-rose-300 w-96 py-6 px-8 rounded-xl' 
        
        action="https://getform.io/f/bzyldzda" method='POST'>
            <h1 className='text-xl text-center font-semibold mb-4'>Send your Message</h1>

            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'> Full Name</label>
                <input 
                // {...register("name", { required: true })}
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='Full name' type="text" placeholder='Peter Khokhar'/>
                {/* {errors.name && <span>This field is required</span>} */}
            </div>
            
            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'> Email Address</label>
                <input 
                // {...register("gmail", { required: true })}
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='email address' type="text" placeholder='Example@gmail.com'/>
                {/* {errors.gmail && <span>This field is required</span>} */}

            </div>

            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'> Phone no.</label>
                <input 
                // {...register("phone no.", { required: true })}    
                className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='phone no.' type="text" placeholder='Your phone no.'/>
                {/* {errors.phone && <span>This field is required</span>} */}

            </div>

            <div className='flex flex-col mb-4'>
                <label className='block text-gray-700'> Message</label>
                <textarea className='shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='name' name='your query' type="text" placeholder='Type your query'/>
            </div>
            <div className='text-center'>
            <button type='submit' className='bg-blue-800  text-white rounded-xl px-10 py-2 hover:bg-orange-600 duration-300'>Send</button>
            </div>
        </form>
    </div>
   </div>
   <br />
   <hr className='shadow-2xl' />
   </>
    
  )
}

export default Contact