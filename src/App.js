
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import NASAcard from './components/NASACard'

function App() {
  const [data, setData] = useState([]);
  //const [date, setDate] = useState({today});

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=tCfKozFfyXmd2wnRqUB8BVr075hulU9jEoqcvS5G`)
      .then(response => {
        setData(response.data);
        console.log("NASA api:", response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>
      👽 🔭 Daily NASA Dose 🌌
      </h1>
      <NASAcard title={data.title}
                url={data.url}
                explanation={data.explanation}
                date={data.date}
                media_type={data.media_type}
                />
    </div>
  );
}

export default App;
