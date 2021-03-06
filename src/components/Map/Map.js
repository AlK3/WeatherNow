import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { Marker, TileLayer } from 'react-leaflet';
import { $position } from '../../model';
import { StyledMap } from './Map.styles';

export const Map = () => {
  const [map, setMap] = useState(null);
  const position = useStore($position);

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