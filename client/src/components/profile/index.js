// user profile component
import React from "react";

export default function Profile(props){
    return(
        <div className="card">
            <div className="card-header">
                <h3>{props.user_name}</h3>
                <h3>{props.first_name}{props.last_name}</h3>
            </div>
        </div>
    );
}