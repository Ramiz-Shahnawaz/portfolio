import React from 'react'

const Contact: React.FC = () => {

  const githuburl = "https://github.com/Ramiz-Shahnawaz"
  const linkedurl = "https://www.linkedin.com/in/ramiz-shahnawaz-848726327/"
  return (
    <div className='flex justify-center lg:items-center h-screen '>
      <div className='w-[80%] md:h-[85%] lg:mt-16 flex items-center justify-center body'>
        <div className='w-full h-4/5 text-white flex flex-col items-center gap-8'>
          <p className='font-bold text-4xl heading'>Get in Touch</p>
          <p className='font-medium text-lg text-center md:text-start'>Let's connect and create something amazing together</p>

          <div className="relative m-2 bg-[#313236] rounded-md overflow-hidden w-max py-3 px-5 flex items-center justify-center">
            <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] pointer-events-none rounded-md"></div>
            <div className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20" fill="#ffffff" className='w-8 h-8'><path fill="#ffffff" d="M18 7.373V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.746 4.558a.5.5 0 0 0 .508 0L18 7.373ZM15.5 4a2.5 2.5 0 0 1 2.485 2.223L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4h11Z" /></svg>
              <p>ramizshahnawaz@gmail.com</p>
            </div>
          </div>
          <p className='font-medium text-lg'>Or Find Me On</p>

          <div className='flex '>
            <div onClick={()=> window.open(githuburl, "_blank")} className="relative m-2 bg-[#313236] rounded-md overflow-hidden w-max py-3 px-5 flex items-center justify-center cursor-pointer">
              <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] pointer-events-none rounded-md"></div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className='invert w-8 h-8'>
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                <p>Github</p>
              </div>
            </div>

            <div onClick={()=> window.open(linkedurl, "_blank")} className="relative m-2 bg-[#313236] rounded-md overflow-hidden w-max py-3 px-5 flex items-center justify-center cursor-pointer">
              <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] pointer-events-none rounded-md"></div>
              <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" className='w-8 h-8'><g fill="none"><rect width="256" height="256" fill="#fff" rx="60" /><rect width="256" height="256" fill="#0A66C2" rx="60" /><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z" /></g></svg>
                <p>Linkedin</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact
