import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import { HeroSection } from './Components/HeroSection'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
    </>
  )
}

export default App
