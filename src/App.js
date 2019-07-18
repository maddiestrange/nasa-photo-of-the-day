
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NASAcard from './components/NASACard'


function App() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;

  console.log(today);
  const [date, setDate] = useState(today);
  const [data, setData] = useState([]);
  

  const newDate = event => {
    setDate(event.target.value);
    console.log(event.target);
  };

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=tCfKozFfyXmd2wnRqUB8BVr075hulU9jEoqcvS5G&date=${date}`)
      .then(response => {
        setData(response.data);
        console.log("NASA api:", response.data);
      });
  }, [date]);

  return (
    <div className="App">
      <h1>
      👽 🔭 Daily NASA Dose 🌌
      </h1>
      <NASAcard title={data.title}
                url={data.url}
                explanation={data.explanation}
                date={data.date}
                newDate={newDate}
                media_type={data.media_type}
                />
                
    
    </div>
  );
}

export default App;
