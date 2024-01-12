import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ManageNotes from "./pages/Note/ManageNotes";
import RegisterForm from "./pages/User/RegisterForm";
import LoginForm from "./pages/User/LoginForm";
import NotFound from "./pages/NotFound/NotFound";
import Profile from "./pages/User/Profile";
import HomePage from "./pages/Home/HomePage";
import NoteForm from "./pages/Note/NoteForm";
import useUser from "./pages/User/hooks/useUser";
import NotAllowed from "./pages/NotAllowed/NotAllowed";
import { AuthProvider } from "./contexts/useAuth";
import TempPage from "./pages/Temp/TempPage";

function App() {
  const { getLoggedInUser, loggedInUser } = useUser();

  React.useEffect(() => {
    getLoggedInUser();
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {loggedInUser && (
            <>
              <Route path="/create-note" element={<NoteForm />} />
              <Route path="/notes" element={<ManageNotes />} />
              <Route path="/profile/:id" element={<Profile />} />
            </>
          )}

          <Route path="/temp" element={<TempPage />} />
          <Route path={"/" && "/home"} element={<HomePage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />

          {loggedInUser && <Route path="*" element={<NotFound />} />}
          {!loggedInUser && <Route path="*" element={<NotAllowed />} />}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
