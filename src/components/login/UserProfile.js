import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <center>
            <h1>User Profile</h1>
            <div id='box'>
              <div>Username: {this.props.userName}</div>
              <div>Email: {this.props.emailName}</div>
            </div>
          </center>
        </div>
    );
  }
}

export default UserProfile;
