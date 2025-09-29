import React from 'react'
import PixelTransition from '../block/Animations/PixelTransition/PixelTransition'
import { assets } from '../assets/assets'

const Projects: React.FC = () => {

  const chatappurl = 'https://yapyap-phi.vercel.app/'
  const chatapprepo = 'https://github.com/Ramiz-Shahnawaz/YAPYAP-Chatapp'
  const docappurl = 'https://prescripto.vercel.app/'
  const docapprepo = 'https://github.com/Ramiz-Shahnawaz/Prescripto'
  const ecomrepo = 'https://github.com/Ramiz-Shahnawaz/E-Commerce-Website'
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-full lg:w-[80%] h-full lg:h-[85%] mt-10'>
        <div className='w-full h-[90%] bg-background'>
          <p className='text-white font-extrabold text-4xl text-center mt-3 heading'>My Projects</p>

          {/* ------ Project Cards ------ */}
          <div className='w-full h-full flex flex-col lg:flex-row justify-between mt-5 body'>

            {/* ------ Project Card ------ */}
            <div className='lg:w-[30%] h-full m-1 bg-[#313236] rounded-md overflow-hidden relative flex lg:flex-col'>
              <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] pointer-events-none rounded-md"></div>
              {/* ------ Top Content ------ */}
              <div className='w-40 md:w-60 h-max mt-6 mx-2 md:mx-auto'>
                <PixelTransition
                  firstContent={
                    <img
                      src={assets.chatapp}
                      alt="default pixel transition content, chatapp!"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#111"
                      }}
                    >
                      <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff", textAlign: "center" }}>YapYap Chatapp</p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor='#ffffff'
                  animationStepDuration={0.4}
                  className="custom-pixel-card"
                />
              </div>

              {/* ------ Description ------ */}
              <div className='text-white flex flex-col gap-2 md:gap-3 p-2 md:p-5 mt-2 md:mt-0'>
                <p className='text-center font-bold text-lg md:text-xl heading'>YapYap ChatApp</p>
                <p>A ChatGPT-inspired web app built with React, Firebase, and OpenAI API, featuring real-time messaging, Google/auth login, and AI-powered responses with streaming UI</p>
                <p className='font-bold'>Tech Stack: <span className='font-normal'>Reactjs, Firebase</span></p>
              </div>

              {/* ------ Buttons ------ */}
              <div className='w-full h-16 flex justify-start md:justify-center items-center gap-2 md:gap-4 absolute bottom-2 lg:bottom-4 mx-2 lg:mx-0'>
                <button onClick={()=> window.open( chatappurl, "_blank")} className='w-max h-8 md:h-10 p-3 md:p-5 bg-blue-600 hover:bg-blue-700 text-white font-normal md:font-bold flex justify-center items-center gap-1 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#000000" className='invert w-5 md:w-7 h-5 md:h-7'><g fill="none" stroke="#000000" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M20.188 10.934c.388.472.582.707.582 1.066c0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066c0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z" /></g></svg>
                  <p className='md:text-lg'>view</p>
                </button>

                <button onClick={()=> window.open(chatapprepo,"_blank")} className='w-max h-8 md:h-10 p-3 md:p-5 bg-blue-600 hover:bg-blue-700 text-white font-normal md:font-bold flex justify-center items-center gap-1 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className='invert w-5 md:w-7 h-5 md:h-7'>
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                  <p className='md:text-lg'>Repo</p>
                </button>
              </div>
            </div>

            {/* ------ Project Card ------ */}
            <div className='lg:w-[30%] h-full m-1 bg-[#313236] rounded-md overflow-hidden relative flex lg:flex-col'>
              <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] pointer-events-none rounded-md"></div>
              {/* ------ Top Content ------ */}
              <div className='w-40 md:w-60 h-max mt-6 mx-2 md:mx-auto'>
                <PixelTransition
                  firstContent={
                    <img
                      src={assets.docApp}
                      alt="default pixel transition content, docApp!"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#111"
                      }}
                    >
                      <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff", textAlign: "center" }}>Doctor Appoinment Booking App</p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor='#ffffff'
                  animationStepDuration={0.4}
                  className="custom-pixel-card"
                />
              </div>

              {/* ------ Description ------ */}
              <div className='text-white flex flex-col gap-2 md:gap-3 p-2 md:p-5 mt-2 md:mt-0'>
                <p className='text-center font-semibold text-lg md:text-xl heading'>Doc Appoinment App</p>
                <p>Developed a full-stack app for patients, doctors, admins with features like
                  appointment scheduling, profile management, and analytics.</p>
                <p className='font-bold'>Tech Stack: <span className='font-normal'>Reactjs, Nodejs, Expressjs, MongoDB</span></p>
              </div>

              {/* ------ Buttons ------ */}
              <div className='w-full h-16 flex justify-start md:justify-center items-center gap-2 md:gap-4 absolute bottom-2 lg:bottom-4 mx-2 lg:mx-0'>
                <button onClick={()=> window.open( docappurl, "_blank")} className='w-max h-8 md:h-10 p-3 md:p-5 bg-blue-600 hover:bg-blue-700 text-white font-normal md:font-bold flex justify-center items-center gap-1 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="#000000" className='invert w-5 md:w-7 h-5 md:h-7'><g fill="none" stroke="#000000" stroke-width="2"><circle cx="12" cy="12" r="3" /><path d="M20.188 10.934c.388.472.582.707.582 1.066c0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066c0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934Z" /></g></svg>
                  <p className='md:text-lg'>view</p>
                </button>

                <button onClick={()=> window.open(docapprepo,"_blank")} className='w-max h-8 md:h-10 p-3 md:p-5 bg-blue-600 hover:bg-blue-700 text-white font-normal md:font-bold flex justify-center items-center gap-1 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className='invert w-5 md:w-7 h-5 md:h-7'>
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                  <p className='md:text-lg'>Repo</p>
                </button>
              </div>
            </div>

            {/* ------ Project Card ------ */}
            <div className='lg:w-[30%] h-full m-1 bg-[#313236] rounded-md overflow-hidden relative flex lg:flex-col'>
              <div className="absolute inset-0 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] pointer-events-none rounded-md"></div>
              {/* ------ Top Content ------ */}
              <div className='w-40 md:w-60 h-max mt-6 mx-2 md:mx-auto'>
                <PixelTransition
                  firstContent={
                    <img
                      src={assets.ecom}
                      alt="default pixel transition content, ecom website!"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#111"
                      }}
                    >
                      <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff", textAlign: "center" }}>E-commerce Website</p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor='#ffffff'
                  animationStepDuration={0.4}
                  className="custom-pixel-card"
                />
              </div>

              {/* ------ Description ------ */}
              <div className='text-white flex flex-col gap-2 md:gap-3 p-2 md:p-5 mt-2 md:mt-0'>
                <p className='text-center font-bold text-lg md:text-xl heading'>E-Commerce Website</p>
                <p>Built a Daraz-inspired platform with user auth, cart/wishlist, and admin
                  dashboard.</p>
                <p className='font-bold'>Tech Stack: <span className='font-normal'>HTML, CSS, JavaScript, PHP, Mysqli</span></p>
              </div>

              {/* ------ Buttons ------ */}
              <div className='w-2/5 md:w-full h-16 flex justify-center absolute bottom-0 '>
                <button onClick={()=>window.open(ecomrepo,"_blank")} className='w-max h-8 md:h-10 p-3 md:p-5 bg-blue-600 hover:bg-blue-700 text-white font-normal md:font-bold flex justify-center items-center gap-1 rounded-lg'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" className='invert w-7 h-7'>
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                  </svg>
                  <p className='text-lg'>Repo</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
