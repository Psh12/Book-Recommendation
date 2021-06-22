import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../store/actions/usersAction";

class user extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUser(id);
  }
  render() {
    const { user } = this.props.users;
    console.log(this.props.users.user);

    return (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUser })(user);
