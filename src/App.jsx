import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import { HeroSection } from './Components/HeroSection'

import './App.css'
import { Feature } from './Components/Feature'
import Workflow from './Components/WorkFlow'
import {Pricing} from './Components/Pricing'
import { Testimonials } from './Components/Tetimonials'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Feature></Feature>
        <Workflow></Workflow>
        <Pricing></Pricing>
        <Testimonials></Testimonials>
        <Footer></Footer>
    </>
  )
}

export default App
