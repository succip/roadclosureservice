import Sketch from "@arcgis/core/widgets/Sketch";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";

export default class RoadClosureSketch extends Sketch {
  constructor({ view, layer }) {
    super();
    this.viewModel = new SketchViewModel({
      view,
      layer,
      polylineSymbol: {
        type: "simple-line",
        style: "short-dash",
        width: 3,
      },
      polygonSymbol: {
        type: "simple-fill",
        style: "forward-diagonal",
      },
      snappingOptions: {
        enabled: true,
      },
    });

    this.availableCreateTools = ["polyline", "polygon", "rectangle"];
    this.visibleElements = {
      selectionTools: {
        "lasso-selection": false,
        "rectangle-selection": false,
      },
    };
  }
}
