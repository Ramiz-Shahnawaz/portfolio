import React from 'react'
import Landingpage from './Pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ReactLenis from 'lenis/react'

const App: React.FC = () => {

  return (
    <>
      <ReactLenis>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/portfolio' element={<Home />} />
        </Routes>
      </ReactLenis>
    </>
  )
}

export default App

