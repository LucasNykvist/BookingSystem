import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageNotes from "./pages/Note/ManageNotes";
import RegisterForm from "./pages/User/RegisterForm";
import LoginForm from "./pages/User/LoginForm";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/User/Profile";
import HomePage from "./pages/Home/HomePage";
import NoteForm from "./pages/Note/NoteForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-note" element={<NoteForm />} />
        <Route path="/notes" element={<ManageNotes />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
