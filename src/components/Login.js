import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
//import "../App.css";
//import { Alert } from "react-bootstrap";
import thefirmalogo from "../Assets/img/turkuamk.png";
import turkuamklogo from "../Assets/img/thefirma.png";
import { auth } from "../firebase";
import "../styles/tailwind.css";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");
  // TODO: error message implementation unfinished

  const { currentUser } = useContext(AuthContext);

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
    <>
      <div class="w-full max-w-xs relative object-center">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={signIn}>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {/* <p class="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => history.push("/dashboard")}
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/forgotpassword"
              
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2021 theFIRMA. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Login;
