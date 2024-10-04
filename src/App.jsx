import React from 'react'
/* components */
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
const App = () => {
  return (
    <>
     <Navbar/> 
     <div className='max-w-7xl mx-auto pt-20 px-6'>
     <Hero/>
     <About/>
     </div>
    </>
  )
}

export default App
