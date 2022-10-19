import { DataReader } from "../data-reader";

export class NumbersReader extends DataReader {
    protected getExtention(): string {
        return '.numbers';
    }
    protected doRead(fileName: string): void {
        console.log("Reading data from an Numbers spreadsheet.");
    }

}