import React from 'react';
import Navbar from './Navbar';
import './App.css';
import LandingPage from './LandingPage';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
    </div>
  );
}
export default App;