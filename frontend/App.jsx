
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [sentiments, setSentiments] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get('http://localhost:5000/sentiments').then(res => {
        setSentiments(res.data);
      });
    };
    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Real-time Sentiment Dashboard</h1>
      {sentiments.map((s, index) => (
        <div key={index}>
          <p>{s.text} | Polarity: {s.polarity.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
