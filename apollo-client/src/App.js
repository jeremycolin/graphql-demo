import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import UserWelcome from "./components/UserWelcome";
import UserInfo from "./components/UserInfo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export default () => (
  <ApolloProvider client={client}>
    <UserWelcome />
    <UserInfo />
  </ApolloProvider>
);
