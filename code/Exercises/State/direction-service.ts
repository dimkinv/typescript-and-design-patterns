import { TravelMode } from "./travel-mode";

export class DirectionService {
  constructor(private _travelMode: TravelMode) {}

  getEta() {
    if (this._travelMode == "SWIMMING") {
      console.log("Calculating ETA (swimming)");
    } else if (this._travelMode == "BICYCLING") {
      console.log("Calculating ETA (bicycling)");
    } else if (this._travelMode == "RUNNING") {
      console.log("Calculating ETA (running)");
    } else {
      console.log("Calculating ETA (walking)");
    }
  }

  getDirection() {
    if (this._travelMode == "SWIMMING") {
      console.log("Calculating Direction (swimming)");
    } else if (this._travelMode == "BICYCLING") {
      console.log("Calculating Direction (bicycling)");
    } else if (this._travelMode == "RUNNING") {
      console.log("Calculating Direction (running)");
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
