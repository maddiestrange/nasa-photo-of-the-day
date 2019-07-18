import React from "react";
//import { tsPropertySignature } from "@babel/types";

export default function NASACard(props) {
  if(props.media_type === 'video'){
    return(
      <div className="NASA-video-card">
      <h2>{props.title}</h2>
      <iframe width="960" title='idk' height="540" src={props.url} frameBorder="0" allowFullScreen="" allow="autoplay; encrypted-media; gyroscope; picture-in-picture">...</iframe>
      <h3>Date: {props.date}</h3>
      <p>{props.explanation}</p>
      </div>
    )
}

else{
  return (
    <div className="NASA-card">
      <h2>{props.title}</h2>
      <img src={props.url}/>
      <h3>Date: {props.date}</h3>
      <p>{props.explanation}</p>
    </div>
  )
}
}
