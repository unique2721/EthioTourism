/* images */
import gitlogo from '../assets/gitlogo.png'
import figmalogo from '../assets/figmalogo.png'
import vercellogo from '../assets/vercellogo.png'

const Footer = () => {
  return (
    <div className="mt-20 mx-10 border-t py-10 border-x-neutral-700 overflow-hidden">
      <div className="flex items-center pt-10 mx-4 sm:justify-center lg:justify-between">
        <h3 className="text-3xl tracking-wide hidden lg:flex">&copy; 2024 Gebremariam Kidane</h3>
        <div className="flex flex-wrap items-center justify-center text-2xl text-neutral-300">
            <a className=" flex items-center justify-center space-x-1 mx-10 hover:text-neutral-400" href="https://github.com/unique2721/EthioTourism" target="_blank"><p>Github</p> <img className='hidden sm:flex rounded-full w-7 h-7' src={gitlogo} alt="git" /> </a>
            <a className=" flex items-center justify-center space-x-1 mx-10 hover:text-neutral-400" href="https://www.figma.com/design/gpNcUYHpvzT7KECdFe0gTv/Ethio-Tourism?node-id=0-1&node-type=canvas&t=oM2wbznM9xiy841P-0" target='_blank'><p>Figma</p> <img className='hidden sm:flex rounded-full w-7 h-7' src={figmalogo} alt="figmalogo" /> </a>
            <a href="https://ethio-tourism.vercel.app/" target="_blank" className=" flex items-center justify-center space-x-1 mx-10 hover:text-neutral-400"><p>Vercel</p> <img className='hidden sm:flex rounded-full w-7 h-7' src={vercellogo} alt="vercel" /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
