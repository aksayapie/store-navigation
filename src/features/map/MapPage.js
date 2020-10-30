import React from 'react';
import { useSelector } from 'react-redux';

import { selectPath } from './mapSlice';
import Directions from '../directions/Directions';
import Map from './Map';

const MapPage = () => {
  const path = useSelector(selectPath);

  return (
    <>
      <Directions />
      <Map path={path} />
    </>
  );
};
export default MapPage;
