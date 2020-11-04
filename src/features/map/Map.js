import React from 'react';
import {
  GoogleMap, Polyline, Marker, useJsApiLoader, Polygon,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';

import { CENTER } from '../../constants';
import './map.scss';
import ListPopup from '../../components/listPopup/listPopup';

// TODO: customize lines to look better
// path polyline options
const pathLineOptions = {
  strokeColor: '#E31837',
  strokeOpacity: 0.7,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  zIndex: 1,
};

// TODO: add more extensive options
const mapOptions = {
  disableDefaultUI: true,
  maxZoom: 20,
  minZoom: 18,
};

const Map = ({ path, shelfPolygons, shoppingList }) => {
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
        center={path?.length > 0 ? path[0] : CENTER}
        options={mapOptions}
      >
        {shelfPolygons.length > 0 && shelfPolygons.map((shelf) => <Polygon path={shelf} />)}
        {
          // render lines if there is a path to render
          path && path.length > 0 && (
            <Polyline
              path={path.map((point) => ({
                lat: point.lat,
                lng: point.lng,
              }))}
              options={pathLineOptions}
            />
          )
        }

        {
          shoppingList && shoppingList.length > 0
            && shoppingList.map((item) => {
              if (item.inCart) return null;
              return (
                <Marker
                  key={item.upc}
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

Map.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({
    upc: PropTypes.string.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })),
  shelfPolygons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(
    {
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    },
  ))).isRequired,
  shoppingList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.bool.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
    aisle: PropTypes.number.isRequired,
    upc: PropTypes.string.isRequired,
    imageURL: PropTypes.string,
    inCart: PropTypes.bool.isRequired,
  })),
};

Map.defaultProps = {
  path: [],
  shoppingList: [],
};

export default React.memo(Map);
