import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
//import './Style.css';

class Register extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        emailName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/LogIn"/>)
    }

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
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          </div>
          <div>
            <label htmlFor="emailName">Email: </label>
            <input type="email" name="emailName" onChange={this.handleChange} value={this.state.user.emailName} />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" />
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