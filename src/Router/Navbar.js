import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
        <div className="nav-bar">
            <Link to="/Home">Home</Link>
            <Link to="Products">Products</Link>
            <Link to="Features">Features</Link>
            <Link to="Contact">Contact</Link>
            <Link to="About">About</Link>
        </div>
    )
}

export default Navbar
