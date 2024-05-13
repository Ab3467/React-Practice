import React, {useState,useEffect,useRef } from 'react'
import "./App.css"


export default function App() {
  const [cards, setcards] = useState([]);

 
 let fetchData = ()=>{
  let a = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = a.json();
 }
  // function handleReset(){
  //   setcount(0)
  // }

  // let a = useRef(0);    // useRef() rerendering p a ki value ko again 0 ni kry ga 
  // useEffect(() => {
  //     a.current= a.current+1;
  //     console.log(`Value of a is ${a.current}`);
  // },[count]);
  
  return (
    <div className='container'>
    <div className="card">
      {cards}
    </div>
    </div>
    // <div className='App'>

    //   <h1>Count is {count}</h1>
    //   <button onClick={()=>setcount(count+1)}>+</button>
    //   {count && <button onClick={handleReset}>Reset</button>}             {/*conditional rendering */}
    //    {/* {count ?<button onClick={()=> setcount(!count)}>Reset</button>: "Nothing"}    */}

    //    {todos.map(todo=>{
    //     return <Todo todo={todo} key={todo.title}/>
    //     })}
      
    // </div>
  )
}



// I will work on it but on Monday

