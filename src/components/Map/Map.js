import { useEffect, useRef } from "react";
import { createMap, drawPoints } from "maplibre-gl-js-amplify";
import "maplibre-gl/dist/maplibre-gl.css";

// Santa Marta, Colombia
const INITIAL_VIEWPORT = {
  latitude: 11.24079,
  longitude: -74.19904
}

function Map() {
  const mapRef = useRef(null); // Reference to the map DOM element

  // Wrapping our code in a useEffect allows us to run initializeMap after the div has been rendered into the DOM
  useEffect( async() => {
    
    const map = await initializeMap();
    addWeddingLocations(map);

    // Cleans up and maplibre DOM elements and other resources - https://maplibre.org/maplibre-gl-js-docs/api/map/#map#remove
    return function cleanup() {
      if (map != null) map.remove();
    };
  }, []);

  async function initializeMap() {
    // We only want to initialize the underlying maplibre map after the div has been rendered
    if (mapRef.current != null) {
      const map = await createMap({
        container: mapRef.current,
        center: [INITIAL_VIEWPORT.longitude, INITIAL_VIEWPORT.latitude],
        zoom: 10,
      });
      return map;
    }
  }

  function addWeddingLocations(map) {
    map.on("load", function () {
      drawPoints("mySourceName", // Arbitrary source name
          [
              {
                coordinates: [-74.23259, 11.117275],
                title: "Airport",
                address: "Avenida Aeropuerto Km. 80, Local LO-11-012A, Santa Marta, Bolivar, Colombia",
              },
              {
                coordinates: [-74.2108436, 11.1391886],
                title: "Mamancana",
                address: "Km 5 Vía al Puerto, Santa Marta, Magdalena, Colombia",
              },
              {
                coordinates: [-74.224777, 11.145841],
                title: "Bello Horizonte",
                address: "Santorini Villas, Calle 121A, La Paz, 470006, MAG, Colombia",
              },
              {
                coordinates: [-74.209572, 11.170727],
                title: "Pozos Colorados",
                address: "Pozos Colorados, 005075 Santa Marta, MAG, Colombia",
              },
              {
                coordinates: [-74.227908, 11.202656],
                title: "El Rodadero",
                address: "El Rodadero, Calle 12, Peñon del Rodadero, 470005 Santa Marta, MAG, Colombia",
              },
              {
                coordinates: [-74.212807, 11.245051],
                title: "Santa Marta (dt)",
                address: "Juan Valdez, Calle 14, Comuna 2, Santa Marta, MAG, Colombia",
              },
          ], // An array of coordinate data, an array of Feature data, or an array of [NamedLocations](https://github.com/aws-amplify/maplibre-gl-js-amplify/blob/main/src/types.ts#L8)
          map,
          {
              showCluster: true,
              unclusteredOptions: {
                  showMarkerPopup: true,
              },
              clusterOptions: {
                  showCount: true,
              },
          }
      );
    });
  }

  return <div ref={mapRef} className="map" id="map" />;
}

export default Map;