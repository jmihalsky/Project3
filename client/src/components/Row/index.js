import React from "react";

const Row = props => {
  return (
    <div
      className={`row${props.fluid ? "-fluid" : ""}`}
      style={{ margin: "0" }}
    >
      {props.children}
    </div>
  );
};

export default Row;
