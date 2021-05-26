import React from 'react';
import './Header.css'



function Header() {
    return (
      <nav className="nav">
      <div className="logo">
        <h2>ART FACTORY</h2>
      </div>
      <ul className="nav-bar">
        <li><a href="#">Home</a></li>
        <li><a  href="#about-nav">About</a></li>
        <li><a href="#services-nav">Services</a></li>
        <li><a href="#frequently-nav">Frequently Questions</a></li>
        <li>< a href="">DROPDOWN</a></li>
        <li><a href="">CONTACT US</a></li>
      </ul>
    </nav>
    )
}

export default Header
