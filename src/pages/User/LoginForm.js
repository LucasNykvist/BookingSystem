import React from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import useLogin from "./hooks/useLogin";

const LoginForm = () => {
  const { error, handleChange, handleSubmit, user } = useLogin();

  return (
    <>
      <Navbar />
      <div className="register-login-container">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>
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
            </div>

            {error && <p className="error">{error.toUpperCase()}</p>}
          </div>

          <Button type="submit" variant="contained" className="register-button">
            LOGIN
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
