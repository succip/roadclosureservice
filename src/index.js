import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Toastify from "toastify-js";
import RoadClosureSketch from "./components/widgets/RoadClosureSketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import splitGraphicsByType from "./utils/splitGraphicsByType";
import downloadGeoJSON from "./utils/downloadGeoJSON";
import { MAP_CENTER } from "./constants/map";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

let gl = new GraphicsLayer();

const map = new Map({
  basemap: "streets",
  layers: [gl],
});

const view = new MapView({
  container: "viewDiv",
  map,
  zoom: 13,
  center: MAP_CENTER,
});

view.when(() => {
  const rsSketch = new RoadClosureSketch({
    view,
    layer: gl,
  });

  view.ui.add("controlDiv", "bottom-right");
  view.ui.add(rsSketch, "top-right");

  document.querySelector("#testButton").addEventListener("click", async () => {
    const pkg = await splitGraphicsByType(gl);
    if (pkg.linesGeoJSON.features.length) downloadGeoJSON(pkg.linesGeoJSON, "lines");
    if (pkg.polygonsGeoJSON.features.length) downloadGeoJSON(pkg.polygonsGeoJSON, "polygons");
    if (!pkg.linesGeoJSON.features.length && !pkg.polygonsGeoJSON.features.length) {
      Toastify({
        text: "No geometry found!",
        gravity: "bottom",
        position: "left",
      }).showToast();
    }
  });
});
