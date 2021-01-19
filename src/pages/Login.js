import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import "../App.css";
import { Alert } from "react-bootstrap";
import thefirmalogo from "../img/thefirma_white.png";
import turkuamklogo from "../img/turku_amk.png";
import { auth } from "../firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("")
 // error message implementation unfinished
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/dashboard");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <article className="text-center">
      {/**/}
       {error && (
        <Alert className="login-alert" variant="danger">
          {alert}
        </Alert > 
      )} 
      <form className="form-signin" onSubmit={signIn}>
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
          Login
        </h2>
        <label htmlFor="inputMail" className="sr-only">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          placeholder="E-MAIL"
          required
          value={email}
          className="form-control shadow-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="PASSWORD"
          required
          value={password}
          className="form-control mt-3  shadow-none"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="d-flex justify-content-around mt-3 mb-4">
          <button
            type="submit"
            className="LoginRegisterForgotButton"
            style={{ marginRight: "2px" }}
          >
            LOGIN
          </button>
          <button
            className="LoginRegisterForgotButton"
            onClick={() => history.push("/register")}
            style={{ backgroundColor: "#008CBA" }}
          >
            REGISTER
          </button>
        </div>
        <div>
          <button
            type="button"
            className="LoginRegisterForgotButton"
            onClick={() => history.push("/forgotpassword")}
            style={{ width: "300px" }}
          >
            FORGOT PASSWORD
          </button>
        </div>

        <img
          src={turkuamklogo}
          alt="turkuamklogo"
          className="mt-5 mb-4"
          height="70px"
        />
      </form>
    </article>
  );
};

export default Login;
