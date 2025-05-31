import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full max-w-2560 h-18 top-0 left-0 fixed flex items-center justify-between px-6 py-2 bg-[#ffffff] shadow-md'>
        <ul className='flex items-center gap-8 font-[jura] px-10'>
            <li><a href="">HOME</a></li>
            <li><a href="">ABOUT</a></li>
            <li><a href="">SHOP</a></li>
            <li><a href="">CONTACT</a></li>
        </ul>
        <h1>
            <a className='text-[24px] font-[times] tracking-widest' href="">HAYDEN</a>
        </h1>
        <ul className='flex items-center gap-6 px-10'>
            <li>
                <a href="">
                    <i class="bi bi-heart"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="bi bi-person text-xl"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="bi bi-bag"></i>
                </a>
            </li>
            <li>
                <a href="">
                    <i class="bi bi-search"></i>
                </a>
            </li>
        </ul>
        
      
    </div>
  )
}

export default Navbar
