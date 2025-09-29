import React from 'react'
import Lanyard from '../block/Components/Lanyard/Lanyard'

const AboutMe: React.FC = () => {
  return ( 
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full lg:w-[80%] h-full lg:h-[85%] flex mt-16 md:mt-32 lg:mt-16'>
        <div className='w-full h-full bg-background relative'>
          {/* HEADING */}
          <div>
            <p className='heading text-white font-extrabold text-4xl text-center mt-5'>About Me</p>
          </div>
          {/* CARD */}
          <div className='absolute w-full right-1/3 -top-24 hidden lg:flex justify-start items-start'>
            <Lanyard />
          </div>
          {/* DESCRIPTION */}
          <div className='absolute lg:left-[30%] lg:top-20 body'>
            <div className='text-white w-[95%] md:w-[90%] lg:w-[95%]  mt-5 lg:mt-0 ml-3 md:ml-8 lg:ml-0 md:text-lg lg:text-base'>
              <p>Hi, I'm a Software Engineer and MERN Stack Developer with a passion for building the entire picture.
                My journey isn't just about writing code, it's about solving puzzles. I thrive on the entire process of creation, from designing intuitive user interfaces in Figma to engineering the complex architecture that brings them to life as full scale applications. <br />
                My core drive is a deep curiosity and a desire to tackle new challenges head on. I believe that the best learning happens outside your comfort zone, and I'm constantly seeking out projects that push me to grow my skills and innovate. I'm not just looking for opportunity, I'm seeking a platform for continuous growth and creative problem solving.
                I'm excited by the opportunity to bring my unique blend of design sensibility and development rigor to a passionate team. Let's connect and build the future, one line of code at a time.</p>
            </div>
            
            <div className='absolute flex justify-center md:justify-start gap-8 w-full h-56 top-[28rem] md:top-[22rem] lg:top-[15rem] md:ml-8 lg:ml-0'>
              <div className="relative m-2 bg-[#313236] rounded-md overflow-hidden lg:w-1/2 py-3">
                <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] pointer-events-none rounded-md"></div>
                <div className='text-white flex flex-col my-2 mx-4'>
                  <p className=' text-center mt-2 font-bold text-xl heading'>Education</p>
                  <p className='font-bold text-lg mt-3'>Hamdard University</p>
                  <p>Bachelor of Science in Software Engineering</p>
                  <p>2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe