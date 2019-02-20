// user favorite resorts component
import React from "react";
import {Link} from "react-router-dom";
import Container from "../Container";

export default function UserFavs(props){
    return(
        <div>
            <Container>
                <div className="card">
                    <div className="card-header">
                        <h4>{props.resort_name}</h4>
                        <p className="card-text">Current Conditions:</p>
                        <p className="card-text">New Snow: {props.new_snow}</p>
                        <p className="card-text">Conditions: {props.cond}</p>
                        <p className="card_text">Number of Slopes Open: {props.num_slopes_open}</p>
                        <Link to={"/resort/" + props.resort_id}>
                        <button className="btn btn-dark btn-sm">Resort Info</button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}