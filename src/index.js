import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import RoadClosureSketch from "./components/widgets/RoadClosureSketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { MAP_CENTER } from "./constants/map";
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
  view.ui.add(rsSketch, "top-right");
});
