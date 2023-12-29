import React from "react";
import "./App.css";
import Homeview from "./views/Homeview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageNotes from "./views/ManageNotes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeview />} />
        <Route path="/notes" element={<ManageNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
