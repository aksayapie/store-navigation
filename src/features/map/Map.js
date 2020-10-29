import React from 'react';
import {
  GoogleMap, LoadScript, GroundOverlay, Polyline,
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';

import costco from '../../assets/costco.png';
import { selectPath } from './mapSlice';
import { BOUNDS, CENTER } from '../../constants';
import './map.scss';

// path polyline options
const options = {
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 1,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

const mapOptions = {
  disableDefaultUI: true,
};

const Map = () => {
  const path = useSelector(selectPath);

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          id="map-overlay"
          mapContainerStyle={{
            width: '100%',
            height: '100%',
          }}
          zoom={19}
          center={CENTER}
          options={mapOptions}
        >
          <GroundOverlay
            key="url"
            url={costco}
            bounds={BOUNDS}
          />
          {
            path.length > 0 && (
            <Polyline
              path={path}
              options={options}
            />
            )
        }
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default React.memo(Map);
