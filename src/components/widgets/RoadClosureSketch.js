import Sketch from "@arcgis/core/widgets/Sketch";

export default class RoadClosureSketch extends Sketch {
  constructor({ view, layer }) {
    super({
      view,
      layer,
    });
    this.availableCreateTools = ["point"];
  }
}
