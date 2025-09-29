import React from 'react'
import Navbar from '../Components/Navbar'
import ProfileCard from '../block/Components/ProfileCard/ProfileCard';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';


const Home: React.FC = () => {
  return (
    <div className='bg-background h-screen overflow-x-hidden'>
      <Navbar />
      <div id="home" className='flex flex-col lg:flex-row items-center justify-start lg:justify-center h-screen w-screen gap-6 lg:gap-12'>
        <div className='text-white hidden lg:flex flex-col gap-3 w-1/2 mt-5 body'>
          <h3 className='font-semibold text-3xl'>Hello My Name Is</h3>
          <h1 className='font-black text-7xl text-blue-600'>Ramiz Shahnawaz</h1>
          <p className='font-semibold text-3xl'>A Full Stack Developer</p>
          <p className='font-normal text-lg'> - A passionate Software Engineer crafting robust and scalable solutions with the MERN stack.
            I transform innovative ideas from Figma designs into fully functional, full-stack applications
          </p>
        </div>

        <div className='mt-28 lg:mt-8'>
          <ProfileCard
              name="Ramiz Shahnawaz"
              title="Software Engineer"
              handle="Ramiz Shahnawaz"
              status="Online"
              contactText="Contact Me"
              avatarUrl="home.png" 
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={true}
            />
        </div>

        <div className='text-white flex flex-col items-center gap-3 md:gap-5 w-full mt-2 lg:hidden'>
          <h3 className='font-semibold text-2xl'>Hello My Name Is</h3>
          <h1 className='font-bold text-6xl text-blue-600 text-center'>Ramiz Shahnawaz</h1>
          <p className='font-semibold text-2xl'>A Full Stack Developer</p>
           <p className='font-normal text-lg hidden md:block w-4/5'> - A passionate Software Engineer crafting robust and scalable solutions with the MERN stack.
            I transform innovative ideas from Figma designs into fully functional, full-stack applications
          </p>
        </div>
      </div>
      <div id="about">
        <AboutMe/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  )
}

export default Home