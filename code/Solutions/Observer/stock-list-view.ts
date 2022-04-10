import { Observer } from "./interfaces/Observer";
import { Stock } from "./stock";

export class StockListView implements Observer {
  private stocks: Stock[] = [];

  addStock(stock: Stock): void {
    this.stocks.push(stock);
    stock.addObserver(this);
  }

  show() {
    console.log("StockListView: Stocks: ");
    this.stocks.forEach((stock) => console.log(stock.printStock()));
  }

  removeStock(stock: Stock) {
    const stockIdx = this.stocks.findIndex(
      (subscribedStock) => subscribedStock.symbol === stock.symbol
    );
    this.stocks[stockIdx].removeObserver(this);
    this.stocks.splice(stockIdx, 1);
  }

  update(stock: Stock): void {
    console.log(
      `${this.constructor.name}}: Stock with symbol ${stock.symbol} price has changed to ${stock.price}`
    );
  }
}
