import { State } from "../state";
import { ConcreteStateB } from "./concrete-state-b";

/**
 * Concrete States implement various behaviors, associated with a state of the
 * Context.
 */
 export class ConcreteStateA extends State {
    public handle1(): void {
        console.log('ConcreteStateA handles request1.');
        console.log('ConcreteStateA wants to change the state of the context.');
        this.context.transitionTo(new ConcreteStateB());
    }

    public handle2(): void {
        console.log('ConcreteStateA handles request2.');
    }
}
