/* images */
import gitlogo from '../assets/gitlogo.png'
import figmalogo from '../assets/figmalogo.png'
import vercellogo from '../assets/vercellogo.png'
const Footer = () => {
  return (
    <div className="mt-20 mx-10 border-t py-10 border-x-neutral-700">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"><span className=" bg-gradient-to-t from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}Links</span> </h1>
      <div className="flex items-center pt-10 mx-4 sm:justify-center md:justify-between">
        <h3 className="text-3xl tracking-wide md:flex">&copy; 2024 Gebremariam Kidane</h3>
        <div className="flex items-center justify-center flex-wrap text-2xl text-neutral-300">
            <a className=" flex items-center justify-center space-x-1 mx-10 hover:text-neutral-400" href="https://github.com/unique2721/EthioTourism" target="_blank"><p>Github</p> <img className=' rounded-full w-7 h-7' src={gitlogo} alt="git" /> </a>
            <a className=" flex items-center justify-center space-x-1 mx-10 hover:text-neutral-400" href=""><p>Figma</p> <img className=' rounded-full w-7 h-7' src={figmalogo} alt="figmalogo" /> </a>
            <a href="https://ethio-tourism.vercel.app/" target="_blank" className=" flex items-center justify-center space-x-1 mx-10 hover:text-neutral-400"><p>Vercel</p> <img className=' rounded-full w-7 h-7' src={vercellogo} alt="vercel" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
