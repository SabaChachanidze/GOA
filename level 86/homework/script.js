const book = {
    title: "JavaScript for dummies",
    author: "no one",
    year: 2011,
    genre: "Programming",
    price: 29.99
};

console.log(book);

console.log(book.title);
console.log(book.author);
console.log(book.year);
console.log(book.genre);
console.log(book.price);

console.log(book["title"]);
console.log(book["author"]);
console.log(book["year"]);
console.log(book["genre"]);
console.log(book["price"]);

console.log(`The book "${book.title}" by ${book.author}, published in ${book.year}, is a ${book.genre} book and costs $${book.price}.`);