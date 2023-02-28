import "./App.css";
import Dashboard from "./routes/Dashboard";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const handleLogout = () => {
    setAuthenticatedUser(null);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Router>
        <Routes>
          {true ? (
            <Route
              path="/"
              element={
                <Dashboard onLogout={handleLogout} user={authenticatedUser} />
              }
            />
          ) : (
            <>
              <Route path="/signup" element={<SignUp />} />
              <Route
                path="/"
                element={
                  <SignIn
                    onLogin={(userData) => setAuthenticatedUser(userData)}
                  />
                }
              />
              <Route path="*" element={<SignIn />} />
            </>
          )}
        </Routes>
      </Router>
    </LocalizationProvider>
  );
}

export default App;
