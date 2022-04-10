import "reflect-metadata";
@sealed
export class Test {
  @autologger()
  foo(someValue1: number, someValue2: number): string {
    return (someValue1 + someValue2).toString()
  }
}

function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target[propertyKey]);

    //   console.log("first(): called");
  };
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

function autologger() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalFunction = target[propertyKey];
    const type = Reflect.getMetadata("design:type", target, propertyKey);
    const paramtypes = Reflect.getMetadata("design:paramtypes", target, propertyKey);
    const returntype = Reflect.getMetadata("design:returntype", target, propertyKey);
    console.log(type, paramtypes, returntype);
    
    // console.log(metadataPatamtypes.map((param: any) => param.name));
    descriptor.value = (...args: any[]) => {
        // console.log("originalFunction:" + originalFunction);  
        return originalFunction.apply(target, args)
        // return retData();
        
    };
  };
}

const test = new Test();
const data = test.foo(1, 4);

