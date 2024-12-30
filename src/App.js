import './App.css';

import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Articles from './components/Sofia/Articles';
import Events from './components/Sofia/Events';
import Findings from './components/Sofia/Findings';
import Walks from './components/Sofia/Walks';
import Collections from './components/Sofia/Collections';
import All from './components/All/All';
import PostWrapper from './components/Post/PostWrapper';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sofia/articles" element={<Articles/>}/>
        <Route path="/sofia/events" element={<Events/>}/>
        <Route path="/sofia/findings" element={<Findings/>}/>
        <Route path="/sofia/walks" element={<Walks/>}/>
        <Route path="/sofia/collections" element={<Collections/>}/>
        <Route path="/all" element={<All/>}/>
        <Route path="/all/:id" element={<PostWrapper/>}/>

      </Routes>


    </div>
  );
}
export default App;