import { Component, OnInit } from '@angular/core';
import { Book } from '../service/book';
import {ActivatedRoute, Router} from '@angular/router'; 
import { SimpleBook1ServiceService } from '../service/simple-book1-service.service';


@Component({
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  //private bookService:SimpleBookService=new SimpleBookService();

  public selectedBook: any;
  public book=[];

  constructor(

    private activatedRoute : ActivatedRoute , 
    private router:Router,
    private bookService:SimpleBook1ServiceService

  ) { 

    
  }

  ngOnInit(): void {

this.book.length=0;
    let bookId= this.activatedRoute.snapshot.params.bookId;
    console.log('book id',bookId)
    this.bookService.getBook(bookId).subscribe(data =>{
      console.log('book details',typeof data,data)
      this.book.push(data);
    });
 //debugger;
 setTimeout(() => {
  if(this.book.length ==0)
   
  this.router.navigateByUrl(`/404?error=No Such Book&id=${bookId}`);
 }, 2000);
    
    


  }

  goBack(){
    this.router.navigateByUrl('/book/list');
  }

}
