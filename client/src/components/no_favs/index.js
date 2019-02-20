import React from "react";
import { Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";

export default function NoFavs() {
  return (
    <div
      style={{
        backgroundColor: "rgba(51, 51, 51, 0.5)",
        color: "white",
        textShadow: "2px 2px 4px #000",
        textAlign: "center",
        margin: "20px",
        padding: "10px"
      }}
    >
      <Row>
        <Col size="md-12">
          <h2>No resorts selected</h2>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Link to="/resort_list">
            <button className="btn btn-secondary btn-lg">Add Resorts</button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
