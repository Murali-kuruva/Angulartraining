let Author=require('../entities/author');
let fs=require('fs');
let path=require('path');
const { resolve } = require('path');



let authors=[];

class AuthorRepository{

    constructor(){
        this.authors=[];
    }

    async getAll(){

        if (this.authors.length===0){
            //load the author from the path
            await this.load();
        };
        return this.authors;
    
    }

    async add(author){
        this.authors.push(author);
        await this.save();
        
    }

    save(){

        let path=process.env.AUTHOR_DB;
        fs.writeFile(path, JSON.stringify(this.authors), (error)=>{
            if(!error){
                resolve();
            } else{
                console.log(`error saving ${path}`);
                reject(error);
            }
        });
    }

    load(){
        return new Promise((resolve,reject)=>{

            let path=process.env.AUTHORS_DB;
            fs.readFile(path, (error,result)=>{
                if(!error){
                    this.authors=JSON.parse(data);
                    resolve(this.authors);
                } else{
                    console.log(`Error loading ${path}`);
                    reject(error);
                }
            });

        });

    }

}