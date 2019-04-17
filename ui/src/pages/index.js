import { Router } from "@reach/router";
import React, { Fragment } from "react";
import { PageContainer } from "../components";
import Profile from "./profile";

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <Profile path="profile" />
        </Router>
      </PageContainer>
    </Fragment>
  );
}
