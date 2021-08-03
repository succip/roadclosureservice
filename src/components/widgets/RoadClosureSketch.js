import Sketch from "@arcgis/core/widgets/Sketch";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";

export default class RoadClosureSketch extends Sketch {
  constructor({ view, layer }) {
    super();
    this.viewModel = new SketchViewModel({
      view,
      layer,
    });
    this.availableCreateTools = ["polyline", "point", "polygon"];
  }
}
