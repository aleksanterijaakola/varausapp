import React, { useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { BiCalendar } from 'react-icons/bi'

const BookingInterface = () => {
  const [date, setDate] = useState(new Date())
  const [selectedTimes, setSelectedTimes] = useState([])
  const [selectedComputer, setSelectedComputer] = useState([])
  const computer = []
  const numberOfComputers = 8
  const times = []

  const handleSelectTimes = function (selectedItems) {
    const times = []
    for (let i = 0; i < selectedItems.length; i++) {
      times.push(selectedItems[i].value)
    }
    setSelectedTimes(times)
  }

  const loadComputerItems = function (){
    for (let i = 0; i < numberOfComputers; i++) {
      computer.push(<option value={i}>Computer {i}</option>);
    }
    return computer
  }

  const loadPossibleTimes = function (){
    // get booked times from database and load them here
    const bookedTimes = []
    for (let i = 8; i <= 19; i++) {
      if (!bookedTimes.includes(i))
      {
        times.push(<option value={i}>{i}:00</option>);
      }
    }
    return times
  }

  async function handleSubmit (e) {
    e.preventDefault()
    console.log(date, selectedTimes, selectedComputer)
  }

  return (
    <div class="book-page">
      <article class="text-center">
        <form class="form-signin" onSubmit={handleSubmit} style={{marginTop:"150px"}}>
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
              Select preferred Computer:
              <label class="sr-only">Computer ID</label>
              <select class="form-control" style={{textAlign:"center"}} onChange={(e) => {setSelectedComputer(e.target.selectedOptions[0].value)}}>

                <option value="0">any Computer</option>
                {loadComputerItems()}
              </select>
            </div>
          </div>
          <div className="timeContainer">
            <select multiple={true} value={selectedTimes} onChange={(e) => {handleSelectTimes(e.target.selectedOptions)}}>
              {loadPossibleTimes()}
            </select>
          </div>
          <div className="d-flex justify-content-around mt-3 mb-4">
            <button type="submit" className="btn btn-primary text-white">
              BOOK SELECTION
            </button>
          </div>
        </form>
      </article>
    </div>
  )
}

export default BookingInterface

