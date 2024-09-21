import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const navigate = useNavigate();
  const openExternalLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="baseline"
      gap="1rem"
      backgroundColor="black"
      color="white"
      padding="4rem"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
      >
        <Typography variant="h2">Bhubaneswar Address</Typography>
        <Typography variant="h1">
          Main address Near Pal Hights , patia,
          <br />
          Bhubaneswar-Patia Main colony, khordha-754 213 Odisha, India.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
      >
        <Typography variant="h2">Bangalore Address</Typography>
        <Typography variant="h1">
          DB Group main Building, Kormangla 5th Block<br />
          Bangalore-560 076
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2">Connect With Us</Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
        >
          <IconButton
            sx={{
              color: "white",
            }}
            onClick={() =>
              openExternalLink("https://www.facebook.com")
            }
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
            }}
            onClick={() =>
              openExternalLink("https://twitter.com")
            }
          >
            <XIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
            }}
            onClick={() =>
              openExternalLink("https://www.facebook.com")
            }
          >
            <PinterestIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
            }}
            onClick={() =>
              openExternalLink(
                "https://www.linkedin.com"
              )
            }
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
            }}
            onClick={() =>
              openExternalLink("https://www.facebook.com")
            }
          >
            <InstagramIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
