import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <nav className="nav-bar">
        <div className="logo">
          <h2>
          <span>COZA </span>STORE
          </h2>
        </div>
        <ul className="nav-links">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>SHOP</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h3>new collection </h3>
        <h1>new season</h1>
        <a href="#">shop now</a>
      </div>
    </div>
  );
}

export default Header;
