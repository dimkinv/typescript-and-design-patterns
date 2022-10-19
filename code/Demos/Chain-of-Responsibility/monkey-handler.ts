import { AbstractHandler } from "./interfaces/abstract-handler";

export class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string| null {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request);

    }
}