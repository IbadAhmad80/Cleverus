import * as React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

export default function Map({ locations }) {
  const [viewport, setViewport] = useState({
    height: 500,
    latitude: 31.582045,
    longitude: 74.329376,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      width="100%"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={
        "pk.eyJ1IjoiaWJhZGFobWFkIiwiYSI6ImNra3JzNWt2ajBsOXQyb282YTkzNHZic2cifQ.Axi1cRU6bZqpLkvlduR9Cg"
      }
    ></ReactMapGL>
  );
}
