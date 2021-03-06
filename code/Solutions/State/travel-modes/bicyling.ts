import { DirectionService } from "../direction-service";
import { TravelModeState} from "../interfaces/travel-mode";
import { Running } from "./running";
export class Bicyling implements TravelModeState {

    private context: DirectionService;
    setContext(directionService: DirectionService): void {
        this.context = directionService;
    }
    getEta(): void {
        console.log("Calculating ETA (bicyling)");
    }
    getDirection(): void {
        console.log("Calculating Direction (bicyling)");
    }

    gotToSwitchPoint(){
        this.context.transitionTo(new Running())
    }
}
