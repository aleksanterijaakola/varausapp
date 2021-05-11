import React from "react";
import { Link } from "react-router-dom";
import "../styles/tailwind.css";

function BottomNav() {
  return (
    <>
      <div class="min-h-screen p-10 "></div>

      <div class="fixed bottom-0 inset-x-0 bg-blue-100 h-16 flex justify-between text-sm text-blue-900 uppercase font-mono">
        <Link
          class="w-full block py-2 px-1
           text-center  hover:bg-blue-200 hover:text-blue-800 transition duration-300"
          to="/dashboard"
        >
          <svg
            class="w-6 h-6 mb-1 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mb-1 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          Profile
        </Link>
        <Link class="w-full block py-2 px-1 text-center  hover:bg-blue-200 hover:text-blue-800 transition duration-300" to="/seat">
          <svg
            class="w-6 h-6 mb-1 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mb-1 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Bookings
        </Link>
        <Link class="w-full block py-2 px-2 text-center  hover:bg-blue-200 hover:text-blue-800 transition duration-300" to="/">
          <svg
            class="w-6 h-6 mb-1 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mb-1 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          Logout
        </Link>
      </div>
    </>
  );
}

export default BottomNav;
