/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  GoogleMap, Polyline, Marker, useJsApiLoader, Polygon,
} from '@react-google-maps/api';
import PropTypes from 'prop-types';

import {
  CENTER, TRANSLATE_SHELF, EXPAND_SHELF,
} from '../../constants';
import './map.scss';
import ListPopup from '../../components/listPopup/listPopup';

import testData from '../../data3.json';

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
  tile: 45,
};

const Map = ({ path, shoppingList }) => {
  const [shelves, setShelves] = useState([]);
  // load the google map javascript scripts
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const data = {
    name: 'citrus fruit',
    price: 4.39,
    inStock: false,
    lat: 40.655664916666666,
    lng: -74.00979675402047,
    aisleNumber: 1,
    shelfNumber: 0,
    UPC: '783048567123',
    imageURL: '#',
  };

  useEffect(() => {
    const extractPath = (aislePoints) => aislePoints.filter((point, index) => {
      if (aislePoints.length - 1 === index || index === 0) return true;
      return false;
    });

    const shiftPath = (aislePaths) => aislePaths.map((cur) => ({
      lat: cur.lat + TRANSLATE_SHELF.lat,
      lng: cur.lng + TRANSLATE_SHELF.lng,
    }));

    const scaleShelf = (shelfPaths) => [...shelfPaths, {
      lat: shelfPaths[1].lat + EXPAND_SHELF.lat,
      lng: shelfPaths[1].lng + EXPAND_SHELF.lng,
    },
    {
      lat: shelfPaths[0].lat + EXPAND_SHELF.lat,
      lng: shelfPaths[0].lng + EXPAND_SHELF.lng,
    }];

    const divideAisle = (aisle) => {
      const one = aisle.slice(0, 5);
      const two = aisle.slice(5);

      return [scaleShelf(shiftPath(extractPath(one))), scaleShelf(shiftPath(extractPath(two)))];
    };

    let aisleNumber = 1;
    let aisleArr = [];

    const sortedShelves = testData.reduce((acc, curr) => {
      if (curr.aisleNumber === aisleNumber) {
        aisleArr.push(curr);
      } else {
        const [one, two] = divideAisle(aisleArr);
        acc.push(one);
        acc.push(two);
        aisleArr = [];
        aisleArr.push(curr);
        aisleNumber += 1;
      }

      return acc;
    }, []);

    setShelves(sortedShelves);
  }, []);

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
        {/* {
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
          } */}
        {
        shelves && shelves.map((shelf) => <Polygon path={shelf} />)
      }

        {
            testData.map((itemData) => (
              <Marker position={{ lat: itemData.lat, lng: itemData.lng }} />
            ))
          }
        {/* {
            shoppingList && shoppingList.length > 0
              && shoppingList.map((item) => {
                if (item.inCart) return null;
                return (
                  <Marker
                    key={item.upc}
                    icon={{ url: PaperTowel, scaledSize: new window.google.maps.Size(25, 25) }}
                    position={{ lat: item.lat, lng: item.lng }}
                  />
                );
              })
          } */}
      </GoogleMap>
      )}
      <ListPopup />
    </>
  );
};

export default React.memo(Map);
