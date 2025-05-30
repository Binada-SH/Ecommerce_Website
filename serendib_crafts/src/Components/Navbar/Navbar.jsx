import React from 'react';
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className='m-auto w-300 max-w-2560  fixed flex items-center justify-between px-4 py-2 bg-gray-100 rounded-4xl h-15'>
        <img className='w-20 ml-20' src={logo} alt="site logo"/>
        <ul className='flex items-center gap-14 font-[jura]'>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Shop</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        <ul className='flex items-center gap-6 px-20'>
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
