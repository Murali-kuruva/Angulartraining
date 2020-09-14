import { Component, OnInit } from '@angular/core';
import { Book } from '../service/book';
import { SimpleBook1ServiceService } from '../service/simple-book1-service.service';

@Component({
  selector: 'app-book-composite',
  templateUrl: './book-composite.component.html',
  styleUrls: ['./book-composite.component.css']
})
export class BookCompositeComponent implements OnInit {

  //private bookService=new SimpleBookService();
  public books:any;
  public selectedBook:Book;  //selected book will be used for details view

  constructor(
    private bookService:SimpleBook1ServiceService
  ) { }

  ngOnInit(): void {

    this.books=this.bookService.getBooks();
    
    this.selectedBook=this.books[0];
  }

  selectBook(book:Book){
    this.selectedBook=book;
  }

}
