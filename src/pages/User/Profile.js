import React from "react";
import Navbar from "../../components/Navbar";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-content">
          <p className="profile">PROFILE</p>
          <div className="profile-image"></div>
          <h1>USER: Placeholder</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
