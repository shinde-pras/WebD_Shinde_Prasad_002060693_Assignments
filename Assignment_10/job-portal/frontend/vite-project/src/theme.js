import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0caa41", // Consistent green for buttons
    },
    secondary: {
      main: "#007bff", // Optional secondary
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
    h5: {
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.95rem",
    },
  },
});

export default theme;