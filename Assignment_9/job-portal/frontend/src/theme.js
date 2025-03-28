import { blueGrey, orange, lightBlue, green, pink } from '@mui/material/colors';

export const themeColors = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
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
            primary: '#333333', // Readable dark text color
            secondary: '#616161', // Readable secondary text color
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: green[700], // Green shade
          },
          secondary: {
            main: orange[500], // Orange shade
          },
          background: {
            default: '#212121', // Dark background
          },
          text: {
            primary: '#ffffff', // White text color
            secondary: '#e0e0e0', // Light grey text color
          },
        }),
  },
});
