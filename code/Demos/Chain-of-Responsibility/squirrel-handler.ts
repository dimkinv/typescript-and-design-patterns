import { AbstractHandler } from "./interfaces/abstract-handler";

export class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string | null {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}
