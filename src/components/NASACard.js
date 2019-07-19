import React from "react";
import DateSelector from './DateSelector'
//import { Image, Title, Wrapper, Column, Flex } from "./StyledWidgets";


export default function NASACard(props) {
  if(props.media_type === 'video'){
    return(
      <div className="NASA-card">
      <div className="daily-card">
          <iframe width="960" title='idk' height="540" src={props.url} frameBorder="0" allowFullScreen="" allow="autoplay; encrypted-media; gyroscope; picture-in-picture">...</iframe>
      </div>
        <div className='content'>
          <h2>{props.title}</h2>
          <p>{props.explanation}</p>
          <DateSelector newDate={props.newDate}/>
        </div>
      </div>
    );
}

else{
  return (
    <div className="NASA-card">
      <div className="daily-card">
          <img src={props.url}/>
          <h3>{props.date}: NASA Photo of the Day</h3>
        </div>

        <div class="ui card">
          <div class="content">
            <div class="header">{props.title}</div>
          </div>
          <div class="content">
            <div class="ui small feed">
              <div class="event">
                <div class="content">
                  <div class="summary">{props.explanation}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="extra content">
          <DateSelector newDate={props.newDate}/>
          </div>
        </div>
    </div>
    
  )
}

}
