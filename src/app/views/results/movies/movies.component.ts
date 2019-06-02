import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movie} from '../../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  searchResult: Movie[];
  query = 'Uncle';
  constructor(private moviedb: MoviedbService) {}

  ngOnInit() {
    this.moviedb.movieSearch(this.query).subscribe( results => {
      this.searchResult = results;
      // console.log(results);
      console.log('Is this what I want? :', this.searchResult);
    });
  }
}
