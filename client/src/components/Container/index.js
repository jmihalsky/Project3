import React from "react";

const Container = props => {
  return (
    <div
      className={`container${props.fluid ? "-fluid" : "true"}`}
      style={{ paddingTop: "15px", paddingBottom: "10px" }}
    >
      {props.children}
    </div>
  );
};

export default Container;
