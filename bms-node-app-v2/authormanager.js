// you can access Author module here
// you should give path of .js file
// module name will not contain extension
let Author=require('./author');
let {searchAll} = require('./utils');



let AuthorManager=function(){
    this.authors=[]; //an empty list of authors;
};

AuthorManager.prototype.addAuthor=function(author){
    if(author && author.id && author.name )
        this.authors.push(author);
};

AuthorManager.prototype.getAll=function(){
    return this.authors;
};

AuthorManager.prototype.getById=function(id){

    //ES2015 for of loop to interate an array
    for(let author of this.authors)
        if (author.id===id){
            return author;
        }

    return null;
};

// AuthorManager.prototype.remove=function(id){

//     let newList=[];
//    for(let author of this.authors){
//        if(author.id!==id)
//             newList.push(author); //push all authors to new list, except the one we have to remove
//    }

//    this.authors=newList;

// }

AuthorManager.prototype.remove=function(id){

    //get all author who don't match current id
    this.authors= search(this.authors, a=> a.id!==id);
}


AuthorManager.prototype.search=function(isMatch){
    let promise=searchAll(this.authors, isMatch);
    promise.then(r=>console.log(r.id,r.name))
    .catch(e=>console.log('error',e));
    return searchAll(this.authors, isMatch);
}


function showAuthors(authors, heading=null){
    console.log(heading);
    for(let author of authors){
        console.log(`${author}`);
    }
}

/*
From this module I want to export multiple items -- AuthorManager, showAuthors

But modules.export can be a single object only.

So we will 
  1. create an object that will have two properties
  2. export this new object
*/

module.exports={
    AuthorManager:AuthorManager,
    showAuthors:showAuthors
};
