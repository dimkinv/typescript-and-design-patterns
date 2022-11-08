function autologger() {
    
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