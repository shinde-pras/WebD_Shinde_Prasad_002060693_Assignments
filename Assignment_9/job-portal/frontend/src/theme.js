import { blueGrey, orange, lightBlue, green } from '@mui/material/colors';

export const themeColors = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode palette
          primary: {
            main: blueGrey[700], // Blue Grey shade
          },
          secondary: {
            main: lightBlue[500], // Light Blue shade
          },
          background: {
            default: '#f5f5f5', // Light background
          },
          text: {
            primary: '#000000', // Black text color for better readability
            secondary: '#424242', // Dark grey secondary text color
          },
          cardBackground: '#ffffff', // Custom card background for light mode
        }
      : {
          // Dark mode palette
          primary: {
            main: green[700], // Green shade
          },
          secondary: {
            main: orange[500], // Orange shade
          },
          background: {
            default: '#121212', // Darker background for better contrast
          },
          text: {
            primary: '#ffffff', // White text color for dark mode
            secondary: '#bdbdbd', // Light grey secondary text color
          },
          cardBackground: '#333333', // Custom card background for dark mode
        }),
  },
});
