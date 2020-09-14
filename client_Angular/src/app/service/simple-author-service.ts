import { Injectable } from '@angular/core';
import {Author} from './author';
import {AuthorService} from './author-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
    providedIn: 'root'
  })
export class SimpleAuthorService implements AuthorService{

    private authors:Author[];
    static serviceCount=0;
    private serviceId;
    
    constructor(private http:HttpClient) {
        // this.serviceId=++SimpleBookService.serviceCount;
       // console.log(`SimpleBookService created with id ${this.serviceId}`);

        this.authors=this.authors=[
            {
               "Id":"1",
               "aid":"0231",
               "name": "vivek dutta mishara",
               "biography":"Friction author",
               "photograph":"vivek.jpg",
               "email":"vivek@gmail.com",
                "books":"a,b,c".split(','),
            
            },
            {
                "Id":"2",
                "aid":"0232",
                "name": "rohit",
                "biography":"history author",
                "photograph":"rohit.jpg",
                "email":"rohit@gmail.com",
                 "books":"m,l,c".split(','),
            },
            {
                "Id":"3",
                "aid":"0243",
                "name": "arun sharma",
                "biography":"biopic author",
                "photograph":"arun.jpg",
                "email":"arun@gmail.com",
                 "books":"d,e,f".split(','),
            },
            {
                "Id":"4",
                "aid":"0256",
                "name": "vijay kumar",
                "biography":"Friction author",
                "photograph":"vijay.jpg",
                "email":"vjay@gmail.com",
                 "books":"x,y,z".split(','),
            },
            {
                "Id":"5",
                "aid":"0276",
                "name": "krishna kumar",
                "biography":" author",
                "photograph":"krishna.jpg",
                "email":"krihsna@gmail.com",
                 "books":"ghy,z,djj".split(','),
            },
          ];
        
    }

    addAuthor(author: Author) {
        if(author && author.aid && author.name && author.biography){
            this.authors.push(author);
            return true;
        } else{
            return false;
        }
    }
    
    getAuthors() {
        this.http.get('');
        return this.http.get('http://localhost:1000/api/authors');
        // return this.authors;
    }
    
    getAuthor(aid) {
        // return this.authors.find(b=>b.aid==aid);
        let headers = new HttpHeaders({
            'Content-Type':  'application/json'
           });
           return this.http.get('http://localhost:1000/api/authors/'+aid,{ headers: headers });
    }
    author(author){
        console.log('add author',author)
        let headers = new HttpHeaders({
          'Content-Type':  'application/json'
         });
        this.http.post('http://localhost:1000/api/authors',author,{ headers: headers });
    
          // if(book && book.isbn && book.title && book.author){
          //     this.books.push(book);
          //     return true;
          // } else{
          //     return false;
          // }
      }
    removeAuthor(aid) {
        let headers = new HttpHeaders({
            'Content-Type':  'application/json'
           });
        //return this.authors =this.authors.filter(x=>x.aid !=aid);
        return this.http.delete('http://localhost:1000/api/authors/'+aid,{ headers: headers });
    }

}