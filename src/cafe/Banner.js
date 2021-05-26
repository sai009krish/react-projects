import React from 'react' ;
import side from './images/slide-03.jpg';
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
          <div className="left">
           <h2>klassycafe</h2>
           <h3>the best experience</h3>
           <a href="#">Make a Reservation</a>
         </div>
          <aside className="aside">
          <img src={side} alt='bg'/>  
          </aside>
        </div>
    )
}

export default Banner ;

