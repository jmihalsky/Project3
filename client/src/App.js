import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/signup";
import UsrProfile from "./components/profile";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/profile" component={UsrProfile}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
