import React from "react";

const Container = props => {
  return (
    <div
      className={`container${props.fluid ? "-fluid" : ""}`}
      style={{ marginTop: "80px" }}
    >
      {props.children}
    </div>
  );
};

export default Container;
