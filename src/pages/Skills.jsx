import React from 'react'
import { images } from '../assets/images/images'

const Skills = () => {
  return (
    <div className='flex justify-center items-center sm:h-[100vh]'>
      <div className='flex flex-col justify-center items-center sm:items-start w-5/6 sm:w-1/2 m-10 px-5 sm:px-20 py-10 rounded-2xl shadow-2xl'>
        <h1 className='text-3xl font-semibold mb-8 sm:text-6xl sm:font-extrabold sm:mb-13 flex items-center justify-center w-full'>SKILLS</h1>
        <div className='flex  gap-5 mb-6'>
          <p className='hidden sm:block text-4xl font-semibold'>Frontend : </p>
          <img className='w-8 sm:w-12' src={images.logoHtml} alt='' />
          <img className='w-8 sm:w-12' src={images.logoCss} alt='' />
          <img className='w-8 sm:w-12' src={images.logoReact} alt='' />
          <img className='w-8 sm:w-12' src={images.logoSass} alt='' />
          <img className='w-8 sm:w-12' src={images.logoTW} alt='' />
        </div>
        <div className='flex justify-center items-center gap-5 mb-2'>
          <p className='hidden sm:block  text-4xl font-semibold'>Backend : </p>
          <img className='w-20 sm:w-28' src={images.logoNode} alt='' />
          <img className='w-20 sm:w-28' src={images.logoExpress} alt='' />
          <img className='w-20 sm:w-28' src={images.logoRest} alt='' />
        </div>
        <div className='flex justify-center items-center gap-5 mb-10'>
          <p className=' hidden sm:block text-4xl font-semibold'>Database : </p>
          <img className='w-11 sm:w-15' src={images.logoPostges} alt='' />
          <img className='w-15 sm:w-22' src={images.logoMysql} alt='' />
          <img className='w-11 sm:w-16' src={images.logoMdb} alt='' />
        </div>
        <div className='flex justify-center items-center gap-5 mb-6'>
          <p className='hidden sm:block text-4xl font-semibold'>Languages : </p>
          <img className='w-8 sm:w-12' src={images.logoC} alt='' />
          <img className='w-8 sm:w-12' src={images.logoCpp} alt='' />
          <img className='w-8 sm:w-12' src={images.logoJs} alt='' />
          <img className='w-8 sm:w-12' src={images.logoJava} alt='' />
          <img className='w-8 sm:w-12' src={images.logopy} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Skills