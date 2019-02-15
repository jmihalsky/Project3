import React, { Component } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/signup";
import UsrLogin from "./components/login";
import UsrProfile from "./pages/UserProfile";
import HomePage from "./pages/HomePage";
import SavedResorts from "./pages/SavedResorts";
import ResFavoriteSel from "./pages/ResortFavSel";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user_name: null,
      user_id: 0
    };

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  render() {
    return (
      <Router>
        <div>
          <Nav loggedIn={this.state.loggedIn}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/login"
              render={() => <UsrLogin updateUser={this.updateUser} />}
            />
            <Route exact path="/profile" component={UsrProfile} />
            <Route exact path="/saved" component={SavedResorts} />
            <Route exact path="/resort_list" component={ResFavoriteSel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
