import React from 'react'
import Project from '../components/Project'
import { projects } from '../assets/images/images.js'

const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center my-10'>
      <p className='text-3xl font-semibold  sm:text-6xl my-5 sm:mb-13'>Projects</p>
      <div className='grid grid-cols-1 gap-y-20 mx-8  md:grid-cols-3 md:gap-y-20 md:gap-30 md:my-10 md:mx-30'>
        {
          projects.map((item,index)=>(
            <Project key={index} image={item.image} title={item.title} desc={item.desc} link={item.link} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects