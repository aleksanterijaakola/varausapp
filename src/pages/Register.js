import React, { useRef, useState } from "react";
import "../App.css";
import { useAuth } from "../contexts/AuthContext";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";
import { useHistory, Link } from "react-router-dom";

const Register = () => {
  const { signup } = useAuth();
  const history = useHistory();
  const email = useRef();
  const repeatEmail = useRef();
  const password = useRef();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(email.current.value)
    /*if(!repeatEmailValidation(repeatEmail.current.value)){
      alert("Email does not match") */
    if (email.current.value !== repeatEmail.current.value) {
      return setError("Emails do not match");
    }

    try {
      setError("");
      await signup(email.current.value, password.current.value);
      history.push("/dashboard");
    } catch {
      setError("Password needs to be at least 6 characters long");
    }
  }

  /*const repeatEmailValidation = value => (
    value === email.current.value
  ) */

  return (
    <React.Fragment>
      <article class="text-center">
        {error && <alert>{error}</alert>}
        <form class="form-signin" onSubmit={handleSubmit}>
          <img
            src={thefirmalogo}
            alt="thefirmalogo"
            className="mb-1"
            height="70px"
          />
          <h1 class="h4 mb-5 font-weight-normal text-white">
            Booking Computer App
          </h1>
          <h2 class="h5 mb-3 font-weight-normal text-white text-left">
            Register
          </h2>
          <label for="inputMail" class="sr-only">
            Email Address
          </label>
          <input
            type="email"
            ref={email}
            required
            name="email"
            placeholder="E-MAIL"
            class="form-control"
          />
          <label htmlFor="inputMail" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            ref={repeatEmail}
            required
            name="repeatEmail"
            placeholder="REPEAT E-MAIL"
            className="form-control"
          />
          <label for="inputPassword" class="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            ref={password}
            placeholder="PASSWORD"
            required
            class="form-control"
          />
          <div class="d-flex justify-content-around mt-3 mb-4">
            <button
              onClick={() => history.push("/login")}
              class="btn btn-primary text-white"
            >
              LOGIN
            </button>
            <button class="btn btn-primary text-white">SIGN UP</button>
          </div>
          <img
            src={turkuamklogo}
            alt="turkuamklogo"
            class="mt-5 mb-4"
            height="70px"
          />
        </form>
      </article>
    </React.Fragment>
  );
};

export default Register;
