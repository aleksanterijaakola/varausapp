import React, {useState} from 'react';
import ReactTooltip from "react-tooltip";
import SeatPicker from "react-seat-picker";
import "../App.css";



function SeatSelection() {
  const [loading, setLoading] = useState(false)

  const AddSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    setState(
     
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
        //       // const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id);
        this.setState({ loading: false });
      }
    );
  };

  const removeSeatCallback = ({ row, number, id }, removeCb) => {
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

  const rows = [
    [
      { id: 1, number: 1, isSelected: true, tooltip: "Reserved by you" },
      { id: 2, number: 2},
      null,
      {
        id: 3,
        number: "3",
        isReserved: true,
        orientation: "east",
        tooltip: "Reserved by Rogger",
      },
      { id: 4, number: "4", orientation: "west" },
      null,
      { id: 5, number: 5 },
      { id: 6, number: 6 },
    ],
    [
      {
        id: 7,
        number: 1,
        isReserved: true,
        tooltip: "Reserved by Matthias Nadler",
      },
      { id: 8, number: 2, isReserved: true },
      null,
      { id: 9, number: "3", isReserved: true, orientation: "east" },
      { id: 10, number: "4", orientation: "west" },
      null,
      { id: 11, number: 5 },
      { id: 12, number: 6 },
    ],
    [
      { id: 13, number: 1 },
      { id: 14, number: 2 },
      null,
      { id: 15, number: 3, isReserved: true, orientation: "east" },
      { id: 16, number: "4", orientation: "west" },
      null,
      { id: 17, number: 5 },
      { id: 18, number: 6 },
    ],
    [
      { id: 19, number: 1, tooltip: "Cost: 25$" },
      { id: 20, number: 2 },
      null,
      { id: 21, number: 3, orientation: "east" },
      { id: 22, number: "4", orientation: "west" },
      null,
      { id: 23, number: 5 },
      { id: 24, number: 6 },
    ],
    [
      { id: 25, number: 1, isReserved: true },
      { id: 26, number: 2, orientation: "east" },
      null,
      { id: 27, number: "3", isReserved: true },
      { id: 28, number: "4", orientation: "west" },
      null,
      { id: 29, number: 5, tooltip: "Cost: 11$" },
      { id: 30, number: 6, isReserved: true },
    ],
  ];
  
  return (
    <div>
        <div></div>
        <h1>Seat Picker</h1>
        <div style={{ marginTop: "100px", position: "relative", left: "35px" }}>
          <SeatPicker
            addSeatCallback={AddSeatCallbackContinousCase}
            removeSeatCallback={removeSeatCallback}
            maxReservableSeats={1}
            rows={rows}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />
        </div>
      </div>
  )
}

export default SeatSelection

.gitlab-ci.yml