import React, { useRef } from "react";
import NavigationBar from '../components/NavigationBar';
import Tabs from "../components/Tabs";
import "../components/Tabs.css"
import "../App.css";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";
import BookingInterface from './BookingInterface'


export default function Dashboard() {
  const emailRef = useRef();

  return (
    <React.Fragment>
      <header>
        <NavigationBar />
      </header>
      <div>
        <article className="text-center">
          <div className="d-flex justify-content-around mt-2 mb-4 pl-5">
            <img src={thefirmalogo} alt="thefirmalogo" height="50px" />
            <img src={turkuamklogo} alt="turkuamklogo" height="45px" />
          </div>
          <h1 className="h4 mb-5 font-weight-normal text-white">
            Booking Computer App
          </h1>
        </article>
        <footer>
          <Tabs>
            <div label="BOOK">
              <BookingInterface/>
            </div>
            <div label="RESERVATIONS">
              All your reservations will be listed here!
            </div>
          </Tabs>
        </footer>
      </div>

    </React.Fragment>
  );
}
