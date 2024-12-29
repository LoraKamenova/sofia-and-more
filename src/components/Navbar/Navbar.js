import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (

<nav className="navbar">
    <ul className='nav-list'>
        <li className='nav-item'>
            <NavLink activeclassName="active" className='nav-link' to="/">Начало</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink activeclassName="active" className='nav-link' to="/sofia">София</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink activeclassName="active" className='nav-link' to="/bulgaria">България</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink activeclassName="active" className='nav-link' to="/world">По света</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink activeclassName="active" className='nav-link' to="/sequences">Поредици</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink activeclassName="active" className='nav-link' to="/all">Всички статии</NavLink>
        </li>
        <li className='nav-item'>
            <NavLink activeclassName="active" className='nav-link' to="/about">За блога</NavLink>
        </li>
    </ul>
</nav>
    )
};

export default Navbar;