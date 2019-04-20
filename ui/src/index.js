import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import React from "react";
import { ApolloProvider, Query } from "react-apollo";
import ReactDOM from "react-dom";
import Loading from "./components/loading";
import Pages from "./pages";
import { typeDefs } from "./resolvers";
import injectStyles from "./styles";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
    headers: {
      authorization: localStorage.getItem("token")
    }
  }),
  typeDefs
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem("token")
  }
});

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

injectStyles();
ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={IS_LOGGED_IN}>{({ data }) => (data.isLoggedIn ? <Pages /> : <Loading />)}</Query>
  </ApolloProvider>,
  document.getElementById("root")
);
