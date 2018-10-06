import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./UserWelcome.scss";

const userQuery = gql`
  {
    user {
      name
      id
    }
  }
`;

export default () => (
  <section className="UserBar">
    <Query query={userQuery}>
      {({ loading, error, data }) => {
        if (loading) return "";
        if (error) return "Unable to retrieve your name :(";
        return `Welcome ${data.user.name}`;
      }}
    </Query>
  </section>
);
