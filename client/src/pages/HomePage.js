import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import MapComponent from "../components/Map/MapComponent";
import ResortsComponent from "../components/Resorts";

class HomePage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4">
            <ResortsComponent />
          </Col>
          <Col size="md-8">
            <MapComponent />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
