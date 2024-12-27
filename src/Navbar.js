import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (

<nav className="navbar">
    <div className="navbar-center">
        <li>
            <a href="#">Начало</a>
        </li>
        <li>
            <a href="#">София</a>
        </li>
        <li>
            <a href="#">България</a>
        </li>
        <li>
            <a href="#">По света</a>
        </li>
    </div>
</nav>
    )
};

export default Navbar;