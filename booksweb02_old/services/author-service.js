let Author=require('../entities/author');

let contains=function(main,sub){
    return main.toLowerCase().indexOf(sub.toLowerCase())>=0;
}

class AuthorService{

    constructor(){
        this.authors=[]; //start with an empty list of authors
    }

    add(author){

        return new Promise((resolve,reject)=>{
            console.log('author being added',author);
            setTimeout(()=>{
                if(author && author.name){
                    console.log('author is added', author.name);
                    if(!author.id)
                        author.id=author.name.toLowerCase().replace(' ','-');
                    if(!author.books)
                        author.books=[];
                    this.authors.push(author);
                    resolve(author);
                } else{
                    console.log('author add failed');
                    reject(author); //author add failed.
                }
                
            },10);


        })

       
    }

    getAll(){

        let self=this;
        
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                
                console.log("returning all authors ",self.authors)
                return resolve(self.authors);

            },10);            
        });
    }

    async getById(id){
        return
         await this.authors.find(a=>a.id===id);
    }

    async search(term){
        
        return await this.authors.filter(a=> contains(a.name,term) || contains(a.biography,term));
    }

    async remove(id){
        this.authors=await this.authors.filter(a=> a.id!==id);
        return 
    }

    


    


}







module.exports=AuthorService;
