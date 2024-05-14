import React from "react";
import "./Home.css";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import img112 from "../../images/main1.svg";
import me from "../../images/me1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Element name="Home" offset={0}>
      <Container className="root-home" maxWidth="xl" disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            background: `url(${img112}) no-repeat center`,
            height: "100vh",
            backgroundSize: "cover",
            overflow: "hidden",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Box
            sx={{
              height: "100vh",
              alignItems: "center",
              width: "1200px",
              display: "flex",
              gap: 5,
            }}
          >
            <Paper
              sx={{
                m: 0,
                p: 0.5,
                mt: 5,
                alignSelf: "center",
                background: "transparent",
                borderRadius: "20px",
              }}
              elevation={2}
            >
              <List sx={{ m: 0, p: 0 }}>
                <ListItem sx={{ my: 1, p: 0 }}>
                  <IconButton>
                    <Tooltip
                      title="Facebook"
                      placement="left"
                      arrow
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "#2fb4ae",
                            "& .MuiTooltip-arrow": {
                              color: "#2fb4ae",
                            },
                          },
                        },
                      }}
                    >
                      <FacebookIcon
                        sx={{ fontSize: "1rem", color: "#3b5998" }}
                      />
                    </Tooltip>
                  </IconButton>
                </ListItem>
                <ListItem sx={{ mb: 1, p: 0 }}>
                  <IconButton>
                    <Tooltip
                      title="Instagram"
                      placement="right"
                      arrow
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "#2fb4ae",
                            "& .MuiTooltip-arrow": {
                              color: "#2fb4ae",
                            },
                          },
                        },
                      }}
                    >
                      <InstagramIcon
                        sx={{ fontSize: "1rem", color: "#fa7e1e" }}
                      />
                    </Tooltip>
                  </IconButton>
                </ListItem>
                <ListItem sx={{ mb: 1, p: 0 }}>
                  <IconButton>
                    <Tooltip
                      title="Linked In"
                      placement="left"
                      arrow
                      componentsProps={{
                        tooltip: {
                          sx: {
                            bgcolor: "#2fb4ae",
                            "& .MuiTooltip-arrow": {
                              color: "#2fb4ae",
                            },
                          },
                        },
                      }}
                    >
                      <LinkedInIcon
                        sx={{ fontSize: "1rem", color: "#0077B5" }}
                      />
                    </Tooltip>
                  </IconButton>
                </ListItem>
              </List>
            </Paper>
            <Box>
              <Typography variant="h5" fontWeight={600} color="#2fb4ae" mb={1}>
                👋 Hello i'am
              </Typography>
              <Typography
                variant="h2"
                fontWeight={900}
                color="#083d3d"
                sx={{ fontFamily: "sincopa, sans-serif !important" }}
              >
                Sivaprasad Aluri
              </Typography>
              <Typography variant="h6" color="#16193d" fontWeight={600}>
                Frontend Developer
              </Typography>
              <Typography
                variant="body1"
                maxWidth="500px"
                mt={2}
                color={"#828282"}
              >
                Product Designer who crafts beautiful, minimal and usable
                interfaces.I spend most of my time understanding human computer
                interactions. leading the Design Team at Themesdesign.in
              </Typography>
              <Box display="flex" gap={2} mt={5}>
                <Button variant="contained" sx={{ color: "#fff" }}>
                  Download CV
                </Button>
                <Button variant="outlined"> Contact Me </Button>
              </Box>
            </Box>
          </Box>

          <img src={me} width={650} className="mine" />
          <Typography
            variant="h1"
            component="h1"
            fontWeight={900}
            letterSpacing={5}
            color="#fff"
            fontSize="7rem"
            className="welcome"
          >
            {" "}
            WELCOME{" "}
          </Typography>
        </Box>
      </Container>
    </Element>
  );
};

export default Home;
