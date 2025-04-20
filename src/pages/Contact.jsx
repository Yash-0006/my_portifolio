import React from 'react'
import { toast } from 'react-toastify';
import { images } from '../assets/images/images';

const Contact = () => {

const handleSubmit = async (e) =>{
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xnnpeweg",{
        method : "POST",
        body : data,
        headers : {
            Accept : "application/json",
        },
    });

    if(response.ok){
        form.reset();
        toast.success("Message Sent!")
    }else{
        toast.error("Oops! Something went wrong.")
    }
}

  return (
    <div className='md:h-[90vh] w-full flex flex-col md:flex-row  justify-center items-center gap-5 md:gap-25 my-10 md:my-2'>
        <div className='flex flex-col gap-3 sm:mb-20'>
        <img className='w-20 sm:w-30' src={images.logoshake} />
        <p className=' text-4xl sm:text-6xl font-semibold'>Let's Chat <br/> Tell me about your <br/> idea.</p>
        <p className='text-lg text-gray-500'>Let's create something together ✨</p>
        </div>
        <div className='md:w-2/5'>
            <form className='flex flex-col gap-5 p-10 shadow-2xl' onSubmit={handleSubmit}>
            <p className='text-3xl sm:text-5xl my-3'>Send me a message</p>
            <input className="bg-gray-100 h-10 p-2 border-1 border-gray-300 rounded-lg" type="text" name="name" placeholder="Your Name" required />
            <input className='bg-gray-100 h-10 p-2 border-1 border-gray-300 rounded-lg' type="email" name="email" placeholder="Your Email" required />
            <textarea className='bg-gray-100 h-40 p-2 border-1 border-gray-300 rounded-lgs' name="message" placeholder="Your Message" required></textarea>
            <button className='bg-black rounded-full text-sm sm:text-base font-semibold text-white py-2 w-25 sm:w-30 text-center transition-all hover:bg-gray-200 hover:text-black' type="submit">Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact