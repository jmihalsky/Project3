import React, { Component } from "react";
import HomeResList from "../ResortList";

export class ResortsContainer extends Component {
  resortCard = () => {
    let temp = this.props.resorts.map(r => (
      <HomeResList
        key={r.resort_id}
        resort_id={r.resort_id}
        resort_name={r.resort_name}
        cond={r.cond}
      />
    ));
    return temp;
  };
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(51, 51, 51, 0.5)",
          color: "white",
          textShadow: "2px 2px 4px #000",
          textAlign: "center",
          overflowY: "scroll",
          height: "865px"
        }}
      >
        <h3>Ski Resorts:</h3>
        {this.resortCard()}
      </div>
    );
  }
}

export default ResortsContainer;
