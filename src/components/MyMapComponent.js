import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import data from "../database/ChargingStationData";

const list = [];
for(var i = 0; i< data.length; i++){
  var lat = data[i].lattitude;
  var lng = data[i].longitude;
  list.push(
    <GoogleMap>
      {true && (
        <Marker position={{ lat: parseFloat(lat), lng: parseFloat(lng) }} />
      )}
    </GoogleMap>
  )
}

const MyMapComponent = compose(
    withProps({
      googleMapURL:
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDO4fvv2tVoJhi1muoffc7VhI3NLw2OaxE&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `100vh` }} />,
      mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
  )(props => (
    <div>
      <GoogleMap defaultZoom={12} defaultCenter={{ lat: 30.7333, lng: 76.7794 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 30.7333, lng: 76.7794 }} />
      )}
    </GoogleMap>
  {list}
    </div>
  ));


  export default MyMapComponent;
