import { ConcreteStateA } from "./states/concrete-state-a";
import { Context } from "./context";
import { ConcreteStateB } from "./states/concrete-state-b";

/**
 * The client code.
 */
 const context = new Context(new ConcreteStateA());
 context.request2();
 context.request1();

 console.log("");
 
 context.transitionTo(new ConcreteStateB())
 context.request1();
 context.request2();
