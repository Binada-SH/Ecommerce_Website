import { useState } from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Index from './Components/Pages/index';

function App() {
  return (
    <div className='overflow-hidden'>
    <Navbar/>
    <Index/>
    
    </div>
  )
}

export default App
