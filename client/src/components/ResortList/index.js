import React from "react";
import {Link} from "react-router-dom";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

export default function HomeResList(props) {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <div className="card text-center" style={{ backgroundColor: "#333" }}>
            <div className="card-header">
              <h5>{props.resort_name}</h5>
              <p>New Snow: {props.new_snow}</p>
              <p>Condition: {props.cond}</p>
              <Link to={"/resort/" + props.resort_id}>
                <button className="btn btn-dark btn-sm">Resort Info</button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
