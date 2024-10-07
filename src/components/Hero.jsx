/* images */
import { Link } from 'react-router-dom'
import abayyyy from '../assets/abayyyy.png'
import axum from '../assets/axum.png'
import forest from '../assets/forest.jpg'
import wenchi from '../assets/wenchi.jpg'
import zquala from '../assets/zquala.jpg'
import gumera from '../assets/gumera.png'
import monkey from '../assets/monkey.png'

/* slider */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

   const data = [
    {
      name: "Abay",
      img: abayyyy,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit eligendi voluptates nisi eveniet ab, temporibus cum, ducimus voluptatum, facilis tempore mollitia nemo. Iste, harum porro repellat minima laboriosam vel?'
    },
    {
      name: "Axum",
      img: axum,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit eligendi voluptates nisi eveniet ab, temporibus cum, ducimus voluptatum, facilis tempore mollitia nemo. Iste, harum porro repellat minima laboriosam vel?'
    },
    {
      name: "Forest",
      img: forest,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit eligendi voluptates nisi eveniet ab, temporibus cum, ducimus voluptatum, facilis tempore mollitia nemo. Iste, harum porro repellat minima laboriosam vel?'
    },
    {
      name: "Wenchi",
      img: wenchi,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit eligendi voluptates nisi eveniet ab, temporibus cum, ducimus voluptatum, facilis tempore mollitia nemo. Iste, harum porro repellat minima laboriosam vel?'
    },
    {
      name: "Zquala",
      img: zquala,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit eligendi voluptates nisi eveniet ab, temporibus cum, ducimus voluptatum, facilis tempore mollitia nemo. Iste, harum porro repellat minima laboriosam vel?'
    },
    {
      name: "Esate Gumera",
      img: gumera,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit eligendi voluptates nisi eveniet ab, temporibus cum, ducimus voluptatum, facilis tempore mollitia nemo. Iste, harum porro repellat minima laboriosam vel?'
    },
    {
      name: "Monkey",
      img: monkey,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil impedit eligendi voluptates nisi eveniet ab, temporibus cum, ducimus voluptatum, facilis tempore mollitia nemo. Iste, harum porro repellat minima laboriosam vel?'
    },
  ]
 
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">Explore <span className=" bg-gradient-to-t from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}Ethiopia</span></h1>
      <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl"> Ethiopia, a land of contrast and a truly best kept secret, that offers uncountable gifts and an unforgettable memory for visitors is relatively unique from the rest of the world. Ethiopia has a proud and long history extending to the known beginning of humankind. The mysterious and the tallest ever standing monolithic monuments of Axum, the astonishing and perfectly designed rock hewn churches of Lalibela, the magnificent and elegant castles of Gondar, the marvelous and decorated wall of Harer(Jegol) and other architectural remnants exist testifying the great civilizations of the country registered centuries ago. Thus visit Ethiopia Travel helps you to explore the untouched and sacred destinations.</p>
      <div className="flex justify-center my-10">
        <Link to={'/about'} className=" bg-gradient-to-t from-orange-500 t0-orange-800 py-3 px-4 mx-3 rounded-md hover:text-neutral-200">Learn More</Link>
      </div>

      <div className='mt-20 w-full'>
        <Slider {...settings}>
        {
          data.map((d,index) => (
            <div key={index} className='bg-white h-[550px] text-black rounded-xl'>
            <div className='rounded-t-xl flex flex-wrap justify-center items-center h-1/3'>
              <img className='w-full object-contain block m-auto rounded-t-xl' src={d.img} alt="" />
            </div>
          <div className='flex flex-col justify-center items-center gap-4 p-4 h-2/3'>
            <p className='text-xl font-semibold'>{d.name}</p>
            <p className='text-center'>{d.description}</p>
            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
          </div>
          </div>
         ))
        }
      </Slider>

      </div> 

      {/* <div className="flex flex-wrap justify-center items-center mt-10">
        <div>
        <img className=" rounded-lg sm:w-[600px] md:w-[400px] lg:w-[500px] h-[300px] border border-x-orange-700 shadow-orange-400 mx-2 my-4" src={abayyyy} alt="abay" />
        </div>
        <div>
        <img className=" rounded-lg sm:w-[600px] md:w-[400px] lg:w-[500px] h-[300px] border border-x-orange-700 shadow-orange-400 mx-2 my-4" src={axum} alt="axum" />
        </div>
      </div> */}
    </div>
  )
}

export default Hero
