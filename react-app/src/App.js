import React, {useState } from 'react'
import "./App.css"
import ".index.css"

export default function App() {
  const [count, setcount] = useState(0);

  function handleReset(){
    setcount(0)
  }
  return (
    <div className='App'>

      <h1>Count is {count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

