import { ConcreteStateA } from "./concrete-state-a";
import { State } from "./state";

/**
 * Concrete States implement various behaviors, associated with a state of the
 * Context.
 */

 export class ConcreteStateB extends State {
    public handle1(): void {
        console.log('ConcreteStateB handles request1.');
    }

    public handle2(): void {
        console.log('ConcreteStateB handles request2.');
        console.log('ConcreteStateB wants to change the state of the context.');
        this.context.transitionTo(new ConcreteStateA());
    }
}