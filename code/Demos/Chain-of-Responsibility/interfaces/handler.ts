/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 */
 export interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: string): string | null;
}