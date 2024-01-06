import React, { useEffect, useState } from "react";
import { getUserById } from "../../../api/users.api";

const useUser = () => {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [user, setUser] = useState({});

  // Retrieves user data from local storage
  const getLoggedInUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedInUser(user);
      return user;
    }
    return null;
  };

  const getUser = async (id) => {
    const user = await getUserById(id);
    setUser(user);
  };

  return { getLoggedInUser, loggedInUser, getUser, user };
};

export default useUser;
