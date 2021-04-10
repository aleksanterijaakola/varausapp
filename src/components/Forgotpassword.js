import React from "react";
import "../styles/tailwind.css";
// TODO: insert correctly div to center
function Forgotpassword() {
  return (
    <>
      <div class="text-lg text-center relative top-40">
        <h1 class="font-bold font-family: 'Source Sans Pro', sans-serif">Forgot your password?</h1>
        <div class="pt-6">
          <span class="opacity-30 pb-12">
            Enter your registered email below to receive password reset
            instructions
          </span>
        </div>
        <form class="bg-opacity-30 shadow-sm rounded px-8 pt-6 pb-8 mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            id="email"
            type="text"
            required
            placeholder="Enter"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h4>Remember password? Login</h4>
          <div class="flex items-center justify-between">
            <button
              class="relative top-5 left-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reset password
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Forgotpassword;
