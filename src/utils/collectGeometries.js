import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

let lines = [];
let polygons = [];

const fields = [
  {
    name: "ObjectID",
    type: "oid",
  },
];

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
    fields,
  });

  let polygonFeatureLayer = new FeatureLayer({
    source: polygons,
    fields,
  });
};
