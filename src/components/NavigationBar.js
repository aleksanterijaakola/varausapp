import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./NavigationBar.css";

function NavigationBar() {
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);
  return (
    <nav className={navbar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showNavbar}>
        <div></div>
      </button>
      <ul onClick={showNavbar}>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
}
export default NavigationBar;