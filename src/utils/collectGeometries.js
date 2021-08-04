import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

export default (gLayer) => {
  gLayer.graphics.items.map((item) => {
    console.log(item.geometry.type);
  });
};
