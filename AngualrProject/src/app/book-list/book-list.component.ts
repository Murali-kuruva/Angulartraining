import { Component, OnInit } from '@angular/core';
import {Book} from '../service/book'; 
import { RangeInfo } from '../ca-range/ca-range.component';
import {SimpleBook1ServiceService} from '../service/simple-book1-service.service'; 



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public showImages=true;
  public books: any;
  public imageWidth=120;
  //public bookService=new SimpleBookService();


  constructor(
    private bookService: SimpleBook1ServiceService
  ) { 


  }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data =>{
      console.log('responce from Get API',data)
      this.books = data
    }); //components gets the book from the service 
  }

  toggleImages(){

    this.showImages=!this.showImages;
  }

 


 
  
  
  onImageWidthInfoChanged(r: RangeInfo){

    //console.log(r);
    
  }
  

}
