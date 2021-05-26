import React from 'react'
import logo from './img/apple-icon.png';
import "./Header.css";
import { Link } from 'react-router-dom';


function Header() {
    return (
        <nav className="nav">
           <div className="logo">
               <img src={logo} alt=""></img>
               <h2>Purple <span>Buzz</span></h2>
            </div> 
            <ul className="nav-bar">
                <Link to="home">Home</Link>
                <Link to="about">About</Link>
                <Link to="work">Work</Link>
                <Link to="pricing">Pricing</Link>
                <Link to="contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Header


