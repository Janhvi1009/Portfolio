import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home/Home'
import Footer from './Component/Footer'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Contact from './Component/Contact/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default App