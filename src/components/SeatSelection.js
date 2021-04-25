import React, { Component } from "react";
import "../App.css";
import Axios from 'axios';


import SeatPicker from "react-seat-picker";

export default class App extends Component {
  state = {
    loading: false,
    computer: 'A',
    row: '',
    seat: null,
  };

  addBooking = () => {
    Axios.post("http://localhost:8080/routes/new_userbooking", {
      email: this.props.userEmail,
      date: this.props.day,
      row: this.state.row,
      seat: this.state.seat
    });
  };

  clickhandler() {
    console.log(this.props.day)
    console.log(this.state.row)
    console.log(this.state.seat)
    console.log(this.props.userEmail)
    
    this.props.setShowSeats(false);
    Axios.put("http://localhost:8080/routes/update_data", {day: this.props.day, row: this.state.row, seat: this.state.seat});
    this.addBooking();
    this.props.setShowThanks(true);
  }

  setBooking(row, seat) {
    this.setState({ row: row, seat: seat });
  }

  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    this.setState(
      {
        loading: false,
      },
      async () => {
        if (removeCb) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        this.setBooking(row, number)
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: false,
      },
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };


  render() {
    
    // const { loading } = this.state;

    return (
      <div>
        <div>
        </div>
        <h1>Seat Picker</h1>
        <div style={{ marginTop: "100px", position: "relative", left: "35px" }}>
        <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase}
            removeSeatCallback={this.removeSeatCallback}
            maxReservableSeats={1}
            rows={this.props.computers}
            alpha
            visible
            selectedByDefault
            // loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
        />
        </div>
        <br />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit" onClick={this.clickhandler.bind(this)}>Save booking</button>
      </div>
    );
  }
}
