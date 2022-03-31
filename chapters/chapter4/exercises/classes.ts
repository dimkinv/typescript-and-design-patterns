import 'reflect-metadata';
import { Inject, Injectable, Injector } from "./di-solution";

@Injectable('logic')
class Logic {
    doSomeLogic() {
        console.log('done logic')
    }
}

@Injectable('logic2')
class Logic2 {
    doSomeLogic() {
        console.log('done some logic2');
    }
}

@Injectable('controller')
class Controller {
    constructor(@Inject('logic') private logic: Logic, @Inject('logic2') private logic2: Logic2) { }

    work(){
        this.logic.doSomeLogic();
        this.logic2.doSomeLogic();
    }
}

const controller = Injector.get<Controller>('controller');
controller.work();