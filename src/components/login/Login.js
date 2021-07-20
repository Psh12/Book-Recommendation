import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import './Login.css';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
        email: '',
        password: ''
      }
  }

// Updates the state if on change in the text field
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
      const response = await fetch("http://localhost:5000/auth/login",{
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
		    <h1 id='headers'>Login</h1>
    
        <div id='headers2'>
          <br></br>
        </div>
        <div id='box'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="emailName">Email: </label>
            <input type="email" name="email" onChange={this.handleChange} value={this.state.email} autoComplete = "off" required/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password"/>
          </div>
          <button id='button'>Login</button>
        </form>
        <Link to='/register'>Register</Link>
        </div>
        </center>
        
      </div>
    )
  }
}

export default LogIn
