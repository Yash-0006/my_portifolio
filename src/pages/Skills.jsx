import React from 'react'
import { images } from '../assets/images/images'

const Skills = () => {
  return (
    <div className='flex justify-center items-center h-auto min-h-[85vh] sm:min-h-[100vh] py-10'>
      <div className='flex flex-col justify-center items-center sm:items-start w-5/6 lg:w-7/12 m-4 lg:m-10 px-5 lg:px-20 py-10 rounded-2xl shadow-2xl'>
        <h1 className='text-3xl font-semibold mb-8 sm:text-6xl sm:mb-13 flex items-center justify-center w-full'>Skills</h1>
        
        <div className='flex flex-wrap items-center gap-5 mb-6'>
          <p className='hidden sm:block text-4xl font-semibold'>Frontend : </p>
          <img className='w-8 sm:w-12' src={images.logoHtml} alt='HTML' />
          <img className='w-8 sm:w-12' src={images.logoCss} alt='CSS' />
          <img className='w-8 sm:w-12' src={images.logoReact} alt='React' />
          <img className='w-8 sm:w-12' src={images.logoSass} alt='SASS' />
          <img className='w-8 sm:w-12' src={images.logoTW} alt='TailwindCSS' />
        </div>

        <div className='flex flex-wrap justify-center items-center gap-5 mb-2'>
          <p className='hidden sm:block text-4xl font-semibold'>Backend : </p>
          <img className='w-20 sm:w-28' src={images.logoNode} alt='NodeJS' />
          <img className='w-20 sm:w-28' src={images.logoExpress} alt='ExpressJS' />
          <img className='w-20 sm:w-28' src={images.logoRest} alt='REST API' />
          <img className='w-8 sm:w-12' src={images.logoHibernate} alt='Hibernate' />
          <img className='w-8 sm:w-12' src={images.logoSpring} alt='Spring' />
        </div>

        <div className='flex flex-wrap items-center gap-5 mb-10'>
          <p className='hidden sm:block text-4xl font-semibold'>Database : </p>
          <img className='w-12 sm:w-16' src={images.logoPostges} alt='PostgreSQL' />
          <img className='w-16 sm:w-20' src={images.logoMysql} alt='MySQL' />
          <img className='w-12 sm:w-16' src={images.logoMdb} alt='MongoDB' />
        </div>

        <div className='flex flex-wrap items-center gap-5 mb-6'>
          <p className='hidden sm:block text-4xl font-semibold'>Languages : </p>
          <img className='w-8 sm:w-12' src={images.logoC} alt='C' />
          <img className='w-8 sm:w-12' src={images.logoCpp} alt='C++' />
          <img className='w-8 sm:w-12' src={images.logoJs} alt='JavaScript' />
          <img className='w-8 sm:w-12' src={images.logoJava} alt='Java' />
          <img className='w-8 sm:w-12' src={images.logopy} alt='Python' />
        </div>
      </div>
    </div>
  )
}

export default Skills
