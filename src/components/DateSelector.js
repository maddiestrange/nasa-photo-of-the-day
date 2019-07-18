import React from "react";

const DateSelector = ({ newDate }) => {
    return (
        <form action="">
          <label><h3>Date: </h3></label>
          <input type="date" onChange={newDate}/>
        </form>
    );
  };
  
  export default DateSelector;