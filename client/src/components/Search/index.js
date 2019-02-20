import React, { Component } from "react";
import Suggestions from "../Suggestions";
import API from "../../utils/API";

class Search extends Component {
  constructor(){
    super();
    this.state = {
      query: "",
      results: []
    };
    // this.searchUpdate = this.searchUpdate.bind(this);
  }
  

  getInfo = () => {
    API.AllResorts(this.state.query).then(res => {
      console.log(res.data);
      this.setState({results: res.data});
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    return (
      <form>
        <input
          placeholder="Search for a Resort..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default Search;
