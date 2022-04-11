import { DirectionService } from "../direction-service";

export interface TravelModeState {
    setContext(directionService: DirectionService): void
    getEta(): void;
    getDirection(): void;
    gotToSwitchPoint(): void;
}
