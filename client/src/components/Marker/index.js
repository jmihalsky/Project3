import React from "react";
import { Marker } from "google-maps-react";

export default function MapMarkers(props) {
  return (
    <Marker
      name={props.resort_name}
      position={{
        lat: props.lat,
        lng: props.lon
      }}
    />
  );
}
