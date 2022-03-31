import { TravelMode } from "../interfaces/travel-mode";

export class Walking implements TravelMode {
    getEta(): void {
        console.log("Calculating ETA (walking)");
        
    }
    getDirection(): void {
        console.log("Calculating Direction (walking)");
    }

}
