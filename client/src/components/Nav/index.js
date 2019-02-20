import React, {Component} from "react";
import {Link} from "react-router-dom";
import API from "../../utils/API";

class Nav extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout = (event) => {
    event.preventDefault();
    API.LogoffUser().then(response => {
      if(response.status === 200)
      {
        this.props.updateUser({
          loggedIn: false,
          user_name: "",
          user_id: 0
        });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar" style={{ backgroundColor: "#333" }}>
          <ul className="nav navbar-nav navbar-left">
            <li>
              <Link
                to="/"
                style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
              >
                <img
                  src="https://i.imgur.com/znLtnF1.png"
                  alt="banner"
                  style={{ height: "70px" }}
                />
              </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              {!this.props.loggedIn ? 
              <Link to="/login" style={{ color: "white", textDecoration: "none", fontSize: "16px" }}>
                <button className="btn btn-dark">Login</button>
              </Link> : <div><button className="btn btn-dark" style={{ color: "white", textDecoration: "none", fontSize: "16px" }} onClick={this.logout}>Logout</button>
              <Link to="/profile" props={this.props.user_name}
              style={{ color: "white", textDecoration: "none", fontSize: "16px" }}
            >
              <button className="btn btn-dark">User Profile</button>
            </Link>
            </div>
            }
              
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Nav;