import { createMuiTheme } from "material-ui/styles";
import "../App.css";
const cream = "#fffef5";
const blue = "#aee2e0";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ABCE83",
      main: "#2dbb67",
      dark: "#495421"
    },
    secondary: {
      light: "#EBF4A4",
      main: "#EBF4A4",
      dark: "#EBF4A4"
    },
    error: {
      light: "#ff8a50",
      main: "#ff5722",
      dark: "#c41c00"
    }
  },
  status: {
    cream: "#efe2ba",
    grey: "#404040"
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16,
    color: "#404040",
    display1: {
      // fontFamily: "'edoregular'",
      letterSpacing: 5
    },
    display2: {
      letterSpacing: 5
    },
    display4: {
      letterSpacing: 5
    },
    headline: {
      letterSpacing: 0.7,
      fontSize: 20
    },
    title: {
      letterSpacing: 5
    },
    body1: {
      letterSpacing: 0.7
    }
  },
  overrides: {
    MuiTypography: {
      colorPrimary: {
        color: "#404040"
      }
    }
  }
});

export default theme;
