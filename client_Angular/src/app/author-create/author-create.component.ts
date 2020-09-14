import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Author} from '../service/author';
import {SimpleAuthorService} from '../service/simple-author-service' ;
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.css']
})
export class AuthorCreateComponent implements OnInit {

  public author:Author;
  constructor(   private authorService:SimpleAuthorService,
    private router:Router) {
 
   }

  ngOnInit(): void {
    this.author=this.createAuthor();
  }
  createAuthor():Author{
    return{
      aid:'',
      name:'',
      biography:'',
      photograph:'',
      email:''
    }
  };
public errors=[];
onAddAuthor(){
this.errors=[];
if(!this.author.aid)
{
  this.errors.push('aid number missing');

}
if(!this.author.name)
{
  this.errors.push('name is missing');
}
if(!this.author.email)
{
  this.errors.push('email is missing');

}
if(!this.author.biography)
{
  this.errors.push('biography is missing');

}
else{
  this.authorService.addAuthor(this.author);
  console.log('total authors',this.authorService.getAuthors());
  this.router.navigateByUrl('/author/list');
}
}
}
