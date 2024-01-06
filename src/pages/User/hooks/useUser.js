import React, { useEffect, useState } from "react";

const useUser = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  // Retrieves user data from local storage
  const getLoggedInUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedInUser(user);
      return user;
    }
    return null;
  };

  return { getLoggedInUser, loggedInUser };
};

export default useUser;
