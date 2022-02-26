function ConstructorPerformance(Constructor: { new(...args: any[]): any }) {
    const start = new Date();
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
class Test {
    constructor(){
        let result = 1
        for (let index = 1; index < 10000; index++) {
            result *= index;
        }
    }
}
const test = new Test();