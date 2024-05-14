import React from 'react'



export default function App() {
  const [cards, setcards] = useState([]);

 
 let fetchData = async()=>{
  let a = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await a.json();
  setcards(data);
 }

 useEffect(() => {
  fetchData();
 }, [])
 
 
  
  return (
    <div className='container'>
    {cards.map((card)=>{
       return <div className="card" key={card.id}>
       <h1>{card.id}</h1>
       <p>{card.body}</p>
       <span>By: UserId {card.userId}</span>
       </div>
      })}
    </div>
 
  )
}





