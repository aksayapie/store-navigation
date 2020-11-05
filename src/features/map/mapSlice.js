import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import sampleSize from 'lodash.samplesize';

import getShelfPolygons, { getAisleLabelCoords } from '../../util/mapUtil';

const initialState = {
  path: [],
  shoppingList: [],
  shelfPolygons: [],
  aisleNumberCoords: [],
  currentPath: null,
  currentItem: null,
  isLoading: false,
  error: null,
};

const startLoading = (state) => {
  state.isLoading = true;
};

const loadingFailed = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    addStepsToShoppingList(state) {
      state.shoppingList = state.shoppingList.reduce((acc, curr, index) => {
        curr.step = index + 1;
        acc.push(curr);
        return acc;
      }, []);
    },
    nextItem(state) {
      state.path = state.path.slice(1);
      const [currentPath] = state.path;
      state.currentPath = currentPath;
      if (state.path[0]) {
        state.currentItem = state.path[0][state.path[0].length - 1];
      } else {
        state.currentItem = null;
      }
    },
    calculateShelfPolygons(state, action) {
      const itemLocations = action.payload;
      state.shelfPolygons = getShelfPolygons(itemLocations);
      state.aisleNumberCoords = getAisleLabelCoords(state.shelfPolygons);
    },
    getPathStart: startLoading,
    getPathFailure: loadingFailed,
    getPathSuccess(state, action) {
      const { path, shoppingList, itemsByName } = action.payload;

      state.shoppingList = shoppingList.map(
        (item, index) => ({ ...item, step: index + 1, inCart: false }),
      );

      const shoppingListNames = shoppingList.map((listItem) => listItem.name);

      let itemStep = 1;
      let pathChunk = [];

      state.path = path.reduce((acc, pathItemName) => {
        if (itemsByName[pathItemName]) {
          const itemDetails = itemsByName[pathItemName];

          if (shoppingListNames.includes(pathItemName)) {
            const step = itemStep;
            itemStep += 1;

            pathChunk.push({ ...itemDetails, step });
            acc.push(pathChunk);

            if (!state.currentPath) state.currentPath = pathChunk;
            if (!state.currentItem) state.currentItem = { ...itemDetails, step };

            pathChunk = [];
          } else {
            pathChunk.push(
              { lat: itemDetails.lat, lng: itemDetails.lng },
            );
          }
        }

        return acc;
      }, []);

      state.isLoading = false;
      state.error = null;
    },
  },
});

// actions
export const {
  removeItem,
  calculateShelfPolygons,
  addStepsToShoppingList,
  getPathStart,
  getPathSuccess,
  getPathFailure,
  nextItem,
} = mapSlice.actions;

export const fetchPath = (items, itemsByName) => async (dispatch) => {
  const url = 'https://cors-anywhere.herokuapp.com/https://safe-thicket-64926.herokuapp.com/requestPath';

  const shoppingList = sampleSize(items, 6);
  const itemNames = shoppingList.map((item) => item.name);

  try {
    dispatch(getPathStart());
    const { data } = await axios.post(url, {
      items: itemNames,
      isSafe: false,
    });

    dispatch(getPathSuccess({ path: data.optimalNodePath, shoppingList, itemsByName }));
  } catch (error) {
    dispatch(getPathFailure(error));
  }
};

// selectors
export const selectShoppingList = (state) => state.map.shoppingList;
export const selectRemainingItemsCount = (state) => state.map.shoppingList.reduce((acc, curr) => {
  if (curr.inCart) {
    return acc + 1;
  }
  return acc;
}, 0);

export default mapSlice.reducer;
