import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { useAuth } from "../contexts/AuthContext";
import { Alert } from "react-bootstrap";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";

const Login = () => {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);



  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Email does not exist");
    }
    setLoading(false);
  }

  return (
    <article className="text-center">{/**/}
      {error && <Alert className="login-alert" variant="danger">{error}</Alert>}
      <form className="form-signin" onSubmit={handleSubmit}>
        <img src={thefirmalogo} alt="thefirmalogo" className="mb-1" height="70px" />
        <h1 className="h4 mb-5 font-weight-normal text-white">
          Booking Computer App
        </h1>
        <h2 className="h5 mb-3 font-weight-normal text-white text-left">Login</h2>
        <label htmlFor="inputMail" className="sr-only">
          Email Address
        </label>
        <input
          
          type="text"
          id="email"
          placeholder="E-MAIL"
          required
          ref={emailRef}
          class="form-control shadow-none"
        /> 
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="PASSWORD"
          required
          ref={passwordRef}
          className="form-control mt-3  shadow-none"
        />
        <div className="d-flex justify-content-around mt-3 mb-4">
          <button disabled={loading} type="submit" className="LoginRegisterForgotButton" style={{marginRight: '2px'}}>
            LOGIN
          </button>
          <button
            className="LoginRegisterForgotButton"
            onClick={() => history.push("/register")}
            style={{backgroundColor: '#008CBA'}}
          >
            REGISTER
          </button>
        </div>
        <div><button type='button' className="LoginRegisterForgotButton" 
        onClick={() => history.push('/forgotpassword')} style={{width: '300px'}}>
          FORGOT PASSWORD
        </button></div>
       
        <img src={turkuamklogo} alt="turkuamklogo" className="mt-5 mb-4" height="70px" />
      </form>
      
    </article>
  );
};

export default Login;
