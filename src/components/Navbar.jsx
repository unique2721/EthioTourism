/* icons */
import { Menu,X } from 'lucide-react'
import { useState } from 'react'
/* images */
import logo from '../assets/logo.png'
/* routing */
import {Link} from 'react-router-dom'

const Navbar = () => {
const [mobileDrawOpen,setMobileDrawOpen] = useState(false);

const toggleMenu = () => {
    setMobileDrawOpen(!mobileDrawOpen)
}
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2 rounded-full' src={logo} alt="logo" />
                    <span className='text-xl tracking-tight'>EthioTourism</span>
                </div>
                <ul className='hidden lg:flex ml-14 space-x-24'>
                    <li className='hover:text-neutral-300'>
                        {/* <a className='hover:text-neutral-300' href="/">Home</a> */}
                        <Link to={'/'}>Home</Link>
                        </li>
                    <li className='hover:text-neutral-300'>
                       {/*  <a className='hover:text-neutral-300' href="/about">About</a> */}
                       <Link to={'/about'}>About</Link>
                        </li>
                </ul>
                <div className=' lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleMenu}>
                        {mobileDrawOpen? <X/>:<Menu/>}
                    </button>
                </div>
            </div>
            {
                mobileDrawOpen && (
                    <div className=" fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                        <li className='py-4 '><a className='hover:text-neutral-300' href="/">Home</a></li>
                        <li className='py-4 '><a className='hover:text-neutral-300' href="/about">About</a></li>
                        </ul>
                        
                    </div>
                )
            }
          </div>
    </nav>
  )
}

export default Navbar
