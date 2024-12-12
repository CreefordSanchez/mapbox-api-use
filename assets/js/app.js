'use strict';

import { select, listen } from "./data/utility.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw';

const trackBtn = select('.track-btn');
const showMap = select('.map');
const accuracy = { enableHighAccuracy: true };

listen(window, 'load', () => {
  mapMarker(-74.5, 40);
});

listen(trackBtn, 'click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      getLocation, errorHandler, accuracy
    );
  } else {
    console.log('Your browser does not support geolocation.');
  }
});

function mapMarker(longitude, latitude) {
  const map = new mapboxgl.Map({
    container: showMap,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 15
  });

  new mapboxgl.Marker()
    .setLngLat([longitude, latitude])
    .addTo(map);
}


function getLocation(possition) {
  let { latitude, longitude } = possition.coords;
  mapMarker(longitude, latitude);
}

function errorHandler() {
  console.log('Unable to find your location');
}
