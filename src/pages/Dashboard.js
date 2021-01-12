import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";

import { faList, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  const history = useHistory();
  const [inputcheck, setchecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  function changepage() {
    history.push("/reserve");
  }

  return (
    <React.Fragment>
      <main style={{ paddingTop: 0 }}>
        <header className="headernav">
          <nav className="headernavtag">
            <input
              type="checkbox"
              className="navcheckbox"
              checked={inputcheck}
              id="checkedornot"
            />
            <label
              onClick={() => {
                setchecked((old) => !old);
              }}
              className="navicon"
              style={{ marginBottom: 0 }}
            >
              <FontAwesomeIcon icon={faList} color="white" />
            </label>

            <label className="labelfirmaimg" style={{ marginBottom: 0 }}>
              <img className="firmaimg" src={thefirmalogo} alt=""></img>
            </label>
            <ul className="navdivisionlist">
              <li
                className="navdivisionlistitem activecolor"
                onClick={() => {
                  setchecked((old) => !old);
                }}
              >
                My Bookings
              </li>
              <li
                className="navdivisionlistitem"
                onClick={() => {
                  setchecked((old) => !old);
                  changepage();
                }}
              >
                Reserve System
              </li>
              <li
                className="navdivisionlistitem"
                onClick={() => {
                  setchecked((old) => !old);
                }}
              >
                Log Out
              </li>
            </ul>
          </nav>
        </header>
        <article className="articlemybookings">
          <div className="Headingtop">Your Bookings</div>

          <div>
            <p style={{ fontSize: 20 }}>Select Date</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
              className="datepickerclass"
              id="datepicker"
              minDate={new Date()}
            />
          </div>

          <div
            className="divforbookingslots"
            style={{ justifyContent: "center" }}
          >
            <div className="individual_booking_container">
              <div className="time_cancel_date_container">
                <p className="date_container">
                  {startDate.toLocaleDateString()}
                </p>
                <p className="container_on_left_of_date"> from </p>
                <p className="time_container">13:00 to 14:00</p>
                <div
                  className="cancel_button_main_container"
                  style={{ display: "inline", marginLeft: 30 }}
                >
                  <div
                    className="cancel_button_first_child_container"
                    style={{ display: "inline" }}
                  >
                    <label
                      className="cancel_button_text"
                      style={{ display: "inline", color: "red" }}
                    >
                      Cancel
                    </label>
                  </div>
                </div>
              </div>

              <div
                style={{ marginTop: 10, paddingTop: 15 }}
                clssName="divsystemname"
              >
                <p style={{ textAlign: "left", fontSize: 20, color: "black" }}>
                  &nbsp;
                  <FontAwesomeIcon icon={faDesktop} color="black" /> Booking
                  System number 1
                </p>
              </div>
            </div>

            <div className="individual_booking_container">
              <div className="time_cancel_date_container">
                <p className="date_container">
                  {startDate.toLocaleDateString()}
                </p>
                <p className="container_on_left_of_date"> from </p>
                <p className="time_container">13:00 to 14:00</p>
                <div
                  className="cancel_button_main_container"
                  style={{ display: "inline", marginLeft: 30 }}
                >
                  <div
                    className="cancel_button_first_child_container"
                    style={{ display: "inline" }}
                  >
                    <label
                      className="cancel_button_text"
                      style={{ display: "inline", color: "red" }}
                    >
                      Cancel
                    </label>
                  </div>
                </div>
              </div>

              <div
                style={{ marginTop: 10, paddingTop: 15 }}
                className="divsystemname"
              >
                <p style={{ textAlign: "left", fontSize: 20, color: "black" }}>
                  &nbsp;
                  <FontAwesomeIcon icon={faDesktop} color="black" /> Booking
                  System number 1
                </p>
              </div>
            </div>
          </div>
        </article>
        <footer>
          <hr style={{ marginLeft: "30%", marginRight: "30%" }} />
          <img className="imgfirma" src={turkuamklogo} alt="" style={{ height: 50 }} />
        </footer>
      </main>
    </React.Fragment>
  );
}
