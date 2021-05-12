import React, { useRef, useState } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import turkuamklogo from "../images/turkuamk.png";
import thefirmalogo from "../images/thefirma.png";
import { auth } from "../firebase";
import Axios from "axios";

const Register = () => {
  const history = useHistory();
  const email = useRef();
  const repeatEmail = useRef();
  const password = useRef();

  //States for Database
  const [dbEmail, setDbEmail] = useState("");
  const [dbRepeatEmail, setDbRepeatEmail] = useState("");
  const [dbPassword, setDbPassword] = useState("");

  const addUser = () => {
    //Checks if fields are incorrectly filled
    if (
      !dbEmail ||
      !dbRepeatEmail ||
      !dbPassword ||
      dbEmail !== dbRepeatEmail
    ) {
      return;
    }

    Axios.post("http://localhost:8080/routes/register", {
      email: dbEmail,
      password: dbPassword,
    });
  };

  const login = () => {
    history.push("/login");
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then((auth) => {
        history.push("/dashboard");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="w-6/12 container relative top-20">
          <img class="" src={turkuamklogo} alt=""></img>
        </div>

        <form
          class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
          onSubmit={register}
        >
          <div class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              ref={email}
              onChange={(e) => setDbEmail(e.target.value)}
            />

            <input
              type="email"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Repeat email"
              ref={repeatEmail}
              onChange={(e) => setDbRepeatEmail(e.target.value)}
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Password"
              ref={password}
              onChange={(e) => setDbPassword(e.target.value)}
            />

            <button
              type="submit"
              class="w-full bg-blue-500 text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
              onClick={() => addUser()}
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4"></div>
            <div class="text-grey-dark ml-1">
              Already have an account?{" "}
              <button class="text-blue-500" onClick={login}>
                Log in
              </button>
            </div>
          </div>
        </form>
        <div class="container w-6/12 relative bottom-20">
          <img src={thefirmalogo} alt=""></img>
        </div>
      </div>
    </>
  );
};

export default Register;
