import React from "react";
import Row from "../Row";
import Col from "../Col";

export default function ResortDtl(props){
    return(
        <div>
            <Row>
                <Col size="md-12">
                    <h3>{props.resort_name}</h3>
                    <h4>Address:</h4>
                    <p>{props.address1}</p>
                    <p>{props.address2}</p>
                    <p>{props.city} {props.state},{props.postal_code}</p>
                    <a href={props.web_link} target="_blank">Resort Website</a>
                    <a href={props.map_link} target="_blank"><img src={props.map_link}></img></a>
                </Col>
            </Row>
        </div>
    );
}