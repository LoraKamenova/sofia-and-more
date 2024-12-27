import './App.css';

import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>


    </div>
  );
}
export default App;