import React, { useState, useEffect, useContext } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../components/Navbar";
import Axios from "axios";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
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

  function handleEditDay(day, seat) {
    Axios.put("http://localhost:8080/routes/edit_data", {
      day: day,
      seat: seat,
    });
  }

  function handleRemove(id, day, seat) {
    let items = datas.filter((booking) => booking._id !== id);
    setDatas(items);
    Axios.delete(`http://localhost:8080/routes/delete/${id}`);
    handleEditDay(day, seat);
  }

  return (
    <>
      <Navbar />

      {datas.map((data, key) => (
        <div class="bg-white bg-opacity-30 border rounded  px-2 container mt-2 relative top-10">
          <div className="individual_booking_container">
            <div className="time_cancel_date_container">
              <div>
                <div className="cancel_button_first_child_container"></div>
              </div>
            </div>

            <div class="flex justify-evenly items-center	">
              <div>
                Date <p class="font-semibold">{data.bookingDate}</p>
              </div>
              <div class="">
                Seat <p class="font-semibold">{data.seat}</p>
              </div>
              <div class="mt-5">
                <button
                  class="bg-red-500 mb-5 hover:bg-blue-700  text-white font-bold py-1 px-4 rounded flex items-center"
                  onClick={() =>
                    handleRemove(data._id, data.bookingDate, data.seat)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
