import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
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
          height: "calc(100vh - 20px)"
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
          <Marker
            onClick={this.onMarkerClick}
            name={"Sierra At Tahoe"}
            position={{ lat: 38.800887, lng: -120.0831187 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Boreal"}
            position={{ lat: 39.336458, lng: -120.3520234 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Mt. Rose"}
            position={{ lat: 39.3284391, lng: -119.8875637 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Homewood"}
            position={{ lat: 39.0820371, lng: -120.1626244 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Heavenly"}
            position={{ lat: 38.9405971, lng: -119.9574359 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Alpine Meadows"}
            position={{ lat: 39.1644588, lng: -120.2408765 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Squaw Valley"}
            position={{ lat: 39.197607, lng: -120.2354422 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={"Kirkwood"}
            position={{ lat: 38.6847556, lng: -120.0673552 }}
          />

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
