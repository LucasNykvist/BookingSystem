import React from "react";
import "./App.css";
import Homeview from "./views/Homeview";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageNotes from "./views/ManageNotes";
import RegisterForm from "./pages/User/RegisterForm";
import LoginForm from "./pages/User/LoginForm";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/User/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeview />} />
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
