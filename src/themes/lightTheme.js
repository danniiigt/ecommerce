import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#613F75",
    },

    background: {
      default: "#f3f4f6",
      paper: "#fff",
    },

    text: {
      primary: "#333",
      secondary: "#888",
    },
  },

  typography: {
    fontFamily: [
      "Kanit",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  components: {
    // CAMBIA EL BORDERRADIUS DE TODOS LOS BOTONES A 60px
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
        },
      },
    },

    // LO MISMO CON EL TEXT FIELD
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "12px",

          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
          },
        },
      },
    },
  },
});
