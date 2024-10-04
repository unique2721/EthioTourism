
const Footer = () => {
  return (
    <div className="mt-20 mb-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"><span className=" bg-gradient-to-t from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}Links</span> </h1>
      <div className="flex items-center pt-10 mx-4 sm:justify-center md:justify-between">
        <h3 className="text-3xl tracking-wide sm:hidden md:flex">&copy; 2024 Gebremariam Kidane</h3>
        <div className="text-2xl text-neutral-300">
            <a className="mx-10 hover:text-neutral-400" href="https://github.com/unique2721/EthioTourism" target="_blank">Github</a>
            <a className="mx-10 hover:text-neutral-400" href="">Figma</a>
            <a href="https://ethio-tourism.vercel.app/" target="_blank" className="mx-10 hover:text-neutral-400">Vercel</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
