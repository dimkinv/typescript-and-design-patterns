import { Observer } from "./interfaces/Observer";
import { Stock } from "./stock";

export class StockListView implements Observer {
  name = "StockListView";
  private stocks: Stock[] = [];

  addStock(stock: Stock): void {
    this.stocks.push(stock);
    stock.addObserver(this);
  }

  show() {
    console.log("StockListView: Stocks: ");
    this.stocks.forEach((stock) => console.log(stock.printStock()));
  }

  update(stock: Stock): void {
    console.log(
      `${this.name}: Stock with symbol ${stock.symbol} price has changed to ${stock.price}`
    );
  }
}
