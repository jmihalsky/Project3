import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Profile from "../components/profile";
import UserFavs from "../components/usr_resorts";
import NoFavs from "../components/no_favs";
import API from "../utils/API";

class UserProfile extends Component {
  state = {
    loggedIn: false,
    user_name: "",
    user_id: 0,
    UserProfile: [],
    UserFavs: []
  };

  componentDidMount() {
    this.setState({
      loggedIn: this.props.state.loggedIn,
      user_name: this.props.state.user_name,
      user_id: this.props.state.user_id,
      resort_id: this.props.match.params.resort_id
    });
    this.profileLoad(this.props.location.state.user_name);
    this.userFavLoad(this.props.location.state.user_name);
  }

  profileLoad = user_name => {
    API.UserProfile(user_name).then(res => {
      this.setState({ UserProfile: res.data });
    });
  };

  profileRender = () => {
    if (this.state.UserProfile) {
      var newArray = this.state.UserProfile.map(a => {
        return (
          <Profile
            key={a.user_id}
            user_name={a.user_name}
            first_name={a.first_name}
            last_name={a.last_name}
          />
        );
      });
      return newArray;
    } else {
    }
  };

  userFavLoad = user_name => {
    API.UserResFavs(user_name).then(res => {
      console.log(res.data);
      this.setState({ UserFavs: res.data });
    });
  };

  favsRender = () => {
    if (this.state.UserFavs) {
      var resArray = this.state.UserFavs.map(b => {
        return (
          <UserFavs
            key={b.resort_id}
            resort_id={b.resort_id}
            resort_name={b.resort_name}
            new_snow={b.new_snow}
            cond={b.cond}
            num_slopes_open={b.num_slopes_open}
          />
        );
      });
      return resArray;
    } else {
      this.userNoFavs(this.state.user_id);
    }
  };

  userNoFavs = () => {
    return <NoFavs />;
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">{this.profileRender()}</Col>
        </Row>
        <Row>
          <Col size="md-12">
            {!this.state.UserFavs.length
              ? 
              this.userNoFavs()
              : this.favsRender()}
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link to="/resort_list">
              <button className="btn btn-secondary btn-lg">Add Resorts</button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserProfile;
