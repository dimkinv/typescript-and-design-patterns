import { DirectionService } from "./vending-machine-service";


const service = new DirectionService("WALKING");
service.getEta();
service.getDirection();

console.log("");
service.travelMode = "DRIVING"
service.getEta();
service.getDirection();

console.log("");
service.travelMode = "BICYCLING"
service.getEta();
service.getDirection();
