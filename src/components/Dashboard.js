import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
// import turkuamklogo from "../Assets/turku_amk";
import Navbar from "../components/Navbar";
import Axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const { currentUser } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);

  //Gets user's bookings from the db
  useEffect(() => {
    Axios.get("http://localhost:8080/routes/read_bookings").then((response) => {
      let items = response.data.filter(
        (booking) => booking.userEmail === currentUser.email
      );
      setDatas(items);
    });
  }, [currentUser]);

  function handleRemove(id) {
    let items = datas.filter((booking) => booking._id !== id);
    setDatas(items);
    Axios.delete(`http://localhost:8080/routes/delete/${id}`);
  }

  return (
    <React.Fragment>
      <Navbar />

      {datas.map((data, key) => (
        <div
          class="bg-white bg-opacity-30 border px-2"
          // className="divforbookingslots"
          // style={{ justifyContent: "center" }}
        >
          <div className="individual_booking_container">
            <div className="time_cancel_date_container">
              <p className="date_container">{startDate.toLocaleDateString()}</p>
              {/* <p className="container_on_left_of_date"> from </p>
              <p className="time_container">13:00 to 14:00</p> */}
              <div
                // className="cancel_button_main_container"
                style={{ display: "inline", marginLeft: 30 }}
              >
                <div
                  className="cancel_button_first_child_container"
                  style={{ display: "inline" }}
                >
                  <label
                    className="cancel_button_text"
                    style={{ display: "inline", color: "red" }}
                    onClick={() => handleRemove(data._id)}
                  >
                    Cancel
                  </label>
                </div>
              </div>
            </div>

            <div
              class="grid justify-items: end;"
              style={{ marginTop: 10, paddingTop: 15 }}
              className="divsystemname"
            >
              <p style={{ textAlign: "left", fontSize: 20, color: "black" }}>
                &nbsp; Seat {data.computerName}
                <button
                  class="bg-red-500 hover:bg-blue-700 text-white font-bold ml-8 py-1 px-4 rounded relative"
                  onClick={() => handleRemove(data._id)}
                >
                  Delete
                </button>
                <br />
                {/* {data.userEmail} */}
              </p>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}
