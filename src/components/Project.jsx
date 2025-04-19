import React from 'react'

const Project = ({image,title,desc,link}) => {
  return (
    <div className='flex flex-col justify-center rounded-xl shadow-xl items-center gap-2'>
        <a href={link}><img className='w-full p-2' src={image} alt=''/></a>
        <div className=' w-full h-full flex flex-col gap-2  p-4'>
            <p className='text-2xl md:text-4xl  font-semibold'>{title}</p>
            <p className='text-base'>{desc}</p>
        </div>
    </div>
  )
}

export default Project