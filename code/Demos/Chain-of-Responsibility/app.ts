import { DogHandler } from "./dog-handler";
import { Handler } from "./interfaces/handler";
import { MonkeyHandler } from "./monkey-handler";
import { SquirrelHandler } from "./squirrel-handler";

/**
 * The client code is usually suited to work with a single handler. In most
 * cases, it is not even aware that the handler is part of a chain.
 */
 function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'MeatBall','Cup of coffee'];

    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}

/**
 * The other part of the client code constructs the actual chain.
 */
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);


/**
 * The client should be able to send a request to any handler, not just the
 * first one in the chain.
 */
 console.log('Chain: Monkey > Squirrel > Dog\n');
 clientCode(monkey);
 console.log('');
 
 console.log('Subchain: Squirrel > Dog\n');
 clientCode(squirrel);