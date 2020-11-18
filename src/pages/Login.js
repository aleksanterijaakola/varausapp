import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { useAuth } from "../contexts/AuthContext";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";

const Login = () => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const { login } = useAuth();



  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");

      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
  }

  return (
    <article class="text-center">
      <form class="form-signin" onSubmit={handleSubmit}>
        <img src={thefirmalogo} alt="thefirmalogo" className="mb-1" height="70px" />
        <h1 class="h4 mb-5 font-weight-normal text-white">
          Booking Computer App
        </h1>
        <h2 class="h5 mb-3 font-weight-normal text-white text-left">Login</h2>
        <label for="inputMail" class="sr-only">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          placeholder="E-MAIL"
          required
          ref={emailRef}
          class="form-control"
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="PASSWORD"
          required
          ref={passwordRef}
          class="form-control mt-3"
        />
        <div className="d-flex justify-content-around mt-3 mb-4">
          <button type="submit" class="btn btn-primary text-white" style={{marginRight: '2px',  backgroundColor: '#008CBA'}}>
            LOGIN
          </button>
          <button
            class="btn btn-primary text-white"
            onClick={() => history.push("/register")}
            style={{backgroundColor: '#008CBA'}}
          >
            REGISTER
          </button>
        </div>
        <div><button type='button' class="btn btn-primary text-white" 
        onClick={() => history.push('/forgotpassword')} style={{backgroundColor: '#008CBA'}}>
          FORGOT PASSWORD
        </button></div>
       
        <img src={turkuamklogo} alt="turkuamklogo" class="mt-5 mb-4" height="70px" />
      </form>
      
    </article>
  );
};

export default Login;
