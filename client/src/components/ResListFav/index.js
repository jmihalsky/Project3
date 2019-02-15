// Component for displaying resort for user to select
import React from "react";

export default function ResList(props){
    return(
        <div>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{props.resort_name}</h5>
                <h6>State: {props.resort_state}</h6>
                <button onClick={() => props.addFavRes(props.user_id, props.resort_id)} type="button" className="btn btn-success">Add resort to Favorites</button>
                </div>
            </div>
        </div>
    )
}