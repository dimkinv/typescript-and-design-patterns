import { DirectionService } from "./direction-service";
import { Bicyling } from "./travel-modes/bicyling";
import { Swimming } from "./travel-modes/swimming";


const context = new DirectionService(new Swimming());
context.getEta();
context.getDirection();
context.switchPoint()
console.log('');

context.getEta();
context.getDirection();
context.switchPoint()
console.log('');

context.getDirection();
context.getEta();
context.switchPoint();

