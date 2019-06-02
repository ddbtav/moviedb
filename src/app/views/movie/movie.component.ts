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

  constructor( public route: ActivatedRoute,
               private moviedb: MoviedbService) {

    this.route.paramMap.subscribe( pm => {
      this.mid = pm.get('id');
      console.log('Movie ID to fetch: ', this.mid );
      this.fetchMovie();

    });
  }

  ngOnInit() {
  }

  fetchMovie() {
    console.log('Hello from fetchMovie function', this.mid);
    this.moviedb.fetchMovieById(this.mid).subscribe(
      result => {
        this.movie = result;
        console.log('Fetching movie result: ', this.movie);
      }
    );

  }

}
