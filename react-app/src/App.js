import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'

export default function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <SocialLinks />
        <Portfolio/>
      </div>

    </>
  )
}






