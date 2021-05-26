import React from 'react'
import './Overview.css'

function Overview() {
    return (
        <div className="overview">
           <div className="container">
            <h1>product overview</h1>
             <ul className="links">
             <li><a>all products</a></li>
             <li><a>women</a></li>
             <li><a>men</a></li>
             <li><a>bag</a></li>
             <li><a>shoes</a></li>
             <li><a>watches</a></li>
            </ul>   
           </div> 
            <div className="rows">
            <div className="row-1">
             <img src="https://m.media-amazon.com/images/I/61wG7xGVDaL._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/51m8NTcn6HL._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/61eM1vzP7BL._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/611GP3vydTL._AC_UL320_.jpg" alt=""/>
            </div>
            <div className="row-2">
             <img src="https://m.media-amazon.com/images/I/71PlpKC15tL._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/91XSDyfq12L._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/81bTx1RH6qL._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/81OsPCowZTL._AC_UL320_.jpg" alt=""/>
            </div>
            <div className="row-3">
             <img src="https://m.media-amazon.com/images/I/71b4GRgKoCL._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/51m8NTcn6HL._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/61WIPhJErzL._AC_UL320_.jpg" alt=""/>
             <img src="https://m.media-amazon.com/images/I/812UgHxL2JL._AC_UL320_.jpg" alt=""/>
            </div>
            </div> 
        </div>
    )
}

export default Overview
