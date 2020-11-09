import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../App.css';

import thefirmalogo from '../img/thefirma_white.png'
import turkuamklogo from '../img/turku_amk.png'


const Login = () => {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      //const person = { id: new Date().getTime().toString(), password, email };
      console.log(password, email);
      setPassword("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article className="login">
      <div className="header">
        <img src={thefirmalogo} alt="thefirmalogo" className="header-img" />
        <h1>Booking Computer App</h1>
      </div>
        <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
          <div className="form-control">
            <input
              type="text"
              id="email"
              placeholder="E-MAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              id="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              validate
            />
          </div>
          <div className="button-container">
            <button type="submit">
              LOGIN
          </button>
            <button type="submit">
              REGISTER
          </button>
          </div>
          <div className="button-container-forgot">
          <button type="submit" className="forgot-button">
              FORGOT PASSWORD ?
          </button>
          </div>
        </form>
        <div className="footer">
          <div src={turkuamklogo} alt="turkuamklogo" className="footer-img" />
        </div>
      </article>

    </>
  );
};

export default Login;
