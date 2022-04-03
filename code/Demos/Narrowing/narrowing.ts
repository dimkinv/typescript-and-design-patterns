class Cat implements Animal {
    run() { }
}
class Eagle implements Animal {
    fly() { }
}
interface Animal {
}

const cat = new Cat();
const eagle = new Eagle();

function move(animal: string) {
    animal
}


export class User {
    firstname?: string;
    lastname: string;
}

const user = new User();
const firstnameParts = user.firstname.split(' ');

if (user.firstname) {
    const firstnameParts = user.firstname.split(' ');
}


interface Runnable {
    run(): void;
}
class Cat extends Animal implements Runnable {
    run() { }
}
class Dog extends Animal implements Runnable {
    run() { }
}
function animalFactory&lt;T extends Animal>(Animal: { new(): T }) {
    return new Animal();
}
function startRunning&lt;T extends Runnable>(runnable: T) {
    runnable.run();
}