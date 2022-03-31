import { TravelMode } from "./interfaces/travel-mode";

export class DirectionService {
  constructor(private _travelMode: TravelMode) {}

  getEta(): void {
    return this._travelMode.getEta();
  }

  getDirection(): void {
    return this._travelMode.getDirection();
  }

  get travelMode(): TravelMode {
    return this._travelMode;
  }

  set travelMode(travelMode: TravelMode){
    this._travelMode = travelMode;
  }
}
