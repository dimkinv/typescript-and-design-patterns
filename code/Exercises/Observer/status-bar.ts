import { Stock } from "./stock";

class StatusBar {
  private stocks = [];

  addStocks(stock: Stock): void {
    this.stocks.push(stock);
  }

  show(): void {
    this.stocks.forEach((stock) => console.log(stock));
  }
}
