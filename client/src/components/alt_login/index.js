import React from "react";
import {Link} from "react-router-dom";

export default function AltLogin(){
    return (
        <div>
            <h4>You're not logged in to perform this function.</h4>
            <Link to="/login"
            style={{ color: "white", textDecoration: "none", fontSize: "16px" }}><button className="btn btn-dark">Login</button>
            </Link>
        </div>
    );
}