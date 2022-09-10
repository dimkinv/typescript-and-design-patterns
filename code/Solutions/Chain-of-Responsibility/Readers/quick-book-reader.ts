import { DataReader } from "../data-reader";

export class QuickBooksReader extends DataReader {
    protected getExtention(): string {
        return '.qbw';
    }
    protected doRead(fileName: string): void {
        console.log("Reading data from an QuickBooks spreadsheet.");
    }

}