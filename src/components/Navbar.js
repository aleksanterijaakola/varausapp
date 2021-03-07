import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import thefirmalogo from "../Assets/img/thefirma.png"

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/dashboard "
            className="navbar-logo"
            onClick={closeMobileMenu}
          ></Link>
          <div>
            <Link to="/dashboard">
              <img
                className="imgfirma"
                src={thefirmalogo}
                alt=""
                style={{ height: 50 }}
              />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Dashboard{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/reserve"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {" "}
                Bookings{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                {" "}
                Logout{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
