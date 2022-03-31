import { ConcreteStateA } from "./concrete-state-a";
import { Context } from "./context";

/**
 * The client code.
 */
 const context = new Context(new ConcreteStateA());
 context.request1();
 context.request2();