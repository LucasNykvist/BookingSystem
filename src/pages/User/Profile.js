import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Button, TextField, Tooltip } from "@mui/material";
import useUser from "./hooks/useUser";
import { useParams } from "react-router-dom";
import { updateUser, updateUser2 } from "../../api/users.api";
import Dropzone from "react-dropzone-uploader";

const Profile = () => {
  const { getUser, user } = useUser();
  const { id } = useParams();

  const [imageFile, setImageFile] = useState({});

  // WTF saker -> till uppladdning av bilder
  const getUploadParams = ({ meta }) => {
    return {
      url: `http://localhost:5000/api/users/${id}`,
      method: "POST",
      body: imageFile,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  };

  const [fileStatus, setFileStatus] = useState(
    "Drop profile image file here or click to upload"
  );

  const handleChangeStatus = ({ meta, file }, status) => {
    if (status === "rejected_max_files") {
      setFileStatus("You can only upload one file!");
    }

    if (status === "done") {
      setFileStatus("File uploaded!");
    }

    setImageFile(file);
  };

  const [editMode, setEditMode] = useState(false);
  const [userAbout, setUserAbout] = useState({
    about: user.about,
  });

  const onChange = (e) => {
    setUserAbout({ ...userAbout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser2(imageFile, userAbout, id);
    getUser(id);
    setEditMode(false);
  };

  useEffect(() => {
    getUser(id);
  }, []);

  return (
    <>
      <Navbar />

      {user && (
        <div className="profile-container">
          {/* EDIT MODE ON */}
          {editMode && (
            <div className="profile-content">
              <p>EDIT MODE</p>
              <div className="profile-image"></div>
              <h1>{user.email}</h1>

              <div className="profile-information">
                {/* About */}
                <h4 style={{ color: "black", fontWeight: "bold" }}>
                  User Information:{" "}
                </h4>

                <TextField
                  sx={{ marginTop: "1rem", marginBottom: "1rem" }}
                  label="Edit User Information"
                  onChange={onChange}
                  placeholder={user.about}
                  name="about"
                  value={userAbout.about}
                  variant="outlined"
                  multiline
                />

                {/* Profile image */}
                <h4 style={{ color: "black", fontWeight: "bold" }}>
                  Profile Image:{" "}
                </h4>

                <Dropzone
                  styles={{
                    input: {
                      display: "none",
                    },
                    submitButton: {
                      display: "none",
                    },
                    previewImage: {
                      width: "150px",
                      height: "150px",
                      objectFit: "cover",
                    },
                    inputLabel: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      minHeight: 100,
                      maxHeight: 100,
                      border: "1px solid rgba(0, 0, 0, 0.381)",
                      borderRadius: "5px",
                      margin: "1rem 0rem",
                    },
                  }}
                  getUploadParams={getUploadParams}
                  onChangeStatus={handleChangeStatus}
                  maxFiles={1}
                  accept="image/*"
                  inputContent={fileStatus}
                />
              </div>

              <div className="buttons">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    gap: "0.5rem",
                  }}
                  className="buttons-left"
                >
                  <Button
                    onClick={handleSubmit}
                    sx={{
                      backgroundColor: "black",
                      ":hover": { backgroundColor: "white", color: "black" },
                    }}
                    variant="contained"
                  >
                    Accept Changes
                  </Button>
                  <Button
                    onClick={() => setEditMode(false)}
                    sx={{
                      backgroundColor: "black",
                      ":hover": { backgroundColor: "white", color: "black" },
                    }}
                    variant="contained"
                  >
                    Cancel
                  </Button>
                </div>

                <div className="buttons-right">
                  <Tooltip title="Delete Profile" arrow>
                    <Button
                      sx={{
                        backgroundColor: "black",
                        ":hover": {
                          backgroundColor: "red",
                          color: "white",
                        },
                      }}
                      variant="contained"
                    >
                      DELETE
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          )}

          {/* EDIT MODE OFF */}
          {!editMode && (
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
                  onClick={() => setEditMode(true)}
                  sx={{
                    backgroundColor: "black",
                    ":hover": { backgroundColor: "white", color: "black" },
                  }}
                  variant="contained"
                >
                  Edit
                </Button>
              </div>
            </div>
          )}
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
