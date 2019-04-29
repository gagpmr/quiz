import { unstable_Box as Box } from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import React from "react";

const styles = theme => ({
  main: {
    width: "auto",
    display: "flex",
    alignItems: "center"
  }
});

const Home = ({ classes }) => {
  return (
    <main className={classes.main}>
      <CssBaseline />
      <div style={{ width: "100%" }}>
        <Box
          display="flex"
          justifyContent="center"
          p={1}
          style={{
            borderWidth: "1px",
            borderColor: "#DDDDDD",
            borderStyle: "solid",
            borderRadius: "8px",
            padding: "0px"
          }}
        >
          <div>
            <Typography component="h1" variant="h4">
              Home
            </Typography>
          </div>
        </Box>
      </div>
    </main>
  );
};

export default withStyles(styles)(Home);
