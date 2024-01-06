import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import { loginUser, registerUser } from "../../api/users.api";
import useRegister from "./hooks/useRegister";

const RegisterForm = () => {
  const { user, error, success, handleChange, handleSubmit } = useRegister();

  return (
    <>
      <Navbar />
      <div className="register-login-container">
        <form onSubmit={handleSubmit}>
          <h1>REGISTER</h1>
          <div className="input-fields">
            <TextField
              onChange={handleChange}
              required
              className="field"
              name="email"
              value={user.email}
              label="E-mail"
            />
            <div className="password-fields">
              <TextField
                required
                type="password"
                className="field"
                name="password"
                value={user.password}
                label="Password"
                onChange={handleChange}
              />

              <TextField
                required
                type="password"
                className="field"
                value={user.repeatPassword}
                name="repeatPassword"
                label="Repeat password"
                onChange={handleChange}
              />
            </div>

            {success && <p className="success">{success.toUpperCase()}</p>}
            {error && <p className="error">{error.toUpperCase()}</p>}
          </div>

          <Button type="submit" variant="contained" className="register-button">
            REGISTER
          </Button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
