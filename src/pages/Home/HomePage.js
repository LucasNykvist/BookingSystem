import React from "react";
import Navbar from "../../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
        className="homepage-container"
      >
        <div
          style={{
            backdropFilter: "blur(20px)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            width: "700px",
            padding: "1rem",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
          className="homepage-content"
        >
          <div
            style={{
              fontFamily: "anton",
              fontSize: "3rem",
              color: "black",
              textDecoration: "underline",
            }}
            className="navbar-brand"
          >
            TDL | NOTE APPLICATION
          </div>
          <h1
            style={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            WELCOME!
          </h1>

          <div className="option-list"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
