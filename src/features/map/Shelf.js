import React from 'react';
import { Polygon } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const Shelf = ({ path }) => {
  const options = {
    fillColor: 'white',
    fillOpacity: 0.9,
    strokeColor: '#9B864C',
    strokeOpacity: 0.9,
    strokeWeight: 1,
    clickable: false,
    draggable: false,
    editable: false,
    geodesic: false,
    zIndex: 1,
  };

  return <Polygon paths={path} options={options} />;
};

Shelf.propTypes = {
  path: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

export default Shelf;
