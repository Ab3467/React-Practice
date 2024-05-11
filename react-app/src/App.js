import React, {useState,useEffect } from 'react'
import "./App.css"


export default function App() {
  const [count, setcount] = useState(0);


  function handleReset(){
    setcount(0)
  }

  let a = 5;
  useEffect(() => {
    a= a+1;
      console.log(`Value of a is ${a}`);
  });
  
  return (
    <div className='App'>

      <h1>Count is {count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

