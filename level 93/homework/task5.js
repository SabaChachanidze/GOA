const library = [
    { title: "Book A", author: "Author A", copies: 5 },
    { title: "Book B", author: "Author B", copies: 3 },
    { title: "Book C", author: "Author C", copies: 7 }
];

function addBook(book) {
    library.push(book);
    return library;
}

function removeLastBook() {
    library.pop();
    return library;
}

function updateBookCopies(title, copies) {
    const index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1, { ...library[index], copies });
    }
    return library;
}

function listBooks() {
    return library.map(book => book.title).join(", ");
}

function extractBooks(start, end) {
    return library.slice(start, end);
}

function modifyBooks() {
    library.copyWithin(library.length - 1, 0, 1);
    return library;
}

function resetCopies(copies) {
    library.forEach(book => book.copies = copies);
    return library;
}

function removeFirstBook() {
    library.shift();
    return library;
}

function addFirstBook(book) {
    library.unshift(book);
    return library;
}

console.log(addBook({ title: "Book D", author: "Author D", copies: 4 }));
console.log(removeLastBook());
console.log(updateBookCopies("Book A", 10));
console.log(listBooks());
console.log(extractBooks(0, 2));
console.log(modifyBooks());
console.log(resetCopies(2));
console.log(removeFirstBook());
console.log(addFirstBook({ title: "Book E", author: "Author E", copies: 6 }));