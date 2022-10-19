export abstract class DataReader {
    constructor(private next?: DataReader) { }

    setNext(next: DataReader) {
        this.next = next;
    }
    
    read(fileName: string) {
        if (fileName.endsWith(this.getExtention())) {
            this.doRead(fileName);
            return;
        }
        if (this.next) {
            this.next.read(fileName);
        }
        else {
            throw new Error('File format not supported');
        }
    }

    protected abstract getExtention(): string;
    protected abstract doRead(fileName: string): void;
}