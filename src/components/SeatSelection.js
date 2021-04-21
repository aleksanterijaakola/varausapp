import React, { Component } from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Datepicker from "../components/Datepicker";
import "../styles/tailwind.css";
import SeatPicker from "react-seat-picker";

export default class App extends Component {
  state = {
    loading: false,
  };

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
          await new Promise((resolve) => setTimeout(resolve, 750));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise((resolve) => setTimeout(resolve, 750));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
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
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.setState({ loading: false });
      }
    );
  };

  render() {
    const rows = [
      [
        { id: 1, number: 1 },
        { id: 2, number: 2, isReserved: true },
        {
          id: 3,
          number: "3",
          isReserved: true,
        },
        { id: 4, number: "4", isReserved: true },
        null, // * Null means when it adds a space after seat. For example after seat 4 it starts a new line/row.
        { id: 5, number: 5 },
        { id: 6, number: 6 },
      ],
      [
        { id: 7, number: 1 },
        { id: 8, number: 2, isReserved: true },
        {
          id: 9,
          number: "3",
          isReserved: true,
        },
        { id: 10, number: "4", isReserved: true },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 },
      ],
      [
        { id: 7, number: 1, isReserved: true },
        { id: 8, number: 2, isReserved: true },
        {
          id: 9,
          number: "3",
          isReserved: true,
        },
        { id: 10, number: "4", isReserved: true },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 },
      ],
      [
        { id: 7, number: 1, isReserved: true },
        { id: 8, number: 2 },
        {
          id: 9,
          number: "3",
        },
        { id: 10, number: "4", orientation: "west" },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 },
      ],
      [
        { id: 7, number: 1, isReserved: true },
        { id: 8, number: 2 },
        {
          id: 9,
          number: "3",
        },
        { id: 10, number: "4" },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 },
      ],
      [
        { id: 7, number: 1, isReserved: true },
        { id: 8, number: 2, isReserved: true },
        {
          id: 9,
          number: "3",
          isReserved: true,
        },
        { id: 10, number: "4", isReserved: true },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 },
      ],
      [
        { id: 7, number: 1, isReserved: true },
        { id: 8, number: 2 },
        {
          id: 9,
          number: "3",
        },
        { id: 10, number: "4" },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 },
      ],
      [
        { id: 7, number: 1, isReserved: true },
        { id: 8, number: 2 },
        {
          id: 9,
          number: "3",
        },
        { id: 10, number: "4" },
        null,
        { id: 11, number: 5 },
        { id: 12, number: 6 },
      ],
    ];
    // const { loading } = this.state;

    return (
      <div>
        <Navbar />
        <div className="pikeri">
          <h1 class="font-black text-xl">Select date and seat</h1>
          <Datepicker />
        </div>

        <div style={{ marginTop: "100px", position: "relative", left: "35px" }}>
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase}
            removeSeatCallback={this.removeSeatCallback}
            maxReservableSeats={1}
            rows={rows}
            alpha
            visible
            selectedByDefault
            // loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />
        </div>
      </div>
    );
  }
}
