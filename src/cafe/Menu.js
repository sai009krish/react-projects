import React from 'react';
import './Menu.css';


function Menu() {
    return (
        <div className="menu">
             <h2>our menu</h2>
             <h1>Our selection of cakes<br/> with quality taste</h1>
             <div className="menu-imgs">
               <div className="menu-01">
               <p>$9</p>
               </div>
               <div className="menu-02">
                 <p>$6</p>
               </div>
               <div className="menu-03">
                 <p>$8</p>
               </div>
               <div className="menu-04">
                  <p>$9.2</p>
               </div>
               <div className="menu-05">
                 <p>$7</p>
               </div>
              
              </div>
         </div>
        )
    }

  export default Menu;
