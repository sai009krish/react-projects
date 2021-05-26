import React from 'react';
import video from './images/about-video-bg.jpg';
import thumb1 from './images/about-thumb-01.jpg';
import thumb2 from './images/about-thumb-02.jpg';
import thumb3 from './images/about-thumb-03.jpg';
import './About.css'

function About() {
    return (
        <div className="about">
         <div className="left1">
          <h2>ABOUT US</h2><br/>
          <h1>We Leave A Delicious<br/> Memory For You</h1><br/>
          <p>   
          Klassy Cafe is one of the best restaurant HTML templates with Bootstrap<br/> v4.5.2 CSS framework. You can download and feel free to use this website<br/> template layout for your restaurant business. You are allowed to use this<br/> template for commercial purposes.
        <br/><br/>You are NOT allowed to redistribute the template ZIP file on any template<br/> donwnload website. Please contact us for more information.
          </p>
          <div className="thumbs">
            <img src={thumb1} alt=""/>
            <img src={thumb2} alt=""/>
            <img src={thumb3} alt=""/>
          </div>
         </div>
         <div className="right1">
          <img src={video} alt=""/>
         </div>
        </div>
    )
}

export default About;
