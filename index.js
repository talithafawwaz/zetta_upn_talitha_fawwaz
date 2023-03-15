let book = [
    {"title": "Hello Salma",
    "price": 100000,
    "category" : "Novel",
    "author" : "Erisca Febriani",
    "stock" : 10},
    {"title" : "Tentang Kamu",
    "price" : 150000,
    "category" : "Novel",
    "author" : "Tere Liye",
    "stock" : 20}
]

function bookPurchasing(book, discount, tax, amountPurchased) {
    let jumlah = 0;
    let totalHarga=0;
    for (let i=0; i<book.length; i++){
        if(amountPurchased <= book[i].stock){
            const amountOfDiscount = book[i].price * (discount / 100);
            const priceAfterDiscount = book[i].price - amountOfDiscount;
            const amountOfTax = priceAfterDiscount * (tax / 100);
            const priceAfterTax = priceAfterDiscount + amountOfTax;
            jumlah = priceAfterTax * amountPurchased;
            console.log("===================================================");
            console.log(i+1 + ". BOOK ");
            console.log("- Title : " + book[i].title);
            console.log("- Category : " + book[i].category);
            console.log("- Author : " + book[i].author);
            console.log("- Price : Rp." + book[i].price);
            console.log("- Amount of discount : Rp." + amountOfDiscount);
            console.log("- Price after discount : Rp." + priceAfterDiscount);
            console.log("- Amount of tax : Rp." + amountOfTax);
            console.log("- Price after tax and discount : Rp." + priceAfterTax);
            console.log("- Amount of purchased : " + amountPurchased);
            console.log("");
            console.log("===> Total Harga : Rp." + jumlah);
            totalHarga = totalHarga + jumlah;
        }
        else{
            console.log("=====================================");
            console.log("Sorry, the book stock is insufficient");
            console.log("=====================================");
        }
    }
    return totalHarga;
}   

function credit(totalHarga, durationCredit, taxCredit){
    cicilan=[];
    let jmlCredit = 0;
    let bulananCredit = 0;
    let amountTaxCredit = 0;
    console.log("===================================================");
    console.log("");
    console.log("                    MENU KREDIT                    ");
    console.log("");
    console.log("===================================================");
    console.log("Total Harga = Rp." + totalHarga);
    console.log("Pajak = "+ taxCredit + "%");
    amountTaxCredit = totalHarga * taxCredit * 0.01;
    jmlCredit = totalHarga + amountTaxCredit;
    console.log("Total Harga Kredit ==> Rp." + jmlCredit);
    console.log("Kredit = " + durationCredit + " bulan");
    console.log("");
    bulananCredit = jmlCredit / durationCredit;
    console.log("Cicilan Bulanan : ");
    for (let j=1; j<=durationCredit; j++){
        console.log("Bulan ke-" + j + " = " + bulananCredit);
    }
}
credit(bookPurchasing(book, 20, 5, 3), 6, 10);