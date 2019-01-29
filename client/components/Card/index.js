import React from "react";

const Card = props => {
  return (
    <div className="card text-center" style={{ marginBottom: "20px" }}>
      <div className="card-header">
        <h3>{props.heading}</h3>
      </div>
      <div className="card-body text-left">{props.children}</div>
    </div>
  );
};

export default Card;
