import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "@reach/router";
import React from "react";
import { unit } from "../styles";

export default ({ launch }) => {
  const { id, mission, rocket } = launch;
  return (
    <StyledLink to={`/launch/${id}`}>
      <h3>{mission.name}</h3>
      <h5>{rocket.name}</h5>
    </StyledLink>
  );
};

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

export const cardClassName = css({
  padding: `${unit * 4}px ${unit * 5}px`,
  borderRadius: 7,
  color: "white",
  backgroundSize: "cover",
  backgroundPosition: "center"
});

const padding = unit * 2;
const StyledLink = styled(Link)(cardClassName, {
  display: "block",
  height: 193,
  marginTop: padding,
  textDecoration: "none",
  ":not(:last-child)": {
    marginBottom: padding * 2
  }
});
