import React, { Component } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/signup";
import UsrLogin from "./components/login";
import UsrProfile from "./components/profile";

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      user_name: null
    }
  }

  render(){
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/login" component={UsrLogin}/>
          <Route exact path="/profile" component={UsrProfile}/>
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
