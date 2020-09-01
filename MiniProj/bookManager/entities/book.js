class Book {

    constructor(id, title, coverPageUrl = null, author = null, price = null, rating = null) {
        this.id = id;
        this.title = title;
        this.coverPageUrl = coverPageUrl;
        this.author = author;
        this.price = price;
        this.rating = rating;
        this.booklist=[];

    }
    toString() {
        return `Book[Id=${this.id}\ttitle=${this.title}\tBooks=${this.booklist.length}]`;

    }
    addBook(newbook){

        this.booklist.push(newbook);
        // if(!book.author)
        //     book.author=this;

        // if(book.author.id===this.id) //if the book is written by same author
        //     this.books.push(book);  //add it to book collection
    }
}
module.exports=Book;
