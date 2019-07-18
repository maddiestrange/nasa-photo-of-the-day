import React from "react";
import DateSelector from './DateSelector'
import { Image, Title, Wrapper, Column, Flex } from "./StyledWidgets";


export default function NASACard(props) {
  if(props.media_type === 'video'){
    return(
      <div className="NASA-video-card">
      <Flex justifyAround>
        <Column>
          <iframe width="960" title='idk' height="540" src={props.url} frameBorder="0" allowFullScreen="" allow="autoplay; encrypted-media; gyroscope; picture-in-picture">...</iframe>
          <h2>{props.title}</h2>
        </Column>

        <Column three>
          <DateSelector newDate={props.newDate}/>
          <p>{props.explanation}</p>
          
        </Column>
      </Flex>
      </div>
    );
}

else{
  return (
    <div className="NASA-card">
      <Flex justifyAround>
        <Column>
          <Image src={props.url}/>
          <h2>{props.title}</h2>
        </Column>
        <Column three>
          <DateSelector newDate={props.newDate}/>
          <p>{props.explanation}</p>
        </Column>
      </Flex>
    </div>
  )
}

}
