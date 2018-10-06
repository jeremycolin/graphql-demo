import React from "react";
import { QueryRenderer, commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../relayEnvironment";
import "./UserInfo.scss";

const userQuery = graphql`
  query UserInfoQuery {
    user {
      id
      name
    }
  }
`;

export default () => (
  <div className="UserInfo">
    <QueryRenderer
      environment={environment}
      query={userQuery}
      render={({ error, props }) => {
        if (error || !props) return "";
        return <User {...props.user} />;
      }}
    />
  </div>
);

const userNameMutation = graphql`
  mutation UserInfoMutation($name: String!) {
    change_name(name: $name) {
      id
      name
    }
  }
`;

class User extends React.Component {
  state = { edit: false, name: this.props.name };

  handleBlur = () => {
    this.handleEditToggle();
    commitMutation(environment, {
      mutation: userNameMutation,
      variables: { name: this.state.name },
      // onCompleted: this.handleEditToggle,
      optimisticResponse: {
        change_name: {
          id: this.props.id,
          name: this.state.name
        }
      }
    });
  };

  handleChange = e => this.setState({ name: e.target.value });

  handleEditToggle = () => this.setState({ edit: !this.state.edit });

  render() {
    return this.state.edit ? (
      <input value={this.state.name} onBlur={this.handleBlur} onChange={this.handleChange} />
    ) : (
      <>
        {this.props.name}
        <span className="UserInfo-edit" onClick={this.handleEditToggle} role="img" aria-label="edit">
          ✏️
        </span>
      </>
    );
  }
}
