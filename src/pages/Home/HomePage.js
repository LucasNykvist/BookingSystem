import React from "react";
import Navbar from "../../components/Navbar";
import { Button } from "@mui/material";

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
            maxWidth: "700px",
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
              marginTop: "1rem",
              color: "black",
            }}
          >
            WELCOME!
          </h1>

          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginTop: "1rem",
              flexDirection: "column",
              color: "black",
              fontSize: "1.1rem",
            }}
            className="option-list"
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
              veritatis ipsa autem possimus! Consequuntur libero tenetur, quia
              omnis animi facilis veniam quo optio beatae eaque officiis, sequi
              nesciunt mollitia expedita!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              expedita veniam eum nemo laboriosam, asperiores illo atque
              veritatis facere repellendus culpa eaque officia dolorum
              praesentium dignissimos, corrupti nulla, libero porro.
            </p>

            <img src="https://media.tenor.com/E0idbj67jFIAAAAd/fortnite-fortnite-default-dance.gif" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
