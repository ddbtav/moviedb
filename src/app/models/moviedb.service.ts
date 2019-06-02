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

  // Fix this so it uses a custom datatype
  movieSearch(query: string): Observable<any[]> {
    const url = this.baseUrl + 'search/movie' + this.apikey + '&query=' + query;
    return this.http.get(url).pipe(
      map(res => {
        return (res as any).results.map(item => new Movie(item));
      })
    );
  }

  // Fix this so it uses a custom datatype
  // fetchMovieById(mid: number): Observable<any> {
  //   const url = this.baseUrl + 'movie/' + mid + this.apikey;
  //   return this.http.get(url);
  // }


  fetchMovieById(mid: number): Observable<any> {
    const url = this.baseUrl + 'movie/' + mid + this.apikey;
    const fetchedFromApi = this.http.get(url);
    console.log(fetchedFromApi);
    // return new Movie(this.http.get(url));
    // const fetchedMovie = new Movie(fetchedFromApi);
    const tempObj = fetchedFromApi.pipe(map(item => new Movie(item)));
    console.log(tempObj);
    return tempObj;
  }



  searchUpdate(query: string) {
    this.searchUpdated.next();
  }
}
