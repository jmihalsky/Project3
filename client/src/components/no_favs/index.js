import React from "react";
import {Link} from "react-router-dom";
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
                    <Link to="/resort_list"><button className="btn btn-primary">Add Resorts</button></Link>
                </Col>
                <Col size="md-5"></Col>
            </Row>
        </div>
    );
}