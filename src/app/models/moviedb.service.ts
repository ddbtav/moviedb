import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  baseUrl = 'https://api.themoviedb.org/3/';
  apikey = '?api_key=9406ed0141baddd3f8169037803f4f2f';

  searchUpdated = new Subject();

  constructor(public http: HttpClient) { }
/*
Fetches data from api and returns array of Movie objects based on query.
 */
  // Fix this so it uses a custom datatype
  movieSearch(query: string): Observable<any[]> {
    const url = this.baseUrl + 'search/movie' + this.apikey + '&query=' + query;
    return this.http.get(url).pipe(
      map(res => {
        return (res as any).results.map(item => new Movie(item));
      })
    );
  }

/*
Fetches data from api and returns a movie object based on it's id number.
 */
  fetchMovieById(mid: number): Observable<any> {
    const url = this.baseUrl + 'movie/' + mid + this.apikey;
    const fetchedFromApi = this.http.get(url);
    const tempObj = fetchedFromApi.pipe(map(item => new Movie(item)));
    return tempObj;
  }


/*
Search update trigger function. When called - new search results are generated based on updated value of submitted search query.
 */
  searchUpdate(query: string) {
    this.searchUpdated.next();
  }
}
