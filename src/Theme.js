import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { darkScrollbar } from "@mui/material";

const PRIMARY_COLOR = "#ffffff",
  SECONDARY_COLOR = "#371d6e",
  ACCENT_COLOR = "#ebab34",
  BG_DARK_MAIN = "#212121",
  BG_DARK_DARK = "#292929",
  BG_LIGHT_MAIN = "#f7f7f7",
  BG_LIGHT_DARK = "#f0f0f0";

const themeProperties = {
  typography: {
    h1: {
      fontFamily: ["Libre Franklin"],
    },
    h2: {
      fontFamily: ["Libre Franklin"],
    },
    h3: {
      fontFamily: ["Libre Franklin"],
    },
    h4: {
      fontFamily: ["Libre Franklin"],
    },
  },
};
let DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: PRIMARY_COLOR,
      contrastText: "#ffffff",
    },
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: "#ffffff",
    },
    accent: {
      main: ACCENT_COLOR,
      contrastText: "#ffffff",
    },
    background: {
      default: BG_DARK_MAIN,
      paper: BG_DARK_DARK,
    },
    warning: {
      main: "#b80000",
    },
  },
  ...themeProperties,
});

let LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: PRIMARY_COLOR,
      contrastText: "#ffffff",
    },
    secondary: {
      main: SECONDARY_COLOR,
      contrastText: "#ffffff",
    },
    accent: {
      main: ACCENT_COLOR,
      contrastText: "#ffffff",
    },
    background: {
      default: BG_LIGHT_DARK,
      paper: BG_LIGHT_MAIN,
    },
  },
  ...themeProperties,
});

DarkTheme.components = {
  ...DarkTheme.components,
  MuiCssBaseline: {
    styleOverrides: {
      body: darkScrollbar(),
    },
  },
};

DarkTheme = responsiveFontSizes(DarkTheme);
LightTheme = responsiveFontSizes(LightTheme);

export { DarkTheme, LightTheme };

export default DarkTheme;
