'use strict';

import { select, listen } from "./data/utility.js";

mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VybGlua2F1ciIsImEiOiJjbHExYjM4cHUwNzE3MnBud25qNDlmc2VjIn0.Jeu9BD0h1vILAwXce8dQqw';

const showMap = select('.map');

const map = new mapboxgl.Map({
  container: showMap,
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-74.5, 40],
  zoom: 9
});

map.on('load', () => {
  new mapboxgl.Marker()
    .setLngLat([-74.5, 40])
    .addTo(map);
});
