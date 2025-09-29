import React, { useState, useEffect } from 'react'

const Navbar: React.FC = () => {
    const [expand, setexpand] = useState<boolean>(false)
    const [activeSection, setActiveSection] = useState<string>('home')
    const resume = './resume/Resume.pdf'

     useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]"); 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } 
    );

     if (activeSection) {
    window.history.replaceState(null, '', `#${activeSection}`);
  }

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [activeSection]);


    return (
        <div className='text-white relative'>
            {/* ------ Navbar ------ */}
            <div className='hidden lg:flex fixed w-[99%] justify-between bg-black/20 backdrop-blur-lg border-b border-black/20 p-4 items-center m-0 z-50'>
                <div>
                    <p className='font-custom text-xl'> &lt; Ramiz Shahnawaz /&gt;</p>
                </div>

                <div className='hidden md:flex gap-9 heading'>
                    <a href="#home" className="group relative cursor-pointer">
                        <p> Home </p>
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === 'home' ? 'w-full' : 'w-0'}`} />
                    </a>
                    <a href="#about" className="group relative cursor-pointer">
                        <p> About Me </p>
                         <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'w-0'}`} />
                    </a>
                    <a href="#skills" className="group relative cursor-pointer">
                        <p> Skills </p>
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === 'skills' ? 'w-full' : 'w-0'}`} />
                    </a>
                    <a href="#projects" className="group relative cursor-pointer">
                        <p> Projects </p>
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === 'projects' ? 'w-full' : 'w-0'}`} />
                    </a>
                    <a href="#contact" className="group relative cursor-pointer">
                        <p> Contact </p>
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${activeSection === 'contact' ? 'w-full' : 'w-0'}`} />
                    </a>
                </div>

                <a href={resume} target="_blank" rel="noopener noreferrer" aria-label='view resume'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className='invert w-10 h-10 cursor-pointer'>
                        <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,21h-8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1 C19,20.552,18.552,21,18,21z M20,17H10c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1C21,16.552,20.552,17,20,17 z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                    </svg>
                </a>
            </div>

            {/* ------ Mobile View ------ */}
            <div className='lg:hidden fixed z-10 w-full'>
                <div className='absolute top-2 left-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='invert w-7 md:w-9 h-7 md:h-9' onClick={() => setexpand(true)}>
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>
                <div className='absolute right-2 top-2'>
                    <a href={resume} target="_blank" rel="noopener noreferrer" aria-label='view resume'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className='invert w-8 md:w-10 h-8 md:h-10'>
                        <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,21h-8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1 C19,20.552,18.552,21,18,21z M20,17H10c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1C21,16.552,20.552,17,20,17 z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                    </svg>
                    </a>
                </div>
            </div>

            {/* ------ Sidebar ------ */}
            <div className={`fixed bg-[#212327] w-[50%] h-full top-0 ${expand ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
                <div className='flex justify-between items-center m-1 mt-4'>
                    <p className='font-custom text-base md:text-xl'> &lt; Ramiz Shahnawaz /&gt;</p>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='invert w-5 md:w-7 h-5 md:h-7' onClick={() => { setexpand(false) }}>
                        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                    </svg>
                </div>

                <div className='flex flex-col gap-5 md:gap-7 mt-12 md:mt-14 heading'>
                    <a href="#home" className="group relative cursor-pointer flex items-center" onClick={() => setexpand(false)}>
                        <span className={`absolute w-full bg-blue-600 px-4 py-5 md:py-6 -z-40 transition-all duration-300 ${activeSection === 'home' ? 'w-full' : 'hidden'}`}></span>
                        <div className="flex items-center gap-2 ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" className='w-5 h-5'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 21H7a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.707V17a4 4 0 0 1-4 4Zm-8-4h6" /></svg>
                            <p className='text-lg'>Home</p>
                        </div>
                    </a>

                    <a href="#about" className="group relative cursor-pointer flex items-center" onClick={() => setexpand(false)}>
                        <span className={`absolute w-full bg-blue-600 px-4 py-5 md:py-6 -z-40 transition-all duration-300 ${activeSection === 'about' ? 'w-full' : 'hidden'}`}></span>
                        <div className='flex items-center gap-3 ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16" className='w-5 md:w-6 h-5 md:h-6'><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="6" r="3.25" /><path d="M2.75 14.25c0-2.5 2-5 5.25-5s5.25 2.5 5.25 5" /></g></svg>
                            <p className='text-lg'>About Me</p>
                        </div>
                    </a>

                    <a href="#skills" className="group relative cursor-pointer flex items-center" onClick={() => setexpand(false)}>
                        <span className={`absolute w-full bg-blue-600 px-4 py-5 md:py-6 -z-40 transition-all duration-300 ${activeSection === 'skills' ? 'w-full' : 'hidden'}`}></span>
                        <div className='flex items-center gap-3 ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" className='w-5 md:w-6 h-5 md:h-6'><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><path d="M14 2h-4c-3.28 0-4.919 0-6.081.814a4.5 4.5 0 0 0-1.105 1.105C2 5.08 2 6.72 2 10s0 4.919.814 6.081a4.5 4.5 0 0 0 1.105 1.105C5.08 18 6.72 18 10 18h4c3.28 0 4.919 0 6.081-.814a4.5 4.5 0 0 0 1.105-1.105C22 14.92 22 13.28 22 10s0-4.919-.814-6.081a4.5 4.5 0 0 0-1.105-1.105C18.92 2 17.28 2 14 2" /><path d="m 16 8l1.227 1.057c.515.445.773.667.773.943s-.258.498-.773.943L16 12M 8 8L 6.773 9.057C6.258 9.502 6 9.724 6 10s.258.498.773.943L8 12m 5-5l-2 6m 3.656 9l-.42-.419a3.1 3.1 0 0 1-.58-3.581M9 22l.42-.419A3.1 3.1 0 0 0 10 18m-3 4h10" /></g></svg>
                            <p className='md:text-lg'>Skills</p>
                        </div>
                    </a>

                    <a href="#projects" className="group relative cursor-pointer flex items-center" onClick={() => setexpand(false)}>
                        <span className={`absolute w-full bg-blue-600 px-4 py-5 md:py-6 -z-40 transition-all duration-300 ${activeSection === 'projects' ? 'w-full' : 'hidden'}`}></span>
                        <div className='flex items-center gap-3 ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256" className='w-5 md:w-6 h-5 md:h-6'><g id="galaLayer0" fill="none" stroke="currentColor" stroke-dasharray="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="4" stroke-opacity="1" stroke-width="16"><path id="galaLayer1" d="M 16,80 127.94695,15.974538" /><path id="galaLayer2" d="m 16,80 112,64" /><path id="galaLayer3" d="m 16,176 112,64" /><path id="galaLayer4" d="M 128,16 240,80" /><path id="galaLayer5" d="M 128,144 240,80" /><path id="galaLayer6" d="M 128,240 240,176" /><path id="galaLayer7" d="m 16,128 112,64" /><path id="galaLayer8" d="M 128,192 239.94695,128.0019" /><path id="galaLayer9" d="M 16,128 58.031909,104.01298" /><path id="galaLayera" d="M 16,176 58.032661,151.99127" /><path id="galaLayerb" d="m 239.94694,128.00191 -41.9796,-23.98708" /><path id="galaLayerc" d="M 240,176 197.96608,151.99056" /></g></svg>
                            <p className='md:text-lg'>Projects</p>
                        </div>
                    </a>

                    <a href="#contact" className="group relative cursor-pointer flex items-center" onClick={() => setexpand(false)}>
                        <span className={`absolute w-full bg-blue-600 px-4 py-5 md:py-6 -z-40 transition-all duration-300 ${activeSection === 'contact' ? 'w-full' : 'hidden'}`}></span>
                        <div className='flex items-center gap-2 md:gap-3 ml-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32" className='w-5 md:w-6 h-5 md:h-6'><path fill="currentColor" d="M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11c.09.722.558 1.155.894 1.394c.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836c.18.574.355.933.574 1.207c.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02c.04.011.067.015.118.023c.773.234 1.394-.246 1.394-.246l.035-.028l2.883-2.625l4.832 3.707l.11.047c1.007.442 2.027.196 2.566-.238c.543-.437.754-.996.754-.996l.035-.09l3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047a1.872 1.872 0 0 0-1.067-.27zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145c-.078.062-.14.101-.465-.028l-5.91-4.531l-3.57 3.254l.75-4.79l9.656-9c.398-.37.265-.448.265-.448c.028-.454-.601-.133-.601-.133l-12.176 7.543l-.004-.02l-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016l.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11a807.312 807.312 0 0 1 3.66-1.53c.082-.032.043-.032.102-.032z" /></svg>
                            <p className='md:text-lg'>Contact</p>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Navbar
