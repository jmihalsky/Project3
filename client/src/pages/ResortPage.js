import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ResortDtl from "../components/resort_dtl";

class ResortPage extends Component {
  state = {
    ResInfo: []
  };

  componentDidMount() {
    this.getResortInfo(this.props.match.params.resort_id);
  }

  getResortInfo = resort_id => {
    API.GetResort(resort_id).then(res => {
      this.setState({ ResInfo: res.data });
    });
  };

  resortRender = () => {
    if (this.state.ResInfo) {
      var newArray = this.state.ResInfo.map(a => {
        return (
          <ResortDtl
            key={a.resort_id}
            resort_name={a.resort_name}
            address1={a.address1}
            address2={a.address2}
            city={a.city}
            state={a.state}
            postal_code={a.postal_code}
            num_slopes={a.num_slopes}
            web_link={a.web_link}
            map_link={a.map_link}
            lat={a.lat}
            lng={a.lon}
          />
        );
      });
      return newArray;
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <div
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.5)",
              color: "white",
              textShadow: "2px 2px 4px #000",
              textAlign: "center",
              margin: "15px",
              padding: "5px"
            }}
          >
            <Col size="md-12">{this.resortRender()}</Col>
          </div>
        </Row>
      </Container>
    );
  }
}

export default ResortPage;
