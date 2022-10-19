import { Handler } from "./handler";

/**
 * The default chaining behavior can be implemented inside a base handler class.
 */
 export abstract class AbstractHandler implements Handler
 {
     private nextHandler: Handler;
 
     public setNext(handler: Handler): Handler {
         this.nextHandler = handler;
         // Returning a handler from here will let us link handlers in a
         // convenient way like this:
         // monkey.setNext(squirrel).setNext(dog);
         return handler;
     }
 
     public handle(request: string)  {
         if (this.nextHandler) {
             return this.nextHandler.handle(request);
         }
 
         return null;
     }
 }
 