import { TravelMode } from "../interfaces/travel-mode";

export class Driving implements TravelMode {
    getEta(): void {
        console.log("Calculating ETA (driving)");
        
    }
    getDirection(): void {
        console.log("Calculating Direction (driving)");
    }

}