// the assumption in this tutorial is that the user will create the instances manually and thus no deep injections are possible
// i.e. A --> B --> C
type Constructor<T> = new (...args: any[]) => T;
export class Injector {
    private static dpependencies = new Map<string, Constructor<unknown>>();
    private static dependenciesInstance = new Map<string, unknown>();

    static get<T>(dependencyName: string): T {
        // get dependency instance from injector state
        // if not exist get its contructor create it and save into injector state
        // get dependencies from metadata and instantiate the dependency with its dependencies
    }

    static set(dependencyName: string, dependency: Constructor<unknown>) {
        // set dependency constructor into the injector state
    }
}

export function Inject(dependencyName: string) {
    return function (constructor: new () => unknown, _: any, paramOrder: number) {
        // property decorator, this one should understand what dependency the user expect to inject into the constructor property
        // it should get the dependency from injector and add to it the metadata to be ready to be taken (line 11)
    }
}

export function Injectable(dependencyName: string) {
    return (constructor: Constructor<unknown>) => {
        // add dependency constructor into the injector state
    }
}

