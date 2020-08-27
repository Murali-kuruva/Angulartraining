
let Author=require('./author'); //Author object is exported
let {contains}=require('./author');

//we will use extraction syntax to extract required fields from module.export
let {AuthorManager, showAuthors} = require('./authormanager');
const { contains } = require('./utils');



//----- my application logic here ---

let manager=new AuthorManager();
let a1=new Author('vivek','Vivek Dutta Mishra','Author of the Lost Epic Series');
a1.books.push('The Accursed God');


let a2=new Author('archer','Jeffrey Archer','International best seller of fictions');
a2.books.push('Kane and Abel');
a2.books.push('Sins of Father');
a2.books.push('Sons of Fortune');

let a3=new Author('grisham','John Grisham','Leading author of legal fiction');
a3.books.push('The Summons');
a3.books.push('The Runaway Jury');


manager.addAuthor(a1);
manager.addAuthor(a2);
manager.addAuthor(a3);


let matchFictionAuthors=function(author){
    //we may want to search biography for words other than fiction
    return contains(author.biography, 'fiction');
}




let fictionAuthors = manager.search(matchFictionAuthors);

showAuthors(fictionAuthors);

//how to search author who have written minBook of n count
//we need to pass n to match function
//but match function takes a single parameter--> author
//how to pass second parameter -->bookCount

//we will use closure

let minBookCount= function(min){
    return function(author){
        return author.books.length>=min;
    }
}

let min2BookAuthor= manager.search(minBookCount(3));