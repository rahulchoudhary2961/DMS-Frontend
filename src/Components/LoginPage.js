import React, { useState } from "react";
import {
  Paper,
  InputLabel,
  TextField,
  Box,
  Button,
  Typography,
  useTheme,
} from "@mui/material";
import bgImage from "../images/bisag_bgImage.jpg";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { palette } = useTheme();
  const primary_color = palette.primary.main;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedPassword = password.trim();

    if (email === "") {
      toast.error("Please enter your email id!");
    } else if (trimmedPassword === "") {
      toast.error("Please enter your password!");
    } else if (trimmedPassword.length < 8) {
      toast.error("Please enter an 8-digit password!");
    } else {
      try {
        const result = await axios.post("http://localhost:5000/login-user", {
          email,
          password,
        });
        const response = result.data;

        if (response.status === "ok") {
          sessionStorage.setItem("isLoggedIn", 1);
          sessionStorage.setItem("user", JSON.stringify(response.user));
          sessionStorage.setItem("user-type", response.user.userType);
        
          console.log("Navigating to homepage...", response.user);
          console.log(sessionStorage);
        
          // Delay navigation slightly to ensure sessionStorage is updated
          // setTimeout(() => {
            // navigate("/documents");
            window.location.href = '/'
          // }, 100);  // 100ms delay
        } else {
          toast.error("Invalid credentials!");
        }
      } catch (error) {
        console.error("Login error:", error.message);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Box
      height="100vh"
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        sx={{
          padding: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          margin: "4rem",
        }}
      >
        <Box height="5rem" width="15rem">
          <Typography
            textAlign="center"
            variant="h4"
            width="100%"
            color={primary_color}
          >
            Login Page
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Box width="40rem">
            <InputLabel>Enter Your Email:</InputLabel>
            <TextField
              placeholder="Email ID"
              autoComplete="off"
              required
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Box>
          <Box width="40rem">
            <InputLabel>Enter Your Password:</InputLabel>
            <TextField
              placeholder="Password"
              autoComplete="off"
              required
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
            <Link to="/forgot-password">
              <Typography variant="h7" color="red">
                Forgot Password?
              </Typography>
            </Link>
          </Box>
          <Button variant="contained" type="submit">
            LOGIN
          </Button>
        </form>
      </Paper>
      <ToastContainer />
    </Box>
  );
};

export default LoginPage;
