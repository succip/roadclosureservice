export default (geojson) => {
  let a = document.createElement("a");
  a.download = "export.json";
  a.href = "data:application/geo+json;charset=utf-8," + encodeURIComponent(JSON.stringify(geojson));
  a.click();
};
