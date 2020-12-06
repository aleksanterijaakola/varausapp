import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { BiCalendar } from 'react-icons/bi'
import { Column, Row } from 'simple-flexbox'

const BookingInterface = () => {
  const [date, setDate] = useState(new Date())
  const [selectedTimes, setSelectedTimes] = useState([])
  const [selectedComputer, setSelectedComputer] = useState([])
  const computer = []
  const numberOfComputers = 8


  const handleSelectTimes = function (selectedItems) {
    const times = []
    for (let i = 0; i < selectedItems.length; i++) {
      times.push(selectedItems[i].value)
    }
    setSelectedTimes(times)
  }

  const loadComputerItems = function () {
    for (let i = 0; i < numberOfComputers; i++) {
      computer.push(<option value={i}>Computer {i}</option>)
    }
    return computer
  }

  const loadPossibleTimesMorning = function () {
    // get booked times from database and load them here
    const bookedTimes = []
    const times = []
    for (let i = 8; i <= 11; i++) {
      if (!bookedTimes.includes(i)) {
        times.push(<option value={i}>{i}:00</option>)
      }
    }
    return times
  }

  const loadPossibleTimesNoon = function () {
    // get booked times from database and load them here
    const bookedTimes = []
    const times = []
    for (let i = 12; i <= 15; i++) {
      if (!bookedTimes.includes(i)) {
        times.push(<option value={i}>{i}:00</option>)
      }
    }
    return times
  }

  const loadPossibleTimesEvening = function () {
    // get booked times from database and load them here
    const bookedTimes = []
    const times = []
    for (let i = 16; i <= 19; i++) {
      if (!bookedTimes.includes(i)) {
        times.push(<option value={i}>{i}:00</option>)
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
        <form class="form-signin" onSubmit={handleSubmit} style={{ marginTop: '150px' }}>
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
              <select class="form-control" style={{ textAlign: 'center' }}
                      onChange={(e) => {setSelectedComputer(e.target.selectedOptions[0].value)}}>

                <option value="0">any Computer</option>
                {loadComputerItems()}
              </select>
            </div>
          </div>
          <div className="timeContainer">
            <div>
              <Column flexGrow={1}>
                <Row horizontal='center'>
                </Row>
                <Row vertical='center'>
                  <Column flexGrow={1} horizontal='center'>
                    <h8> Morning</h8>
                    <span>  <select multiple={true} value={selectedTimes}
                                    onChange={(e) => {handleSelectTimes(e.target.selectedOptions)}}>
                {loadPossibleTimesMorning()}
            </select> </span>
                  </Column>
                  <Column flexGrow={1} horizontal='center'>
                    <h8> Noon</h8>
                    <span>  <select multiple={true} value={selectedTimes}
                                    onChange={(e) => {handleSelectTimes(e.target.selectedOptions)}}>
                {loadPossibleTimesNoon()}
            </select> </span>
                  </Column>
                  <Column flexGrow={1} horizontal='center'>
                    <h8> Evening</h8>
                    <span>  <select multiple={true} value={selectedTimes}
                                    onChange={(e) => {handleSelectTimes(e.target.selectedOptions)}}>
                {loadPossibleTimesEvening()}
            </select> </span>
                  </Column>
                </Row>
              </Column>


            </div>
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

