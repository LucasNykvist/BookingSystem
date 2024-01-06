import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Button, Tooltip } from "@mui/material";
import useUser from "./hooks/useUser";

const Profile = () => {
  const { getLoggedInUser, loggedInUser } = useUser();

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
            <h4 style={{ color: "black", fontWeight: "bold" }}>
              User Information:{" "}
            </h4>
            <p className="profile-info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              delectus? Earum suscipit illo, omnis voluptas, laudantium eligendi
              et itaque, ipsam quaerat dolore aliquam voluptate voluptatibus
              accusamus fuga beatae non est?
            </p>
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
