import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import "./UserInfo.scss";

const userQuery = gql`
  {
    user {
      name
      id
    }
  }
`;

export default () => (
  <div className="UserInfo">
    <Query query={userQuery}>
      {({ loading, error, data }) => {
        if (loading || error) return "";
        return <User name={data.user.name} />;
      }}
    </Query>
  </div>
);

const userNameMutation = gql`
  mutation ChangeName($name: String!) {
    change_name(name: $name) {
      id
      name
    }
  }
`;

class User extends React.Component {
  state = { edit: false, name: this.props.name };

  handleBlur = updateNameMutation => () => {
    updateNameMutation({ variables: { name: this.state.name } });
    this.handleEditToggle();
  };

  handleChange = e => this.setState({ name: e.target.value });

  handleEditToggle = () => this.setState({ edit: !this.state.edit });

  render() {
    return (
      <Mutation mutation={userNameMutation}>
        {updateName =>
          this.state.edit ? (
            <input value={this.state.name} onBlur={this.handleBlur(updateName)} onChange={this.handleChange} />
          ) : (
            <>
              {this.props.name}
              <span className="UserInfo-edit" onClick={this.handleEditToggle} role="img" aria-label="edit">
                ✏️
              </span>
            </>
          )
        }
      </Mutation>
    );
  }
}
