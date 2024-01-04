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
          <h1>LUCAS@GMAIL.COM</h1>

          <div className="profile-information">
            <p className="profile-info-text">Notes Created: 3</p>
            <p className="profile-info-text">Registered: 2024-01-04</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
