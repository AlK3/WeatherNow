import React, { useState } from 'react';
import { Marker, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { StyledMap } from './StyledMap';

export const Map = () => {
  const position = useSelector(state => state.position.position);
  const [map, setMap] = useState(null);

  if (map) {
    map.flyTo(position);
  }

  return (
    <StyledMap whenCreated={setMap} center={position} zoom={10} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
      <Marker position={position} />
    </StyledMap>
  );
}