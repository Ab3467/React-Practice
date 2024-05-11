import React, {useState } from 'react'

export default function App() {
  const [count, setcount] = useState(0);
  return (
    <div>

      <h1>Count is {count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      
    </div>
  )
}

