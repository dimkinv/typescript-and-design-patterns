/**
 * The client code.
 */

import { ConcreteObserverA } from "./concrete-observer-a";
import { ConcreteObserverB } from "./concrete-observer-b";
import { ConcreteSubject } from "./concrete-subject";

 const subject = new ConcreteSubject();

 const observer1 = new ConcreteObserverA();
 subject.attach(observer1);
 
 const observer2 = new ConcreteObserverB();
 subject.attach(observer2);
 
 subject.someBusinessLogic();
 subject.someBusinessLogic();
 
 subject.detach(observer2);
 
 subject.someBusinessLogic();