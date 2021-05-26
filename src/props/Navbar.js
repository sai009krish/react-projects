import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div style={{display:'flex', justifyContent:'space-between',padding:'20px',backgroundColor:'lightgray'}}>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
            <hr/>
        </div>
    )
}

export default Navbar
