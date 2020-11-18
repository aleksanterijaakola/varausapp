import React, { useRef } from "react";
import NavigationBar from '../components/NavigationBar';
import Tabs from "../components/Tabs";
import "../components/Tabs.css"
import "../App.css";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";


export default function Dashboard() {
  const emailRef = useRef();

  return (
    <React.Fragment>
      <header>
        <NavigationBar />
      </header>
      <div>
        <article class="text-center">
          <div className="d-flex justify-content-around mt-2 mb-4 pl-5">
            <img src={thefirmalogo} alt="thefirmalogo" height="50px" />
            <img src={turkuamklogo} alt="turkuamklogo" height="45px" />
          </div>
          <h1 class="h4 mb-5 font-weight-normal text-white">
            Booking Computer App
          </h1>
        </article>
        <footer>
          <Tabs>
            <div label="BOOK">
              <div class="book-page">
                <article class="text-center">
                <form class="form-signin">
                <h2 class="h5 mb-5 font-weight-normal text-white text-left">Booking</h2>
                  <div class="form-group">
                    <div class="mb-4">
                      <label class="sr-only">Date and time</label>
                      <input class="form-control" type="datetime-local" />
                    </div>
                    <div>
                      <label class="sr-only">Computer ID</label>
                      <select class="form-control">
                        <option>Computer 1</option>
                        <option>Computer 2</option>
                        <option>Computer 3</option>
                        <option>Computer 4</option>
                        <option>Computer 5</option>
                      </select>
                    </div>
                  </div>
                  </form>
                </article>
                <h6>
                  A great interface to book your seat at <em>theFirma</em>!
              </h6>
              </div>
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
