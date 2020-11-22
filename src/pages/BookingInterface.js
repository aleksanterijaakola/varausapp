import React, { useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { BiCalendar } from 'react-icons/bi'

const BookingInterface = () => {
  const [date, setDate] = useState(new Date())
  const [selectedTimes, setSelectedTimes] = useState([])
  const [selectedComputer, setSelectedComputer] = useState([])

  const handleSelectTimes = function (selectedItems) {
    const times = []
    for (let i = 0; i < selectedItems.length; i++) {
      times.push(selectedItems[i].value)
    }
    setSelectedTimes(times)
  }

  async function handleSubmit (e) {
    e.preventDefault()
    console.log(date, selectedTimes, selectedComputer)
  }

  return (
    <div class="book-page">
      <article class="text-center">
        <form class="form-signin" onSubmit={handleSubmit}>
          Date
          <div class="form-group">
            <div class="mb-4">
              <label class="sr-only">Date</label>
              <label>
                <DatePicker
                  required
                  format={'y-MM-dd'}
                  selected={date}
                  onChange={setDate}
                  value={date}
                />
                <BiCalendar/>
              </label>
            </div>
            <div>
              <label class="sr-only">Computer ID</label>
              <select class="form-control" onChange={(e) => {setSelectedComputer(e.target.selectedOptions[0].value)}}>
                <option value="1">Computer 1</option>
                <option value="2">Computer 2</option>
                <option value="3">Computer 3</option>
                <option value="4">Computer 4</option>
                <option value="5">Computer 5</option>
              </select>
            </div>
          </div>
          <div className="timeContainer">
            <select multiple={true} value={selectedTimes} onChange={(e) => {handleSelectTimes(e.target.selectedOptions)}}>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
            </select>
          </div>
          <div className="d-flex justify-content-around mt-3 mb-4">
            <button type="submit" className="btn btn-primary text-white">
              BOOK SELECTION
            </button>
          </div>
        </form>
      </article>
      <h6>
        A great interface to book your seat at <em>theFirma</em>!
      </h6>
    </div>
  )
}

export default BookingInterface

