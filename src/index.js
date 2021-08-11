import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import RoadClosureSketch from "./components/widgets/RoadClosureSketch";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import splitGraphicsByType from "./utils/splitGraphicsByType";
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

  document.querySelector("#testButton").addEventListener("click", () => {
    const pkg = splitGraphicsByType(gl);
    exportToJson(pkg.polygonsGeoJSON);
  });
});

function exportToJson(objectData) {
  let filename = "export.json";
  let contentType = "application/geo+json;charset=utf-8;";
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    var blob = new Blob([decodeURIComponent(encodeURI(objectData))], { type: contentType });
    navigator.msSaveOrOpenBlob(blob, filename);
  } else {
    var a = document.createElement("a");
    a.download = filename;
    a.href = "data:" + contentType + "," + encodeURIComponent(JSON.stringify(objectData));
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

// const downloadJSON = (pkg) => {
//   let url = window.URL;
//   const link = url.createObjectURL(blob1);
//   let a = document.createElement("a");
//   a.download = "download.geojson";
//   a.href = link;
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
// };
