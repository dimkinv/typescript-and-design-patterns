import { DataReader } from "../data-reader";

export class NumbersReader extends DataReader {
    protected getExtension(): string {
        return '.numbers';
    }
    protected doRead(fileName: string): void {
        console.log("Reading data from an Numbers spreadsheet.");
    }

}