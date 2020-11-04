import React from 'react';
import { Polyline } from '@react-google-maps/api';
import PropTypes from 'prop-types';

const RouteLine = ({ path }) => {
  const options = {
    strokeColor: '#1C73E8',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1,
  };

  return (
    <Polyline
      path={path}
      options={options}
    />
  );
};

RouteLine.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })).isRequired,
};

export default RouteLine;
