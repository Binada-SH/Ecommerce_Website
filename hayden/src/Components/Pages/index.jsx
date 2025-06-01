import React, { useEffect, useRef, useState } from 'react';
import Hero from "../../assets/hero-bg-2.webp";
import Skin from "../../assets/product-1-1.webp";
import Hair from "../../assets/product-7-1.webp";
import Tool from "../../assets/product-15-2.webp";
import Featured1 from "../../assets/product-3-1.webp";
import Featured2 from "../../assets/product-9-1.webp";
import Featured3 from "../../assets/product-8-1.webp";
import Featured4 from "../../assets/product-6-1.webp";
import Featured5 from "../../assets/product-4-1.webp";
import Featured6 from "../../assets/product-1-2.webp";
import gsap from "gsap";

const categories = [
  {
    src: Skin,
    title: "SkinCare",
    target: "URL"
  },

  {
    src: Hair,
    title: "HairCare",
    target: "URL"
  },

   {
    src: Tool,
    title: "BeautyItems",
    target: "URL"
  }
]

const featured = [
  {
    src: Featured1,
    title: "Glow Magic Clenser",
    price: 13.99,
    target: "URL"
  },

  {
    src: Featured2,
    title: "Glowing Night Cerem",
     price: 30.99,
    target: "URL"
  },

   {
    src: Featured3,
    title: "Glowing Sun Screen",
     price: 6.99,
    target: "URL"
  },

  {
    src: Featured4,
    title: "Glowing Lip Spray",
     price: 10.99,
    target: "URL"
  },

  {
    src: Featured5,
    title: "Glowing Eye cream",
     price: 4.99,
    target: "URL"
  },

  {
    src: Featured6,
    title: "Glowing Alove Vera Gel",
     price: 7.99,
    target: "URL"
  }
]

const Index = () => {
  const fadeup = useRef(null);
  useEffect (() => {
  gsap.fromTo(
    fadeup.current,
    {
      opacity: 0, y: 60
    },
    {
      opacity: 1, y: 0, duration: 1.5, ease: "power2.out",
    }
  );
},[]);

  const fadeleft = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      fadeleft.current,
      {
        opacity: 0, x: 60
      },
      {
        opacity: 1, x: 0, duration: 1.5, ease: "power2.out",
      }
    );
  },[]);

  const [click, setClick] = useState(false);

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden z-[-10] bg-[#f0f0f0]">
        <img src={Hero} alt="" className="absolute top-1 left-0 scale-200 blur lg:blur-none md:left-4 lg:left-24 md:w-full h-full object-contain z-[-1] lg:scale-75" ref={fadeleft} style={{opacity: 0}}/>
      <div className=' absolute top-1/2 left-10 md:left-30 transform -translate-y-1/2 text-left' ref={fadeup} style={{opacity: 0}}>
      <h3 className='uppercase text-[#222222] font-[jura] font-bold'>- get the glow -</h3>
        <h1 className='text-[60px] font-[kanit] text-[#000000] leading-tight items-center flex'>Be Your kind <br />of Beauty</h1>
        <p className='w-90 md:w-120 mt-4 text-[16px] font-[now] font-extrabold text-[#4e4d4d] leading-widest'>Made using clean and non toxic substances. Our products are designed for everyone</p>
        <button className='mt-5 w-50 h-13 rounded-4xl bg-[#000000] tracking-wide font-[kanit] text-[#ffffff]'>Explore Our Products</button>
      </div>
      </div>
      <div className='flex mt-13'>
        <h1 className='m-auto text-[30px] font-[kanit] tracking-wider'>Shop By Category</h1>
      </div>
      <div className='m-auto md:justify-around mt-10 md:flex flex-cols-3 gap-10 md:px-20'>
          {categories.map ((categories,index) => (
            <div key = {index} className='cursor-pointer'>
              <img className='m-auto w-80 lg:w-80 lg:h-90 md:w-100 md:h-60 hover:scale-105 transition-all duration-550' src={categories.src} alt="categoryImages" />
              <h1 className='m-auto mt-4 mb-4 font-[kanit] text-[20px] text-[#000000] text-center'>{categories.title}</h1>
            </div>
          ))}
        </div>
        <div className='flex mt-23'>
        <h1 className='m-auto text-[30px] font-[kanit] tracking-wider'>Featured Products</h1>
      </div>
      <div className='overflow-x-auto m-auto md:justify-around mt-10 md:flex flex-cols-3 gap-10 md:px-20'>
          {featured.map ((featured,index) => (
            <div key = {index} className='cursor-pointer'>
              <img className='m-auto w-80 lg:w-80 lg:h-70 md:w-100 md:h-60 hover:scale-105 transition-all duration-550' src={featured.src} alt="categoryImages"/>
              <div className='flex'>
                <h1 className='mt-4 ml-4 mb-4 font-[now] font-extrabold text-[12px] w-25 text-[#000000] text-left'>{featured.title}</h1>
              <h1 className='mt-4 mr-4 mb-4 font-[lato] font-extrabold text-[12px] w-25 text-[#7b7a7a] text-right'>$ {featured.price}</h1>
              </div>
              <div className='flex'>
                <p className='mt-4 ml-3 mb-4 font-[lato] font-extrabold text-[12px] text-[#3d3d3d] pt-0.5 text-center w-30 h-6 rounded-4xl  bg-gray-200'>Add To Cart  {featured.target}</p>
                <p className='mt-4 ml-18' href="" onClick={() => setClick(!click)}>
                    <i className={`bi bi-heart-fill transition-colors duration-300 ${
                      click ? "text-red-500 " : "text-gray-300"}`} ></i>
                </p>

              </div>

              
            </div>
          ))}
        </div>

    </div>
  );
};

export default Index;
