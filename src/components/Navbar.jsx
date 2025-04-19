import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {images} from "../assets/images/images.js"


const Navbar = () => {

    const [visible, Setvisible] = useState(false);

  return (
    <div className='flex justify-between px-8 sm:px-20 py-1 shadow-lg'>

        <NavLink to='/' >
            <img className='w-30 sm:mx-4' src={images.logo} alt='' />
        </NavLink>

        <div className=' hidden md:flex justify-between items-center text-2xl font-semibold'>   
            <NavLink to='/' className='px-5 flex flex-col items-center hover:text-gray-400 text-black'>
                <p>Home</p>
            </NavLink>
            <NavLink to='https://drive.google.com/file/d/1YDDjaJfhpQ2JbOP570IHXmfOu05kKvUG/view?usp=sharing' className='px-5 flex flex-col items-center hover:text-gray-400 text-black'>
                <p>Resume</p>
            </NavLink>
            <NavLink to='/skills' className='px-5 flex flex-col items-center hover:text-gray-400 text-black'>
                <p>Skills</p>
            </NavLink>
            <NavLink to='/projects'  className='px-5 flex flex-col items-center hover:text-gray-400 text-black'>
                <p>Projects</p>
            </NavLink>
        </div>

        <div className='flex gap-4 sm:gap-6 justify-between items-center'>
            
            <a href='mailto:yaswanthgodavarthi0006@gmail.com'><img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoMail} alt='' /></a>
            <NavLink to='https://www.linkedin.com/in/yaswanth-godavarthi/' >
                <img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoIn} alt='' />
            </NavLink>
            <NavLink to='https://github.com/Yash-0006' >
            <img className='w-7.5 transition-transform duration-300 ease-in-out hover:scale-110' src={images.logoGit} alt='' />
            </NavLink>
            <img onClick={()=>Setvisible(true)} className='w-7.5 md:hidden' src={images.logoMenu} alt='' />
        </div>

        <div className={`absolute z-100 top-0 right-0 bottom-0 bg-white transition-all overflow-hidden ${visible ? 'w-full' : 'w-0'}`} >
        <img onClick={()=>Setvisible(false)} className='w-7.5 my-5 mx-4' src={images.logoClose} alt='' />
            <div onClick={()=>Setvisible(false)} className='flex flex-col gap-10 justify-center items-center text-3xl font-semibold sm:hidden'>
                <NavLink to='/' onClick={()=>Setvisible(false)} >Home</NavLink>
                <NavLink to='https://drive.google.com/file/d/1YDDjaJfhpQ2JbOP570IHXmfOu05kKvUG/view?usp=sharing' onClick={()=>Setvisible(false)} >Resume</NavLink>
                <NavLink to='/skills' onClick={()=>Setvisible(false)} >Skills</NavLink>
                <NavLink to='/projects' onClick={()=>Setvisible(false)} >Projects</NavLink>
            </div>
        </div>

    </div>
  )
}

export default Navbar