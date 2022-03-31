import { TravelMode } from "./travel-mode";

class DirectionService {
  constructor(private _travelMode: TravelMode) {}

  getEta() {
    if (this._travelMode == TravelMode.DRIVING) {
      console.log("Calculating ETA (driving)");
    } else if (this._travelMode == TravelMode.BICYCLING) {
      console.log("Calculating ETA (bicycling)");
    } else if (this._travelMode == TravelMode.TRANSIT) {
      console.log("Calculating ETA (transit)");
    } else {
      console.log("Calculating ETA (walking)");
    }
  }

  getDirection() {
    if (this._travelMode == TravelMode.DRIVING) {
      console.log("Calculating Direction (driving)");
    } else if (this._travelMode == TravelMode.BICYCLING) {
      console.log("Calculating Direction (bicycling)");
    } else if (this._travelMode == TravelMode.TRANSIT) {
      console.log("Calculating Direction (transit)");
    } else {
      console.log("Calculating Direction (walking)");
    }
  }

  get travelMode(): TravelMode {
    return this._travelMode;
  }

  set travelMode(travelMode: TravelMode) {
    this._travelMode = travelMode;
  }
}
