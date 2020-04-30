import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF"
    },
    secondary: {
      main: "#FED60D"
    },
    text: {
      secondary: "#FFFFFF"
    }
  },
  shape: {
    borderRadius: 4
  },
  typography: {
    h3: {
      fontSize: "1.5rem"
    },
    button: {
      fontSize: "1.125rem"
    }
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        border: "1px solid #ffffff"
      }
    }
  }
});

export default theme;
