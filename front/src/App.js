import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Cars from "./Cars";
import Drivers from "./Drivers";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export default () => (
  <ApolloProvider client={client}>
    <div className="App">
      <div className="App-container App-container-left">
        <Drivers />
      </div>
      <div className="App-container">
        <Cars />
      </div>
    </div>
  </ApolloProvider>
);
