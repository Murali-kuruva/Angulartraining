let Book = require('./book');
let { searchAll } = require('./utils');
let BookManager = function () {
    this.books = [];
}
BookManager.prototype.addBook = function (book) {
    if (book && book.Id && book.Title) {

        this.books.push(book)
    }

}
BookManager.prototype.getAllBooks = function () {

    return this.books;
}
BookManager.prototype.getBookById = function (id) {
    for (let book of this.books) {
        if (book.Id === id) {
            return book
        }
    }

}
BookManager.prototype.remove = function (id) {
    this.books = search(this.books, b => b.Id != id);
}
BookManager.prototype.search = function (isMatch) {
    return searchAll(this.books, isMatch);
}
function showBooks(books, heading=null){
    console.log(heading);
    for(let book of books){
        console.log(`${book}`);
    }
}

module.exports={
    BookManager:BookManager,
    showBooks:showBooks
}