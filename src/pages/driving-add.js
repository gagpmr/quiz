import { unstable_Box as Box } from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { updateField } from "../data/appState";

const styles = theme => ({
  main: {
    width: "auto",
    display: "flex"
  },
  qa: {
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    width: "10%",
    display: "flex",
    alignItems: "center"
  },
  qabody: {
    borderWidth: "1px",
    borderColor: "#DDDDDD",
    borderStyle: "solid",
    width: "90%",
    display: "flex",
    alignItems: "center"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  }
});

const Home = ({ classes }) => {
  return (
    <main className={classes.main}>
      <CssBaseline />
      <div style={{ width: "100%" }}>
        <Box display="flex" flexWrap="wrap" flexDirection="row">
          <Box order={1} className={classes.qa}>
            <Typography component="h1" variant="h5" style={{ margin: "auto" }}>
              Q.
            </Typography>
          </Box>
          <Box order={2} className={classes.qabody}>
            <TextField id="standard-bare" className={classes.textField} />
          </Box>
        </Box>
        <Box display="flex" flexWrap="wrap" flexDirection="row">
          <Box order={1} className={classes.qa}>
            <Typography component="h1" variant="h5" style={{ margin: "auto" }}>
              A.
            </Typography>
          </Box>
          <Box order={2} className={classes.qabody}>
            <TextField
              id="answer"
              className={classes.textField}
              onChange={e => updateField("driving_add_answer", e.target.value)}
            />
          </Box>
        </Box>
      </div>
    </main>
  );
};

export default withStyles(styles)(Home);
