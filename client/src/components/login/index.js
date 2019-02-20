// User login component
import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../utils/API";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

class UsrLogin extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      pword: "",
      redirectTo: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var UserInfo = {
      user_name: this.state.user_name,
      pword: this.state.pword
    };
    API.loginUser(UserInfo)
      .then(response => {
        console.log(response.data.user_id);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: true,
            user_name: response.data.user_name,
            user_id: response.data.user_id
          });
          this.setState({
            redirectTo: "/profile/"
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      console.log(this.state.user_name);
      return <Redirect to={{ pathname: this.state.redirectTo, state: {user_name: this.state.user_name, user_id: this.state.user_id}}} />;
    } else {
      return (
        <Container>
          <Row>
            <Col size="md-4">
              <div
                style={{
                  backgroundColor: "rgba(51, 51, 51, 0.5)",
                  color: "white",
                  textShadow: "2px 2px 4px #000",
                  textAlign: "center",
                  padding: "10px"
                }}
              >
                <h4>Snow Routes User Login</h4>
                <form className="form-horizontal">
                  <div className="form-group">
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Username"
                      id="user_name"
                      name="user_name"
                      value={this.state.user_name}
                      onChange={this.handleChange}
                      style={{ marginRight: "5px" }}
                    />
                    <input
                      className="form-input"
                      type="password"
                      placeholder="Password"
                      name="pword"
                      value={this.state.pword}
                      onChange={this.handleChange}
                      style={{ marginRight: "5px" }}
                    />
                    <button
                      className="btn btn-secondary"
                      onClick={this.handleSubmit}
                      type="submit"
                      style={{ marginRight: "5px" }}
                    >
                      Login
                    </button>
                  </div>
                </form>
                <Link to="/signup">
                  <button className="btn btn-secondary">Sign Up</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default UsrLogin;
