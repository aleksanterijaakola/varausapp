import React, { useRef, useState } from "react";
import "../App.css";
import { useAuth } from "../contexts/AuthContext";
import thefirmalogo from "../Assets/img/turkuamk.png"
import turkuamklogo from "../Assets/img/thefirma.png"
import { useHistory} from "react-router-dom";
import Axios from "axios";

const Register = () => {
  const { signup } = useAuth();
  const history = useHistory();
  const email = useRef();
  const repeatEmail = useRef();
  const password = useRef();
  const [error, setError] = useState("");
  
  //States for Database
  const [dbEmail, setDbEmail] = useState('');
  const [dbRepeatEmail, setDbRepeatEmail] = useState(''); 
  const [dbPassword, setDbPassword] = useState('');
  
  const addUser = () => {

    //Checks if fields are incorrectly filled
    if (!dbEmail || !dbRepeatEmail || !dbPassword || dbEmail !== dbRepeatEmail) {
      return
    }
    
    Axios.post("http://localhost:8080/routes/register", {
      email: dbEmail,
      password: dbPassword,
    });
  };

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


  return (
    <React.Fragment>
      <article className="text-center">
        {error && <alert>{error}</alert>}
        <form className="form-signin" onSubmit={handleSubmit}>
          <img
            src={thefirmalogo}
            alt="thefirmalogo"
            className="mb-1"
            height="70px"
          />
          <h1 className="h4 mb-5 font-weight-normal text-white">
            Booking Computer App
          </h1>
          <h2 className="h5 mb-3 font-weight-normal text-white text-left">
            Register
          </h2>
          <label htmlFor="inputMail" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            ref={email}
            required
            name="email"
            placeholder="E-MAIL"
            className="form-control shadow-none"
            onChange={(e) => setDbEmail(e.target.value)}
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
            className="form-control mt-3 shadow-none"
            onChange={(e) => setDbRepeatEmail(e.target.value)}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            name="password"
            ref={password}
            placeholder="PASSWORD"
            required
            className="form-control mt-3 shadow-none"
            onChange={(e) => setDbPassword(e.target.value)}
          />
          <div className="d-flex justify-content-around mt-3 mb-4">
            <button
              onClick={() => history.push("/login")}
              className="LoginRegisterForgotButton"
            >
              LOGIN
            </button>
            <button className="LoginRegisterForgotButton" onClick={() => addUser()}>SIGN UP</button>
          </div>
          <img
            src={turkuamklogo}
            alt="turkuamklogo"
            className="mt-5 mb-4"
            height="70px"
          />                               
        </form>
      </article>
    </React.Fragment>
  );
};

export default Register
