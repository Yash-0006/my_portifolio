import React from 'react'
import { images } from '../assets/images/images'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center my-10 px-4 sm:px-8 lg:px-16 gap-8 w-full max-w-6xl mx-auto">
      <img
        className="rounded-lg w-40 sm:w-56 md:w-64 lg:w-80 max-w-full mb-6 lg:mb-0 flex-shrink-0"
        src={images.logoMe}
        alt="Yaswanth Godavarthi"
      />
      <div className="flex-1 p-0 sm:p-4 max-w-2xl">
        <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
          <span className="block text-black text-xl sm:text-3xl font-semibold mb-4 sm:leading-10">
            Hey there! I'm Yaswanth Godavarthi — part coder, part coffee-fueled night owl, and full-time problem solver. When I'm not turning console.log() into a lifestyle, I’m busy translating complex ideas into clean, efficient code (with a sprinkle of sarcasm and a whole lot of semicolons).
          </span>
          <br />
          I specialize in crafting responsive, pixel-perfect frontend experiences using React, Tailwind CSS, and JavaScript — and yes, I still get excited when a Flexbox layout works on the first try.
          <br /><br />
          But I don’t just live in the browser — the backend is where I unleash my inner architect. With Node.js, Express, and my good old friends MongoDB, PostgreSQL, and MySQL, I build robust APIs and databases that actually understand what performance means. Whether it’s structured or flexible data, I’ve got it covered.
          <br /><br />
          Outside of code? I’m the team’s go-to for debugging weird bugs, pitching wild ideas, and keeping things light with terrible (read: excellent) puns. I believe every great project starts with curiosity, teamwork, and maybe a meme or two.
          <br /><br />
          Whether it’s solving a tricky logic puzzle, collaborating on a hackathon, or building apps that actually make life easier — I’m all in. Let’s build something awesome. 🚀
        </p>
      </div>
    </div>
  )
}

export default About