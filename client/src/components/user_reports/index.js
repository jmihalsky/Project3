import React from "react";

export default function UserReports(props) {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">
          <h4>{props.report_date}</h4>
        </div>
        <div className="card-body">
          <h4>Reported By: {props.user_name}</h4>
          <p>New Snow: {props.new_snow}</p>
          <p>Temperature: {props.temp}</p>
          <p>Lift Lines: {props.lft_lines}</p>
          <p>Conditions: {props.cond}</p>
          <p>Conditions Notes: {props.cond_notes}</p>
        </div>
      </div>
      
    </div>
  );
}
