import React from 'react';
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className='w-full top-0 left-0 fixed flex items-center justify-between px-4 py-2'>
        <img className='w-20 ml-30' src={logo} alt="site logo"/>
        <ul className='flex items-center'>
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
