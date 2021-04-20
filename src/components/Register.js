import React, { useRef, useState } from "react";
import "../App.css";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Register = () => {
  const { signup } = useAuth();
  const history = useHistory();
  const email = useRef();
  const repeatEmail = useRef();
  const password = useRef();
  const [error, setError] = useState("");

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
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Sign up</h1>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full bg-blue-500 text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <div class="text-center text-sm text-grey-dark mt-4"></div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <a
              class="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
