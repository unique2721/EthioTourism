import React from 'react'
/* components */
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
     <Navbar/> 
     <div className='max-w-7xl mx-auto pt-20 px-6'>
     <Hero/>
     <About/>
     <Footer/>
     </div>
    </>
  )
}

export default App
