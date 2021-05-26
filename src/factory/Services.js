import React from 'react'
import './Services.css'
import icon1 from './images/about-icon-01.png'
import icon2 from './images/about-icon-02.png'
import icon3 from './images/about-icon-03.png'

function Services() {
    return (
        <div id="services-nav" className="services">
            <div className="icon-1">
             <img src={icon1} alt="icon1"></img>
             <h2>First Box Service</h2>
             <p>aenan vulputate masa sed neque <br></br>consecutor ac frini consecutoer ac friling quam alique sed <br></br>enim nec eros tempor cursus at id libero </p>
              <a href="#">READ MORE</a>
            </div>
            <div className="icon-2">
            <img src={icon2} alt="icon2"></img>
            <h2>Second Box Service</h2>
            <p>aenan vulputate masa sed neque <br></br>consecutor ac frini consecutoer ac friling quam alique sed <br></br>enim nec eros tempor cursus at id libero </p>
            <a href="#">READ MORE</a>
            </div>
            <div className="icon-3">
            <img src={icon3} alt="icon3"></img>
            <h2>three Box Service</h2>
            <p>aenan vulputate masa sed neque <br></br>consecutor ac frini consecutoer ac friling quam alique sed <br></br>enim nec eros tempor cursus at id libero </p>
            <a href="#">READ MORE</a>
            </div>
        </div>
    )
}

export default Services
