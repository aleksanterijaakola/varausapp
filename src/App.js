import React, { useState } from "react";
import "./App.css";
import "./img/background.png";
import register from "./components/register";

const Inputs = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password && email) {
      //const person = { id: new Date().getTime().toString(), password, email };
      console.log(password, email);
      setPassword("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article className="login">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <h1>Sign In</h1>
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              validate
            />
          </div>
          <button type="submit" className="buttonContainer">
            Login
          </button>
          <button type="submit" className="buttonContainer">
            Register
          </button>
          <button type="submit" className="buttonContainer">
            Forgot password?
          </button>
        </form>
      </article>
    </>
  );
};


export default Inputs;
