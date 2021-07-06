import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import UserProfile from './components/login/UserProfile';
import LogIn from './components/login/Login';
import Register from './components/login/Register';
import Search from './components/search/Search';
import Toggle from './components/search/Toggle';
import ResultPage from './components/search/ResultPage';

<<<<<<< HEAD
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/search' exact component={Search}/>
          <Route path='/toggle' exact component={Toggle}/>
		      <Route path='/login' exact component={Logging}/>
		      <Route path='/register' exact component={Registering}/>
        </Switch>
      </Router>
    </>
  );
=======
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
            <Route exact path="/results" component={ResultPage}/>
          </Switch>
        </Router>
    );
  }
>>>>>>> 8946cfd8aad8f13ce7b7c18f2d89758a97b78745
}

export default App;