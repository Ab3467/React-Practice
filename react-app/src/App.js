import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='container'>
      {cards.map((card) => (
        <div className='card' key={card.id}>
          <h1>{card.id}</h1>
          <p>{card.body}</p>
          <span>By: User ID {card.userId}</span>
        </div>
      ))}
    </div>
  );
}
