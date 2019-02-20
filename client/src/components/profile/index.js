// user profile component
import React from "react";

export default function Profile(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "rgba(51, 51, 51, 0.5)",
        color: "white",
        textShadow: "2px 2px 4px #000",
        textAlign: "center"
      }}
    >
      <div className="card-header">
        <h3>User: {props.user_name}</h3>
        <h3>
          {props.first_name}&nbsp;{props.last_name}
        </h3>
      </div>
    </div>
  );
}
