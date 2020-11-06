import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import getShelfPolygons, { getAisleLabelCoords } from '../../util/mapUtil';

const initialState = {
  path: [],
  mapShoppingList: [],
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

      state.mapShoppingList = shoppingList.map(
        (item, index) => ({ ...item, step: index + 1, inCart: false }),
      );
      state.currentPath = null;
      state.currentItem = null;

      const mapShoppingListNames = shoppingList.map((listItem) => listItem.name);

      let itemStep = 1;
      let pathChunk = [];

      state.path = path.reduce((acc, pathItemName) => {
        if (itemsByName[pathItemName]) {
          const itemDetails = itemsByName[pathItemName];

          if (mapShoppingListNames.includes(pathItemName)) {
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
  getPathStart,
  getPathSuccess,
  getPathFailure,
  nextItem,
} = mapSlice.actions;

export const fetchPath = (itemsByName, shoppingList) => async (dispatch) => {
  const url = 'https://cors-anywhere.herokuapp.com/https://safe-thicket-64926.herokuapp.com/requestPath';

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

export default mapSlice.reducer;
