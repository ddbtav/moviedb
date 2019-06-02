import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movie} from '../../../models/movie';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  searchResult: Movie[];
  query = 'Uncle';

  private serviceProductsSubscription: Subscription;

  constructor(private moviedb: MoviedbService) {}

  ngOnInit() {
    this.moviedb.movieSearch(this.query).subscribe( results => {
      this.searchResult = results;
      // console.log(results);
      console.log('Is this what I want? :', this.searchResult);
    });

    this.serviceProductsSubscription = this.moviedb.searchUpdated.subscribe(() => {
      this.moviedb.movieSearch(this.query).subscribe( results => {
        this.searchResult = results;
      });
    });

  }

  onFormSubmit(form) {
    if (form.valid) {
      this.query = form.value.productName;
      console.log(this.query);
      this.moviedb.searchUpdate(form.value.productName);
    }
  }


}
