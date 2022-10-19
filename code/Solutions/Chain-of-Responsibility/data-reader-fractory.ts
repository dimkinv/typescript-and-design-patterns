import { DataReader } from "./data-reader";
import { ExcelReader } from "./Readers/excel-reader";
import { NumbersReader } from "./Readers/numbers-reader";
import { QuickBooksReader } from "./Readers/quick-book-reader";

export class DataReaderFactory {
    static getDataReaderChain (): DataReader {
        const excelReader = new ExcelReader();
        const numbersReader = new NumbersReader(excelReader);
        const quickBooksReader = new QuickBooksReader(numbersReader);

        // alternatively
        // quickBooksReader.setNext(numbersReader);
        // numbersReader.setNext(excelReader);
        
        return quickBooksReader;
    }
}