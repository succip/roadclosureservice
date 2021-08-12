import convertToGeoJSON from "./convertToGeoJSON";
import mergeGeoJSON from "./mergeGeoJSON";

export default async (gLayer) => {
  let lines = [];
  let polygons = [];

  for (const item of gLayer.graphics.items) {
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
  }

  return {
    linesGeoJSON: mergeGeoJSON(lines),
    polygonsGeoJSON: mergeGeoJSON(polygons),
  };
};
