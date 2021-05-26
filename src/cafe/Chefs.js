import React from 'react'
import './Chefs.css'



function Chefs(props) {
    return (
      <div className="chefs">
        <div className="chef-imgs">
          <div className="chef1">
            <img src={props.image} alt="" />
            <h2>{props.name}</h2>
            <p>{props.name2}</p>
          </div>
        </div>
      </div>
    );
}

export default Chefs;
