import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Yantramanav, sans-serif !important",
  },
  palette: {
    type: "light",
    primary: {
      main: "#2fb4ae",
      color: "#fff",
    },
    secondary: {
      main: "#bdbdbd",
    },
    text: {
      hint: "#ffffff ",
    },
    background: {
      paper: "#c7c6c6",
      default: "#ffffff",
    },
    error: {
      main: "#ef5350",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
});
