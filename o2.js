class Invoice {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    print(printer) {
        if (printer instanceof Printer) {
            printer.print(this.items)
        } else {
            // console.log("I cant deal with this type of printer")
            // console.log("I cant deal with this type of printer")
            throw new Error("Invalid Printer")
        }
    }
}

class Printer {
    print(items) {
        console.log(`Printing on paper - Total items = ${items.length}`);
    }
}

class PDFPrinter extends Printer {
    print(items) {
        console.log(`Printing as PDF - Total items = ${items.length}`);
    }
}

class FilePrinter extends Printer {
    print(items) {
        console.log(`Printing as a Text File - Total items = ${items.length}`);
    }
}

class PosPrinter extends Printer {
    print(items) {
        console.log(`Printing on POS - Total items = ${items.length}`);
    }
}


class HTMLPrinter extends Printer {
    print(items) {
        console.log(`Printing as HTML - Total items = ${items.length}`);
    }
}

class User { }
const user = new User();

const invoice = new Invoice()
invoice.addItem("Mouse 3 3000")
invoice.addItem("Monitor 1 20000")
invoice.addItem("SSD 1TB 7500")

const pdfPrinter = new PDFPrinter()
const posPrinter = new PosPrinter()
const htmlPrinter = new HTMLPrinter()
const printer = new Printer()
invoice.print(pdfPrinter)

invoice.print(user) //error