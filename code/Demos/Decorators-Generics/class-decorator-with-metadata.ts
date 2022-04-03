import 'reflect-metadata';
function ConstructorPerformance(Constructor: { new(...args: any[]): any }) {
    const start = new Date();
    const metadataKeys = Reflect.getOwnMetadataKeys(Constructor); // ['design:paramtypes']
    const metadataPatamtypes = Reflect.getMetadata('design:paramtypes', Constructor);
    console.log(metadataPatamtypes.map((param:any) => param.name)); // [ 'String', 'Boolean' ]
    return class extends Constructor {
        constructor(...args: any[]) {
            const start = new Date();
            super(args);
            const end = new Date();
            console.log(`took ${end.getTime() - start.getTime()}ms to finish construction`);
        }
    }
}

@ConstructorPerformance
export class Test {
    constructor(someDependency: string, otherDependency: boolean){
        let result = 1
        for (let index = 1; index < 10000; index++) {
            result *= index;
        }
    }
}
const test = new Test('my dependency', true);