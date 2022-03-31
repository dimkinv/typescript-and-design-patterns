/**
 * The Target defines the domain-specific interface used by the client code.
 */
 export class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}