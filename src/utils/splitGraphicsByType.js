import convertToGeoJSON from "./convertToGeoJSON";
import mergeGeoJSON from "./mergeGeoJSON";

let lines = [];
let polygons = [];

export default (gLayer) => {
  gLayer.graphics.items.map(async (item) => {
    const geoJSONItem = await convertToGeoJSON(item.geometry);
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

  const lineGeoJSON = mergeGeoJSON(lines);
  const polygonGeoJSON = mergeGeoJSON(polygons);

  console.log("Lines-----");
  console.log(lineGeoJSON);
  console.log("Polygons-----");
  console.log(polygonGeoJSON);
};
