import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import MapMarkers from "../Marker";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  resortMarker = () => {
    let temp = this.props.resorts.map(r => (
      <MapMarkers
        key={r.resort_id}
        resort_name={r.resort_name}
        lat={r.lat}
        lon={r.lon}
      />
    ));
    return temp;
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  render() {
    console.log(this.props.resorts);
    return (
      <div
        style={{
          position: "relative",
          height: "865px"
        }}
      >
        <Map
          google={this.props.google}
          center={{
            lat: 39.094317,
            lng: -120.0024038
          }}
          zoom={9}
        >
          <Marker />
          {this.resortMarker()}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
              <p>test text</p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDyoARGXJYw3_uPwXUWTn6SBGod1bq-lHo",
  version: "3.35"
})(MapContainer);
