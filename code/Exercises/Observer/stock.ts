export class Stock {
  constructor(private _symbol: string, private _price: number) {}

  printStock() {
    return `Subject : Stock price: ${this._symbol} ${this._price}`;
  }
}
