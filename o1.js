class Invoice {
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item)
    }

    print(media = 'paper') {
        if (media == 'paper') {
            console.log(`Printing on paper - Total items = ${this.items.length}`);
        } else if (media == 'pdf') {
            console.log(`Printing as PDF - Total items = ${this.items.length}`);
        } else if (media == "html") {
            console.log(`Printing as HTML - Total items = ${this.items.length}`);
        }
    }
}

const invoice = new Invoice()
invoice.addItem("Mouse 3 3000")
invoice.addItem("Monitor 1 20000")
invoice.addItem("SSD 1TB 7500")
invoice.print('html')