import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import API from "../../utils/API";

export class MapContainer extends Component {
  componentDidMount() {
    this.getResorts();
  }

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  getResorts = () => {
    API.AllResorts().then(res => {
      this.setState({ ResList: res.data });
      console.log(res.data);
    });
  };

  resortMarker = () => {
    let temp = this.state.ResList.map(r => (
      <Marker
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
          <Marker
            onClick={this.onMarkerClick}
            name={this.props.resort_name}
            position={{ lat: this.props.lat, lng: this.props.lon }}
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
