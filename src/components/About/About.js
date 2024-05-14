import { Box } from "@mui/material";
import React from "react";
import "./About.css";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="About" offset={0}>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        About
      </Box>
    </Element>
  );
};

export default About;
