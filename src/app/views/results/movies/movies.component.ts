import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movie} from '../../../models/movie';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  searchResult: Movie[];
  query = 'Uncle';

  private serviceProductsSubscription: Subscription;

  constructor(private moviedb: MoviedbService,
              private router: Router) {}


/*
On initial load of the component a list is generated based on hardcoded value of "query.
After we subscribe for query change and update the results list accordingly.
 */

  ngOnInit() {
    this.moviedb.movieSearch(this.query).subscribe( results => {
      this.searchResult = results;
    });

    this.serviceProductsSubscription = this.moviedb.searchUpdated.subscribe(() => {
      this.moviedb.movieSearch(this.query).subscribe( results => {
        this.searchResult = results;
      });
    });

  }

  /*
On form submit the value of query is updated and event of search update is announced.
 */
  onFormSubmit(form) {
    if (form.valid) {
      this.query = form.value.productName;
      this.moviedb.searchUpdate(form.value.productName);
    }
  }

  /*
  When a line with movie is clicked - user is redirected to specific movie details page.
   */
  onMovieClicked(movie) {
    this.router.navigate(['/movie/' + movie.id]);
  }

}
