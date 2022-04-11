import { DirectionService } from "./direction-service";


const service = new DirectionService("SWIMMING");
service.getEta();
service.getDirection();

console.log("");
service.travelMode = "BICYCLING"
service.getEta();
service.getDirection();

console.log("");
service.travelMode = "RUNNING"
service.getEta();
service.getDirection();
