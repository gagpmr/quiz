import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "@reach/router";
import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <ul>
      <li>
        <RouterLink to="/">
          <Typography variant="body1" style={{ color: "white" }}>
            Home
          </Typography>
        </RouterLink>
      </li>
      <li class="dropdown">
        <RouterLink to="/history" className="dropbtn">
          <Typography variant="body1" style={{ color: "white" }}>
            History
          </Typography>
        </RouterLink>
        <div class="dropdown-content">
          <RouterLink to="/history-add">History Add</RouterLink>
          <RouterLink to="">Link 2</RouterLink>
          <RouterLink to="">Link 3</RouterLink>
        </div>
      </li>
    </ul>
  );
};

export default Navbar;
