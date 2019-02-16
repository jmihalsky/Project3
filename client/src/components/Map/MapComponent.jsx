import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  resortMarker = () => {
    let temp = this.props.resorts.map(m => (
      <Marker
        key={m.resort_id}
        onClick={this.onMarkerClick}
        name={m.resort_name}
        position={{
          lat: m.lat,
          lng: m.lon
        }}
        link={m.web_link}
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
            lat: 39.0055314,
            lng: -119.9955374
          }}
          zoom={9}
        >
          {this.resortMarker()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
              <a
                href={this.state.selectedPlace.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {this.state.selectedPlace.link}
                <a href={"/resort/" + this.state.selectedPlace.key}>
                  <button
                    className="btn btn-dark btn-sm"
                    style={{ marginLeft: "10px" }}
                  >
                    Resort Info
                  </button>
                </a>
              </a>
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
