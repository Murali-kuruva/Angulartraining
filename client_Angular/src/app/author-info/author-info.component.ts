import { Component, Input, OnInit } from '@angular/core';
import {Author} from '../service/author';
@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  styleUrls: ['./author-info.component.css']
})
export class AuthorInfoComponent implements OnInit {
@Input() public author:Author;
  constructor() { }

  ngOnInit(): void {
  }

}
