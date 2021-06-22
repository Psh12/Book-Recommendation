import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/home";
import Users from "./components/users";
import User from "./components/user";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
          <Route path="/user/:id" exact component={User} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
