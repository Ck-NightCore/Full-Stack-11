const book = {
    title: '1984',
    author:'Geogre Orwell',
    isAvailable: true,
    
    checkOut:function () {
        this.isAvailable = false;
    },

    checkIn:function () {
        this.isAvailable = true;
        
    }
};
console.log(`Title: ${book.title}`);
console.log(book.isAvailable);
book.checkOut();
console.log(book.isAvailable);
book.checkIn();



