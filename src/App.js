import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserProfile from './components/login/UserProfile';
import LogIn from './components/login/Login';
import Register from './components/login/Register';
import Search from './components/search/Search';
import Toggle from './components/search/Toggle';

const books = [
  {
    "id": 1,
    "title":"Eragon",
    "author":"Christopher Paolini",
    "genre":"Fantasy",
    "demographic":"Young Adult"
  },
  {
    "id": 2,
    "title":"Pride and Prejudice",
    "author":"Jane Austen",
    "genre":"Historical Fiction",
    "demographic":"Adult"
  },
  {
    "id": 3,
    "title":"Clifford the Big Red Dog",
    "author":"Norman Bridwell",
    "genre":"Fiction",
    "demographic":"Children"
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        userName: '',
        emailName: '',
      },
      registeredUser: {
        userName: '',
        emailName: '',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    newUser.emailName = logInInfo.emailName
    this.setState({currentUser: newUser})
  }

  mockRegistration = (registerInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = registerInfo.userName
    newUser.emailName = registerInfo.emailName
    this.setState({registeredUser: newUser})
  }

  render() {
    const NavComponent = () => (<Navbar/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} emailName={this.state.currentUser.emailName}/>
    );
    const LogInComponent = () => (
        <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>
    );
    const RegisterComponent = () => (
        <Register user={this.state.registeredUser} mockRegistration={this.mockRegistration} {...this.props}/>
    );

    return (
        <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/toggle" component={Toggle}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/LogIn" render={LogInComponent}/>
            <Route exact path="/register" render={RegisterComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;