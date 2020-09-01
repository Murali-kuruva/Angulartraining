import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BooksWebAppComponent} from './books-web-app.component'

import { BooksWebFooterComponent} from './books-web-footer.component';
import {BooksWebHeaderComponent} from './boks-web-header.component'

@NgModule({
  declarations: [
    BooksWebAppComponent,
    BooksWebHeaderComponent,
    BooksWebFooterComponent
    
  ],
  imports: [
    BrowserModule
  ],
  exports:[
    BooksWebAppComponent
],
  providers: [],
  bootstrap: [BooksWebAppComponent]
})
export class AppModule { }
