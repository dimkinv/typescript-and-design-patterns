type Constructor<T> = new (...args:any[]) => T;
export class Injector {
    private static dpependencies = new Map<string, Constructor<unknown>>();
    private static dependenciesInstance = new Map<string, unknown>();

    static get<T>(dependencyName: string): T {
        const dependency = Injector.dependenciesInstance.get(dependencyName);
        if(dependency){
            return dependency as T;
        }

        const DepConstructor = Injector.dpependencies.get(dependencyName);
        if (!DepConstructor) {
            throw new Error(`dependency ${dependencyName} is missing, did you add it to injector ???`);
        }

        const dependencies: unknown[] = Reflect.getOwnMetadata('__dependencies__', DepConstructor) ?? [];

        const instance  = new DepConstructor(...dependencies);
        Injector.dependenciesInstance.set(dependencyName, instance);

        return instance as T;
    }

    static set(dependencyName: string, dependency: Constructor<unknown>) {
        Injector.dpependencies.set(dependencyName, dependency);
    }
}

export function Inject(dependencyName: string) {
    return function (constructor: new () => unknown, _: any, paramOrder: number) {
        const dep = Injector.get(dependencyName);
        const dependencies: unknown[] = Reflect.getOwnMetadata('__dependencies__', constructor) ?? [];
        dependencies.push(dep);

        Reflect.defineMetadata('__dependencies__', dependencies, constructor);
    }
}

export function Injectable(dependencyName: string){
    return (constructor: Constructor<unknown>) => {
        Injector.set(dependencyName, constructor);
    }
}

