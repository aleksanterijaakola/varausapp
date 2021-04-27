import React, { useState, useEffect, useContext } from "react";
import SeatSelection from "./SeatSelection";
import moment from "moment";
import Axios from "axios";
import DatePicker from "../../node_modules/react-datepicker";
import "react-datepicker/dist/react-datepicker";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import "../styles/tailwind.css";
import "../App.css";

let rows = [];
let day = "";

const SeatBooking = () => {
  const { currentUser } = useContext(AuthContext);
  const [showSeats, setShowSeats] = useState(false);
  const [computers, setComputers] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showThanks, setShowThanks] = useState(false);

  const [computersArray, setComputersArray] = useState([]);

  let tempComputersArray = [];

  useEffect(() => {
    console.log(currentUser.email);
    if (selectedDate) {
      setShowThanks(false);
      setShowSeats(false);
      handleSetDay();
    } else {
      return;
    }
  }, [selectedDate]);

  const handleSetDay = () => {
    day = moment(selectedDate).format("DD.MM.YYYY");
    Axios.post("http://localhost:8080/routes/new_data", {
      date: day,
    }).then((response) => {
      for (let i = 0; i <= response.data.length - 1; i++) {
        tempComputersArray.push(response.data[i]);
      }
      // console.log(tempComputersArray);
      rows = [
        [
          { id: 1, number: 1, isReserved: tempComputersArray[0] },
          { id: 2, number: 2, isReserved: tempComputersArray[1] },
          { id: 3, number: 3, isReserved: tempComputersArray[2] },
          { id: 4, number: 4, isReserved: tempComputersArray[3] },
          null, // * Null means when it adds a space after seat. For example after seat 4 it starts a new line/row.
          { id: 5, number: 5, isReserved: tempComputersArray[4] },
          { id: 6, number: 6, isReserved: tempComputersArray[5] },
        ],
        [
          { id: 7, number: 1, isReserved: tempComputersArray[6] },
          { id: 8, number: 2, isReserved: tempComputersArray[7] },
          { id: 9, number: 3, isReserved: tempComputersArray[8] },
          { id: 10, number: 4, isReserved: tempComputersArray[9] },
          null,
          { id: 11, number: 5, isReserved: tempComputersArray[10] },
          { id: 12, number: 6, isReserved: tempComputersArray[11] },
        ],
        [
          { id: 7, number: 1, isReserved: tempComputersArray[12] },
          { id: 8, number: 2, isReserved: tempComputersArray[13] },
          { id: 9, number: 3, isReserved: tempComputersArray[14] },
          { id: 10, number: 4, isReserved: tempComputersArray[15] },
          null,
          { id: 11, number: 5, isReserved: tempComputersArray[16] },
          { id: 12, number: 6, isReserved: tempComputersArray[17] },
        ],
        [
          { id: 7, number: 1, isReserved: tempComputersArray[18] },
          { id: 8, number: 2, isReserved: tempComputersArray[19] },
          { id: 9, number: 3, isReserved: tempComputersArray[20] },
          { id: 10, number: 4, isReserved: tempComputersArray[21] },
          null,
          { id: 11, number: 5, isReserved: tempComputersArray[22] },
          { id: 12, number: 6, isReserved: tempComputersArray[23] },
        ],
        [
          { id: 7, number: 1, isReserved: tempComputersArray[24] },
          { id: 8, number: 2, isReserved: tempComputersArray[25] },
          { id: 9, number: 3, isReserved: tempComputersArray[26] },
          { id: 10, number: 4, isReserved: tempComputersArray[27] },
          null,
          { id: 11, number: 5, isReserved: tempComputersArray[28] },
          { id: 12, number: 6, isReserved: tempComputersArray[29] },
        ],
        [
          { id: 7, number: 1, isReserved: tempComputersArray[30] },
          { id: 8, number: 2, isReserved: tempComputersArray[31] },
          { id: 9, number: 3, isReserved: tempComputersArray[32] },
          { id: 10, number: 4, isReserved: tempComputersArray[33] },
          null,
          { id: 11, number: 5, isReserved: tempComputersArray[34] },
          { id: 12, number: 6, isReserved: tempComputersArray[35] },
        ],
        [
          { id: 7, number: 1, isReserved: tempComputersArray[36] },
          { id: 8, number: 2, isReserved: tempComputersArray[37] },
          { id: 9, number: 3, isReserved: tempComputersArray[38] },
          { id: 10, number: 4, isReserved: tempComputersArray[39] },
          null,
          { id: 11, number: 5, isReserved: tempComputersArray[40] },
          { id: 12, number: 6, isReserved: tempComputersArray[41] },
        ],
        [
          { id: 7, number: 1, isReserved: tempComputersArray[42] },
          { id: 8, number: 2, isReserved: tempComputersArray[43] },
          { id: 9, number: 3, isReserved: tempComputersArray[44] },
          { id: 10, number: 4, isReserved: tempComputersArray[45] },
          null,
          { id: 11, number: 5, isReserved: tempComputersArray[46] },
          { id: 12, number: 6, isReserved: tempComputersArray[47] },
        ],
      ];
      setShowSeats(true);
    });
  };

  return (
    <div>
      <Navbar />
      <div class="flex items-center flex-col mt-6">
        <div class="pt-2 text-lg">Select date and seat</div>
        <div>
          <DatePicker
            // className="seatpicker"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
            isClearable
          />
        </div>
      </div>
      {showThanks && <h1>Thanks!</h1>}
      {showSeats && (
        <SeatSelection
          computers={rows}
          setShowSeats={setShowSeats}
          day={day}
          setShowThanks={setShowThanks}
          userEmail={currentUser.email}
        />
      )}
    </div>
  );
};

export default SeatBooking;
