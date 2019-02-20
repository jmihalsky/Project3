// Component for displaying resort for user to select
import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

export default function ResList(props) {
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <div
            className="card"
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.5)",
              color: "white",
              textShadow: "2px 2px 4px #000",
              textAlign: "center"
            }}
          >
            <div className="card-body">
              <h5 className="card-title">{props.resort_name}</h5>
              <h6>State: {props.resort_state}</h6>
              <button
                onClick={() => props.addFavRes(props.user_id, props.resort_id)}
                type="button"
                className="btn btn-secondary btn-lg"
              >
                Add resort to Favorites
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
