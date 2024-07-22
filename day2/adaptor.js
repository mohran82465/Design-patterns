// fileReader interface this abstract class is used to enforce  
// implement of the read method in subclasses
class FileReader {
    read() {
        throw new Error("Method 'read()' must be implemented.");
    }
}


// this class is responsible for reading pdf files.
class PDFReader {
    constructor(file) {
        this.file = file;
    }

    // method to read pdf content.
    readPDF() {
        return `Reading PDF content from ${this.file}`;
    }
}


// this adapter allows pdfReader to be used where a fileread is expceted.
class PDFReaderAdapter extends FileReader {
    constructor(pdfReader) {
        super();
        this.pdfReader = pdfReader;
    }

    
    read() {
        return this.pdfReader.readPDF();
    }
}


// this class is responsible for reading type word files.
class WordReader {
    constructor(file) {
        this.file = file;
    }

    
    readWord() {
        return `Reading Word content from ${this.file}`;
    }
}


// this adapter allows word reader to be used where a filereader is expceted.
class WordReaderAdapter extends FileReader {
    constructor(wordReader) {
        super();
        this.wordReader = wordReader;
    }

 
    read() {
        return this.wordReader.readWord();
    }
}


// This class is responsible for reading CSV files.
class CSVReader {
    constructor(file) {
        this.file = file;
    }

    
    readCSV() {
        return `Reading CSV content from ${this.file}`;
    }
}


// This adapter allows CSVReader to be used where a fileread is expceted.
class CSVReaderAdapter extends FileReader {
    constructor(csvReader) {
        super();
        this.csvReader = csvReader;
    }

    
    read() {
        return this.csvReader.readCSV();
    }
}


// This class handles reading files of different types using the appropriate adapters.
class MainReader {
    readFile(file, type) {
        let reader;

        switch(type) {
            case 'pdf':
                reader = new PDFReaderAdapter(new PDFReader(file));
                break;
            case 'word':
                reader = new WordReaderAdapter(new WordReader(file));
                break;
            case 'csv':
                reader = new CSVReaderAdapter(new CSVReader(file));
                break;
            default:
                throw new Error("Unsupported file type");
        }

        // Use the adapter's read method to read the file content.
        return reader.read();
    }
}


const mainReader = new MainReader();

console.log(mainReader.readFile("document.pdf", "pdf"));

console.log(mainReader.readFile("document.docx", "word"));
console.log(mainReader.readFile("data.csv", "csv"));      


/**
 * 
    node adaptor.js
    Reading PDF content from document.pdf
    Reading Word content from document.docx
    Reading CSV content from data.csv    
 * 
 */