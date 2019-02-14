import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";

export default function NoFavs(){
    return(
        <div>
            <Container>
                <Row>
                    <Col size="md-12">
                    <h2>No resorts selected</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}