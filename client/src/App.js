import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/signup";
import UsrLogin from "./components/login";
import UsrProfile from "./components/profile";

const App = () => {
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

export default App;
