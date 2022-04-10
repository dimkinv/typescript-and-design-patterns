export class Stock {
  constructor(private _symbol: string, private _price: number) {}

  printStock() {
    return `Subject : Stock price: ${this._symbol} ${this._price}`;
  }

  set price(price: number ){
    this._price = price
  }

  get price() {
    return this._price;
  }

  get symbol() {
    return this._symbol;
  }
}
