import React from 'react';
import { Polygon } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const Door = ({ paths, color }) => {
  const options = {
    fillColor: color,
    fillOpacity: 0.7,
    strokeColor: color,
    strokeOpacity: 0.9,
    strokeWeight: 1,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  return <Polygon paths={paths} options={options} />;
};

Door.propTypes = {
  paths: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
};

export default Door;
