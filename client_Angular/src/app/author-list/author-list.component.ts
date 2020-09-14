import { Component, OnInit } from '@angular/core';
import {Author} from '../service/author';
import {SimpleAuthorService} from '../service/simple-author-service';
import{ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  public authors: any;
  constructor(private authorService:SimpleAuthorService, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    
   this.authors=this.authorService.getAuthors();
   this.authorService.getAuthors().subscribe(data =>{
    console.log('responce from Get API',data)
    this.authors = data
  });
  }
  deleteAuthor(authorId){

   debugger;
  
    // let authorId= this.activatedRoute.snapshot.params.authorId;
   this.authors=this.authorService.removeAuthor(authorId);
  
  

  }

}
