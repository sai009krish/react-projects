import React from 'react'

function Card1(props){
    return (
        <div>
          <h1>name:{props.name}</h1>
          <img src={props.image} />  
           <h2>{props.children}</h2>
          <h1>age:{props.age}</h1>
        </div>
    )
}
export default Card1;
