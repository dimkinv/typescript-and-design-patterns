import { TravelModeState } from "./interfaces/travel-mode";

export class DirectionService {
  constructor(private _travelMode: TravelModeState) {
    this.transitionTo(_travelMode);
}
  getEta(): void {
    return this._travelMode.getEta();
  }

  getDirection(): void {
    return this._travelMode.getDirection();
  }
  
  switchPoint(): void {
    this._travelMode.gotToSwitchPoint();
  }

  transitionTo(newTravelMode: TravelModeState) {
    console.log(
      `Travel Mode: Transition to ${newTravelMode.constructor.name}.`
    );
    this._travelMode = newTravelMode;
    this._travelMode.setContext(this);
  }



  get travelMode(): TravelModeState {
    return this._travelMode;
  }

  set travelMode(travelMode: TravelModeState) {
    this._travelMode = travelMode;
  }
}
