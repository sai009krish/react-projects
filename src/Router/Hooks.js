import React ,{useState} from 'react'
//state , setStat()
//merge 
function Hooks() {
    const [counter, setCounter]=useState(0);
    const [bgcolor, setbgcolor]=useState('blue')
    const [emp , setEmp]=useState({id:1, name:'ravi', city:'hyd'})
    console.log(emp);
    return (
       
        <div>
            <h1 style={{backgroundColor:bgcolor}}>{counter} </h1>
            <h1> {emp.name} {emp.city}</h1>
            
            <button onClick={
                ()=>{
                    setCounter(counter+1);
                    setbgcolor('red');                   
                    setEmp({...emp , city:'vza'});                    
                }              

            }
            >increment</button>
        </div>
    )
}

export default Hooks
