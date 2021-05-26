import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="Products">
           <div className = "col-1">
            <img src="https://m.media-amazon.com/images/I/51JNAFQ4cXL._AC_UL320_.jpg" alt=""/>
            <h2>women</h2>
            <h3>spring latest</h3>   
            </div>
            <div className="col-2">
             <img src="https://m.media-amazon.com/images/I/61YQd1wdQBL._AC_UL320_.jpg" alt=""/>
              <h2>MEN</h2>
              <h3>spring latest</h3>
            </div> 
             <div className="col-3">
               <img src="https://m.media-amazon.com/images/I/61F5zX8rKEL._AC_UL320_.jpg" alt=""/>
               <h2>PRODUCTS</h2>
               <h3>spring latets</h3>  
             </div>
        </div>
        
    )
}

export default Product ;
