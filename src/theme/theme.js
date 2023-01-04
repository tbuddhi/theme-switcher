import { createTheme } from "@mui/material";

export const themeOrange = '#ff6660'
export const themeBlue = '#1f0b4f'

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#e6ebfc",
      inputBg: "#e6ebfc"
    },
    text: {
      primary: "#11111",
    },
    neutral: {
      main: '#fedfdd',
      contrastText: '#3d253b',
    },
    orange: {
      main: themeOrange,
      contrastText: '#fff',
    },
  },
  typography: {
    h5: {
      color: '#2b1e66'
    }
  },
  custom: {
    registerForm: {
      formInput: {
        color: '#6678ad',
        background: '#e6ebfc',
        outline: 'none'
      }
    }
  }
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#3f365a",
      inputBg: "#40355a"
    },
    text: {
      primary: "#fff",
    },
    neutral: {
      main: '#fff',
      contrastText: '#3d253b',
    },
    orange: {
      main: themeOrange,
      contrastText: '#fff',
    },
  },
  custom: {
    registerForm: {
      formInput: {
        color: '#fff',
        background: '#40355a',
        outline: 'none'
      }
    }
  }
});