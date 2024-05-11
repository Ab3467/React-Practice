import React, {useState,useEffect } from 'react'
import "./App.css"


export default function App() {
  const [count, setcount] = useState(0);

  function handleReset(){
    setcount(0)
  }

  useEffect(() => {
      alert("Hi I am useEffect , the React's Hook");
  }, [])
  
  return (
    <div className='App'>

      <h1>Count is {count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

