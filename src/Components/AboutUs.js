import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import NavHeading from "./NavHeading";

const AboutUs = () => {
  console.log("About us");
  const aboutus = () => {
    window.open("https://bisag-n.gov.in/about_us", "_blank");
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap="1rem"
    >
      <NavHeading heading="About Us" />
      <Paper
        sx={{
          padding: "4rem",
          margin: "2rem"
        }}
      >
        <Typography
          variant="h3"
          component="p"
          fontWeight="bold"
          color="primary"
        >
          About
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="1rem"
        >
          <Typography variant="body1">DB-GROUP</Typography>
          <Typography fontStyle="italic" variant="body2">
            DB GROUP OF INDUSTRIES
          </Typography>
          <Typography>
            Welcome to DB Group, where we revolutionize the way organizations manage their documents. Founded in 1999, our mission is to simplify document workflows, enhance collaboration, and improve data security for businesses of all sizes.
            At DB Group, we understand that effective document management is crucial for operational efficiency. Our innovative platform offers seamless solutions for storing, organizing, and retrieving documents, ensuring that your team can focus on what really matters—growing your business.
            We envision a world where businesses can access their documents effortlessly, fostering a culture of transparency and productivity. By leveraging cutting-edge technology and user-friendly design, we aim to transform how companies interact with their information.
          </Typography>
          <Button variant="contained" onClick={aboutus}>
            Read More
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AboutUs;
