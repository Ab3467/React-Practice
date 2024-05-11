import React, {useState } from 'react'
import "./App.css"

export default function App() {
  const [count, setcount] = useState(0);
  return (
    <div className='App'>

      <h1>Count is {count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      
    </div>
  )
}

