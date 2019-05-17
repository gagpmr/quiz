import { unstable_Box as Box } from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { navigate } from "@reach/router";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { add } from "../data/history";

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
  },
  submit: {
    width: "100%",
    display: "flex",
    alignItems: "center"
  }
});

const validate = values => {
  const errors = {};
  const requiredFields = ["firstName", "lastName", "email", "favoriteColor", "notes"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

const renderTextField = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const submitValues = async values => {
  await add({ question: values.question, answer: values.answer });
  navigate(`/history/`);
};

const HistoryAdd = props => {
  const { handleSubmit, classes } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <div style={{ width: "100%" }}>
        <form onSubmit={handleSubmit(values => submitValues(values))}>
          <Box display="flex" flexWrap="wrap" flexDirection="row">
            <Box order={1} className={classes.qa}>
              <Typography component="h1" variant="h5" style={{ margin: "auto" }}>
                Q.
              </Typography>
            </Box>
            <Box order={2} className={classes.qabody}>
              <Field
                name="question"
                component={renderTextField}
                label="Question"
                className={classes.textField}
              />
            </Box>
          </Box>
          <Box display="flex" flexWrap="wrap" flexDirection="row">
            <Box order={1} className={classes.qa}>
              <Typography variant="h5" style={{ margin: "auto" }}>
                A.
              </Typography>
            </Box>
            <Box order={2} className={classes.qabody}>
              <Field
                name="answer"
                component={renderTextField}
                label="Answer"
                className={classes.textField}
              />
            </Box>
          </Box>
          <Box className={classes.submit}>
            <Button variant="contained" color="primary" type="submit" style={{ margin: "auto" }}>
              Submit
            </Button>
          </Box>
        </form>
      </div>
    </main>
  );
};

export default reduxForm({
  form: "HistoryAdd", // a unique identifier for this form
  validate
})(withStyles(styles)(HistoryAdd));
