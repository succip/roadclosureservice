// Input: GeoJSON features array
// Output: GeoJSON feature collection

export default (geoJSONFeatures) => {
  return {
    type: "FeatureCollection",
    features: geoJSONFeatures,
  };
};
