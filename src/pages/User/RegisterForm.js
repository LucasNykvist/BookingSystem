import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Navbar from "../../components/Navbar";
import { registerUser } from "../../api/users.api";

const RegisterForm = () => {
  const defaultUser = {
    email: "",
    password: "",
    repeatPassword: "",
  };

  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailRegex = /\S+@\S+\.\S+/;

      if (!emailRegex.test(user.email)) {
        setError("Invalid email");
        return;
      }

      if (user.password !== user.repeatPassword) {
        setError("Passwords do not match");
        return;
      }

      const userToBeCreated = {
        email: user.email,
        password: user.password,
      };

      await registerUser(userToBeCreated);
      setSuccess("User created successfully");
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
