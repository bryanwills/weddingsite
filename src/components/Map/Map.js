import { useEffect, useRef } from "react";
import { createMap } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";

const INITIAL_VIEWPORT = {
  longitude: 11.2404,
  latitude: 74.2110
}

function Map() {
  const mapRef = useRef(null); // Reference to the map DOM element

  // Wrapping our code in a useEffect allows us to run initializeMap after the div has been rendered into the DOM
  useEffect(() => {
    let map;
    async function initializeMap() {
      // We only want to initialize the underlying maplibre map after the div has been rendered
      if (mapRef.current != null) {
        map = await createMap({
          container: mapRef.current,
          center: [INITIAL_VIEWPORT.longitude, INITIAL_VIEWPORT.latitude],
          zoom: 11,
        });
      }
    }
    initializeMap();

    // Cleans up and maplibre DOM elements and other resources - https://maplibre.org/maplibre-gl-js-docs/api/map/#map#remove
    return function cleanup() {
      if (map != null) map.remove();
    };
  }, []);

  return <div ref={mapRef} id="map" />;
}

export default Map;