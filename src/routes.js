import { Router } from "@reach/router";
import React from "react";
import Home from "./pages/home";

const Routes = () => {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
};

export default Routes;
