export class DataReader {
    read(filename: string){
        if(filename.endsWith(".xls")){
            console.log('Reading data from an Excel spreadsheet.');
        }
        else if(filename.endsWith(".numbers")){
            console.log('Reading data from a Numbers spreadsheet.');
            
        }
        else if(filename.endsWith(".qbw")){
            console.log('Reading data from a QuickBooks file.');
        }
        else {
            throw Error('File format not supported')
        }
    }
}