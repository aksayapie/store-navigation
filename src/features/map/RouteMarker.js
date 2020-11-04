import React from 'react';
import { Marker } from '@react-google-maps/api';
import PropTypes from 'prop-types';

import outline from '../../assets/outline.svg';

const RouteMarker = ({ letter = 'A', position }) => (
  <Marker
    key={position.lat}
    label={{ text: letter, color: 'black' }}
    icon={{ url: outline, scaledSize: new window.google.maps.Size(25, 25) }}
    position={position}
  />
);

RouteMarker.propTypes = {
  letter: PropTypes.string.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default RouteMarker;
