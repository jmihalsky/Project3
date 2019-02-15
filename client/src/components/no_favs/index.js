import React from "react";
import Row from "../Row";
import Col from "../Col";

export default function NoFavs(){
    return(
        <div>
            <Row>
                <Col size="md-12">
                <h2>No resorts selected</h2>
                </Col>
            </Row>
            <Row>
                <Col size="md-5"></Col>
                <Col size="md-2">
                    <a href="/resort_list"><button className="btn btn-primary">Add Resorts</button></a>
                </Col>
                <Col size="md-5"></Col>
            </Row>
        </div>
    );
}