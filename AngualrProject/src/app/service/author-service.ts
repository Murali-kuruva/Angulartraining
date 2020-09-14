import {Author} from './author';

export interface AuthorService{
    addAuthor(author);    
    getAuthors();    
    getAuthor(aid:string);
    removeAuthor(aid:string);
}
