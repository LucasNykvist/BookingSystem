import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Button, Tooltip } from "@mui/material";

const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useState("");

  const getLoggedInUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoggedInUser(user);
      return user;
    }
    return null;
  };

  useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-image"></div>
          <h1>{loggedInUser.replace(/"/g, "")}</h1>

          <div className="profile-information">
            <p className="profile-info-text">Notes Created: 3</p>
            <p className="profile-info-text">Registered: 2024-01-04</p>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
            className="buttons"
          >
            <Button
              sx={{
                backgroundColor: "black",
                ":hover": { backgroundColor: "white", color: "black" },
              }}
              variant="contained"
            >
              Edit
            </Button>

            <Tooltip title="No Turning Back!" arrow>
              <Button
                sx={{
                  backgroundColor: "black",
                  ":hover": { backgroundColor: "red", color: "white" },
                }}
                variant="contained"
              >
                DELETE PROFILE
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
