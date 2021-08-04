import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

let lines = [];
let polygons = [];

export default (gLayer) => {
  gLayer.graphics.items.map((item) => {
    if (item.geometry.type === "polyline") {
      lines.push(item);
    } else {
      polygons.push(item);
    }
  });

  let lineFeatureLayer = new FeatureLayer({
    source: lines,
    fields: [
      {
        name: "ObjectID",
        type: "oid",
      },
    ],
  });

  let polygonFeatureLayer = new FeatureLayer({
    source: polygons,
    fields: [
      {
        name: "ObjectID",
        type: "oid",
      },
    ],
  });

  console.log("lines", lineFeatureLayer);
  console.log("polygons", polygonFeatureLayer);
};
