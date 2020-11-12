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
    <article class="text-center">
      <form class="form-signin" onSubmit={handleSubmit}>
        <img src={thefirmalogo} alt="thefirmalogo" className="mb-1" height="70px" />
        <h1 class="h4 mb-5 font-weight-normal text-white">Booking Computer App</h1>
        <h2 class="h5 mb-3 font-weight-normal text-white text-left">Login</h2>
        <label for="inputMail" class="sr-only">Email Address</label>
        <input
          type="text"
          id="email"
          placeholder="E-MAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          class="form-control text-white"
        />
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          validate
          class="form-control text-white mt-3"
        />
        <div class="d-flex justify-content-around mt-3 mb-4">
          <button type="submit" class="btn btn-primary text-white">
            LOGIN
          </button>
          <button class="btn btn-primary text-white" onClick={() => history.push("/register")}>
            REGISTER
          </button>
        </div>
        <button type="submit" class="btn btn-primary text-white">
          FORGOT PASSWORD
        </button>
        <img src={turkuamklogo} alt="turkuamklogo" class="mt-5 mb-4" height="70px" />
      </form>
    </article>
  );
};

export default Login;
