import { unstable_Box as Box } from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link as RouterLink } from "@reach/router";
import React from "react";
import Navbar from "../components/navbar";

const styles = theme => ({
  main: {
    width: "auto",
    display: "flex",
    alignItems: "center"
  },
  header: {
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderRadius: "8px",
    padding: "0px"
  },
  item: {
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    borderRadius: "8px",
    padding: "2px",
    width: "20%",
    position: "absolute",
    display: "flex",
    alignItems: "center"
  },
  link: {
    fontSize: 20,
    margin: "auto"
  }
});

const Home = ({ classes }) => {
  return (
    <main className={classes.main}>
      <CssBaseline />
      <div style={{ width: "100%" }}>
        <Navbar />
        <Box display="flex">
          <div className={classes.item}>
            <RouterLink to="history" className={classes.link}>
              History
            </RouterLink>
          </div>
        </Box>
      </div>
    </main>
  );
};

export default withStyles(styles)(Home);
