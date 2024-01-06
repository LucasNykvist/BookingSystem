import React, { useState } from "react";
import { loginUser } from "../../../api/users.api";

const useLogin = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailRegex = /\S+@\S+\.\S+/;

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
