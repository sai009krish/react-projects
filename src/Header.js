import React from 'react' ;
import './Header.css'

function Header() {
    return (
        <div className="Header">
           <div className="Header-logo">
               <h1>Logo</h1>
               </div>
           <div className="Header-navigation">
               <a href="#">Home</a>
               <a href="#">About</a>
               <a href="#">Services</a>
               <a href="#">Contact</a>
           </div>    


        </div>
    )
}

export default Header ;




