import React from "react";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="container mt-5">
      <form className="loginForm" action="post">
        <h2>BS | BOOKING SYSTEM | REGISTER</h2>

        <input
          className="inputEmail"
          type="email"
          placeholder="Enter your Email"
        />
        <input
          className="inputCompany"
          type="text"
          placeholder="Enter your Company Name"
        />
        <input
          className="inputPhone"
          type="tel"
          placeholder="Enter your Phone Number"
        />
        <input
          className="inputPassword"
          type="password"
          placeholder="Enter your Password"
        />

        <button className="loginButton">REGISTER</button>

        <p>
          Already Have An Account?{" "}
          <Link className="registerLink" to="/login">
            Click Here To Login!
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
