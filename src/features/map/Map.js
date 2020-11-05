import React from 'react';
import {
  GoogleMap, useJsApiLoader,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';

import {
  CENTER, EXIT_DOOR, ENTRANCE_DOOR, SCALE_DOOR,
} from '../../constants';
import './map.scss';
import ListPopup from '../../components/listPopup/listPopup';
import { polylineToPolygon } from '../../util/mapUtil';
import Shelf from './Shelf';
// import RouteLine from './RouteLine';
import RouteMarker from './RouteMarker';
import Door from './Door';
import AisleLabelMarker from './AisleLabelMarker';
import RouteLine from './RouteLine';

// TODO: add more extensive options
const mapOptions = {
  disableDefaultUI: true,
  maxZoom: 20,
  minZoom: 18,
};

// TODO: hide item step label if zoom is far out enough (looks giant otherwise)
const Map = ({
  path, shelfPolygons, aisleNumberCoords,
}) => {
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
          {
            shelfPolygons.length > 0
              && shelfPolygons.map((shelfPolygon) => <Shelf paths={shelfPolygon} />)
          }

          {
            aisleNumberCoords.length > 0
              && aisleNumberCoords.map(
                ({ position, aisleNumber }) => (
                  <AisleLabelMarker
                    key={position.lat}
                    position={position}
                    label={aisleNumber.toString()}
                  />
                ),
              )
          }
          {
            // render lines if there is a path to render
            path && path.length > 0 && (
              <>
                <RouteLine path={path.map((point) => ({
                  lat: point.lat,
                  lng: point.lng,
                }))}
                />
                {path.map((pathPoint) => {
                  if (!pathPoint.name) return null;
                  return (
                    <RouteMarker
                      key={pathPoint.lat}
                      step={pathPoint.step?.toString()}
                      position={{ lat: pathPoint.lat, lng: pathPoint.lng }}
                    />
                  );
                })}
              </>
            )
          }

          <Door paths={polylineToPolygon(ENTRANCE_DOOR, SCALE_DOOR)} color="#27ae60" />
          <Door paths={polylineToPolygon(EXIT_DOOR, SCALE_DOOR)} color="#c0392b" />
        </GoogleMap>
      )}
      <ListPopup />
    </>
  );
};

Map.propTypes = {
  path: PropTypes.arrayOf(PropTypes.shape({
    upc: PropTypes.string,
    aisle: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  })),
  shelfPolygons: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape(
    {
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    },
  ))).isRequired,
  // shoppingList: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string.isRequired,
  //   price: PropTypes.number.isRequired,
  //   stock: PropTypes.bool.isRequired,
  //   lat: PropTypes.number.isRequired,
  //   lng: PropTypes.number.isRequired,
  //   aisle: PropTypes.number.isRequired,
  //   upc: PropTypes.string.isRequired,
  //   imageURL: PropTypes.string,
  //   inCart: PropTypes.bool.isRequired,
  //   step: PropTypes.number,
  // })),
  aisleNumberCoords: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    aisleNumber: PropTypes.number.isRequired,
  })).isRequired,
};

Map.defaultProps = {
  path: [],
  // shoppingList: [],
};

export default React.memo(Map);
