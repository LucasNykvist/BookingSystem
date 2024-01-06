import React, { useState } from "react";
import { loginUser, registerUser } from "../../../api/users.api";
import {
  EMAIL_REGEX,
  REGISTER_DEFAULT_USER,
} from "../constants/user.constants";

const useRegister = () => {
  const defaultUser = REGISTER_DEFAULT_USER;
  const [user, setUser] = useState(REGISTER_DEFAULT_USER);
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
      const emailRegex = EMAIL_REGEX;

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
      await loginUser(userToBeCreated);
      setUser(defaultUser);
    } catch (error) {
      console.log(error);
    }
  };
  return { user, error, success, handleChange, handleSubmit };
};

export default useRegister;
