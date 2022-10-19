import { DataReaderFactory } from "./data-reader-fractory";

const reader = DataReaderFactory.getDataReaderChain();

reader.read('data.xls')
reader.read('data.numbers')
reader.read('data.qbw')
reader.read('data.jpg')