import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class Jumbotron extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  render() {
    return (
      <div
        style={{
          position: "relative",
          height: "400px"
        }}
      >
        <Map
          google={this.props.google}
          center={{
            lat: 39.0055314,
            lng: -119.9955374
          }}
          zoom={10}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDyoARGXJYw3_uPwXUWTn6SBGod1bq-lHo",
  version: "3.35"
})(Jumbotron);
