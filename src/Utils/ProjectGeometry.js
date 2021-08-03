// Takes Esri Geometry object and projects it into UTM Zone 10N
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import * as projection from "@arcgis/core/geometry/projection";

const UTMZone10N = new SpatialReference({
  wkid: 26910,
});

export default async (inputGeometry) => {
  await projection.load();
  return projection.project(inputGeometry, UTMZone10N);
};
