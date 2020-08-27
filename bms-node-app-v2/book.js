let Book = function (Id, Title, coverPageUrl = null, Author = null, Price = null, Rating = null) {
    this.Id = Id;
    this.Title = Title;
    this.coverPageUrl = coverPageUrl;
    this.Author = Author;
    this.Price = Price;
    this.Rating = Rating;
}

Book.prototype.tostring = function () {
    return `Book[${this.Id},${this.Title}]`;

}
module.exports = Book;
