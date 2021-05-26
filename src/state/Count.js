import React,{useState} from 'react'

function Count() {

const [count, setcount] = useState(0)
    return (
        <div className="counter">
             <h2>{count}</h2>
             <button onClick={()=>setcount(count+1)}>increment</button>
            <button onClick={()=>setcount(count-1)}>decrement</button>
            </div>
    )
}

export default Count
