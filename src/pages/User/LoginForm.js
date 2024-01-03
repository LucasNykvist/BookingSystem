import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";

const LoginForm = () => {
  const defaultUser = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const emailRegex = /\S+@\S+\.\S+/;

      if (!emailRegex.test(user.email)) {
        setError("Invalid email");
        return;
      }

      setUser(defaultUser);
    } catch (error) {
      console.log(error);
    }
  };

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
