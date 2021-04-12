import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/tailwind.css";
import { auth } from "../firebase";

function Forgotpassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    auth
      .sendPasswordResetEmail(email)

      .catch((error) => alert(error.message));
  };

  return (
    <>
      <div class="text-center pt-6">
        <h1 class="font-black text-xl">Reset password</h1>
        <div class="pt-6">
          <p class="pb-12">
            Enter the email associated with your account and we'll send an email
            with instructions to reset the password.
          </p>
        </div>
        <form
          class="bg-opacity-30 shadow-sm rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="email"
            type="text"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <div class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 relative top-3 container">
            <Link to="/login">Login?</Link>
          </div>
          <div class="flex items-center justify-between mt-2">
            <button
              class="relative top-5 left-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline "
              type="submit"
            >
              Send instructions
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Forgotpassword;
