// Takes Esri Geometry object, reprojects it to WGS 84 and outputs new geometry as GeoJSON
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import * as projection from "@arcgis/core/geometry/projection";
import { arcgisToGeoJSON } from "@terraformer/arcgis";

const outSpatialReference = new SpatialReference({
  wkid: 4326,
});

export default async (inputGeometry) => {
  await projection.load();
  const projectedGeometry = projection.project(inputGeometry, outSpatialReference);
  return arcgisToGeoJSON(projectedGeometry.toJSON());
};
