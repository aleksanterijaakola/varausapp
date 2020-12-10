import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useHistory } from "react-router-dom";
import "../App.css";
import 'react-datepicker/dist/react-datepicker.css'
import { BiCalendar } from 'react-icons/bi'
import { Column, Row } from 'simple-flexbox'
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";

import { faList,faDesktop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookingInterface = () => {
  const [date, setDate] = useState(new Date())
  const [selectedTimesMorning, setSelectedTimesMorning] = useState([])
  const [selectedTimesNoon, setSelectedTimesNoon] = useState([])
  const [selectedTimesEvening, setSelectedTimesEvening] = useState([])
  const [selectedComputer, setSelectedComputer] = useState([])
  const computer = []
  const numberOfComputers = 8
  const history = useHistory();
  const [inputcheck, setchecked] = useState(false);
 

  function changepage(){
   
    history.push('/dashboard');

  };

  const handleSelectTimes = function (selectedItems, mode) {
    const times = []
    for (let i = 0; i < selectedItems.length; i++) {
      times.push(selectedItems[i].value)
    }
    if (mode === 'mo') {
      setSelectedTimesMorning(times)
    }

    if (mode === 'no') {
      setSelectedTimesNoon(times)
    }

    if (mode === 'ev') {
      setSelectedTimesEvening(times)
    }

  }

  const loadComputerItems = function () {
    for (let i = 0; i < numberOfComputers; i++) {
      computer.push(<option value={i}>Computer {i}</option>)
    }
    return computer
  }

  const loadPossibleTimes = function (start, end) {
    // get booked times from database in a different function and access them here as bookedTimes
    const bookedTimes = []
    const times = []
    for (let i = start; i <= end; i++) {
      if (!bookedTimes.includes(i)) {
        times.push(<option value={i}>{i}:00</option>)
      }
    }
    return times
  }

  async function handleSubmit (e) {
    e.preventDefault()
    const selectedTimes = selectedTimesMorning.concat(selectedTimesNoon, selectedTimesEvening)
    console.log(date, selectedTimes, selectedComputer)
  }

  return (
    <div class="book-page">
      <header className="headernav" >
        <nav className='headernavtag'>
          <input type="checkbox" className='navcheckbox'  checked={inputcheck} id="checkedornot"/>
          <label onClick={() => {setchecked(old => !old)}} className='navicon'  style={{marginBottom: 0}}><FontAwesomeIcon icon={faList} color='white' /></label>
 
          
         
          <label className='labelfirmaimg' style={{marginBottom: 0}}>
            <img className='firmaimg' src={thefirmalogo}>

            </img>

          </label>
          <ul className='navdivisionlist'>
            <li className='navdivisionlistitem' onClick={() => {setchecked(old => !old); changepage()}}>My Bookings

            </li>
            <li className='navdivisionlistitem activecolor' onClick={() => {setchecked(old => !old);}}>Reserve System
              
            </li>
            <li className='navdivisionlistitem' onClick={() => {setchecked(old => !old)}}>Log Out
              
            </li>
          </ul>


        </nav>
      </header>
      <article className="articlemybookings" style={{textAlign: "center"}}>
      <div  className='Headingtop' style={{paddingBottom: 0, marginBottom: 0,alignItems: "center", justifyContent: "center",textAlign: "center"}}>Book a System
        </div>
      </article>

      
      <article class="text-center"  style={{paddingTop: 0}}>
        <form class="form-signin" onSubmit={handleSubmit} >
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
                  filterDate={date => date.getDay() != 6 && date.getDay() != 0} 
                  minDate={new Date()}
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
                    <span>  <select multiple={true} value={selectedTimesMorning}
                                    class="form-control text-center text-black"
                                    onChange={(e) => {handleSelectTimes(e.target.selectedOptions, 'mo')}}>
                {loadPossibleTimes(8, 11)}
            </select> </span>
                  </Column>
                  <Column flexGrow={1} horizontal='center'>
                    <h8> Noon</h8>
                    <span>  <select multiple={true} value={selectedTimesNoon}
                                    class="form-control text-center text-black"
                                    onChange={(e) => {handleSelectTimes(e.target.selectedOptions, 'no')}}>
                {loadPossibleTimes(12, 15)}
            </select> </span>
                  </Column>
                  <Column flexGrow={1} horizontal='center'>
                    <h8> Evening</h8>
                    <span>  <select multiple={true} value={selectedTimesEvening}
                                    class="form-control text-center text-black"
                                    onChange={(e) => {handleSelectTimes(e.target.selectedOptions, 'ev')}}>
                {loadPossibleTimes(16, 19)}
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

      <hr style={{marginLeft: '30%',marginRight: '30%'}}/>

      <footer style={{justifyContent: "center", display: "flex"}}>

      
        <img src={turkuamklogo} style={{height: 50}}/>
      </footer>

    </div>
  )
}

export default BookingInterface;
