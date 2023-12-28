import React from "react";
import Navbar from "../components/Navbar";
import NoteForm from "../pages/Note/NoteForm";

const Homeview: React.FC = () => {
  return (
    <>
      <Navbar />
      <NoteForm />
    </>
  );
};

export default Homeview;
