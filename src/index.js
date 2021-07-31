import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Sketch from "@arcgis/core/widgets/Sketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { MAP_CENTER } from "./Map/map";
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
  const sketch = new Sketch({
    layer: gl,
    availableCreateTools: ["polyline", "polygon"],
    view,
  });

  view.ui.add(sketch, "top-right");

  sketch.on("create", (event) => {
    if (event.state === "complete") {
      console.log(event.graphic.geometry);
    }
  });
});
