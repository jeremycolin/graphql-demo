import React from "react";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../relayEnvironment";
import "./UserWelcome.scss";

const userQuery = graphql`
  query UserWelcomeQuery {
    user {
      id
      name
    }
  }
`;

export default () => (
  <section className="UserBar">
    <QueryRenderer
      environment={environment}
      query={userQuery}
      render={({ error, props }) => {
        if (!props) return "";
        if (error) return "Unable to retrieve your name :(";
        return `Welcome ${props.user.name}`;
      }}
    />
  </section>
);
