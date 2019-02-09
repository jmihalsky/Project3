// user signup component form
import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

class UsrSignup extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      pword: "",
      confirm_pword: "",
      email: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var newUser = {
      user_name: this.state.user_name,
      pword: this.state.pword,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };
    console.log(newUser);
    API.createUser(newUser)
      .then(res => {
        if (!res.data.errmsg) {
          this.setState({ redirectTo: "/profile" });
        } else {
          console.log("success");
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4">
            <div
              className="SignupForm"
              style={{
                backgroundColor: "rgba(51, 51, 51, 0.5)",
                color: "white",
                textShadow: "2px 2px 4px #000",
                textAlign: "center",
                padding: "10px"
              }}
            >
              <h4>Create a user for Snow Routes</h4>
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
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    name="pword"
                    value={this.state.pword}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="First Name"
                    id="first_name"
                    name="first_name"
                    value={this.state.first_name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Last Name"
                    id="last_name"
                    name="last_name"
                    value={this.state.last_name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-secondary"
                    onClick={this.handleSubmit}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UsrSignup;
