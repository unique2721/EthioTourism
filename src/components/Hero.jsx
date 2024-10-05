/* images */
import { Link } from 'react-router-dom'
import abayyy from '../assets/abayyy.png'
import axum from '../assets/axum.png'

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Explore <span className=" bg-gradient-to-t from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}Ethiopia</span></h1>
      <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius minus aperiam culpa id, perspiciatis, et quasi asperiores corporis delectus repellendus voluptate ad. Impedit dicta ullam omnis, voluptate explicabo sed corrupti? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque est velit, ut sint placeat, fugiat iste voluptatum consequuntur debitis optio, animi error iure veniam illum cum voluptate suscipit corrupti blanditiis?</p>
      <div className="flex justify-center my-10">
        <Link to={'/about'} className=" bg-gradient-to-t from-orange-500 t0-orange-800 py-3 px-4 mx-3 rounded-md hover:text-neutral-200">Learn More</Link>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10 sm:flex-col md:flex-row">
        <img className=" rounded-lg sm:w-[600px] md:w-[450px] lg:w-[600px] h-[300px] border border-x-orange-700 shadow-orange-400 mx-2 my-4" src={abayyy} alt="abay" />
        <img className=" rounded-lg sm:w-[600px] md:w-[450px] lg:w-[600px] h-[300px] border border-x-orange-700 shadow-orange-400 mx-2 my-4" src={axum} alt="axum" />
      </div>
    </div>
  )
}

export default Hero
