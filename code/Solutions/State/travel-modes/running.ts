import { DirectionService } from "../direction-service";
import { TravelModeState } from "../interfaces/travel-mode";

export class Running implements TravelModeState {

    private context: DirectionService;
    setContext(directionService: DirectionService): void {
        this.context = directionService;
    }
    
    getEta(): void {
        console.log("Calculating ETA (Running)");
    }

    getDirection(): void {
        console.log("Calculating Direction (Running)");
    }
    gotToSwitchPoint(){
        console.log('End of competition');
        
    }
}
