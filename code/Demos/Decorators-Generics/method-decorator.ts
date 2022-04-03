function ExceptionWrapper(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => void>) {
    const originalFunction  = target[propertyKey];
    descriptor.value = (...args: any[]) => {
        try{
            originalFunction.apply(target, ...args);
        } catch(error){
            const typedError = error as Error
            console.log(`caught exception in wrapper, ${typedError.message}`);
        }
    }

}

export class Test {
    @ExceptionWrapper
    throwException(someValue: string) {
        throw new Error(someValue);
    }
}


const t = new Test();
console.log(t.throwException('some string'));
