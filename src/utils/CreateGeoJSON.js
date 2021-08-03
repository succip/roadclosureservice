// Takes Esri Geometry object, reprojects it to WGS 84 and outputs new geometry as GeoJSON
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import * as projection from "@arcgis/core/geometry/projection";
import { arcgisToGeoJSON } from "@terraformer/arcgis";

const WGS84 = new SpatialReference({
  wkid: 4326,
});

export default async (inputGeometry) => {
  await projection.load();
  const projectedGeometry = projection.project(inputGeometry, WGS84);
  return arcgisToGeoJSON(projectedGeometry.toJSON());
};
