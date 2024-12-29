import './App.css';

import React from 'react';
import {Route, Routes, Redirect} from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Sofia from './components/Sofia/Sofia';
import All from './components/All/All';
// import Post from './components/Post/Post';
import PostWrapper from './components/Post/PostWrapper';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sofia" element={<Sofia/>}/>
        <Route path="/all" element={<All/>}/>
        <Route path="/all/:id" element={<PostWrapper/>}/>
        {/* <Route path="/dictionary/delete/:entryId" exact render={(props) => {
                        return loggedIn ? (<DeleteDictionaryEntry {...props} />) : (<Redirect to="/login"/>)}}/> */}
      </Routes>


    </div>
  );
}
export default App;