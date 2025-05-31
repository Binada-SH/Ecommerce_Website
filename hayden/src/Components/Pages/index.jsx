import React from 'react';
import Hero1 from "../../assets/hero-bg-2.webp";

const Index = () => {
  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden z-[-10] bg-[#f0f0f0]">
        <img src={Hero1} alt="" className="absolute top-1 left-24 w-full h-full object-contain z-[-1] scale-75" />
      <div className='absolute top-1/2 left-30 transform -translate-y-1/2 text-left'>
      <h3 className='uppercase text-[#222222] font-[jura] font-bold'>- get the glow -</h3>
        <h1 className='text-[60px] font-[kanit] text-[#000000] leading-tight items-center flex' >Be Your kind <br />of Beauty</h1>
        <p className='w-120 mt-4 text-[16px] font-[now] font-extrabold text-[#4e4d4d] leading-widest'>Made using clean and non toxic substances. Our products are designed for everyone</p>
        <button className='mt-5 w-50 h-13 rounded-4xl bg-[#000000] tracking-wide font-[kanit] text-[#ffffff]'>Explore Our Products</button>
      </div>

      </div>
    </div>
  );
};

export default Index;
