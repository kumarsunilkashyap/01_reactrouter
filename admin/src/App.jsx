import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./Layout";
import Dashboard from "./pages/Dashboard"; // Removed unused import
import Profile from "./pages/Profile";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index path="dashboard" element={<Dashboard />} />

          <Route path="*" element={<Dashboard />} />

          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/" element={<Navigate to="login" />} />
      </Routes>
    </Router>
  );
};

export default App;
