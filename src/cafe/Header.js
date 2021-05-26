import React from 'react';
import "./Header.css";
import logo from './images/klassy-logo.png';

function Header() {
    return (
        <nav className="nav-bar">
        <div className="logo">
         <img src={logo} alt="logo"/>
        </div>
        <ul className="nav-links">
         <li><a href="#">home</a></li>
         <li><a href="#">about</a></li>   
         <li><a href="#">menu</a></li>   
         <li><a href="#">chefs</a></li>   
         <li><a href="#">features</a></li>   
         <li><a href="#">contact us</a></li>   
        </ul>

        </nav>
    )
}

export default Header ;
