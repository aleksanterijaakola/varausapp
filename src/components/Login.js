import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import turkuamklogo from "../Assets/img/thefirma.png";
import resizedimg from "../Assets/img/resized_turkuamk.png";
import { auth } from "../firebase";
import "../styles/tailwind.css";
import "../App.css";


const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error] = useState("");

  const signUp = () => {
    history.push("/register");
  };

  const forgotPassword = () => {
    history.push("/forgotpassword");
  };

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
      <div class="container w-56 relative top-20">
        <img src={turkuamklogo} alt=""></img>
      </div>

      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <form
            class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full mb-8"
            onSubmit={signIn}
          >
            <h1 class="mb-8 text-3xl text-center">Login</h1>

            <input
              type="text"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              class="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div class="flex justify-center">
              <button
                type="submit"
                class="w-full bg-blue-500 text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
              >
                Login
              </button>
            </div>
            <div class="w-full border border-gray-900 border-opacity-20 mt-2"></div>
            <div class="mt-2">
              <button
                type="submit"
                class="w-full border text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
                onClick={signUp}
              >
                Register
              </button>
            </div>
            <div class="text-center text-sm text-grey-dark mt-4"></div>
            <div class="ml-1 text-blue-500">
              <button class="font-black" onClick={forgotPassword}>
                Forgot password?
              </button>
            </div>
          </form>
          <div class="container w-56">
            <img
              rel="preload"
              class=""
              src={resizedimg}
              alt="Turku AMK logo"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
