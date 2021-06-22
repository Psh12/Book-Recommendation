import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/usersAction";
import { Link } from "react-router-dom";

class users extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    const { users } = this.props.users;
    console.log(this.props.users);

    return (
      <div class="list-group">
        {users.map((u) => (
          <React.Fragment key={u.id}>
            <Link to={"/user/" + u.id} className="list-group-item">
              <h6>{u.name}</h6>
            </Link>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.users });

export default connect(mapStateToProps, { getUsers })(users);
