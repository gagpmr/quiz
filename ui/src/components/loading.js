import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from "@material-ui/core/styles/withStyles";
import { size } from "polished";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { colors } from "../styles";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled(Logo)(size(100), {
  display: "block",
  margin: "auto",
  fill: colors.grey,
  path: {
    transformOrigin: "center",
    animation: `${spin} 1s linear infinite`
  }
});

const styles = () => ({
  main: {
    display: "flex",
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center"
  }
});

const Loading = props => {
  const { classes } = props;
  return (
    <main className={classes.main}>
      <CssBaseline />
      <StyledLogo />;
    </main>
  );
};

export default withStyles(styles)(Loading);
