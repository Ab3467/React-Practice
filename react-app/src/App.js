import React, {useState,useEffect,useRef } from 'react'
import "./App.css"


export default function App() {
  const [count, setcount] = useState(0);

  const [todos,settodos] = useState([
    {
      title : 'Todo 1',
      description : 'hey I am 1st',
    },
    {
      title : 'Todo 2',
      description : 'hey I am 2nd',
    },
    {
      title : 'Todo 3',
      description : 'hey I am 3rd',
    }
  ])


  const Todo = ({todo}) =>{
    return  (
    <div className="m-4 border-1">
     <div className="todo">{todo.title}</div>
     <div className="todo">{todo.description}</div>
     </div>
    
    )
  }

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
      {count && <button onClick={handleReset}>Reset</button>}             {/*conditional rendering */}
       {/* {count ?<button onClick={()=> setcount(!count)}>Reset</button>: "Nothing"}    */}

       {todos.map(todo=>{
        return <Todo todo={todo}/>
        })}
      
    </div>
  )
}



// I will work on it but on Monday

