import React from 'react'
import './About.css'
import left from './images/left-image.png'

function About() {
    return (
        <div id="about-nav" className="about">
            <div className="left">
          <img src={left} alt="left"></img>
            </div>
           <div className="right">
             <h2>Vivamus sodales nisi id ante molestie venenatis</h2>
             <p>This template is last updated on 20 August 2019 for main<br></br> menu drop-down arrow and sub menu text color. Duis<br></br> auctor dolor eu scelerisque vestibulum.<br></br> Vestibulum lacinia, nisl sit amet tristique condimentum.

           <br></br> Sed a consequat velit. Morbi lectus sapien, vestibulum et<br></br> sapien sit amet, ultrices malesuada odio. Donec non quam <br></br>euismod, mattis dui a, ultrices nisi.</p>
            <a href="#">DISCOVER MORE</a>
            </div>
             
        </div>
    )
}

export default About;
