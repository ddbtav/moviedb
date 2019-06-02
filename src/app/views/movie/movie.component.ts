import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviedbService} from '../../models/moviedb.service';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  mid;

  movie: Movie;

  /*
  When component is loaded we are getting id parameter from the address of the page and call function to get movie details.
   */
  constructor( public route: ActivatedRoute,
               private moviedb: MoviedbService) {

    this.route.paramMap.subscribe( pm => {
      this.mid = pm.get('id');
      this.fetchMovie();

    });
  }

  ngOnInit() {
  }

  /*
  Movie details are fetched based on this.mid value and are stored in this.movie property.
   */
  fetchMovie() {
    this.moviedb.fetchMovieById(this.mid).subscribe(
      result => {
        this.movie = result;
      }
    );

  }

}
