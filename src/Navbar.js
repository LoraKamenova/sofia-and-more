import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (

<nav className="navbar">
        <li className='nav-item'>
            <a className='nav-link' href="#">Начало</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#">София</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#">България</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#">По света</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#">Поредици</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="#">Всички статии</a>
        </li>
</nav>
    )
};

export default Navbar;