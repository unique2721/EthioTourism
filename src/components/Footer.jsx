
const Footer = () => {
  return (
    <div className="mt-20 mb-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"><span className=" bg-gradient-to-t from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}Links</span> </h1>
      <div className="flex justify-between items-center pt-10">
        <h3 className="text-3xl tracking-wide">copyright &copy; 2024 Gebremariam Kidane</h3>
        <div className="text-3xl">
            <a className="mx-10" href="">Github</a>
            <a className="mx-10" href="">Figma</a>
            <a className="mx-10" href="">Vercel</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
