import React from 'react';
import {
  GoogleMap, GroundOverlay, Polyline, Marker, useJsApiLoader,
} from '@react-google-maps/api';
import { useSelector } from 'react-redux';

import costco from '../../assets/costco.png';
import { selectPath } from './mapSlice';
import { BOUNDS, CENTER } from '../../constants';
import './map.scss';
import Bounty from '../../assets/bounty.png';

// path polyline options
const options = {
  strokeColor: '#E31837',
  strokeOpacity: 0.8,
  strokeWeight: 1,
  fillColor: '#E31837',
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  zIndex: 1,
};

const mapOptions = {
  disableDefaultUI: true,
  maxZoom: 20,
  minZoom: 19,
};

const Map = () => {
  // load the google map javascript scripts
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const path = useSelector(selectPath);

  return (
    <>
      {isLoaded
      && (
        <GoogleMap
          id="costco-map"
          mapContainerClassName="mapStyles"
          zoom={19}
          center={CENTER}
          options={mapOptions}
        >
          {/* Overlay an image of Costco within the bounds */}
          <GroundOverlay
            url={costco}
            bounds={BOUNDS}
          />
          {
            // render polylines if there are paths to render
            path.length > 0 && (
            <>
              <Polyline
                path={path}
                options={options}
              />
              {
              // render item positions
              path.map((position) => (
                <Marker
                  key={position.lat}
                  icon={
                  { url: Bounty, scaledSize: new window.google.maps.Size(40, 40) }
                }
                  position={position}
                />
              ))
            }
            </>
            )
        }
        </GoogleMap>
      )}
    </>
  );
};

export default React.memo(Map);
