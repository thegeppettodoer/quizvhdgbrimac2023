import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Plans from "../pages/plans";
import PrivateRoute from "../components/PrivateRoute";
import { AuthProvider } from "../contexts/AuthContext";
import Resume from "../pages/resume";

const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<PrivateRoute Component={Plans} />} />
          <Route path="/resume" element={<PrivateRoute Component={Resume} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
