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
            width: "fit-content",
            padding: "1rem",
            borderRadius: "1rem",
          }}
          className="homepage-content"
        >
          <h1 style={{ fontWeight: "bold", textAlign: "center" }}>WELCOME!</h1>

          <img src="https://media1.giphy.com/media/hU2wdCVRel4b7qJWfK/giphy.gif?cid=790b7611nem8qm1zg8vy004t04yisjx3ceanlgryx4nnmu3m&ep=v1_gifs_search&rid=giphy.gif&ct=s" />

          <div className="option-list"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
