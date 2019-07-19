import React from "react";

const DateSelector = ({ newDate }) => {
    return (
        <form action="">
          <div class="ui divided selection list">
            <a class="item">
              <a class="ui red horizontal label">Date:</a>
              <input type="date" onChange={newDate}/>
            </a>
            </div>
        </form>
    );
  };
  
  export default DateSelector;