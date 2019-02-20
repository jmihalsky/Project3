import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import MapComponent from "../components/Map/MapComponent";
import ResortsContainer from "../components/Resorts";
import Search from "../components/Search";
import API from "../utils/API";

class HomePage extends Component {
  componentDidMount() {
    this.getResorts();
  }

  state = {
    ResList: []
  };

  getResorts = () => {
    API.AllResorts().then(res => {
      this.setState({ ResList: res.data });
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4">
            <Search />
            <ResortsContainer resorts={this.state.ResList} />
          </Col>
          <Col size="md-8">
            <MapComponent resorts={this.state.ResList} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
