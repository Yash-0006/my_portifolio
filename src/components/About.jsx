import React from 'react'
import { images } from '../assets/images/images'

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center my-10  lg:h-[100vh] gap-5 sm:gap-20 sm:mx-30'>
    <img className=' m-5 sm:m-0 w-90 sm:w-102' src={images.logoMe} />
        <div className='p-8 sm:p-0 sm:w-4/6'>
            <p className='text-xl text-gray-500 font-medium'><span className='text-black text-xl sm:text-3xl font-semibold m-1 sm:leading-10'>Hey there! I'm Yaswanth Godavarthi — part coder, part coffee-fueled night owl, and full-time problem solver. When I'm not turning console.log() into a lifestyle, I’m busy translating complex ideas into clean, efficient code (with a sprinkle of sarcasm and a whole lot of semicolons). </span><br />

<br />I specialize in crafting responsive, pixel-perfect frontend experiences using React, Tailwind CSS, and JavaScript — and yes, I still get excited when a Flexbox layout works on the first try. <br />

<br />But I don’t just live in the browser — the backend is where I unleash my inner architect. With Node.js, Express, and my good old friends MongoDB, PostgreSQL, and MySQL, I build robust APIs and databases that actually understand what performance means. Whether it’s structured or flexible data, I’ve got it covered. <br />

<br />Outside of code? I’m the team’s go-to for debugging weird bugs, pitching wild ideas, and keeping things light with terrible (read: excellent) puns. I believe every great project starts with curiosity, teamwork, and maybe a meme or two. <br/>

<br />Whether it’s solving a tricky logic puzzle, collaborating on a hackathon, or building apps that actually make life easier — I’m all in. Let’s build something awesome. 🚀</p>
        </div>
    </div>
  )
}

export default About