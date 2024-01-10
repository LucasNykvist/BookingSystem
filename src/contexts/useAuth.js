import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userError, setUserError] = useState("");

  const getUser = () => {
    try {
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString);
      if (user && user.token) {
        return user;
      } else {
        setUserError("No user found");
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const user = getUser();
    setUser(user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
