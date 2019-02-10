import React, { Component } from "react";
import HomeResList from "../ResortList";
import API from "../../utils/API";

export class ResortsContainer extends Component {
    componentDidMount(){
        this.getResorts();
    }

    state = {
        ResList: []
    }

    getResorts = () => {
        API.AllResorts().then(res => {
            this.setState({ResList: res.data});
        });
    }

    resortCard = () => {
        let temp = this.state.ResList.map(r =>
            <HomeResList key={r.resort_id} resort_name={r.resort_name}/>
        )
        return temp;
    }
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(51, 51, 51, 0.5)",
          minHeight: "100%",
          color: "white",
          textShadow: "2px 2px 4px #000",
          textAlign: "center"
        }}
      >
        <p>RESORT INFO HERE</p>
        {this.resortCard()}

      </div>
    );
  }
}

export default ResortsContainer;
