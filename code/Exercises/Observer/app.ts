import { StatusBar } from "./status-bar";
import { Stock } from "./stock";
import { StockListView } from "./stock-list-view";

// const statusBar = new StatusBar();
// const stockListView = new StockListView();

// const stock1 = new Stock("stock1", 10);
// const stock2 = new Stock("stock2", 20);
// const stock3 = new Stock("stock3", 30);

// statusBar.addStock(stock1);
// statusBar.addStock(stock2);
// console.log("");

// stockListView.addStock(stock1);
// stockListView.addStock(stock2);
// stockListView.addStock(stock3);

// console.log("");

// statusBar.show();
// console.log("");
// stockListView.show();

// console.log("");

// stock1.price = 12;
// stock2.price = 14;


// console.log("");

// statusBar.show();
// console.log("");
// stockListView.show();

// console.log("");
// statusBar.removeStock(stock1);
// statusBar.removeStock(stock2);


const statusBar = new StatusBar();
const stock1 = new Stock("stock1", 10);
statusBar.addStock(stock1);
statusBar.show();
stock1.price = 12;
console.log("");
statusBar.show();