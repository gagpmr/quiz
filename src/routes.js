import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Router } from "@reach/router";
import React from "react";
import Driving from "./pages/driving";
import DrivingAdd from "./pages/driving-add";
import Home from "./pages/home";

const theme = createMuiTheme({
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 16
  }
});

const Routes = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Home path="/" />
        <Driving path="driving" />
        <DrivingAdd path="/driving-add" />
      </Router>
    </MuiThemeProvider>
  );
};

export default Routes;
