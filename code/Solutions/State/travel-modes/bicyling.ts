import { TravelMode } from "../interfaces/travel-mode";

export class Bicyling implements TravelMode {
    getEta(): void {
        console.log("Calculating ETA (bicyling)");
        
    }
    getDirection(): void {
        console.log("Calculating Direction (bicyling)");
    }

}
