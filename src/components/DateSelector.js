import React from "react";

const DateSelector = ({ newDate }) => {
    return (
        <form action="">
          <label>Select a date: </label>
          <input type="date" onChange={newDate}/>
        </form>
    );
  };
  
  export default DateSelector;