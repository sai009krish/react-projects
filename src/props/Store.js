import React from 'react'

function Store(props) {
    return (
        <div className="store">
            <div className="reciving">
            <img src={props.img} alt=""/>
            <h2>{props.name}</h2> 
           <h3>{props.name2}</h3>
          
            </div>
          

        </div>
    )
}

export default Store ;
