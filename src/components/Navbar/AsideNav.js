import React from 'react';
import './AsideNav.css';
import {NavLink} from "react-router-dom";

const AsideNav = () => {
    return (

<nav className="aside-nav">
    <ul className='aside-nav-list'>
        <li className='aside-nav-item'>
            <NavLink activeclassName="aside-active" className='aside-nav-link' to="/sofia/articles">Статии</NavLink>
        </li>
        <li className='aside-nav-item'>
            <NavLink activeclassName="aside-active" className='aside-nav-link' to="/sofia/events">Събития</NavLink>
        </li>
        <li className='aside-nav-item'>
            <NavLink activeclassName="aside-active" className='aside-nav-link' to="/sofia/findings">Находки</NavLink>
        </li>
        <li className='aside-nav-item'>
            <NavLink activeclassName="aside-active" className='aside-nav-link' to="/sofia/walks">Разходки</NavLink>
        </li>
        <li className='aside-nav-item'>
            <NavLink activeclassName="aside-active" className='aside-nav-link' to="/sofia/collections">Колекции</NavLink>
        </li>
    </ul>
</nav>
    )
};

export default AsideNav;