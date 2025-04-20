import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../assets/images/images'

const Footer = () => {
  return (
    <div className='flex px-10 justify-between sm:px-10 gap-10 sm:gap-20 md:gap-40 lg:gap-100 lg:px-20 py-10 border-t border-gray-300 shadow-2xl w-full bg-white'>
      <div className='flex flex-col gap-2 sm:gap-5 '>
        <h1 className='font-extrabold text-2xl sm:text-4xl'>Let's Talk</h1>
        <p className='font-medium text-lg sm:text-xl text-gray-500'>Whether you have an idea, a project, or just want to say hi I’m always open to a conversation. Feel free to reach out and let's create something amazing together!</p>
        <Link to='/contact' className='bg-black rounded-full text-sm sm:text-base font-semibold text-white py-2 w-25 sm:w-30 text-center transition-all hover:bg-gray-200 hover:text-black'>
          Reach Out
        </Link> 
      </div>
      <div className='sm:flex sm:gap-10'>
        <div className='flex flex-col gap-4 sm:hidden w-7.5'>
            <a href='mailto:yaswanthgodavarthi0006@gmail.com'><img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoMail} alt='' /></a>
            <Link to='https://www.linkedin.com/in/yaswanth-godavarthi/' >
                <img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoIn} alt='' />
            </Link>
            <Link to='https://github.com/Yash-0006' >
                <img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoGit} alt='' />
            </Link>
        </div>
        <div className='hidden sm:flex flex-col gap-4  text-black text-base sm:text-xl font-semibold'>
          <p>Email</p>
          <p>Phone</p>
          <p>Address</p>
        </div>
        <div className='hidden sm:flex flex-col gap-4 text-base sm:text-xl font-semibold text-gray-500 text-wrap'>
          <p > yaswanthgodavarthi0006@gmail.com</p>
          <p > +91 7032960122</p>
          <p > F1, Meduri Paradise, Rajahmundry, East Godavari Dist, AP, 533103. </p>

          <div className='flex gap-4'>
              <a href='mailto:yaswanthgodavarthi0006@gmail.com'><img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoMail} alt='' /></a>
            <Link to='https://www.linkedin.com/in/yaswanth-godavarthi/' >
                <img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoIn} alt='' />
            </Link>
            <Link to='https://github.com/Yash-0006/' >
                <img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoGit} alt='' />
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer