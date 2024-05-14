import { Box } from "@mui/material";
import React from "react";
import { Element } from "react-scroll";

const Resume = () => {
  return (
    <Element name="Resume" offset={0}>
      <Box
        sx={{
          height: "100vh",
        }}
      >
        Resume
      </Box>
    </Element>
  );
};

export default Resume;
