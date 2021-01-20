import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar } from "react-icons/bi";
import { Column, Row } from "simple-flexbox";
import Navbar from "../components/Navbar";

const BookingInterface = () => {
  const [date, setDate] = useState(new Date());
  const [selectedTimesMorning, setSelectedTimesMorning] = useState([]);
  const [selectedTimesNoon, setSelectedTimesNoon] = useState([]);
  const [selectedTimesEvening, setSelectedTimesEvening] = useState([]);
  const [selectedComputer, setSelectedComputer] = useState([]);
  const computer = [];
  const numberOfComputers = 8;

  const handleSelectTimes = function (selectedItems, mode) {
    const times = [];
    for (let i = 0; i < selectedItems.length; i++) {
      times.push(selectedItems[i].value);
    }
    if (mode === "mo") {
      setSelectedTimesMorning(times);
    }

    if (mode === "no") {
      setSelectedTimesNoon(times);
    }

    if (mode === "ev") {
      setSelectedTimesEvening(times);
    }
  };

  const loadComputerItems = function () {
    for (let i = 0; i < numberOfComputers; i++) {
      computer.push(<option value={i}>Computer {i}</option>);
    }
    return computer;
  };

  const loadPossibleTimes = function (start, end) {
    // get booked times from database in a different function and access them here as bookedTimes
    const bookedTimes = [];
    const times = [];
    for (let i = start; i <= end; i++) {
      if (!bookedTimes.includes(i)) {
        times.push(<option value={i}>{i}:00</option>);
      }
    }
    return times;
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const selectedTimes = selectedTimesMorning.concat(
      selectedTimesNoon,
      selectedTimesEvening
    );
    console.log(date, selectedTimes, selectedComputer);
  }

  return (
    <div className="book-page">
      <Navbar />
      <article className="text-center">
        <form
          className="form-signin"
          onSubmit={handleSubmit}
          style={{ marginTop: "150px" }}
        >
          Date
          <div className="form-group">
            <div className="mb-4">
              <label className="sr-only">Date</label>
              <label>
                <DatePicker
                  required
                  format={"y-MM-dd"}
                  selected={date}
                  onChange={(date) => setDate(date)}
                  value={date}
                />
                <BiCalendar />
              </label>
            </div>
            <div>
              Select preferred Computer:
              <label className="sr-only">Computer ID</label>
              <select
                className="form-control"
                style={{ textAlign: "center" }}
                onChange={(e) => {
                  setSelectedComputer(e.target.selectedOptions[0].value);
                }}
              >
                <option value="0">any Computer</option>
                {loadComputerItems()}
              </select>
            </div>
          </div>
          <div className="timeContainer">
            <div>
              <Column flexGrow={1}>
                <Row horizontal="center">
                  <span> </span>
                </Row>
                <Row vertical="center">
                  <Column flexGrow={1} horizontal="center">
                    <h6> Morning</h6>
                    <span>
                      {" "}
                      <select
                        multiple={true}
                        value={selectedTimesMorning}
                        className="form-control text-center text-black"
                        onChange={(e) => {
                          handleSelectTimes(e.target.selectedOptions, "mo");
                        }}
                      >
                        {loadPossibleTimes(8, 11)}
                      </select>{" "}
                    </span>
                  </Column>
                  <Column flexGrow={1} horizontal="center">
                    <h6> Noon</h6>
                    <span>
                      {" "}
                      <select
                        multiple={true}
                        value={selectedTimesNoon}
                        className="form-control text-center text-black"
                        onChange={(e) => {
                          handleSelectTimes(e.target.selectedOptions, "no");
                        }}
                      >
                        {loadPossibleTimes(12, 15)}
                      </select>{" "}
                    </span>
                  </Column>
                  <Column flexGrow={1} horizontal="center">
                    <h6> Evening</h6>
                    <span>
                      {" "}
                      <select
                        multiple={true}
                        value={selectedTimesEvening}
                        className="form-control text-center text-black"
                        onChange={(e) => {
                          handleSelectTimes(e.target.selectedOptions, "ev");
                        }}
                      >
                        {loadPossibleTimes(16, 19)}
                      </select>{" "}
                    </span>
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
  );
};

export default BookingInterface;
