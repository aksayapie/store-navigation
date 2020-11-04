// constants for calculation
const TRANSLATE_SHELF = {
  lat: -0.000007799994,
  lng: 0.00001499999,
};
const SCALE_SHELF = {
  lat: -0.000022199994,
  lng: 0.00003699999,
};

const extractAisleEndpoints = (aislePoints) => aislePoints.filter((_point, index) => {
  if (aislePoints.length - 1 === index || index === 0) return true;
  return false;
});

const shiftPath = (aislePaths, shiftByLatLng) => aislePaths.map((cur) => ({
  lat: cur.lat + shiftByLatLng.lat,
  lng: cur.lng + shiftByLatLng.lng,
}));

const makeShelfPolygon = (aisleEndPoints, scaleByLatLng) => {
  const cornerOne = aisleEndPoints[0];
  const cornerTwo = aisleEndPoints[1];
  const cornerThree = {
    lat: aisleEndPoints[1].lat + scaleByLatLng.lat,
    lng: aisleEndPoints[1].lng + scaleByLatLng.lng,
  };
  const cornerFour = {
    lat: aisleEndPoints[0].lat + scaleByLatLng.lat,
    lng: aisleEndPoints[0].lng + scaleByLatLng.lng,
  };

  return [cornerOne, cornerTwo, cornerThree, cornerFour];
};

// aisle - single aisle consisting of array of lat, lng points
const processAisles = (aisle) => {
  // divide the aisle in half for middle divide in store
  const middleIndex = aisle.length / 2;
  const one = aisle.slice(0, middleIndex);
  const two = aisle.slice(middleIndex);

  // extract first and last points in aisle
  // assuming first and last points are the ends of the aisle
  const aisleEndpointsOne = extractAisleEndpoints(one);
  const aisleEndpointsTwo = extractAisleEndpoints(two);

  // shift aisle path endpoints to create shelf endpoints
  const shelfPolylineOne = shiftPath(aisleEndpointsOne, TRANSLATE_SHELF);
  const shelfPolylineTwo = shiftPath(aisleEndpointsTwo, TRANSLATE_SHELF);

  // scale shelf endpoints to make a polyline rectangle for shelf shape
  const shelfPolygonOne = makeShelfPolygon(shelfPolylineOne, SCALE_SHELF);
  const shelfPolygonTwo = makeShelfPolygon(shelfPolylineTwo, SCALE_SHELF);

  // returns two polygons for each shelf in an aisle divided by the middle of the store
  return [shelfPolygonOne, shelfPolygonTwo];
};

export default (itemsList) => {
  let aisleNumber = 1;
  let aisleArr = [];

  return itemsList.reduce((acc, curr) => {
    if (curr.aisleNumber === aisleNumber) {
      aisleArr.push(curr);
    } else {
      const [one, two] = processAisles(aisleArr);
      acc.push(one);
      acc.push(two);
      aisleArr = [];
      aisleArr.push(curr);
      aisleNumber += 1;
    }

    return acc;
  }, []);
};
