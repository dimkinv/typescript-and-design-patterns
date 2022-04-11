import { DirectionService } from "../direction-service";
import { TravelModeState } from "../interfaces/travel-mode";
import { Bicyling } from "./bicyling";
import { Running } from "./running";

export class Swimming implements TravelModeState {
    private context: DirectionService;
    setContext(directionService: DirectionService): void {
        this.context = directionService;
    }
    getEta(): void {
        console.log("Calculating ETA (Swimming)");
        
    }
    getDirection(): void {
        console.log("Calculating Direction (Swimming)");
    }

    gotToSwitchPoint(){
        this.context.transitionTo(new Bicyling())
    }

}