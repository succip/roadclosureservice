import Toastify from "toastify-js";
export default (geojson, name = "export") => {
  let a = document.createElement("a");
  a.download = `${name}.json`;
  a.href = `data:application/geo+json;charset=utf-8,${encodeURIComponent(JSON.stringify(geojson))}`;
  a.click();
  Toastify({
    text: `Downloading '${name}'.json...`,
    gravity: "bottom",
    position: "left",
  }).showToast();
};
