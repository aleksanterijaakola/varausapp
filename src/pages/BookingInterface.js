import React, { useState, useRef } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BookingInterface = () => {
  const [date, setDate] = useState(new Date());

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(date)
  }


  return (
    <div class="book-page">
      <article class="text-center">
        <form class="form-signin" onSubmit={handleSubmit}>
          <div class="form-group">
            <div class="mb-4">
              Date:
              <label class="sr-only">Date</label>
              <DatePicker
                required
                format={"y-MM-dd"}
                selected={date}
                onChange={setDate}
                value={date}
              />
            </div>
            <div>
              <label class="sr-only">Computer ID</label>
              <select class="form-control">
                <option>Computer 1</option>
                <option>Computer 2</option>
                <option>Computer 3</option>
                <option>Computer 4</option>
                <option>Computer 5</option>
              </select>
            </div>
          </div>
        </form>
      </article>
      <h6>
        A great interface to book your seat at <em>theFirma</em>!
      </h6>
    </div>
  )
};

export default BookingInterface;

