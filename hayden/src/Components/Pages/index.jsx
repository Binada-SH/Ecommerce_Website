import React from 'react';
import Hero from "../../assets/hero-bg-2.webp";
import Skin from "../../assets/product-1-1.webp";
import Hair from "../../assets/product-7-1.webp";
import Tool from "../../assets/product-15-2.webp";

const categories = [
  {
    src: Skin,
    title: "SkinCare",
    description: "Nourish your skin with our gentle yet powerful cleansers, moisturizers, and serums — designed to hydrate, restore, and reveal a radiant glow.",
    target: "URL"
  },

  {
    src: Hair,
    title: "HairCare",
    description: "From revitalizing shampoos to nourishing oils, treat your hair to the care it deserves. Stronger, shinier, and healthier strands start here.",
    target: "URL"

  },

   {
    src: Tool,
    title: "BeautyItems",
    description: "Level up your routine with pro-grade beauty tools. From jade rollers to makeup brushes, get the flawless finish you love — effortlessly.",
    target: "URL"

  }
]

const Index = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden z-[-10] bg-[#f0f0f0]">
        <img src={Hero} alt="" className="absolute top-1 left-24 w-full h-full object-contain z-[-1] scale-75" />
      <div className='absolute top-1/2 left-30 transform -translate-y-1/2 text-left'>
      <h3 className='uppercase text-[#222222] font-[jura] font-bold'>- get the glow -</h3>
        <h1 className='text-[60px] font-[kanit] text-[#000000] leading-tight items-center flex' >Be Your kind <br />of Beauty</h1>
        <p className='w-120 mt-4 text-[16px] font-[now] font-extrabold text-[#4e4d4d] leading-widest'>Made using clean and non toxic substances. Our products are designed for everyone</p>
        <button className='mt-5 w-50 h-13 rounded-4xl bg-[#000000] tracking-wide font-[kanit] text-[#ffffff]'>Explore Our Products</button>
      </div>
      </div>
      <div className='flex mt-13'>
        <h1 className='m-auto text-[30px] font-[kanit] tracking-wider'>Shop By Category</h1>
      </div>
      <div className='m-auto justify-between mt-10 flex flex-cols-3 gap-10 px-20'>
          {categories.map ((categories,index) => (
            <div key = {index} className='cursor-pointer'>
              <img className='w-80 h-90 hover:scale-105 transition-all duration-550' src={categories.src} alt="categoryImages" />
              <h1 className='mt-4 font-[kanit] text-[20px] text-[#000000] text-center'>{categories.title}</h1>
            </div>
          ))}
        </div>
        <div className='flex mt-23'>
        <h1 className='m-auto text-[30px] font-[kanit] tracking-wider'>Featured Products</h1>
      </div>

    </div>
  );
};

export default Index;
