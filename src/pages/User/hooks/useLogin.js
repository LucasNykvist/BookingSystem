import React, { useState } from "react";
import { loginUser } from "../../../api/users.api";
import { EMAIL_REGEX, LOGIN_DEFAULT_USER } from "../constants/user.constants";

const useLogin = () => {
  const defaultUser = LOGIN_DEFAULT_USER;
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState("");

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

      await loginUser(user);
      setUser(defaultUser);
    } catch (error) {
      console.log(error);
    }
  };

  return { user, error, handleChange, handleSubmit };
};

export default useLogin;
