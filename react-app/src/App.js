import React, {useState,useEffect,useRef } from 'react'
import "./App.css"


export default function App() {
  const [count, setcount] = useState(0);


  function handleReset(){
    setcount(0)
  }

  let a = useRef(0);    // useRef() rerendering p a ki value ko again 0 ni kry ga 
  useEffect(() => {
      a.current= a.current+1;
      console.log(`Value of a is ${a.current}`);
  },[count]);
  
  return (
    <div className='App'>

      <h1>Count is {count}</h1>
      <button onClick={()=>setcount(count+1)}>+</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}



// I will work on it but on Monday

