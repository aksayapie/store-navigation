import React from 'react';
import {
  GoogleMap, GroundOverlay, Polyline, Marker, useJsApiLoader,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';

import costco from '../../assets/costco.png';
import { BOUNDS, CENTER } from '../../constants';
import './map.scss';
import PaperTowel from '../../assets/paper-towel.png';
import ListPopup from '../../components/listPopup/listPopup';

// TODO: customize lines to look better
// path polyline options
const pathLineOptions = {
  strokeColor: '#E31837',
  strokeOpacity: 0,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  zIndex: 1,
  icons: [
    {
      // symbol using SVG path notation
      icon: {
        path: 'M 0,-1 0,1',
        strokeOpacity: 0.8,
        scale: 3,
      },
      offset: '0',
      // Repeat the symbol at intervals of 20 pixels to create the dashed effect
      repeat: '15px',
    },
  ],
};

// TODO: add more extensive options
const mapOptions = {
  disableDefaultUI: true,
  maxZoom: 20,
  minZoom: 18,
};

const Map = ({ path, shoppingList }) => {
  // load the google map javascript scripts
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  return (
    <>
      {isLoaded && (
        <GoogleMap
          id="costco-map"
          mapContainerClassName="mapStyles"
          zoom={20}
          // if there's a path, center the map to the first node
          // else center it to the center of the store
          center={path.length > 0 ? path[0] : CENTER}
          options={mapOptions}
        >
          <GroundOverlay url={costco} bounds={BOUNDS} />
          {
            // render lines if there is a path to render
            path.length > 0 && <Polyline path={path} options={pathLineOptions} />
          }
          {
            // render item markers if there are shoppingList to render
            shoppingList.length > 0
              // only render shoppingList not in cart
              && shoppingList.map((item) => {
                if (item.inCart) return null;
                return (
                  <Marker
                    key={item.name}
                    icon={{ url: PaperTowel, scaledSize: new window.google.maps.Size(25, 25) }}
                    position={{ lat: item.lat, lng: item.lng }}
                  />
                );
              })
          }
        </GoogleMap>
      )}
      <ListPopup />
    </>
  );
};

// Prop Validation
Map.propTypes = {
  path: PropTypes.arrayOf(
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
  ),
  shoppingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      inCart: PropTypes.bool.isRequired,
    }),
  ),
};

Map.defaultProps = {
  path: [],
  shoppingList: [],
};
export default React.memo(Map);
