import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import DarkVeil from "../block/Backgrounds/DarkVeil/DarkVeil"
import NameAnimation from '../Components/NameAnimation'

const Landingpage: React.FC = () => {
  const [zoom, setzoom] = useState(false)
  const name = "Ramiz Shahnawaz"
  const navigate = useNavigate()

  useEffect(() => {
    const ZoomTimer = setTimeout(() => {
      setzoom(true)

      const NavigateTimer = setTimeout(() => {
        navigate('/portfolio')
      }, 500)

      return () => clearTimeout(NavigateTimer)
    }, name.length * 200 + 2500)

    return () => clearTimeout(ZoomTimer)
  }, [name.length, navigate])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <DarkVeil />
      <div>
        <div className='absolute text-white inset-0 flex items-center justify-center text-center z-[1000]'>
          <NameAnimation name={name} zoom ={zoom}/>
        </div>
      </div>
    </div>
  )
}

export default Landingpage