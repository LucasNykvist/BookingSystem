import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Button, Tooltip } from "@mui/material";
import useUser from "./hooks/useUser";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { getUser, user } = useUser();
  const { id } = useParams();

  useEffect(() => {
    getUser(id);
  }, []);

  return (
    <>
      <Navbar />
      {user && (
        <div className="profile-container">
          <div className="profile-content">
            <div className="profile-image"></div>
            <h1>{user.email}</h1>

            <div className="profile-information">
              <h4 style={{ color: "black", fontWeight: "bold" }}>
                User Information:{" "}
              </h4>
              <p className="profile-info-text">{user.about}</p>
              <p className="profile-info-text">
                Registration Date: {user.registeredAt}
              </p>
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
      )}
    </>
  );
};

export default Profile;
