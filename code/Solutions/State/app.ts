import { DirectionService } from "./direction-service";
import { Bicyling } from "./travel-modes/bicyling";
import { Driving } from "./travel-modes/driving";
import { Walking } from "./travel-modes/walking";


const service = new DirectionService(new Walking());
service.getEta();
service.getDirection();
service.travelMode = new Driving();
console.log("");
service.getEta();
service.getDirection();
service.travelMode = new Bicyling();
console.log("");
service.getEta();
service.getDirection();
