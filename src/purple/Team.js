import React from 'react'
import './Team.css'
import team1 from './img/team-01.jpg' 
import team2 from './img/team-02.jpg' 
import team3 from './img/team-03.jpg' 

function Team() {
    return (
        <div className="team">
            <div className="left-cont">
            <h2>Our Team</h2>
            <p>Lorem ipsum dolor sit amet,<br></br> consectetur adipiscing elit, sed do<br></br> eiusmod tempor incididunt ut labore<br></br> et dolore magna aliqua.</p>
             </div>
              <div className="right-cont">
                <img src={team1} alt="team1"></img>
                <img src={team2} alt="team2"></img>
                <img src={team3} alt="team3"></img>
              </div>

            </div>
    )
}

export default Team
