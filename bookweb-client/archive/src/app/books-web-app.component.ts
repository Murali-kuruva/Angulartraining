import {Component} from '@angular/core';

@Component({
    selector: 'app-booksweb',
    template: 
        `
        <app-books-web-Header></app-books-web-Header>
         <h3>Book list</h3>
         <h3>{{title}}</h3>
        <app-books-web-footer></app-books-web-footer>
        `
})
export class BooksWebAppComponent{
public title='world wide books';

}