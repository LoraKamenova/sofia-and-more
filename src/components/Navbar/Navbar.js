import React from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (

<nav className="navbar">
    <ul>
        <li className='nav-item'>
            <Link className='nav-link' to="/">Начало</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/about">За блога</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/sofia">София</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/bulgaria">България</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/world">По света</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/sequences">Поредици</Link>
        </li>
        <li className='nav-item'>
            <Link className='nav-link' to="/all-posts">Всички статии</Link>
        </li>
    </ul>
</nav>
    )
};

export default Navbar;