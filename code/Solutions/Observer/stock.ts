import { Observer } from "./interfaces/Observer";
import { Subject } from "./interfaces/subject";

export class Stock implements Subject {
  constructor(private _symbol: string, private _price: number) {}

  private observers: Observer[] = [];

  public addObserver(observer: Observer): void {
    console.log(
      `Subject: ${this._symbol} Attached an observer: ${observer.constructor.name}.`
    );
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }
    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  public notifyObservers(): void {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  printStock() {
    return `Subject : Stock price: ${this._symbol} ${this._price}`;
  }

  get symbol(): string {
    return this._symbol;
  }

  get price(): number {
    return this._price;
  }

  set price(newPrice: number) {
    this._price = newPrice;
    console.log(`Subject: Stock price has changed: ${this.printStock()} `);
    this.notifyObservers();
  }
}
