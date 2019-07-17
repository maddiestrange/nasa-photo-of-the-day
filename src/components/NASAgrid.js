import React, { useEffect, useState } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";
import VideoCard from './VideoCard'

export default function NASAgrid({ limit }) {
  const [NASAdata, setNASAdata] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=tCfKozFfyXmd2wnRqUB8BVr075hulU9jEoqcvS5G`)
      .then(response => {
        const dailyURL = response.data;
        setNASAdata(dailyURL);
        console.log("NASA api:", dailyURL);
      });
  }, []);
  console.log(NASAdata.media_type)
  if(NASAdata.media_type === 'video'){
      return(
          <div className="video-card">
          <VideoCard src={NASAdata.url} />
          </div>
      )
  }

  else{
  return (
    <div className="NASA-grid">
    <ImgCard key={NASAdata.url} imgUrl={NASAdata.url} />
    </div>
  );
  }
}
