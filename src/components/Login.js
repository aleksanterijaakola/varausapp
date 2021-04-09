import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import thefirmalogo from "../Assets/img/turkuamk.png";
import turkuamklogo from "../Assets/img/thefirma.png";
import { auth } from "../firebase";
import "../styles/tailwind.css";
// import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error] = useState(""); This is for error.message implementation

  // const { currentUser } = useContext(AuthContext);
  // if you want it to use email you can use currentUser.email

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
      <div class="w-6/12 container relative top-20">
        <img class="" src={turkuamklogo} alt=""></img>
      </div>

      <div class="w-full max-w-xs container relative top-28">
        <form
          class="bg-white bg-opacity-30 shadow-sm rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={signIn}
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
              id="email"
              type="text"
              required
              placeholder="Email"
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
              type="submit"
            >
              Sign In
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
          <div>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 relative top-3 container"
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
      <div class="w-6/12 container relative top-40">
        <img src={thefirmalogo} alt=""></img>
      </div>
    </>
  );
};

export default Login;
