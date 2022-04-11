import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
  palette: {
    primary: {
      main: "#5cdb95",
    },
    secondary: {
      main: "#05386b",
    },
    error: {
      main: "#fca103",
    },
    success: {
      main: "#64fb6a",
    },
  },
});

export default theme;
