const bookObj = {
    title: 'Becoming',
    author: 'Michelle Obama',
    isAvailable:false
};

const bookJson = JSON.stringify(bookObj);
console.log(bookJson);
console.log(typeof bookJson);

const parsedBook = JSON.parse(bookJson);
console.log(parsedBook);
console.log(parsedBook.title);
console.log(typeof parsedBook);





