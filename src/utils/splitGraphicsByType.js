import convertToGeoJSON from "./convertToGeoJSON";
import mergeGeoJSON from "./mergeGeoJSON";

export default (gLayer) => {
  let lines = [];
  let polygons = [];
  gLayer.graphics.items.map(async (item) => {
    console.log("a");
    const geoJSONItem = await convertToGeoJSON(item.geometry);
    console.log("b");
    if (item.geometry.type === "polyline") {
      lines.push({
        type: "Feature",
        geometry: geoJSONItem,
        properties: {},
      });
    } else {
      polygons.push({
        type: "Feature",
        geometry: geoJSONItem,
        properties: {},
      });
    }
  });

  console.log("c");

  return {
    linesGeoJSON: mergeGeoJSON(lines),
    polygonsGeoJSON: mergeGeoJSON(polygons),
  };
};
