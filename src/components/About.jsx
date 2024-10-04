import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">About <span className=" bg-gradient-to-t from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}Us</span></h1>
      <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">We specialize in providing unforgetable expriences in Ethiopia, from breathtaking landscapes to rich cultural heritage.</p>
      <div className="flex justify-center my-10">
        <Link to={'/home'} className=" py-3 px-4 mx-3 rounded-md border hover:text-neutral-400">Back to Home</Link>
        </div>
    </div>
  )
}

export default About
