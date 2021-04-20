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

      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full">
            <h1 class="mb-8 text-3xl text-center">Login</h1>

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
            <div class="flex justify-center">
              <button
                type="submit"
                class="w-3/4 bg-blue-500 text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Login
              </button>
              <button
                type="submit"
                class="w-3/4 bg-blue-500 text-center  m-2 py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Signup
              </button>
            </div>

            <div class="text-center text-sm text-grey-dark mt-4"></div>
            <div class="text-grey-dark mt-6">
              Forgot password?
              <a
                class="no-underline border-b border-blue text-blue"
                href="/forgotpassword/"
              >
                {" "}
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
          &copy;2021 theFIRMA. All rights reserved.
        </p>

        </div>
      </div>
    </>
  );
};

export default Login;
