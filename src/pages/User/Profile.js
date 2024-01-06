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
                Registration: {user.registeredAt}
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

              {/* <Tooltip title="No Turning Back!" arrow>
                <Button
                  sx={{
                    backgroundColor: "black",
                    ":hover": { backgroundColor: "red", color: "white" },
                  }}
                  variant="contained"
                >
                  DELETE PROFILE
                </Button>
              </Tooltip> */}
            </div>
          </div>
        </div>
      )}

      {!user && (
        <div className="no-profile-container">
          <div className="no-profile">
            <h1>This profile does not exist!</h1>
            <img
              style={{ width: "50%" }}
              src="https://i.pinimg.com/originals/03/91/63/03916357a59f430fd2d07d121f7e8471.png"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
