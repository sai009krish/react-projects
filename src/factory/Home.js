import React from 'react'
import './Home.css'
import slider from './images/slider-icon.png'

function Home() {
    return (
        <div className="home">
            <div className="slider">
            <h2>Art Factory is free <br></br>for YOU</h2>
            <p>This template is available for 100% free of charge on TemplateMo.<br></br> Download, modify and use this for your business website.</p>
            <a href="#"> FIND OUT MORE</a>
            </div>
            <div className="slider-icon">
              <img src={slider} alt="slider"></img>
            </div>
            </div>

    )
}

export default Home;
