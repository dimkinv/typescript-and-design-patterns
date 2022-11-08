function autologger() {
    return (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalFunction = descriptor.value;
        descriptor.value = (...args: unknown[]) => {
            console.log(`function was called with ${args.length} parameters`);
            console.log(`parameters: ${args.join(', ')}`);

            const res = originalFunction.apply(target, args);
            console.log(`function result was: ${res}`);
            return res;
        }
        
        return descriptor;
    }
}


export class Calculator{
    @autologger()
    plus(a: number, b: number) {
        return a + b;
    }
    
}

const calc = new Calculator();
const res = calc.plus(1, 3);

console.log(res);