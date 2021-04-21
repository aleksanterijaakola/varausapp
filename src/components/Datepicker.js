import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "../App.css";

import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const [startDate, setStartDate] = useState(null); 
  const isWeekday = date => {
      const day = date.getDay(date);
      return day !== 0 && day !== 6;
  }
  return (
    <DatePicker 
      selected={startDate}
      onChange={date => setStartDate(date)}
      format={"dd/MM/yyyy"}
      minDate={new Date()}
      locale="en-GB"
      // placeholderText="Select a date"
      filterDate={isWeekday}
    />
  );
}

export default Booking;
