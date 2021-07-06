import React, {Component} from 'react';


class UserProfile extends Component {
  constructor () {
    super()
    this.state = {
        name: ''
    }
  }
   getName = async ()=>{
     try {
      const response = await fetch("http://localhost:5000/dashboard",{
        method: "GET",
        headers: {"token": localStorage.token},
      });
      const parseRes = await response.json();
      this.setState({name: parseRes.user_name});
     } 
     catch (error) {
       console.error(error.message);
     } 
   }

   logOut = (e)=>{
    e.preventDefault();
     try {
      localStorage.removeItem("token");
      this.props.setAuth(false);
     } catch (error) {
       console.error(error.message);
     }
      
   }

  componentDidMount(){
    this.getName();
  }
  render() {
    return (
        <div>
          <center>
            <h1>DashBoard {this.state.name}</h1>
            <button onClick = {this.logOut}>logout</button>
          </center>
        </div>
    );
  }
}

export default UserProfile;
