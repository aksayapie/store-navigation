import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from '@react-google-maps/api';

import outline from '../../assets/outline.svg';

const AisleLabelMarker = ({ position, label }) => (
  <Marker
    key={position.lat}
    label={{ text: label, color: 'blue' }}
    icon={{
      url: outline,
      scaledSize: new window.google.maps.Size(0, 0),
      anchor: new window.google.maps.Point(0, 0),
    }}
    position={position}
  />
);

AisleLabelMarker.propTypes = {
  label: PropTypes.string.isRequired,
  position: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};
export default AisleLabelMarker;
