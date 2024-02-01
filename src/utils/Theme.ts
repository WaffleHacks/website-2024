import { createTheme } from "@mui/material/styles";
/*
primary
secondary
background
foreground
accent
disabled
desctructive
destructive-hover
primary-hover
secondary-hover
*/
export const theme = createTheme({
  palette: {
    primary: {
      main: "#f2994a",
      light: '#fddc79',
      dark: '#3c2415',
      contrastText:'#a47556'
    },
    secondary: {
      main: '#2d9cdb',
      light: '#eaf9ff',
      dark: '#135cbd',
      contrastText:'#3c7ed6'
    },
    error: {
      main: '#920813',
      light: '#ed6b65',
      dark: '#b73f48',
      contrastText:'#f1906b'
    },
    warning: {
      main: '#f2994a',
      light: '#fddc79',
      dark: '#3c2415',
      contrastText:'#a47556'
    },
    success: {
      main: '#3a7c13',
      light: '#e5eaa7',
      dark: '#5c913b',
      contrastText:'#bdd1a3'
    },
    background: {
      default: '#ffffff',
      paper: '#fddc79'
    }
  },
});