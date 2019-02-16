import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

export default function HomeResList(props) {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <a href={"/resort/"+ props.resort_id}>
            <div className="card text-center" style={{ backgroundColor: "#333" }}>
              <div className="card-header">
                <h5>{props.resort_name}</h5>
                <p>Condition: {props.cond}</p>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
