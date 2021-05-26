import React,{useState} from 'react'

function Hookcount() { 
    const [count,setcount]=useState(0);
    return (
        <div className='app'>
            <h1>{count}</h1>
            <button onClick={()=>setcount(count+1)}>inc</button>
        </div>
    )
}

export default Hookcount
