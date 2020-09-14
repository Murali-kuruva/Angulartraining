import { Component, OnInit } from '@angular/core';
import {Author} from '../service/author';
import{ActivatedRoute,Router} from '@angular/router';
import{SimpleAuthorService} from '../service/simple-author-service';
@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {
public selectedAuthor:Author;
public author=[];
  constructor(
    private activatedRoute : ActivatedRoute , 
    private router:Router,
    private  simpleService:SimpleAuthorService
  ) { }

  ngOnInit(): void {
 

    // let author= this.simpleService.getAuthor(authorId);

    // if(author)
    //   this.selectedAuthor=author;
    // else    
    //   this.router.navigateByUrl(`/404?error=No Such Author&id=${authorId}`);

      this.author.length=0;
      let authorId= this.activatedRoute.snapshot.params.authorId;
    console.log('book id',authorId)
    this.simpleService.getAuthor(authorId).subscribe(data =>{
      console.log('book details',typeof data,data)
      this.author.push(data);
    });
 //debugger;

  }
  goBack(){
    this.router.navigateByUrl('/author/list');
  }

}
