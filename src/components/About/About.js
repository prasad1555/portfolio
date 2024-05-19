import {
  Box,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
  IconButton,
  Tooltip,
  Fab,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import React from "react";
import "./About.css";
import { Element } from "react-scroll";
import aboutImg from "../../images/about.png";
import aboutBgImg from "../../images/about_1.svg";
import BgImg12 from "../../images/bg12.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <Element
      name="About"
      style={{
        paddingTop: "140px",
        boxSizing: "border-box",
        width: "75%",
        margin: "auto",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          height: "70vh",
          boxSizing: "border-box",
        }}
        // width={"75%"}

        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Paper
          elevation={2}
          sx={{
            borderRadius: "2%",
            overflow: "clip",
            background: `url(${aboutBgImg}) bottom center no-repeat, url(${BgImg12}) top center no-repeat`,
            backgroundSize: "cover, 120%",
            boxSizing: "border-box",
            height: "550px",
            p: 2,
            position: "relative",
            width: "38%",
          }}
        >
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            alignContent="end"
            my={1}
            height="100%"
            position="relative"
            flexDirection="column"
            width="100%"
          >
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                mt: 5,
                color: "#fff",
                textShadow: "1px 2px 2px #626262",
                textAlign: "center",
              }}
              textTransform="uppercase"
            >
              Sivaprasad Aluri
            </Typography>
            <Typography
              variant="subtitle2"
              width="100%"
              mb={2}
              color="#fff"
              textAlign="center"
              fontWeight={600}
              letterSpacing="2px"
              textTransform="uppercase"
            >
              UI Developer
            </Typography>
            <Paper
              sx={{
                m: 0,
                // p: 0.5,
                my: 5,
                alignSelf: "center",
                background: "transparent",
                // borderRadius: "20px",
              }}
              elevation={0}
            >
              <List sx={{ m: 0, p: 0, display: "flex", gap: 2 }}>
                <ListItem sx={{ my: 0, p: 0 }}>
                  <Fab
                    size="medium"
                    sx={{
                      background: "#2fb4ae",
                      border: "2px solid #fff",
                      transition: "0.7s",
                      "&:hover": {
                        background: "#1b615d",
                      },
                    }}
                  >
                    <FacebookIcon sx={{ fontSize: "1.2rem", color: "#fff" }} />
                  </Fab>
                </ListItem>
                <ListItem sx={{ mb: 0, p: 0 }}>
                  <Fab
                    size="medium"
                    sx={{
                      background: "#2fb4ae",
                      border: "2px solid #fff",
                      transition: "0.7s",
                      "&:hover": {
                        background: "#1b615d",
                      },
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: "1.2rem", color: "#fff" }} />
                  </Fab>
                </ListItem>
                <ListItem sx={{ mb: 0, p: 0 }}>
                  <Fab
                    size="medium"
                    sx={{
                      background: "#2fb4ae",
                      border: "2px solid #fff",
                      transition: "0.7s",
                      "&:hover": {
                        background: "#1b615d",
                      },
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: "1.2rem", color: "#fff" }} />
                  </Fab>
                </ListItem>
              </List>
            </Paper>
          </Box>
          <Box
            maxWidth={120}
            maxHeight={120}
            sx={{
              overflow: "clip",
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              borderRadius: "50%",
              background: "#ccccccb1",
            }}
            mb={2}
            position={"absolute"}
            left={160}
            bottom={200}
          >
            <img
              src={aboutImg}
              width={120}
              height={"100%"}
              style={{
                transform:
                  "rotateY(180deg) scale(1.5,1.5) translate(4px, 28px)",
              }}
            />
          </Box>
        </Paper>
        <Box
          width={"60%"}
          sx={{
            background: "#35b4ae",
            boxSizing: "border-box",
            color: "#fff",
            borderTopRightRadius: "2%",
            borderBottomRightRadius: "2%",
            height: "530px",
            p: 5,
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontFamily: "sincopa, sans-serif !important" }}
            fontWeight={600}
            color="#ffffff"
            className="underHeader"
          >
            About Me
          </Typography>
          <Typography variant="subtitle1" my={4}>
            Hello! I'm Sivaprasad, a passionate UI developer from India. My
            journey has led me from web development to specializing in React.
            Over the years, I've refined my skills and expertise in various
            technologies, starting with traditional web development using HTML,
            CSS, and JavaScript, and delving into modern frameworks like
            Angular, React, and Node.js.
          </Typography>
          <Box my={2}>
            <TableContainer sx={{ width: "60%" }}>
              <Table size="small">
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#fff",
                        border: "none",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      Birthday{" "}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#fff", border: "none", fontWeight: "bold" }}
                    >
                      : &nbsp;&nbsp; July 18, 1987{" "}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#fff",
                        border: "none",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      Phone{" "}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#fff", border: "none", fontWeight: "bold" }}
                    >
                      : &nbsp;&nbsp; +91 9121081882
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#fff",
                        border: "none",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      Email{" "}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#fff", border: "none", fontWeight: "bold" }}
                    >
                      : &nbsp;&nbsp; Shivaprasad.aluri@gmail.com
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "#fff",
                        border: "none",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      From{" "}
                    </TableCell>
                    <TableCell
                      sx={{ color: "#fff", border: "none", fontWeight: "bold" }}
                    >
                      : &nbsp;&nbsp; Hyderabad, India
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box my={5} gap={5} display={"flex"}>
              <Button
                variant="contained"
                color="primary"
                sx={{ color: "#fff", letterSpacing: 1 }}
              >
                {" "}
                Download CV{" "}
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ color: "#fff", letterSpacing: 1 }}
              >
                {" "}
                Contact me{" "}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Element>
  );
};

export default About;
