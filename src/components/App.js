import React from "react";

import { Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
// import Header from "./header";
import Main from "./routes/Main";
import Footer from "./footer";
import Login from "./login";

import theme from "./styles/theme";

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={Login} />
      <>
        {/*  <Header /> */}
        <Main />
        <Footer />
      </>
    </Switch>
  </MuiThemeProvider>
);

export default App;
