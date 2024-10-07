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
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

   const data = [
    {
      name: "Abay",
      img: abayyyy,
      description: 'The Blue Nile originates at Lake Tana in Ethiopia (where it is called the Abay River). The river flows generally south before entering a canyon about 400 km (250 mi) long, about 30 km (19 mi) from Lake Tana, which is a tremendous obstacle for travel and communication between north and south Ethiopia.'
    },
    {
      name: "Axum",
      img: axum,
      description: 'Axum is located in the Central Zone of the Tigray Region, near the base of the Adwa mountains. It has an elevation of 2,131 metres (6,991 feet) and is surrounded by La ilay Maychew, a separately administered woreda of the Tigray region.'
    },
    {
      name: "Forest",
      img: forest,
      description: 'In the late nineteenth century, about 30% of Ethiopia was covered with forest. The clearing of land for agricultural use and the cutting of trees for fuel gradually changed the scene, and today forest areas have dwindled to less than 4% of Ethiopias total land.'
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
            <div key={index} className='bg-white h-[550px] text-black rounded-xl pb-10'>
            <div className='rounded-t-xl flex flex-wrap justify-center items-center'>
              <img className='w-full object-contain block m-auto rounded-t-xl' src={d.img} alt="" />
            </div>
          <div className='flex flex-col justify-center items-center gap-4 p-4'>
            <p className='text-xl font-semibold'>{d.name}</p>
            <p className='text-center'>{d.description}</p>
            {/* <button className='bg-indigo-500 bg-gradient-to-t text-white text-lg px-6 py-1 rounded-xl'>Read More</button> */}
            <button className=" bg-gradient-to-t from-orange-500 t0-orange-800 py-3 px-4 mx-3 rounded-md hover:text-neutral-200 text-white bg-black">Read More</button>
          </div>
          </div>
         ))
        }
      </Slider>
      </div> 
    </div>
  )
}

export default Hero
