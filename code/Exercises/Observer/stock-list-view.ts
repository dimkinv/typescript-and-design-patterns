import { Stock } from "./stock";

export class StockListView {
  private stocks: Stock[] = [];

  addStock(stock: Stock): void {
    this.stocks.push(stock);
  }

  removeStock(stock: Stock) {
    this.stocks = this.stocks.filter(
      (subscribedStock) => subscribedStock.symbol === stock.symbol
    );
  }

  show(): void {
    this.stocks.forEach((stock) => console.log(stock));
  }
}
