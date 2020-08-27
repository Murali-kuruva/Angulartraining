let Book = require('./book');
let {BookManager,showBooks}=require('./bookmanager')
const { contains } = require('./utils');

let bookManager=new BookManager();
 
let b1=new Book('node','nodejscompleteBook');
let b2=new Book('angular','angularcompletebook');
let b3=new Book('npm','npmcompletebook');
let b4=new Book('java','npmcompletebook');
let b5=new Book('net','npmcompletebook');
let b6=new Book('javascript','npmcompletebook');


bookManager.addBook(b1);
bookManager.addBook(b2);
bookManager.addBook(b3);
bookManager.addBook(b4);
bookManager.addBook(b5);
bookManager.addBook(b6);

// let v=bookManager.getAllBooks();

// for(let b of v)
// {
// console.log(b);
// }

let bookid=bookManager.search( b=> contains(b.Title,'nodnpmcompletebooke') );

showBooks(bookid,'Book title');