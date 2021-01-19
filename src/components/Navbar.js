import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import thefirmalogo from "../img/thefirma_white.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
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
          >
            <Link to="/dashboard">
              <img
                className="imgfirma"
                src={thefirmalogo}
                alt=""
                style={{ height: 50 }}
              />
            </Link>
          </Link>
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
                Reserve{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={closeMobileMenu}>
                {" "}
                Logout{" "}
              </Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thefirmatuas/?hl=fi"
                className="instagram-icon"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/thefirmatuas"
                className="facebook-icon"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
