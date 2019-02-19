import React, { Component } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/signup";
import UsrLogin from "./components/login";
import UsrProfile from "./pages/UserProfile";
import HomePage from "./pages/HomePage";
import SavedResorts from "./pages/SavedResorts";
import ResFavoriteSel from "./pages/ResortFavSel";
import ResortPage from "./pages/ResortPage";

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
    console.log(userObject);
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
            <Route exact path="/profile" render={(props) => <UsrProfile {...props} state={this.state}/>} />
            <Route exact path="/saved" component={SavedResorts} />
            <Route exact path="/resort_list" render={(props) => <ResFavoriteSel {...props} state={this.state}/>} />
            <Route path="/resort/:resort_id" render={(props) => <ResortPage {...props} state={this.state}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;