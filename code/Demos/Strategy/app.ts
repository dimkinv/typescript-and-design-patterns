import { ConcreteStrategyA } from "./concrete-strategy-a";
import { ConcreteStrategyB } from "./concrete-strategy-b";
import { Context } from "./context";

/**
 * The client code picks a concrete strategy and passes it to the context. The
 * client should be aware of the differences between strategies in order to make
 * the right choice.
 */
 const context = new Context(new ConcreteStrategyA());
 console.log('Client: Strategy is set to normal sorting.');
 context.doSomeBusinessLogic();
 
 console.log('');
 
 console.log('Client: Strategy is set to reverse sorting.');
 context.setStrategy(new ConcreteStrategyB());
 context.doSomeBusinessLogic();