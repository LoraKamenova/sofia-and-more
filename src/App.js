import './App.css';

import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Articles from './components/Sofia/Articles';
import Events from './components/Sofia/Events';
import Finds from './components/Sofia/Finds';
import Walks from './components/Sofia/Walks';
import Collections from './components/Sofia/Collections';
import Bulgaria from './components/Bulgaria/Bulgaria';
import World from './components/World/World';
import All from './components/All/All';
import PostWrapper from './components/Post/PostWrapper';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<About/>}/>
        <Route path="/sofia/articles" element={<Articles/>}/>
        <Route path="/sofia/events" element={<Events/>}/>
        <Route path="/sofia/finds" element={<Finds/>}/>
        <Route path="/sofia/walks" element={<Walks/>}/>
        <Route path="/sofia/collections" element={<Collections/>}/>
        <Route path="/bulgaria" element={<Bulgaria/>}/>
        <Route path="/world" element={<World/>}/>
        <Route path="/all" element={<All/>}/>
        <Route path="/all/:id" element={<PostWrapper/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>


    </div>
  );
}
export default App;