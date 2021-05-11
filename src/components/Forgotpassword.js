import React, { useState } from "react";
import "../styles/tailwind.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import turkuamklogo from "../images/turkuamk.png"


function Forgotpassword() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const signUp = () => {
    history.push("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)

      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div class="text-center pt-6">
        <div class="w-6/12 container">
          <img src={turkuamklogo} alt=""></img>
        </div>
        <div class="pt-2 mt-8">
          <h1 class="font-sans font-semibold text-xl">Forgot your password?</h1>
          <p class=" pb-2 mt-2">
            Enter the email you signed up with to reset your password
          </p>
        </div>
        <div class="container">
          <form class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 mt-6" onSubmit={handleSubmit}>
            <div class="bg-white bg-opacity-30 px-6 py-8 rounded shadow-md text-black w-full">
              <input
                class="block border border-grey-light w-full p-3 rounded mb-4"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <button
                class="w-full bg-blue-500 text-center py-2 rounded text-white hover:bg-green-dark focus:outline-none my-1"
                type="submit"
              >
                Reset password
              </button>
              <div class="relative top-3">
                {" "}
                Not registered?{" "}
                <button class="text-blue-500 font-bold" onClick={signUp}>
                  Sign up
                </button>
              </div>
            </div>

            <div class="flex items-center justify-between mt-2"></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Forgotpassword;
