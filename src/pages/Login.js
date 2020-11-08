import React, { useState } from "react";
import '../App.css';

import thefirmalogo from '../img/thefirma_white.png'
import turkuamklogo from '../img/turku_amk.png'


const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
        <img src={thefirmalogo} alt="thefirmalogo" width="310px"></img>
        <h1>Booking Computer App</h1>
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
          <div className="button-container-forgot">
          <button type="submit" className="forgot-button">
              FORGOT PASSWORD ?
          </button>
          </div>

          </div>
        </form>
        <img src={turkuamklogo} alt="turkuamklogo" width="200px"></img>
      </article>
    </>
  );
};

export default Login;
