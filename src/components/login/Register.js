import React, { Component } from 'react';

//import './Style.css';

class Register extends Component {
  constructor () {
    super()
    this.state = {
        email: '',
        password: '',
        name: ''
    }
  }

  handleChange = (e) => {
    /*
    const updatedUser = {...this.state}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue
*/
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {...this.state};
      const response = await fetch("http://localhost:5000/auth/register",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      const parseRes = await response.json();
      if(parseRes.token){
        localStorage.setItem("token", parseRes.token);
        this.props.setAuth(true);
      }
      else{
        this.props.setAuth(false);
      }
    } catch (error) {
      console.error(error.message);
    }

  }

  render () {

    return (
      <div>
        <center>
		    <h1 id='headers'>Register</h1>
    
        <div id='headers2'>
          <br></br>
        </div>
        <div id='box'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name: </label>
            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} autoComplete = "off" required />
          </div>
          <div>
            <label htmlFor="emailName">Email: </label>
            <input type="email" name="email" onChange={this.handleChange} value={this.state.email} autoComplete = "off" required/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password"/>
          </div>
          <button id='button'>Register</button>
        </form>
        </div>
        </center>
      </div>
    )
  }
}

export default Register