import React from 'react'
import './Store.css'


function Store(props) {
    return (
        <div className="store">
         <img src={props.img} alt=""></img>
           <h2>{props.h2}</h2>
           <p>{props.p}</p>

        </div>
    );
}

export default Store;

