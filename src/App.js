import './App.css';

import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Sofia from './components/Sofia/Sofia';
import All from './components/All/All';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sofia" element={<Sofia/>}/>
        <Route path="/all" element={<All/>}/>
      </Routes>


    </div>
  );
}
export default App;