import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import App from "./Components/App";
import AboutUs from "./Components/AboutUs";
import HomePage from "./Components/HomePage";
import UserManagement from "./Components/UserManagement";
import Profile from "./Components/Profile";
import LoginPage from "./Components/LoginPage";
import LayoutPage from "./Components/LayoutPage";
import UserRequests from "./Components/UserRequests";
import Notifications from "./Components/Notifications";
import OTPVerify from "./Components/OTPVerify";

// Utility function to determine if the user is logged in
const useAuth = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  return isLoggedIn == 1; // Convert string "1" to true, "0" to false
};

const Main = () => {
  const isLoggedIn = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/forgot-password" element={<OTPVerify />} />

        {/* Protected Routes */}
        <Route element={isLoggedIn ? <LayoutPage /> : <Navigate to="/login" />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/documents" element={<App />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/requests" element={<UserRequests />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/change-password" element={<OTPVerify />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
