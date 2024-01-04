import React from "react";
import Navbar from "../../components/Navbar";
import { Button, Tooltip } from "@mui/material";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-image"></div>
          <h1>LUCAS@GMAIL.COM</h1>

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
