import styled from "@emotion/styled";
import React from "react";
import { colors, unit } from "../styles";

export default function Header({ image, children = "Space Explorer" }) {
  const email = atob(localStorage.getItem("token"));
  return (
    <Container>
      <div>
        <h2>{children}</h2>
        <Subheading>{email}</Subheading>
      </div>
    </Container>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: unit * 4.5
});

const Subheading = styled("h5")({
  marginTop: unit / 2,
  color: colors.textSecondary
});
