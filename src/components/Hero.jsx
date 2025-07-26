import React from 'react'
import { images } from '../assets/images/images'

const Hero = () => {
  return (
    <div className='relative flex items-center justify-center h-[90vh] max-w-9xl'>

        <div className='mb-40 mr-25 md:mr-90 md:mt-35 lg:mt-25 lg:mr-150 z-1'>
            <div className='flex justify-between items-center bg-neutral-800 text-white text-sm font-light w-63 md:w-100 lg:w-150'>
                <div className='flex gap-1 text-[10px] lg:text-base sm:gap-2 justify-center items-center mx-2'>
                    <img className='w-2 h-2 my-1 lg:w-4 lg:h-4 lg:my-1.5' src={images.logoVs} />
                    <p>File </p>
                    <p>Edit </p>   
                    <p>View </p>
                    <p>Run </p>
                </div>
                <div className='flex gap-2 justify-center items-center text-[10px] sm:text-base mx-2'>
                    <p>-</p>
                    <p>&#x25A1;</p>
                    <p>x</p>
                </div>
            </div>
            <div className='bg-neutral-900 w-63 h-40 md:w-100 md:h-60  lg:w-150 lg:h-93'></div>
        </div>
        <div className='absolute z-10 flex flex-col gap-10 md:ml-15 lg:ml-30  items-start sm:flex-row justify-center sm:items-center'>
            <div className='leading-[0.9]' >
                <p className='text-xl lg:text-3xl font-extrabold text-neutral-500'>I'm</p>
                <p className='stroke-text font-extrabold text-white text-6xl md:text-[6rem] lg:text-[10rem]' >Yaswanth</p>
                <p className='stroke-text font-extrabold text-white text-6xl md:text-[6rem] lg:text-[10rem]' >Godavarthi </p>
            </div>
            <div className='font-light text-2xl  lg:text-5xl text-green-900 mb-20 mx-2 md:mr-10 lg:mx-10 italic'>
                <p>//FullStack Dev</p>
            </div>
        </div>
    </div>
  )
}

export default Hero