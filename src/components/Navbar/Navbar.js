import React from 'react';
import './Navbar.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (

<nav className="navbar">

    <div className='nav-list-container'>
        <ul className='nav-list'>
            <div className='logo-container'>
                <div className='logo'>Sofia & more</div>
            </div>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/">Начало</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/sofia/articles">София</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/bulgaria">България</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/world">По света</NavLink>
            </li>
        {/* <li className='nav-item'>
            <NavLink activeclassName="active" className='nav-link' to="/sequences">Поредици</NavLink>
        </li> */}
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/all">Всички статии</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink activeclassName="active" className='nav-link' to="/about">За блога</NavLink>
            </li>
        </ul>
    </div>
</nav>
    )
};

export default Navbar;