import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <div >
      <Hero />
      <center><hr className='border-gray-300 w-5/6 ' /></center>
      <About />
    </div>
  )
}

export default Home 