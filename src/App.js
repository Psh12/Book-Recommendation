import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Search from './components/Search';
import Toggle from './components/Toggle';
import Logging from './components/login/Logging';
import Registering from './components/login/Registering';

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
}

export default App;
